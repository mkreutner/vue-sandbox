import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  build: {
    outDir: "./dist",
  },
  root: "./exercises/02/04",
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
});
