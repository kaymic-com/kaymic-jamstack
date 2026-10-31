// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@comark/nuxt"],
  css: ["~/assets/css/main.css"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      meta: [
        { name: "google-adsense-account", content: "ca-pub-0047612029589686" },
      ],
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon-16x16.png",
        },
        { rel: "apple-touch-icon", href: "/favicon/apple-touch-icon.png" },
        { rel: "manifest", href: "/favicon/site.webmanifest" },
      ],
    },
  },

  colorMode: {
    preference: "dark",
    fallback: "dark",
  },

  fonts: {
    families: [
      { name: "Geist", weights: [400, 500, 600] },
      { name: "Geist Mono", weights: [400, 500] },
      { name: "Bricolage Grotesque", weights: [600, 800] },
    ],
  },

  runtimeConfig: {
    contentfulSpaceId: "",
    contentfulAccessToken: "",
    contentfulEnvironment: "master",
  },

  routeRules: {
    "/": { prerender: true },
  },
});
