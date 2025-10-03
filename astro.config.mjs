import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import rehypeExternalLinks from "rehype-external-links";
import rehypeRewrite from "rehype-rewrite";


// Utilise les variables d'environnement (Astro charge automatiquement .env)
const base = process.env.PUBLIC_BASE || '/';
const site = process.env.PUBLIC_SITE || 'http://localhost:4321';

function isExternal(href) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

// Plugin pour préfixer <img src="/assets/..."> et <a href="/assets/..."> sauf liens externes
function rewriteAssetUrls() {
  return [
    rehypeRewrite,
    {
      rewrite(node) {
        // <img src="/assets/...">
        if (
          node.tagName === "img" &&
          node.properties &&
          typeof node.properties.src === "string" &&
          node.properties.src.startsWith("/assets/")
        ) {
          node.properties.src = base + node.properties.src;
        }
        // <a href="/assets/..."> sauf liens externes
        if (
          node.tagName === "a" &&
          node.properties &&
          typeof node.properties.href === "string" &&
          node.properties.href.startsWith("/assets/") &&
          !isExternal(node.properties.href)
        ) {
          node.properties.href = base + node.properties.href;
        }
      },
    },
  ];
}

export default defineConfig({
  site,
  base,
  integrations: [react()],
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] }],
      rewriteAssetUrls(),
    ],
  },
});