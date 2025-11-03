import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { copyFileSync } from "fs";

// Plugin to copy index.html to 404.html for GitHub Pages SPA support
const copy404Plugin = () => ({
  name: 'copy-404',
  closeBundle() {
    copyFileSync(path.resolve(__dirname, 'dist/index.html'), path.resolve(__dirname, 'dist/404.html'));
  }
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/orange-dine-boost/' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === 'production' && copy404Plugin()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
