<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "@nuxt/ui";
import type { SidebarItemEntry } from "#shared/types/entries";

defineProps<{ item: SidebarItemEntry }>();

interface State {
  email: string;
  botField: string;
}

const toast = useToast();

const state = reactive<State>({ email: "", botField: "" });
const loading = ref(false);

const validate = (state: Partial<State>): FormError[] => {
  const errors: FormError[] = [];
  if (!state.email) errors.push({ name: "email", message: "Required" });
  else if (!/^\S+@\S+\.\S+$/.test(state.email))
    errors.push({ name: "email", message: "Enter a valid email address" });
  return errors;
};

// posts to the static form in public/forms/contact.html so Netlify picks it up
const onSubmit = async (event: FormSubmitEvent<State>) => {
  loading.value = true;

  try {
    await $fetch("/forms/contact.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact",
        email: event.data.email,
        "bot-field": event.data.botField,
      }),
    });

    await navigateTo("/thank-you");
  } catch {
    toast.add({
      title: "Sorry, something went wrong",
      description: "Try again later.",
      icon: "i-lucide-circle-alert",
      color: "error",
    });
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <UPageCard
    id="contact"
    title="Get in touch"
    description="Interested in starting a conversation?"
    icon="i-lucide-mail"
    variant="outline"
    spotlight
    spotlight-color="primary"
  >
    <template #footer>
      <UForm
        :state="state"
        :validate="validate"
        class="flex items-start gap-2"
        @submit="onSubmit"
      >
        <UFormField name="email" class="flex-1">
          <UInput
            v-model="state.email"
            type="email"
            name="email"
            placeholder="Email address"
            aria-label="Email address"
            icon="i-lucide-at-sign"
            class="w-full"
          />
        </UFormField>

        <!-- honeypot: real visitors never see or fill this -->
        <p class="sr-only" aria-hidden="true">
          <label>
            Leave this field empty
            <input
              v-model="state.botField"
              name="bot-field"
              tabindex="-1"
              autocomplete="off"
            />
          </label>
        </p>

        <UButton
          type="submit"
          label="Start"
          trailing-icon="i-lucide-arrow-right"
          :loading="loading"
        />
      </UForm>
    </template>
  </UPageCard>
</template>
