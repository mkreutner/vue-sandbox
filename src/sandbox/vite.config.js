import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  build: {
    outDir: "./dist",
  },
  root: "./exercises/05/04",
  //root: "./",
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
});
