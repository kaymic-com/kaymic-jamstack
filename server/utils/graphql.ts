import { DocumentNode, print } from "graphql";
import { Query } from "~~/types/contentful";
import { $fetch } from "ofetch";
// import type { H3Event } from "h3";

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_PREVIEW_TOKEN,
  CONTENTFUL_PREVIEW_SECRET,
} = process.env;

type GraphqlClientOptions = {
  key: string;
  query: DocumentNode | string;
  variables?: Record<string, unknown>;
  preview?: boolean;
  previewSecret?: string;
};

/**
 *
 */
export const graphqlClient = defineCachedFunction(uncachedGraphqlClient, {
  maxAge: 60 * 60, // 1 hour
  name: "graphqlClient",
  getKey: ({ key, variables }: GraphqlClientOptions) =>
    btoa([key, JSON.stringify(variables)].join("+")),
}) as typeof uncachedGraphqlClient;

/**
 *
 * @param options
 * @returns
 */
export async function uncachedGraphqlClient<T = Query>(
  options: GraphqlClientOptions,
) {
  let { query, variables, preview, previewSecret } = options;

  query = typeof query !== "string" ? print(query) : query;

  const { data } = await $fetch<{ data: Query }>(
    `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID!}/environments/${CONTENTFUL_ENVIRONMENT!}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${
          preview && previewSecret === CONTENTFUL_PREVIEW_SECRET
            ? CONTENTFUL_PREVIEW_TOKEN!
            : CONTENTFUL_ACCESS_TOKEN!
        }`,
      },
      body: JSON.stringify({ query, variables }),
    },
  );

  return data as T;
}
