import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

import pkg from './package.json' with { type: "json" }

const baseExternal = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}).filter((p) => p !== 'styled-components'),
  /@babel\/runtime/,
  'redux-saga/effects'
]

const themedExternal = [
  ...baseExternal,
  'styled-components'
]

const plugins = [
  babel({
    babelHelpers: 'runtime',
    plugins: ['@babel/transform-runtime']
  }),
  resolve(),
  commonjs()
]

const builds = [
  {
    input: 'src/index.js',
    cjs: 'dist/index.cjs.js',
    esm: 'dist/index.esm.js',
    themed: false
  },
  {
    input: 'src/index_iconless.js',
    cjs: 'dist/index_iconless.cjs.js',
    esm: 'dist/index_iconless.esm.js',
    themed: false
  },
  {
    input: 'src/index_themed.js',
    cjs: 'dist/index_themed.cjs.js',
    esm: 'dist/index_themed.esm.js',
    themed: true
  },
  {
    input: 'src/index_themed_iconless.js',
    cjs: 'dist/index_themed_iconless.cjs.js',
    esm: 'dist/index_themed_iconless.esm.js',
    themed: true
  }
]

export default builds.map(({ input, cjs, esm, themed }) => ({
  input,
  output: [
    { file: cjs, format: 'cjs', exports: 'named' },
    { file: esm, format: 'esm', exports: 'named' }
  ],
  plugins,
  external: themed ? themedExternal : baseExternal
}))
