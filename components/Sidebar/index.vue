<script setup lang="ts">
const { sidebarItems } = useSiteSettings()
</script>

<template>
  <SidebarItem v-for="item in sidebarItems" :item="item!" />
</template>
