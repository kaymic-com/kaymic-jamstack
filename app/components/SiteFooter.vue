<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const { footerNavigationItems, socialPlatforms } = useSiteSettings();

const items = computed<NavigationMenuItem[]>(() =>
  footerNavigationItems.value.flatMap((item) =>
    item
      ? [
          {
            label: item.fields.navigationTitle || item.fields.title,
            to: item.fields.slug,
          },
        ]
      : [],
  ),
);
</script>

<template>
  <div class="relative mt-24 overflow-hidden border-t border-default">
    <!-- oversized wordmark -->
    <p
      aria-hidden="true"
      class="font-heading text-gradient pointer-events-none px-4 pt-10 text-center text-[clamp(3.5rem,15vw,13rem)] leading-none font-extrabold tracking-tighter opacity-30 select-none"
    >
      KayMic
    </p>

    <UFooter class="relative border-t-0">
      <template #left>
        <p class="text-sm text-muted">
          © {{ new Date().getFullYear() }} Kevin McCarthy. All rights reserved.
        </p>
      </template>

      <UNavigationMenu :items="items" variant="link" />

      <template #right>
        <template v-for="social in socialPlatforms" :key="social?.sys.id">
          <UButton
            v-if="social"
            :icon="socialIcon(social.fields.title)"
            :to="social.fields.link"
            :aria-label="social.fields.title"
            target="_blank"
            color="neutral"
            variant="ghost"
          />
        </template>
      </template>
    </UFooter>
  </div>
</template>
