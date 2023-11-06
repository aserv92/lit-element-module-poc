import { litScss } from 'rollup-plugin-scss-lit'
import resolve from '@rollup/plugin-node-resolve';
import summary from 'rollup-plugin-summary';
import typescript from "@rollup/plugin-typescript";

const getConfig = (fileName, minified) => {
  return {
    input: fileName,
    output: [{
      file: fileName.replace('./src', './dist').replace('.ts', `${minified ? '.min' : ''}.js`),
      format: 'iife',
      sourcemap: minified,
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
        minify: minified,
        options: {loadPaths: ['node_modules']}
      }),
      typescript(),
      resolve(),
      summary(),
    ],
    preserveEntrySignatures: 'strict',
  };
}

export default [
  getConfig('./src/stdcheck-bundle.ts', true),
  getConfig('./src/stdcheck-bundle.ts', false),
  getConfig('./src/healthlabs-bundle.ts', true),
  getConfig('./src/healthlabs-bundle.ts', false),
];
