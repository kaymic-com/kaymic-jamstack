<script setup lang="ts">
const { path, matched } = useRoute();

const slug = computed(() => {
  const matchedPath = matched?.[0]?.path;
  return matchedPath !== "/blog/:slug()" ? matchedPath : path;
});

const { data: article, error } = await useFetch("/api/v1/articles/find", {
  query: { slug },
});

if (error.value) throw createError(error.value);

const published = computed(() =>
  article.value
    ? new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
        timeZone: "UTC",
      }).format(new Date(article.value.sys.createdAt))
    : undefined,
);

const readingTime = computed(() => {
  const words = article.value?.fields.body?.split(/\s+/).length ?? 0;
  return Math.max(1, Math.round(words / 220));
});

useSeoMeta({
  title: article.value?.fields.title,
  ogTitle: article.value?.fields.title,
  description: article.value?.fields.excerpt,
  ogDescription: article.value?.fields.excerpt,
  ogImage: assetUrl(article.value?.fields.image),
  twitterCard: "summary_large_image",
});
</script>

<template>
  <ScrollProgress />

  <UContainer class="pt-12 pb-8 sm:pt-20">
    <article class="mx-auto max-w-3xl">
      <UButton
        to="/blog"
        label="All articles"
        icon="i-lucide-arrow-left"
        color="neutral"
        variant="link"
        class="-ml-2.5"
      />

      <header class="rise mt-8">
        <p class="font-mono text-sm text-muted">
          <time :datetime="article?.sys.createdAt">{{ published }}</time>
          · {{ readingTime }} min read
        </p>

        <h1
          class="mt-4 font-heading text-4xl leading-[1.02] font-extrabold tracking-tighter sm:text-6xl"
        >
          <span class="text-gradient">{{ article?.fields.title }}</span>
        </h1>

        <p v-if="article?.fields.excerpt" class="mt-6 text-xl text-muted">
          {{ article.fields.excerpt }}
        </p>
      </header>

      <div class="rise mt-12 text-lg" style="--i: 2">
        <Markdown :value="article?.fields.body" />
      </div>
    </article>
  </UContainer>
</template>
