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
