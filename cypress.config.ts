import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://web:8080',
    fileServerFolder: '.',
    supportFile: false,
    video: false,
    specPattern: ['./e2e/tests/**/*.spec.ts'],
  },
});
