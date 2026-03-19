// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import starlightCoolerCredit from "starlight-cooler-credit";

// https://astro.build/config
export default defineConfig({
  site: "https://thatgurkangurk.github.io",
  base: "/juggernaut-docs",
  output: "static",
  integrations: [
    starlight({
      title: "Juggernaut Docs",
      plugins: [starlightLinksValidator(), starlightCoolerCredit()],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/thatgurkangurk/juggernaut-docs",
        },
      ],
      sidebar: [
        {
          label: "Information",
          slug: "info",
        },
        {
          label: "Guides",
          items: [
            {
              label: "Creating a Juggernaut",
              slug: "guides/creating-a-juggernaut",
            },
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
