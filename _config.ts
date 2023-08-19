import nano from "cssnano";
import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import esbuild from "lume/plugins/esbuild.ts";
import imagick from "lume/plugins/imagick.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import postcss from "lume/plugins/postcss.ts";
import prism from "lume/plugins/prism.ts";
import relative_urls from "lume/plugins/relative_urls.ts";
import source_maps from "lume/plugins/source_maps.ts";
import svgo from "lume/plugins/svgo.ts";
import terser from "lume/plugins/terser.ts";
import postcssAutoprefixer from "postcss_autoprefixer";
import postcssFontFormatKeywords from "postcss_font_format_keywords";

const site = lume();

site
  .use(terser())
  .use(svgo())
  .use(
    postcss({
      plugins: [postcssFontFormatKeywords(), postcssAutoprefixer()],
    })
  )
  .use(source_maps())
  .use(relative_urls())
  .use(prism())
  .use(jsx_preact())
  .use(esbuild())
  .use(code_highlight())
  .use(imagick())
  .copy("assets/favicon.ico", "favicon.ico")
  .copy("assets/")
  .copy("css/")
  .hooks.addPostcssPlugin(nano);

export default site;
