import type { TypeEmployerSkeleton } from "#shared/types/contentful";

export default defineCachedEventHandler(async () => {
  const { getEntries } = useContentful();
  const employers = await getEntries<TypeEmployerSkeleton>("employer", {
    order: ["-fields.startDate"],
    include: 2,
  });

  return employers ?? [];
}, cacheHelper());
