// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://thatgurkangurk.github.io",
  base: "/juggernaut-docs",
  output: "static",
  integrations: [
    starlight({
      title: "Juggernaut Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/thatgurkangurk/juggernaut-docs",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
