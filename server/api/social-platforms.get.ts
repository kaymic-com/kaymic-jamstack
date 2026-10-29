export default defineEventHandler(async (event) => {
  const { socialPlatformCollection } = await graphqlClient({
    key: "SocialPlatformIndex.Query.gql",
    query: useRuntimeConfig().public.graphql["SocialPlatformIndex.Query.gql"],
  });
  return socialPlatformCollection?.items ?? [];
});
