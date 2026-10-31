<script setup lang="ts">
const { path, matched } = useRoute();
const matchedPath = matched?.[0]?.path;

const slug = computed(() =>
  matchedPath !== "/:slug(.*)*" ? matchedPath : path,
);

const { data: page, error } = await useFetch("/api/v1/pages/find", {
  query: { slug },
});

if (error.value) throw createError(error.value);

useSeoMeta({
  title: page.value?.fields.title,
  ogTitle: page.value?.fields.title,
  description: page.value?.fields.subtitle,
  ogDescription: page.value?.fields.subtitle,
  ogImage: useRequestURL().origin + "/images/logo.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <SiteNav />

  <UPageSection>
    <UPageCTA
      :title="page?.fields.title"
      :description="page?.fields.subtitle"
      orientation="horizontal"
    >
      <!-- sidebar -->
      <div>
        <details>
          <pre>{{ page?.fields.sidebar }}</pre>
        </details>
      </div>

      <template #body>
        <Markdown :value="page?.fields.body" />

        <NuxtPage name="child" />
      </template>
    </UPageCTA>

    <details>
      <pre>{{ page }}</pre>
    </details>
  </UPageSection>
</template>
