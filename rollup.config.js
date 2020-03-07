import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json'
import babel from 'rollup-plugin-babel';

export default {
  input: 'index.js',
  output: {
    dir:'dist',
    name: 'IOST',
    format: 'umd'
  },

  plugins: [
    resolve({
        browser: true,
        preferBuiltins: true
    }),
    commonjs(),
    json(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
};