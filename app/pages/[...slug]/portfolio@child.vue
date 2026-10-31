<script setup lang="ts">
import type { ProjectEntry } from "#shared/types/entries";

const { data: projects, error } = await useFetch<ProjectEntry[]>(
  "/api/v1/projects",
);
if (error.value) throw createError(error.value);
</script>

<template>
  <UPageGrid v-if="projects?.length">
    <ProjectCard
      v-for="project in projects"
      :key="project.sys.id"
      :project="project"
      class="reveal"
    />
  </UPageGrid>
</template>
