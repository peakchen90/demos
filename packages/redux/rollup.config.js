const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const packageConfig = require('./package.json');

const config = {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/redux.cjs.js',
      format: 'cjs',
      banner: `/**\n * ${packageConfig.name} v${packageConfig.version} \n */`,
    },
    {
      file: 'dist/redux.js',
      format: 'umd',
      name: 'Redux',
      banner: `/**\n * ${packageConfig.name} v${packageConfig.version} \n */`,
    }
  ],
  plugins: [
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    })
  ],
};

module.exports = config;
