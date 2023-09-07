import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

import pkg from './package.json' assert { type: "json" }

const iconless = process.env.iconless

export default {
  input: 'src/index.js',
  output: [
    { file: iconless ? pkg.main.replace('index', 'index_iconless') : pkg.main, format: 'cjs' },
    { file: iconless ? pkg.module.replace('index', 'index_iconless') : pkg.module, format: 'esm' }
  ],
  plugins: [
    babel({
      babelHelpers: 'runtime',
      plugins: ['@babel/transform-runtime']
    }),
    resolve(),
    commonjs()
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    /@babel\/runtime/,
    'redux-saga/effects'
  ]
}
