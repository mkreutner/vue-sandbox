import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [],
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/project02/index.html"),
        form: resolve(__dirname, "src/project02/form/form.html"),
      },
    },
  },
  // root: "./exercises/08/06",
  root: "./src/project02/",
  // root: "./",
  server: {
    host: "0.0.0.0",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
});
