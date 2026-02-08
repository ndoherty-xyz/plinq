import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: __dirname,
  resolve: {
    alias: {
      plinq: path.resolve(__dirname, "../src/index.ts"),
    },
  },
});
