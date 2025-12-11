// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://frankDev96.github.io",
  base: "/franklin_porfolio",
  vite: {
    plugins: [tailwindcss()],
  },
});
