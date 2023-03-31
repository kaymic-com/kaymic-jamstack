export default defineEventHandler(async (event) => {
  const { page, limit: _limit } = getQuery(event)
  const limit = parseInt(_limit?.toString() ?? '10')
  const skip = limit * (page ? parseInt(page.toString()) - 1 : 0)

  const { articleCollection } = await graphqlClient({
    query: useRuntimeConfig().public.graphql['ArticleIndex.Query.gql'],
    variables: {
      limit,
      skip,
    },
  })
  return articleCollection?.items ?? []
})
