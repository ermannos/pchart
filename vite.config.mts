import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    cssInjectedByJsPlugin({
      dev: {
        enableDev: true,
      }
    }),
    react({
      // The library is consumed as a peer of react, so react must stay
      // external. `react/jsx-runtime` ships as CJS only, so the automatic
      // runtime would get inlined and emit a `require("react")` call that
      // blows up in the browser. The classic runtime only needs `React`,
      // which every source file already imports.
      jsxRuntime: "classic",
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(import.meta.dirname, "src/index.ts"),
      name: "PChart",
      formats: ["es", "umd"],
      fileName: (format) => `pchart.${format}.js`,
    },
    rollupOptions: {
      external: [/^react$/, /^react-dom$/, /^react\//, /^react-dom\//],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
