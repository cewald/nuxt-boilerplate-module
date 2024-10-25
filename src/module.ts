import { defineNuxtModule, addImports, createResolver, addImportsDir, addComponentsDir } from '@nuxt/kit'

export interface ModuleOptions {
  storyblok: {
    apiKey?: string
    region?: 'eu' | 'us' | 'ca' | 'cn' | 'ap'
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
  defaults: {
    storyblok: {
      region: 'eu',
    },
  },
  setup(options, _nuxt) {
    const { resolve } = createResolver(import.meta.url)

    /*
    * Add /storyblok setup
    */
    if (!options.storyblok.apiKey) {
      throw new Error('The "storyblok.apiUrl" option is required in @cewald/nuxt-boilerplate module configuration.')
    }

    const sbImports = [
      { name: 'RichtextResolver', as: 'RichTextResolver' },
      { name: 'RichtextSchema', as: 'RichTextSchema' },
    ]

    for (const { name, as } of sbImports) {
      addImports({ name, as: 'Sb' + as, from: 'storyblok-js-client' })
    }

    addImportsDir([ 'composables', 'stores' ].map(name => resolve('./runtime/storyblok/' + name)))

    addComponentsDir({
      path: resolve('./runtime/storyblok/components'),
      prefix: 'Storyblok',
    })

    /*
    * Add /shared setup
    */
    addImportsDir(resolve('./runtime/shared/utils'))
  },
})
