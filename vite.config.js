import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import polyfillNode from "rollup-plugin-polyfill-node";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      'crypto': 'crypto-browserify',
      'stream': 'stream-browserify'
    }
  },
  optimizeDeps: {
    force: true,
    // exclude: ["crypto"], // <= The libraries that need shimming should be excluded from dependency optimization.
  },
  define: {
    'process.env.NODE_DEBUG': 'false'
  },
});
