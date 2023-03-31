<script setup lang="ts">
import { SidebarItem } from '~~/types/contentful'
const { logo } = useSiteSettings()
const attrs = useAttrs() as SidebarItem | undefined

const image = computed(() => attrs?.image?.url ?? logo.value?.url!)
</script>

<template>
  <div class="max-w-xs px-2.5 lg:max-w-none">
    <img
      alt=""
      :src="image"
      class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
      loading="lazy"
      style="color: transparent"
    />
  </div>
</template>
