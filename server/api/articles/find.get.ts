export default defineEventHandler(async (event) => {
  const { slug: _slug } = getQuery(event)
  const slug = _slug === '/' ? '/' : _slug?.toString().replace(/\/$/, '')

  const { articleCollection } = await graphqlClient({
    query: useRuntimeConfig().public.graphql['ArticleBySlug.Query.gql'],
    variables: {
      slug,
    },
  })

  const [article] = articleCollection?.items ?? []

  return article!
})
