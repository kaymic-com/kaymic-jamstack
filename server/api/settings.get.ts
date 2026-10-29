export default defineEventHandler(async (event) => {
  const { settingsCollection } = await graphqlClient({
    key: "Settings.Query.gql",
    query: useRuntimeConfig().public.graphql["Settings.Query.gql"],
  });

  const [settings] = settingsCollection?.items ?? [];

  return settings!;
});
