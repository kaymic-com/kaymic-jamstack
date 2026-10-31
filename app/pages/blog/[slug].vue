<script setup lang="ts">
const { path, matched } = useRoute();
const matchedPath = matched?.[0]?.path;

const slug = computed(() =>
  matchedPath !== "/blog/:slug()" ? matchedPath : path,
);

const { data: article, error } = await useFetch("/api/v1/articles/find", {
  query: { slug },
});

if (error.value) throw createError(error.value);

useSeoMeta({
  title: article.value?.fields.title,
  ogTitle: article.value?.fields.title,
  description: article.value?.fields.excerpt,
  ogDescription: article.value?.fields.excerpt,
  ogImage: article.value?.fields.image?.fields.file?.url,
  twitterCard: "summary_large_image",
});
</script>

<template>
  <SiteNav />

  <UPageSection
    :title="article?.fields.title"
    :description="article?.fields.excerpt"
    :ui="{
      body: 'max-w-2xl mx-auto',
    }"
  >
    <template #body>
      <Markdown :value="article?.fields.body" />
    </template>
  </UPageSection>
</template>
