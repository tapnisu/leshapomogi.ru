import { defineConfig } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import tailwind from "$fresh/plugins/tailwind.ts";
import { freshSEOPlugin } from "fresh_seo/mod.ts";

export default defineConfig({
  plugins: [tailwind(), freshSEOPlugin(manifest)],
});
