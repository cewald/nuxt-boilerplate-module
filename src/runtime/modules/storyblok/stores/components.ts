import type { ISbComponentType }
  from 'storyblok-js-client'

export type SbComponentNavigationItemInternal = ISbComponentType<'link_internal'> & {
  title: string
  path: string
}

export type SbComponentNavigationItemExternal = ISbComponentType<'link_external'> & {
  title: string
  path: string
}

export type SbComponentNavigationItemMailTo = ISbComponentType<'link_mailto'> & {
  title: string
  email: string
}

export type SbComponentLink = SbComponentNavigationItemInternal
  | SbComponentNavigationItemExternal
  | SbComponentNavigationItemMailTo
