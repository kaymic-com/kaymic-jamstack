<template>
  <div class="relative isolate flex min-h-dvh flex-col overflow-x-clip">
    <AmbientBackground />

    <SiteNav />

    <UMain class="flex-1">
      <slot />
    </UMain>

    <SiteFooter />
  </div>
</template>
