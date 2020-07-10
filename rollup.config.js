import { builtinModules } from 'module'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import svelte from 'rollup-plugin-svelte'
import config from 'sapper/config/rollup'
import { createEnv, preprocess, readConfigFile } from 'svelte-ts-preprocess'

import pkg from './package.json'

const env = createEnv()
const compilerOptions = readConfigFile(env)
const opts = {
  env,
  compilerOptions: {
    ...compilerOptions,
    allowNonTsExtensions: true,
  },
}

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD

const onwarn = (warning, onwWarning) =>
  (warning.code === 'CIRCULAR_DEPENDENCY' &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwWarning(warning)

const dedupe = (importee) =>
  importee === 'svelte' || importee.startsWith('svelte/')

export default {
  client: {
    input: config.client.input().replace(/\.js$/, '.ts'),
    output: config.client.output(),
    plugins: [
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        preprocess: preprocess(opts),
      }),
      resolve({
        browser: true,
        dedupe,
      }),
      commonjs(),
      typescript(),
      legacy &&
        babel({
          extensions: ['.js', '.mjs', '.html', '.svelte'],
          runtimeHelpers: true,
          exclude: ['node_modules/@babel/**'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: '> 0.25%, not dead',
              },
            ],
          ],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            [
              '@babel/plugin-transform-runtime',
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev &&
        terser({
          module: true,
        }),
    ],

    onwarn,
  },

  server: {
    input: config.server.input().server.replace(/\.js$/, '.ts'),
    output: config.server.output(),
    plugins: [
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      svelte({
        generate: 'ssr',
        dev,
        preprocess: preprocess(dev),
      }),
      resolve({
        dedupe,
      }),
      commonjs(),
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
      builtinModules || Object.keys(process.binding('natives'))
    ),

    onwarn,
  },

  serviceworker: {
    // .replace(/\.js$/, '.ts'), Haven't fixed the Typescript compiler errors for this file yet
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      commonjs(),
      typescript(),
      !dev && terser(),
    ],

    onwarn,
  },
}
