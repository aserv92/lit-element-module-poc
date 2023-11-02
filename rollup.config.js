import { litScss } from 'rollup-plugin-scss-lit'
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import summary from 'rollup-plugin-summary';

const _exports = [
  './src/stdcheck-header/StdcheckHeader.ts',
];

const getExports = () => {
  return _exports.map((_export) => (
    {
      input: _export,
      output: [{
        file: _export.replace('./src', './dist').replace('.ts', '.js'),
        format: 'iife',
        sourcemap: true,
        globals: {
          'lit': 'Lit',
        }
      }],
      watch: {
        skipWrite: false,
        clearScreen: false,
        include: 'src/**/*',
        exclude: 'node_modules/**',
        chokidar: {
            paths: 'src/**/*',
            usePolling: false
        }
      },
      plugins: [
        litScss({
          minify: true,
          options: { loadPaths: ['node_modules'] }
        }),
        resolve(),
        terser({
          ecma: 2021,
          module: true,
          warnings: true,
        }),
        summary(),
      ]
    }
  ));
}

export default getExports();
