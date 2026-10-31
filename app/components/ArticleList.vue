<script setup lang="ts">
import type { BlogPostProps } from "@nuxt/ui";
import type { ArticleEntry } from "#shared/types/entries";

const props = withDefaults(
  defineProps<{
    limit?: number;
    /** one article per row (image beside text) instead of a card grid */
    stacked?: boolean;
  }>(),
  { limit: 10, stacked: false },
);

const { data: articles } = await useFetch<ArticleEntry[]>("/api/v1/articles", {
  query: { limit: props.limit },
  key: `articles-${props.limit}`,
});

const posts = computed(() =>
  (articles.value ?? []).map(
    (article) =>
      ({
        id: article.sys.id,
        title: article.fields.title,
        description: article.fields.excerpt,
        to: article.fields.slug,
        date: article.sys.createdAt,
        image: article.fields.image
          ? {
              src: assetUrl(article.fields.image, { w: 800 }),
              alt: article.fields.title,
              loading: "lazy",
            }
          : undefined,
        orientation: props.stacked ? "horizontal" : "vertical",
      }) satisfies BlogPostProps & { id: string },
  ),
);
</script>

<template>
  <UBlogPosts :orientation="stacked ? 'vertical' : 'horizontal'">
    <UBlogPost
      v-for="post in posts"
      :key="post.id"
      v-bind="post"
      :ui="{ header: 'object-cover aspect-[-1] h-full' }"
    >
      <!-- articles without a cover image get a generated one -->
      <template v-if="!post.image" #header>
        <div
          class="relative flex h-full items-center justify-center overflow-hidden bg-linear-to-br from-primary/15 via-elevated to-secondary/15"
        >
          <UIcon name="i-lucide-code-xml" class="size-12 text-highlighted/70" />
        </div>
      </template>
    </UBlogPost>
  </UBlogPosts>
</template>
