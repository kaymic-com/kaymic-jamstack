<script setup lang="ts">
defineProps<{ title?: string; subtitle?: string }>();
</script>

<template>
  <header class="rise">
    <h1
      class="font-heading text-5xl leading-[0.95] font-extrabold tracking-tighter sm:text-6xl lg:text-7xl"
    >
      <span class="text-gradient">{{ title }}</span>
    </h1>

    <p v-if="subtitle" class="mt-6 max-w-2xl text-xl text-muted sm:text-2xl">
      {{ subtitle }}
    </p>
  </header>
</template>
