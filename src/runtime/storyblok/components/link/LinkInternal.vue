<script setup lang="ts">
import type { SbComponentNavigationItemInternal as PropTypes } from '~/src/runtime/storyblok/stores/components'

defineProps<PropTypes>()
</script>

<template>
  <NuxtLink
    :to="path"
    :aria-label="title"
    v-bind="$attrs"
  >
    <slot>{{ title }}</slot>
  </NuxtLink>
</template>
