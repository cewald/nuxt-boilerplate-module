<script setup lang="ts">
const { link } = defineProps<{
  link: Link
}>()

const linkMap = {
  link_external: resolveComponent('StoryblokLinkExternal'),
  link_internal: resolveComponent('StoryblokLinkInternal'),
  link_mailto: resolveComponent('StoryblokLinkMailto'),
}

const component = computed(() => {
  return linkMap[link.component as keyof typeof linkMap]
})
</script>

<template>
  <component
    :is="component"
    v-bind="link"
  />
</template>
