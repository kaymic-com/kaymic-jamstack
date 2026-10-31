<script setup lang="ts">
import type { TimelineItem } from "@nuxt/ui";
import type { EmployerEntry, SidebarItemEntry } from "#shared/types/entries";

defineProps<{ item: SidebarItemEntry }>();

const { data: employers } = await useFetch<EmployerEntry[]>(
  "/api/v1/employers",
  { key: "employers" },
);

const formatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

const items = computed<TimelineItem[]>(() =>
  (employers.value ?? []).map(({ fields }) => ({
    date: `${formatter.format(new Date(fields.startDate))} – ${
      fields.endDate ? formatter.format(new Date(fields.endDate)) : "Present"
    }${fields.note ?? ""}`,
    title: fields.name,
    description: fields.jobTitle,
    avatar: {
      src: assetUrl(fields.logo, { w: 96 }),
      alt: fields.name,
      class: "bg-white",
      ui: { image: "object-contain p-1" },
    },
  })),
);
</script>

<template>
  <UPageCard
    title="Work"
    icon="i-lucide-briefcase-business"
    variant="outline"
    spotlight
    spotlight-color="primary"
  >
    <template #footer>
      <UTimeline :items="items" :default-value="0" size="lg" />
    </template>
  </UPageCard>
</template>
