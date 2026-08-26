/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    watch: false,
    include: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
    coverage: {
      all: true,
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: ['**/types.ts'],
    },
    reporters: ['default'],
  },
});
