<script setup lang="ts">
const page = await usePage()

const { sidebarItems, sidebarReplace, sidebarAppend } = useSidebar(
  page.value?.sidebarCollection?.items.map((i) => i!),
  page.value?.sidebarReplace!,
  page.value?.sidebarAppend!
)
</script>

<template>
  <NuxtLayout name="body">
    <h1
      class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
    >
      {{ page?.title }}
    </h1>
    <h2
      class="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl mt-3"
    >
      {{ page?.subtitle }}
    </h2>

    <Rte
      :markdown="page?.body!"
      class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400"
    />

    <SocialIcons />
  </NuxtLayout>

  <!--  -->
  <HomeBanner />

  <NuxtLayout name="sidebar">
    <!--  -->

    <ArticleList :limit="3" />

    <!--  -->
    <template #sidebar>
      <SidebarItem
        v-if="sidebarAppend"
        v-for="item in sidebarItems"
        :item="item"
      />

      <Sidebar v-if="!sidebarReplace" />

      <SidebarItem
        v-if="!sidebarAppend"
        v-for="item in sidebarItems"
        :item="item"
      />
    </template>
  </NuxtLayout>
</template>
