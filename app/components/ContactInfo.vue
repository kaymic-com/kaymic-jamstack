<script setup lang="ts">
import type { SidebarItemEntry } from "#shared/types/entries";

defineProps<{ item: SidebarItemEntry }>();

const { socialPlatforms, email } = useSiteSettings();
</script>

<template>
  <UPageCard
    title="Find me online"
    icon="i-lucide-radio-tower"
    variant="outline"
    spotlight
    spotlight-color="secondary"
  >
    <template #footer>
      <ul class="-mx-2 flex flex-col gap-1">
        <template v-for="social in socialPlatforms" :key="social?.sys.id">
          <li v-if="social">
            <UButton
              :icon="socialIcon(social.fields.title)"
              :label="`Follow on ${social.fields.title}`"
              :to="social.fields.link"
              target="_blank"
              color="neutral"
              variant="ghost"
              block
              class="justify-start"
            />
          </li>
        </template>

        <li v-if="email" class="mt-2 border-t border-default pt-3">
          <UButton
            icon="i-lucide-mail"
            :label="email"
            :to="`mailto:${email}`"
            color="neutral"
            variant="ghost"
            block
            class="justify-start"
          />
        </li>
      </ul>
    </template>
  </UPageCard>
</template>
