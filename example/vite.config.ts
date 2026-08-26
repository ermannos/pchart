import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // `pchart` is linked via `file:../`, so resolving "react" from inside
    // the library would pick up the library's own devDependency copy and
    // load two React instances (every hook then throws). Force a single copy.
    dedupe: ['react', 'react-dom'],
  },
})
