import Aura from "@primeuix/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  ssr: true,
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
    "nuxt-lodash",
    "nuxt-typed-router",
  ],

  primevue: {
    autoImport: true,
    components: {
      prefix: "P",
    },
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
});
