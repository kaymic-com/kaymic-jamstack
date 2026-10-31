<script setup lang="ts">
defineProps<{
  name: string;
  roles: string[];
  email?: string;
  platforms: string[];
}>();
</script>

<template>
  <div
    class="animate-float relative [--tilt:-2deg]"
    role="img"
    :aria-label="`${name}, ${roles.join(', ')}`"
  >
    <div
      aria-hidden="true"
      class="absolute -inset-4 rounded-4xl bg-linear-to-br from-primary/20 via-transparent to-secondary/20 blur-2xl"
    />

    <div
      aria-hidden="true"
      class="relative overflow-hidden rounded-2xl border border-default bg-default/80 shadow-2xl backdrop-blur-md"
    >
      <!-- window chrome -->
      <div
        class="flex items-center gap-2 border-b border-default bg-elevated/70 px-4 py-3"
      >
        <span class="size-3 rounded-full bg-accented" />
        <span class="size-3 rounded-full bg-accented" />
        <span class="size-3 rounded-full bg-accented" />
        <span class="ml-3 font-mono text-xs text-muted">kevin.ts</span>
      </div>

      <!-- code -->
      <pre
        class="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm"
      ><code class="block"><span class="block"><span class="text-secondary">const</span> <span class="text-highlighted">kevin</span> <span class="text-muted">=</span> {</span><span class="block pl-5"><span class="text-toned">name</span>: <span class="text-primary">"{{ name }}"</span>,</span><span class="block pl-5"><span class="text-toned">roles</span>: [</span><span v-for="role in roles" :key="role" class="block pl-10"><span class="text-primary">"{{ role.toLowerCase() }}"</span>,</span><span class="block pl-5">],</span><span v-if="email" class="block pl-5"><span class="text-toned">email</span>: <span class="text-primary">"{{ email }}"</span>,</span><span v-if="platforms.length" class="block pl-5"><span class="text-toned">elsewhere</span>: [<template v-for="(platform, i) in platforms" :key="platform"><span class="text-primary">"{{ platform }}"</span><template v-if="i < platforms.length - 1">, </template></template>],</span><span class="block pl-5"><span class="text-secondary">hire</span>() { <span class="text-secondary">return</span> <span class="text-primary">"let's talk"</span> },</span><span class="block">}</span><span class="mt-3 block text-dimmed">// ta-da.</span></code></pre>
    </div>
  </div>
</template>
