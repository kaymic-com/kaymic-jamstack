import type { SettingsEntry } from "#shared/types/entries";

/**
 * Loads the Contentful settings entry before the app renders so navigation,
 * footer and sidebar are part of the SSR/prerendered HTML. `useState` carries
 * the value to the client through the payload.
 */
export default defineNuxtPlugin(async () => {
  const settings = useState<SettingsEntry["fields"] | undefined>(
    "site-settings",
  );

  if (settings.value) return;

  try {
    const data = await $fetch<SettingsEntry | undefined>("/api/v1/settings");
    settings.value = data?.fields;
  } catch (error) {
    console.error("Unable to load site settings", error);
  }
});
