import path from "path";
import { defineConfig } from "vitest/config";
import { config } from "dotenv";

config({ path: ".env.development" });

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  define: {},
});
