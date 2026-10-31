import type { TypePageSkeleton } from "#shared/types/contentful";

export default defineCachedEventHandler(async (event) => {
  const { getEntryBySlug } = useContentful();
  const page = await getEntryBySlug<TypePageSkeleton>(event, "page");

  if (!page) throw createError({ statusCode: 404 });

  return page;
}, cacheHelper());
