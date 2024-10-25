import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import config from '@cewald/eslint-config'

const corporateConfig = config()

// Run `npx @eslint/config-inspector` to inspect the resolved config interactively
export default createConfigForNuxt({
  features: {
    tooling: true,
  },
  dirs: {
    src: [
      './playground',
    ],
  },
}).append(corporateConfig)
