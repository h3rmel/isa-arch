// #region Imports

import { defineConfig } from "vite";

import path from "path";

import react from "@vitejs/plugin-react";

// #endregion

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
