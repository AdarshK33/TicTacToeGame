// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],

  nitro: {
    prerender: {

    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-11-13",
});