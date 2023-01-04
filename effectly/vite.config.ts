/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // Config for test coverage - set to 80% for all, using Istanbul
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "html"],
      lines: 80,
      functions: 80,
      branches: 80,
    },
    globals: true,
    // Config for react components' testing environment
    environment: "jsdom",
    setupFiles: "./config/tests/setup.js",
  },
});
