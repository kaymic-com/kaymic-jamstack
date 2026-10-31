import type { TypeProjectSkeleton } from "#shared/types/contentful";

export default defineCachedEventHandler(async (event) => {
  const { limit: _limit } = getQuery(event);
  const limit = parseInt(_limit?.toString() ?? "100");

  const { getEntries } = useContentful();
  const projects = await getEntries<TypeProjectSkeleton>("project", {
    limit,
    include: 2,
  });

  return projects ?? [];
}, cacheHelper());
