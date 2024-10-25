import { defineNuxtModule, addImports, createResolver, addImportsDir, addComponentsDir } from '@nuxt/kit'
import type { Config } from 'tailwindcss'
import resolveConfig from 'tailwindcss/resolveConfig'

export interface ModuleOptions {
  storyblok?: {
    apiKey?: string
    region?: 'eu' | 'us' | 'ca' | 'cn' | 'ap'
  }
  tailwindcss?: {
    configFile: string
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
    tailwindcss: {
      configFile: 'tailwind.config.js',
    },
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    /*
     * Add /storyblok setup
     */
    if (!options.storyblok?.apiKey) {
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

    /**
     * Add /tailwindcss setup
     */

    /**
     * Export tailwind configs to appConfig to be able to read TailwindCSS variables as screen sizes
     * inside javascript and Vue without importing the whole TailwindCSS config object and deps.
     * @see https://tailwindcss.com/docs/configuration#referencing-in-javascript
     */
    const twConfigPath = resolve(nuxt.options.rootDir, options.tailwindcss?.configFile as string)
    const twConfig: Config = await import(twConfigPath)
      .then(m => m.default).catch(() => {
        throw new Error(`Cannot read TailwindCSS config file at "${twConfigPath}".`)
      })
    const fullConfig = resolveConfig(twConfig)
    const twScreens = { screens: fullConfig.theme.screens }
    Object.assign(nuxt.options.appConfig, twScreens)

    addImports({
      name: 'default',
      as: 'useScreens',
      from: resolve('./runtime/tailwindcss/composables/useScreens'),
    })
  },
})
