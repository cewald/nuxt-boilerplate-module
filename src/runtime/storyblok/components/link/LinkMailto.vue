<script setup lang="ts">
import type { SbComponentNavigationItemMailTo as PropTypes } from '~/src/runtime/storyblok/stores/components'

defineProps<PropTypes>()
</script>

<template>
  <a
    :href="`mailto:${email}`"
    :aria-label="title"
    target="_blank"
  >
    <slot>{{ title }}</slot>
  </a>
</template>
