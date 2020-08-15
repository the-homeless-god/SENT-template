import commonjs from '@rollup/plugin-commonjs'
import config from 'sapper/config/rollup'
import dotenv from 'dotenv'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import scss from 'rollup-plugin-scss'
import svelte from 'rollup-plugin-svelte'
import typescript from '@rollup/plugin-typescript'
import { builtinModules } from 'module'
import { terser } from 'rollup-plugin-terser'
import preprocess from 'svelte-preprocess'

import pkg from './package.json'

const environment = dotenv.config().parsed

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD

const warningText = 'Use of eval is strongly discouraged, as it poses security risks and may cause issues with minification'
const warningIsIgnored = (warning) => warning.message.includes(warningText)
  || warning.message.includes('Circular dependency: node_modules')

// Workaround for https://github.com/sveltejs/sapper/issues/1266
const onwarn = (warning, _onwarn) => (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message))
  || warningIsIgnored(warning)
  || console.warn(warning.toString())

const dedupe = (importee) => importee === 'svelte' || importee.startsWith('svelte/')
const extensions = ['.js', '.mjs', '.html', '.svelte', '.ts']

const scssConfiguration = (postfix) => ({
  output: `public/assets/css/${postfix}.css`,
  sourceMap: dev,
  prefix: '@import \'src/styles/variables.scss\';',
  watch: 'src/**/*.(scss|svelte)',
})

console.log(environment)

const preprocessConfig = preprocess({
  babel: {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          // No need for babel to resolve modules
          modules: false,
          targets: {
            // ! Very important. Target es6+
            esmodules: true,
          },
        },
      ],
    ],
  },
  defaults: {
    script: 'typescript',
  },
  sourceMap: dev,
})

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
      scss(scssConfiguration('client')),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        preprocess: preprocessConfig,
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
      typescript({ sourceMap: true }),
      json(),
      legacy
        && !dev
        && terser({
          module: true,
        }),
    ],
    preserveEntrySignatures: false,

    onwarn,
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
      scss(scssConfiguration('server')),
      svelte({
        generate: 'ssr',
        dev,
        preprocess: preprocessConfig,
      }),
      resolve({
        dedupe,
      }),
      commonjs({
        include: /node_modules/,
      }),
      typescript(),
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
    external: Object.keys(pkg.dependencies).concat(
      builtinModules || Object.keys(process.binding('natives')),
    ),
    onwarn,
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
      typescript(),
      !dev && terser(),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },
}
