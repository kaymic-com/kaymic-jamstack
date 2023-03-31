export default defineEventHandler(async (event) => {
  const { employerCollection } = await graphqlClient({
    query: useRuntimeConfig().public.graphql['EmployerIndex.Query.gql'],
  })

  return employerCollection?.items ?? []
})
