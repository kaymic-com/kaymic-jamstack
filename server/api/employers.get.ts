export default defineEventHandler(async (event) => {
  const { employerCollection } = await graphqlClient({
    key: "EmployerIndex.Query.gql",
    query: useRuntimeConfig().public.graphql["EmployerIndex.Query.gql"],
  });

  return employerCollection?.items ?? [];
});
