import type { AssetEntry } from "#shared/types/entries";

interface ImageOptions {
  w?: number;
  h?: number;
  fit?: "pad" | "fill" | "scale" | "crop" | "thumb";
  q?: number;
}

/**
 * Builds a Contentful Images API url (https, webp, optional resize) for an
 * asset. Non-raster assets are returned untouched.
 */
export const assetUrl = (
  asset: AssetEntry | undefined,
  { w, h, fit, q = 80 }: ImageOptions = {},
) => {
  const file = asset?.fields.file;
  if (!file?.url) return undefined;

  const url = file.url.startsWith("//") ? `https:${file.url}` : file.url;
  const contentType = file.contentType ?? "";
  if (!contentType.startsWith("image/") || contentType.includes("svg"))
    return url;

  const params = new URLSearchParams({ fm: "webp", q: String(q) });
  if (w) params.set("w", String(w));
  if (h) params.set("h", String(h));
  if (fit) params.set("fit", fit);

  return `${url}?${params}`;
};

/** Intrinsic size of an image asset, for width/height attributes. */
export const assetSize = (asset: AssetEntry | undefined) => {
  const size = asset?.fields.file?.details?.image;
  return size ? { width: size.width, height: size.height } : undefined;
};
