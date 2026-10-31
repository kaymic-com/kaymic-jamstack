<script setup lang="ts">
const route = useRoute();

const slug = computed(() => {
  const matchedPath = route.matched?.[0]?.path;
  return matchedPath !== "/:slug(.*)*" ? matchedPath : route.path;
});

const { data: page, error } = await useFetch<PageEntry>("/api/v1/pages/find", {
  query: { slug },
});

if (error.value) throw createError(error.value);

const { teleported, aside } = usePageSidebar(() => page.value?.fields);
const hasSidebar = computed(
  () => teleported.value.length || aside.value.length,
);

useSeoMeta({
  title: () => page.value?.fields.title,
  ogTitle: () => page.value?.fields.title,
  description: () => page.value?.fields.subtitle,
  ogDescription: () => page.value?.fields.subtitle,
  ogImage: useRequestURL().origin + "/images/logo.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <UContainer class="pt-16 pb-8 sm:pt-24">
    <div
      class="grid grid-cols-1 gap-x-16 gap-y-12"
      :class="
        hasSidebar
          ? 'lg:grid-cols-[minmax(0,1fr)_20rem] lg:grid-rows-[auto_1fr]'
          : ''
      "
    >
      <!-- teleported items sit above the body content -->
      <div
        v-if="teleported.length"
        class="rise lg:col-start-2 lg:row-start-1"
        style="--i: 2"
      >
        <SidebarItems :items="teleported" />
      </div>

      <div class="min-w-0 lg:col-start-1 lg:row-span-2 lg:row-start-1">
        <PageIntro
          :title="page?.fields.title"
          :subtitle="page?.fields.subtitle"
        />

        <div class="rise mt-10 max-w-prose text-lg" style="--i: 1">
          <Markdown :value="page?.fields.body" />
        </div>
      </div>

      <aside
        v-if="aside.length"
        class="rise space-y-6 lg:col-start-2"
        :class="teleported.length ? 'lg:row-start-2' : 'lg:row-start-1'"
        style="--i: 3"
      >
        <SidebarItems :items="aside" />
      </aside>
    </div>

    <div class="mt-20">
      <NuxtPage name="child" />
    </div>
  </UContainer>
</template>
