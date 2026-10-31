<script setup lang="ts">
import type { ProjectEntry } from "#shared/types/entries";

const props = defineProps<{ project: ProjectEntry }>();

const host = computed(() => {
  try {
    return new URL(props.project.fields.link).host;
  } catch {
    return props.project.fields.link;
  }
});

const size = computed(() => assetSize(props.project.fields.image));
</script>

<template>
  <UPageCard
    :title="project.fields.title"
    :description="project.fields.description"
    :to="project.fields.link"
    target="_blank"
    variant="outline"
    spotlight
    spotlight-color="primary"
    class="group"
    :ui="{
      container: 'gap-y-5 p-4 sm:p-5',
      header: 'mb-2',
      title: 'font-heading text-xl font-semibold',
    }"
  >
    <!-- faux browser frame -->
    <template #header>
      <div
        class="overflow-hidden rounded-lg border border-default bg-default shadow-lg"
      >
        <div
          class="flex items-center gap-1.5 border-b border-default bg-elevated px-3 py-2"
        >
          <span class="size-2 rounded-full bg-accented" />
          <span class="size-2 rounded-full bg-accented" />
          <span class="size-2 rounded-full bg-accented" />
          <span class="ml-2 truncate font-mono text-[11px] text-muted">
            {{ host }}
          </span>
        </div>

        <div class="aspect-16/10 overflow-hidden">
          <img
            v-if="project.fields.image"
            :src="assetUrl(project.fields.image, { w: 960 })"
            :alt="`Screenshot of ${project.fields.title}`"
            :width="size?.width"
            :height="size?.height"
            class="size-full object-cover object-top transition duration-700 ease-out group-hover:scale-105 grayscale-65"
            loading="lazy"
          />
        </div>
      </div>
    </template>

    <template #footer>
      <span
        class="inline-flex items-center gap-1 text-sm font-medium text-primary"
      >
        Visit {{ host }}
        <UIcon
          name="i-lucide-arrow-up-right"
          class="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </template>
  </UPageCard>
</template>
