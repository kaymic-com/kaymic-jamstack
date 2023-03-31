<script setup lang="ts">
const { logo } = useSiteSettings()
</script>

<template>
  <div class="max-w-xs px-2.5 lg:max-w-none">
    <img
      alt=""
      :src="logo?.url!"
      class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
      loading="lazy"
      style="color: transparent"
    />
  </div>
</template>
