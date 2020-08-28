import commonjs from '@rollup/plugin-commonjs'
import config from 'sapper/config/rollup'
import dotenv from 'dotenv'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import scss from 'rollup-plugin-scss'
import svelte from 'rollup-plugin-svelte'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import { builtinModules } from 'module'

import pkg from './package.json'

const cssBundler = require('./bundlers/css.bundler')
const warnBundler = require('./bundlers/warning.bundler')
const svelteConfig = require('./svelte.config')

const environment = dotenv.config().parsed

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD

const dedupe = (importee) => importee === 'svelte' || importee.startsWith('svelte/')
const extensions = ['.js', '.mjs', '.html', '.svelte', '.ts']

console.log(environment)

export default {
  client: {
    input: config.client.input().replace(/\.js$/, '.ts'),
    output: config.client.output(),
    plugins: [
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
        __environment: JSON.stringify(environment),
      }),
      scss(cssBundler.scssRollupConfig('client', dev)),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        preprocess: svelteConfig.preprocess,
      }),
      resolve({
        browser: true,
        jsnext: true,
        extensions,
        dedupe,
      }),
      commonjs({
        include: /node_modules/,
      }),
      typescript({ sourceMap: dev }),
      json(),
      legacy
        && !dev
        && terser({
          module: true,
        }),
    ],
    preserveEntrySignatures: false,

    onwarn: warnBundler.onwarn,
  },

  server: {
    input: config.server.input().server.replace(/\.js$/, '.ts'),
    output: config.server.output(),
    plugins: [
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode),
        __environment: JSON.stringify(environment),
      }),
      scss(cssBundler.scssRollupConfig('server', dev)),
      svelte({
        generate: 'ssr',
        dev,
        preprocess: svelteConfig.preprocess,
      }),
      resolve({
        dedupe,
      }),
      commonjs({
        include: /node_modules/,
      }),
      typescript({ sourceMap: dev }),
      json({
        // All JSON files will be parsed by default,
        // but you can also specifically include/exclude files
        include: 'node_modules/**',
        exclude: ['node_modules/foo/**', 'node_modules/bar/**'],

        // for tree-shaking, properties will be declared as
        // variables, using either `var` or `const`
        preferConst: true, // Default: false

        // specify indentation for the generated default export —
        // defaults to '\t'
        indent: '  ',

        // ignores indent and generates the smallest code
        compact: true, // Default: false

        // generate a named export for every property of the JSON object
        namedExports: true, // Default: true
      }),
    ],
    external: Object.keys(pkg.dependencies).concat(builtinModules || Object.keys(process.binding('natives'))),
    onwarn: warnBundler.onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input().replace(/\.js$/, '.ts'),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
        __environment: JSON.stringify(environment),
      }),
      commonjs(),
      typescript({ sourceMap: dev }),
      !dev && terser(),
    ],

    preserveEntrySignatures: false,
    onwarn: warnBundler.onwarn,
  },
}
