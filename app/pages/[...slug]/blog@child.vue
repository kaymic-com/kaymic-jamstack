<script setup lang="ts">
const { data: articles, error } = await useFetch("/api/v1/articles");
if (error.value) throw createError(error.value);
</script>

<template>
  <UPageList divide>
    <UPageCard
      v-for="article in articles"
      :key="article.sys.id"
      variant="ghost"
      :to="article.fields.slug"
    >
      <template #body>
        <UUser
          :name="article.fields.title"
          :description="article.fields.excerpt"
          :avatar="{
            src: article.fields.image?.fields?.file?.url,
            alt: article.fields.title,
          }"
          size="xl"
        />
      </template>
    </UPageCard>
  </UPageList>
</template>
