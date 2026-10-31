import type { PageEntry, SidebarItemEntry } from "#shared/types/entries";

/**
 * Resolves which sidebar items a page shows, following the Contentful fields:
 * - `sidebarReplace`: only the page's own items
 * - `sidebarAppend`: the page's items, then the global ones
 * - neither: the global items, then the page's own
 *
 * Items flagged `teleport` are returned separately so the layout can place
 * them above the body content.
 */
export const usePageSidebar = (
  page: MaybeRefOrGetter<PageEntry["fields"] | undefined>,
) => {
  const { sidebarItems } = useSiteSettings();

  const items = computed(() => {
    const fields = toValue(page);
    const own = fields?.sidebar ?? [];
    const global = sidebarItems.value;

    const merged = fields?.sidebarReplace
      ? own
      : fields?.sidebarAppend
        ? [...own, ...global]
        : [...global, ...own];

    return merged.filter((item): item is SidebarItemEntry => !!item);
  });

  const teleported = computed(() =>
    items.value.filter((item) => item.fields.teleport),
  );

  const aside = computed(() =>
    items.value.filter((item) => !item.fields.teleport),
  );

  return { items, teleported, aside };
};
