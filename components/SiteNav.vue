<script setup lang="ts">
const menuToggle = ref(false)
const toggleMenu = () => (menuToggle.value = !menuToggle.value)

const { navigationItems } = useSiteSettings()
</script>

<template>
  <div class="flex flex-1 justify-end md:justify-center">
    <div class="pointer-events-auto md:hidden" data-headlessui-state="">
      <!-- menu button -->
      <button
        class="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
        id="headlessui-popover-button-:Rqb6:"
        type="button"
        :aria-expanded="menuToggle"
        data-headlessui-state=""
        @click="toggleMenu"
      >
        Menu
        <svg
          viewBox="0 0 8 6"
          :aria-hidden="!menuToggle"
          class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
        >
          <path
            d="M1.75 1.75 4 4.25l2.25-2.5"
            fill="none"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>

      <!-- mobile menu -->
      <div v-if="menuToggle">
        <div
          class="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100"
          id="headlessui-popover-overlay-:r9:"
          :aria-hidden="!menuToggle"
          @click="menuToggle = false"
        ></div>
        <div
          class="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100"
          id="headlessui-popover-panel-:Rqb6H1:"
          tabindex="-1"
        >
          <div class="flex flex-row-reverse items-center justify-between">
            <!-- close menu -->
            <button
              aria-label="Close menu"
              class="-m-1 p-1"
              type="button"
              tabindex="0"
              @click="menuToggle = false"
            >
              <svg
                viewBox="0 0 24 24"
                :aria-hidden="!menuToggle"
                class="h-6 w-6 text-zinc-500 dark:text-zinc-400"
              >
                <path
                  d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <h2 class="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Navigation
            </h2>
          </div>
          <nav class="mt-6">
            <ul
              class="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300"
            >
              <li v-for="item in navigationItems">
                <NuxtLink
                  v-slot="{ isActive }"
                  active-class="text-yellow-500 dark:text-yellow-400"
                  class="block py-2"
                  :to="item?.slug!"
                  @click="menuToggle = false"
                >
                  {{ item?.navigationTitle ?? item?.title }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <nav class="pointer-events-auto hidden md:block">
      <!-- menu -->
      <ul
        class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
      >
        <li v-for="item in navigationItems">
          <NuxtLink
            v-slot="{ isActive }"
            active-class="text-yellow-500 dark:text-yellow-400"
            class="relative block px-3 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
            :href="item?.slug!"
          >
            {{ item?.navigationTitle ?? item?.title }}
            <span
              v-if="isActive"
              class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-yellow-500/0 via-yellow-500/40 to-yellow-500/0 dark:from-yellow-400/0 dark:via-yellow-400/40 dark:to-yellow-400/0"
            ></span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
