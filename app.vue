<script setup lang="ts">
import { useStorage, useScroll } from '@vueuse/core'

const { init, logo, footerNavigationItems } = useSiteSettings()
await init()

const darkMode = useStorage('darkMode', true)

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
}

const htmlClass = computed(
  () =>
    `h-full antialiased js-focus-visible ${darkMode.value ? 'dark' : 'light'}`
)

// const el = ref<HTMLElement | null>(null)
// const { isScrolling, x, y } = useScroll(el)

useHead({
  htmlAttrs: {
    class: htmlClass,
    // style:
    //   '--header-position:sticky; --content-offset:0px; --header-height:64px; --header-mb:0px; --header-top:0px; --avatar-top:0px;',
  },
  link: [{ rel: 'icon', type: 'image/png', href: `${logo.value?.url}?w=100` }],
  bodyAttrs: {
    class: 'flex h-full flex-col bg-zinc-50 dark:bg-black',
  },
})
</script>

<template>
  <Meta name="google-adsense-account" content="ca-pub-0047612029589686" />
  <main>
    <!--  -->
    <div class="fixed inset-0 flex justify-center sm:px-8">
      <div class="flex w-full max-w-7xl lg:px-8">
        <div
          class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"
        ></div>
      </div>
    </div>

    <div class="relative">
      <!--  -->
      <header
        class="pointer-events-none relative z-50 flex flex-col"
        style="height: var(--header-height); margin-bottom: var(--header-mb)"
      >
        <div
          class="top-0 z-10 h-16 pt-6"
          style="position: var(--header-position)"
        >
          <div
            class="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full"
            style="position: var(--header-inner-position)"
          >
            <div class="mx-auto max-w-7xl lg:px-8">
              <div class="relative px-4 sm:px-8 lg:px-12">
                <div class="mx-auto max-w-2xl lg:max-w-5xl">
                  <div class="relative flex gap-4">
                    <div class="flex flex-1">
                      <div
                        class="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
                      >
                        <a
                          aria-label="Home"
                          class="pointer-events-auto"
                          href="/"
                          ><img
                            alt=""
                            :src="`${logo?.url}?w=100`"
                            decoding="async"
                            class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                            style="color: transparent"
                        /></a>
                      </div>
                    </div>

                    <SiteNav />

                    <div class="flex justify-end md:flex-1">
                      <div class="pointer-events-auto">
                        <!-- dark toggle -->
                        <button
                          type="button"
                          aria-label="Toggle dark mode"
                          class="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                          @click="toggleDarkMode"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            aria-hidden="true"
                            class="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-yellow-50 [@media(prefers-color-scheme:dark)]:stroke-yellow-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-yellow-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-yellow-600"
                          >
                            <path
                              d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"
                            ></path>
                            <path
                              d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                              fill="none"
                            ></path>
                          </svg>
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            class="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-yellow-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-yellow-500"
                          >
                            <path
                              d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div style="height: var(--content-offset)"></div>

      <!--  -->

      <NuxtPage />

      <!--  -->
      <footer class="mt-32">
        <div class="sm:px-8">
          <div class="mx-auto max-w-7xl lg:px-8">
            <div
              class="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40"
            >
              <div class="relative px-4 sm:px-8 lg:px-12">
                <div class="mx-auto max-w-2xl lg:max-w-5xl">
                  <div
                    class="flex flex-col items-center justify-between gap-6 sm:flex-row"
                  >
                    <div
                      class="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200"
                    >
                      <a
                        v-for="item in footerNavigationItems"
                        class="transition hover:text-yellow-500 dark:hover:text-yellow-400"
                        :href="item?.slug!"
                        >{{ item?.navigationTitle ?? item?.title }}</a
                      >
                    </div>
                    <p class="text-sm text-zinc-400 dark:text-zinc-500">
                      ©
                      {{ new Date().getFullYear() }}
                      Kevin McCarthy. All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </main>
</template>
