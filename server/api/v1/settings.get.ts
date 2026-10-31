import type { TypeSettingsSkeleton } from "#shared/types/contentful";

export default defineCachedEventHandler(async (event) => {
  const { getEntries } = useContentful();
  const settings = await getEntries<TypeSettingsSkeleton>("settings", {
    limit: 1,
    include: 1,
  });

  if (!settings) throw createError({ statusCode: 404 });

  return settings[0];
}, cacheHelper());
