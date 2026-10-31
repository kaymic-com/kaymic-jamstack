<script setup lang="ts">
import type { SidebarItemEntry } from "#shared/types/entries";

const props = defineProps<{ item: SidebarItemEntry }>();

const { logo } = useSiteSettings();

const asset = computed(() => props.item.fields.image ?? logo.value);
const size = computed(() => assetSize(asset.value));
</script>

<template>
  <div class="relative mx-auto w-full max-w-xs lg:max-w-none">
    <div
      aria-hidden="true"
      class="absolute inset-0 -rotate-6 rounded-3xl bg-linear-to-br from-primary to-secondary opacity-25 blur-2xl"
    />

    <img
      v-if="asset"
      :src="assetUrl(asset, { w: 640 })"
      :alt="asset.fields.title ?? ''"
      :width="size?.width"
      :height="size?.height"
      class="relative aspect-square w-full rotate-3 rounded-3xl bg-elevated object-cover shadow-2xl ring-1 ring-default transition duration-500 ease-out hover:rotate-0 hover:scale-[1.03]"
      loading="lazy"
    />
  </div>
</template>
