import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/@"),
      'component': path.resolve(__dirname, 'src/component'),
      'pages': path.resolve(__dirname, 'src/pages')
    },
  },
});
