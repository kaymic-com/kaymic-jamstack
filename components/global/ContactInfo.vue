<script setup lang="ts">
const { socialPlatforms, email } = useSiteSettings()
</script>

<template>
  <ul role="list">
    <li v-for="social in socialPlatforms" class="mt-4 flex">
      <a
        :href="social?.link!"
        :aria-label="social?.title!"
        target="_blank"
        class="group flex text-sm font-medium text-zinc-800 transition hover:text-zinc-700 dark:text-zinc-200 dark:hover:text-yellow-500"
      >
        <div v-html="social?.svg"></div>
        <span class="ml-4">Follow on {{ social?.title }}</span>
      </a>
    </li>

    <!-- email -->
    <li class="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
      <a
        class="group flex text-sm font-medium text-zinc-800 transition hover:text-zinc-700 dark:text-zinc-200 dark:hover:text-yellow-500"
        :href="`mailto:${email}`"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-zinc-700 dark:group-hover:fill-yellow-500"
        >
          <path
            fill-rule="evenodd"
            d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
          ></path>
        </svg>
        <span class="ml-4">{{ email }}</span>
      </a>
    </li>
  </ul>
</template>
