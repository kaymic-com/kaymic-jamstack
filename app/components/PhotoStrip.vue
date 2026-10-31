<script setup lang="ts">
const { homeImages } = useSiteSettings();
</script>

<template>
  <UMarquee
    v-if="homeImages.length"
    :repeat="3"
    pause-on-hover
    :ui="{ root: '[--gap:1.5rem] py-8', content: 'items-center' }"
  >
    <figure
      v-for="(image, i) in homeImages"
      :key="image?.sys.id"
      class="w-52 shrink-0 overflow-hidden rounded-2xl shadow-xl ring-1 ring-default transition duration-500 ease-out hover:z-10 hover:rotate-0 hover:scale-105 sm:w-64"
      :class="[
        i % 2 ? 'rotate-2' : '-rotate-2',
        i % 3 === 1 ? 'aspect-square' : 'aspect-4/5',
      ]"
    >
      <img
        v-if="image"
        :src="assetUrl(image, { w: 640, h: 800, fit: 'fill' })"
        alt=""
        width="640"
        height="800"
        class="size-full object-cover"
        loading="lazy"
        draggable="false"
      />
    </figure>
  </UMarquee>
</template>
