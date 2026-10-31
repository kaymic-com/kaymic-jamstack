import type { TypeSettings } from "#shared/types/contentful";

type SettingsResponse = TypeSettings<"WITHOUT_UNRESOLVABLE_LINKS", string>;

export const useSiteSettings = () => {
  const settings = useState<SettingsResponse["fields"] | undefined>(
    "site-settings",
    () => undefined,
  );

  callOnce(async () => {
    const data = await $fetch<SettingsResponse | undefined>(`/api/v1/settings`);
    settings.value = data?.fields;
  });

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
