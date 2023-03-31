<script setup lang="ts">
const { homeImages } = useSiteSettings()
</script>

<template>
  <div class="mt-16 sm:mt-20">
    <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
      <div
        v-for="(image, i) in homeImages"
        class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl"
        :class="(i - 1) % 3 ? 'rotate-2' : '-rotate-2'"
      >
        <img
          :src="`${image?.url}?w=500`"
          class="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          style="color: transparent"
        />
      </div>
    </div>
  </div>
</template>
