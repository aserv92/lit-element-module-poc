import { litScss } from 'rollup-plugin-scss-lit'
import resolve from '@rollup/plugin-node-resolve';
import summary from 'rollup-plugin-summary';
import typescript from "@rollup/plugin-typescript";

const bundles = [
  './src/stdcheck-bundle.ts',
  './src/healthlabs-bundle.ts',
];

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

const getExports = () => {
  let exports = [];

  bundles.forEach((bundleFileName) => {
    exports.push(getConfig(bundleFileName, true));
    exports.push(getConfig(bundleFileName, false));
  });

  return exports;
}

export default getExports();
