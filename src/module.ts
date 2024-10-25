import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  storyblok?: {
    apiKey: string
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@cewald/nuxt-boilerplate',
    configKey: 'boilerplate',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)
    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
