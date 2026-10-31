import type { SettingsEntry } from "#shared/types/entries";

/** Reads the settings loaded by `plugins/site-settings.ts`. */
export const useSiteSettings = () => {
  const settings = useState<SettingsEntry["fields"] | undefined>(
    "site-settings",
  );

  const logo = computed(() => settings.value?.logo);

  const email = computed(() => settings.value?.email);

  const navigationItems = computed(() => settings.value?.navigation);

  const footerNavigationItems = computed(
    () => settings.value?.footerNavigation ?? [],
  );

  const socialPlatforms = computed(() => settings.value?.socialPlatforms ?? []);

  const sidebarItems = computed(() => settings.value?.sidebar ?? []);

  const homeImages = computed(() => settings.value?.homeImages ?? []);

  return {
    settings,
    logo,
    email,
    navigationItems,
    socialPlatforms,
    footerNavigationItems,
    sidebarItems,
    homeImages,
  };
};
