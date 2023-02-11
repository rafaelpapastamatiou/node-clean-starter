import "reflect-metadata";
import tsconfigPaths from "vitest-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "c8",
    },
  },
  plugins: [tsconfigPaths()],
});
