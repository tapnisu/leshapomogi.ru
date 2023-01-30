import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import esbuild from "lume/plugins/esbuild.ts";
import imagick from "lume/plugins/imagick.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import postcss from "lume/plugins/postcss.ts";
import prism from "lume/plugins/prism.ts";
import relative_urls from "lume/plugins/relative_urls.ts";
import slugify_urls from "lume/plugins/slugify_urls.ts";
import source_maps from "lume/plugins/source_maps.ts";
import svgo from "lume/plugins/svgo.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import terser from "lume/plugins/terser.ts";

const site = lume();

site.use(terser());
site.use(svgo());
site.use(slugify_urls());
site.use(tailwindcss());
site.use(postcss());
site.use(source_maps());
site.use(relative_urls());
site.use(prism());
site.use(jsx_preact());
site.use(esbuild());
site.use(code_highlight());
site.use(imagick());
site.copy("favicon.ico");
site.copy("assets");

export default site;
