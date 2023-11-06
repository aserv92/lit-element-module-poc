import { litScss } from 'rollup-plugin-scss-lit'
import resolve from '@rollup/plugin-node-resolve';
import summary from 'rollup-plugin-summary';
import typescript from "@rollup/plugin-typescript";

const _exports = [
  './src/stdcheck-header/StdcheckHeader.ts',
  './src/stdcheck-footer/StdcheckFooter.ts',
];

const getExports = () => {
  return _exports.map((_export) => (
    {
      input: _export,
      output: [{
        file: _export.replace('./src', './dist').replace('.ts', '.js'),
        format: 'esm',
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
            usePolling: true
        }
      },
      plugins: [
        litScss({
          minify: true,
          options: { loadPaths: ['node_modules'] }
        }),
        typescript(),
        resolve(),
        summary(),
      ],
      preserveEntrySignatures: 'strict',
    }
  ));
}

export default getExports();
