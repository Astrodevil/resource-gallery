import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://resourcegallery.live/",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "astro/assets/services/noop",
    }),
    mdx(),
    sitemap(),
  ],

});
