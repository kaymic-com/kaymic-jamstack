export default defineEventHandler(async (event) => {
  const { socialPlatformCollection } = await graphqlClient({
    query: useRuntimeConfig().public.graphql['SocialPlatformIndex.Query.gql'],
  })
  return socialPlatformCollection?.items ?? []
})
