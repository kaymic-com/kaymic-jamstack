<script setup lang="ts">
import { Article } from '~~/types/contentful'

const { path } = useRoute()
const { data: article } = await useFetch<Article>(
  `/api/articles/find?slug=${path}`
)
</script>

<template>
  <NuxtLayout name="article">
    <article class="max-w-2xl">
      <header class="flex flex-col">
        <h1
          class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        >
          {{ article?.title }}
        </h1>

        <time
          :datetime="article?.sys?.firstPublishedAt"
          class="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
        >
          <span
            class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"
          ></span>
          <span class="ml-3">
            {{
              new Date(article?.sys?.firstPublishedAt).toLocaleDateString(
                undefined,
                {
                  dateStyle: 'long',
                }
              )
            }}
          </span>
        </time>
      </header>

      <Rte
        :markdown="article?.body!"
        class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400"
      />
    </article>
  </NuxtLayout>
</template>
