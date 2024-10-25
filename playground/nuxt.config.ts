export default defineNuxtConfig({
  modules: [ '../src/module' ],
  boilerplate: {
    storyblok: {
      apiKey: 'my-api-key',
    },
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-10-25',
})
