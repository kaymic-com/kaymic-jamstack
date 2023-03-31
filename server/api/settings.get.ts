export default defineEventHandler(async (event) => {
  const { settingsCollection } = await graphqlClient({
    query: useRuntimeConfig().public.graphql['Settings.Query.gql'],
  })

  const [settings] = settingsCollection?.items ?? []

  return settings!
})
