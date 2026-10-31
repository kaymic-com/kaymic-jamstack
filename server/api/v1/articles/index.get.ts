import type { TypeArticleSkeleton } from "#shared/types/contentful";

export default defineCachedEventHandler(async (event) => {
  const { page, limit: _limit } = getQuery(event);
  const limit = parseInt(_limit?.toString() ?? "10");
  const skip = limit * (page ? parseInt(page.toString()) - 1 : 0);

  const { getEntries } = useContentful();
  const articles = await getEntries<TypeArticleSkeleton>("article", {
    limit,
    skip,
    include: 2,
    order: ["-sys.createdAt"],
  });

  for (const article of articles) {
    console.log(article.fields.image?.fields?.file?.url);
  }

  return articles ?? [];
}, cacheHelper());
