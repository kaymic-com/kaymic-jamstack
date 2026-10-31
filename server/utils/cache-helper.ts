import type { CachedEventHandlerOptions } from "nitropack/types";

/**
 * provides `bypass` and `force` query parameters to cached api routes. Bypasses cache when `live_preview` is present
 * @param maxAge Number of seconds to cache the response. Defaults to 600 (1 hour) when not in dev
 * @returns
 */
export const cacheHelper = (maxAge = 600) => {
  return {
    maxAge: import.meta.dev ? 10 : maxAge,
    shouldBypassCache: (event) => !!getQuery(event).bypass,
    shouldInvalidateCache: (event) => !!getQuery(event).force,
  } satisfies CachedEventHandlerOptions;
};
