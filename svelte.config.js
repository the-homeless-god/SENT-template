const preprocess = require('svelte-preprocess')

module.exports = {
  preprocess: preprocess({
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
    sourceMap: process.env.NODE_ENV === 'development',
    less: { includePaths: ['src', 'node_modules'] },
    css: { includePaths: ['src', 'node_modules'] },
    scss: {
      prefix: '@import \'src/styles/variables.scss\';',
    },
    typescript: {
      tsconfigFile: './tsconfig.json',
      transpileOnly: true,
    },
  }),
}
