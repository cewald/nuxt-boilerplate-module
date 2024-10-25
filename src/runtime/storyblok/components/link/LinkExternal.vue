<script setup lang="ts">
import type { SbComponentNavigationItemExternal as PropTypes } from '~/src/runtime/storyblok/stores/components'

defineProps<PropTypes>()
</script>

<template>
  <a
    :href="path"
    :aria-label="title"
    target="_blank"
    v-bind="$attrs"
  >
    <slot>{{ title }}</slot>
  </a>
</template>
