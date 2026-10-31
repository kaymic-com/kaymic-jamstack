<script setup lang="ts">
const props = defineProps<{ roles: string[] }>();

// server-render the first role in full so the page reads correctly without JS
const text = ref(props.roles[0] ?? "");

let timer: ReturnType<typeof setTimeout> | undefined;

onMounted(() => {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (reduceMotion || props.roles.length < 2) return;

  let index = 0;
  let deleting = true;

  const step = () => {
    let delay = deleting ? 35 : 70;

    if (deleting) {
      text.value = text.value.slice(0, -1);
      if (!text.value) {
        deleting = false;
        index = (index + 1) % props.roles.length;
        delay = 280;
      }
    } else {
      const target = props.roles[index]!;
      text.value = target.slice(0, text.value.length + 1);
      if (text.value === target) {
        deleting = true;
        delay = 1900;
      }
    }

    timer = setTimeout(step, delay);
  };

  timer = setTimeout(step, 2200);
});

onBeforeUnmount(() => clearTimeout(timer));
</script>

<template>
  <span :aria-label="roles.join(', ')">
    <span aria-hidden="true">
      <span class="text-gradient font-semibold">{{ text }}</span
      ><span
        class="animate-blink ml-0.5 inline-block h-[1em] w-0.75 translate-y-[0.15em] rounded-full bg-primary"
      />
    </span>
  </span>
</template>
