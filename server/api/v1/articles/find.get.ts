import type { TypeArticleSkeleton } from "#shared/types/contentful";

export default defineCachedEventHandler(async (event) => {
  const { getEntryBySlug } = useContentful();
  const article = await getEntryBySlug<TypeArticleSkeleton>(event, "article");

  if (!article) throw createError({ statusCode: 404 });

  return article;
}, cacheHelper());
