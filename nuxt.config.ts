// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  generate: {
    routes: [
      // additional routes are generated via the route-generator module
      // '/',
      // '/_redirects',
    ],
  },

  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
})
