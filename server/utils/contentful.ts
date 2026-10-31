import {
  createClient,
  type EntriesQueries,
  type CreateClientParams,
  type EntrySkeletonType,
} from "contentful";
import { H3Event } from "h3";

export const useContentful = (params?: CreateClientParams) => {
  const config = (): CreateClientParams => {
    if (params) return params;

    const config = useRuntimeConfig();
    return {
      space: config.contentfulSpaceId,
      accessToken: config.contentfulAccessToken,
      environment: config.contentfulEnvironment,
    };
  };

  const client = createClient(config()).withoutUnresolvableLinks;

  //

  const getEntries = async <T extends EntrySkeletonType>(
    contentType: string,
    query: EntriesQueries<T, undefined> = {},
  ) => {
    const response = await client.getEntries<T>({
      content_type: contentType,
      ...query,
    });

    return response.items;
  };

  //

  const getEntry = <T extends EntrySkeletonType>(id: string) =>
    client.getEntry<T>(id);

  //

  const getEntryBySlug = async <T extends EntrySkeletonType>(
    event: H3Event,
    content_type: string,
  ) => {
    const { slug: _slug } = getQuery(event);
    const slug = _slug === "/" ? "/" : _slug?.toString().replace(/\/$/, "");
    if (!slug) throw createError({ statusCode: 400 });

    const response = await getEntries<T>(content_type, {
      // @ts-ignore
      "fields.slug": slug,
      limit: 1,
    });

    return response[0];
  };

  //

  return { getEntries, getEntry, getEntryBySlug };
};
