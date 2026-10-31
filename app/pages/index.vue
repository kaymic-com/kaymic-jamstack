<script setup lang="ts">
import type { PageEntry, ProjectEntry } from "#shared/types/entries";

const { data: page, error } = await useFetch<PageEntry>("/api/v1/pages/find", {
  query: { slug: "/" },
});

if (error.value) throw createError(error.value);

const { data: projects } = await useFetch<ProjectEntry[]>("/api/v1/projects", {
  query: { limit: 3 },
  key: "projects-3",
});

const { email, socialPlatforms, navigationItems } = useSiteSettings();
const { items: sidebarItems } = usePageSidebar(page.value?.fields);

const [firstName = "", ...lastName] = (page.value?.fields.title ?? "").split(
  " ",
);

const roles = computed(
  () =>
    page.value?.fields.subtitle
      ?.split(",")
      .map((role) => role.trim().toLowerCase())
      .filter(Boolean) ?? [],
);

// section copy comes from the matching pages in Contentful
const section = (slug: string) =>
  navigationItems.value?.find((item) => item?.fields.slug === slug)?.fields;

const portfolio = computed(() => section("/portfolio"));
const blog = computed(() => section("/blog"));

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
  <div>
    <!-- hero -->
    <UContainer class="pt-16 pb-12 sm:pt-24 lg:pt-32">
      <div
        class="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div>
          <p class="rise font-mono text-sm text-muted" style="--i: 0">
            <span class="text-primary">&gt;</span> hello, world
          </p>

          <h1
            class="rise mt-4 font-heading text-6xl leading-[0.92] font-extrabold tracking-tighter text-highlighted sm:text-7xl xl:text-8xl"
            style="--i: 1"
          >
            {{ firstName }}<br />
            <span class="text-gradient">{{ lastName.join(" ") }}</span>
          </h1>

          <p
            v-if="roles.length"
            class="rise mt-6 text-2xl sm:text-3xl"
            style="--i: 2"
          >
            <span class="font-mono text-base text-muted sm:text-lg">
              whoami →
            </span>
            <TypedRoles :roles="roles" />
          </p>

          <div class="rise mt-8 max-w-xl text-lg text-muted" style="--i: 3">
            <Markdown :value="page?.fields.body" />
          </div>

          <div
            class="rise mt-8 flex flex-wrap items-center gap-3"
            style="--i: 4"
          >
            <UButton
              to="/portfolio"
              label="See my work"
              trailing-icon="i-lucide-arrow-right"
              size="xl"
            />
            <UButton
              v-if="email"
              :to="`mailto:${email}`"
              label="Say hello"
              icon="i-lucide-mail"
              color="neutral"
              variant="outline"
              size="xl"
            />

            <div class="flex items-center gap-1 sm:ml-2">
              <template v-for="social in socialPlatforms" :key="social?.sys.id">
                <UTooltip v-if="social" :text="social.fields.title">
                  <UButton
                    :icon="socialIcon(social.fields.title)"
                    :to="social.fields.link"
                    :aria-label="social.fields.title"
                    target="_blank"
                    color="neutral"
                    variant="ghost"
                    size="xl"
                  />
                </UTooltip>
              </template>
            </div>
          </div>
        </div>

        <div class="rise" style="--i: 3">
          <DevCard
            :name="page?.fields.title ?? ''"
            :roles="roles"
            :email="email"
            :platforms="
              socialPlatforms.flatMap((social) =>
                social ? [social.fields.title] : [],
              )
            "
          />
        </div>
      </div>
    </UContainer>

    <!-- photos -->
    <div class="reveal">
      <PhotoStrip />
    </div>

    <!-- selected projects -->
    <UContainer v-if="projects?.length" class="py-16 sm:py-24">
      <SectionHeading
        headline="01 / selected work"
        :title="portfolio?.navigationTitle || portfolio?.title"
        :description="portfolio?.subtitle"
        :links="[
          {
            label: 'All projects',
            to: '/portfolio',
            trailingIcon: 'i-lucide-arrow-right',
          },
        ]"
      />

      <UPageGrid>
        <ProjectCard
          v-for="project in projects"
          :key="project.sys.id"
          :project="project"
          class="reveal"
        />
      </UPageGrid>
    </UContainer>

    <!-- articles + sidebar -->
    <UContainer class="pb-8">
      <div
        class="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_22rem] xl:grid-cols-[minmax(0,1fr)_26rem]"
      >
        <section>
          <SectionHeading
            headline="02 / writing"
            :title="blog?.navigationTitle || blog?.title"
            :description="blog?.subtitle"
            :links="[
              {
                label: 'All articles',
                to: '/blog',
                trailingIcon: 'i-lucide-arrow-right',
              },
            ]"
          />

          <ArticleList :limit="3" stacked />
        </section>

        <aside class="reveal space-y-6">
          <SidebarItems :items="sidebarItems" />
        </aside>
      </div>
    </UContainer>
  </div>
</template>
