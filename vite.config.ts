import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig(({ command }) => ({
  base: "/pokedex-wc/",
  plugins: command === "build" ? [dts({ include: ["lib"] })] : [],
  build: {
    outDir: "dist",
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    // rollupOptions: {
    //   external: ["lit"],
    // },
  },
  // publicDir: "public",
}));
