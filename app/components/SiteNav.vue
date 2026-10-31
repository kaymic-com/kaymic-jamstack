<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const { navigationItems } = useSiteSettings();

const route = useRoute();

const items = computed<NavigationMenuItem[]>(
  () =>
    navigationItems.value?.map((item) => {
      const slug = item?.fields.slug;

      return {
        label: item?.fields.navigationTitle || item?.fields.title,
        to: slug,
        active:
          slug === "/"
            ? route.path === "/"
            : route.path === slug || route.path.startsWith(`${slug}/`),
      };
    }) ?? [],
);
</script>

<template>
  <UHeader>
    <template #title>
      <UColorModeImage
        :dark="`/images/logo.png`"
        :light="`/images/logo-light.png`"
        class="h-6 w-auto"
      />
    </template>

    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="Follow on GitHub">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/kjmagic13"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
