import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import replace from '@rollup/plugin-replace'
import copy from 'rollup-plugin-copy'

export default {
  input: 'demo/src/index.js',
  output: {
    file: 'demo/dist/bundle.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    copy({
      targets: [{ src: 'demo/public/index.html', dest: 'demo/dist' }]
    }),
    babel({
      babelHelpers: 'bundled'
    }),
    nodeResolve({
      browser: true
    }),
    replace({
      preventAssignment: true,
      values: {
        'process.env.NODE_ENV': "'development'"
      }
    }),
    commonjs(),
    serve({
      open: true,
      verbose: true,
      contentBase: ['demo/dist'],
      host: 'localhost',
      port: 3000
    }),
    livereload({ watch: 'demo/dist' })
  ]
}
