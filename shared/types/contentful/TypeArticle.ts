import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeArticle'
 * @name TypeArticleFields
 * @type {TypeArticleFields}
 * @memberof TypeArticle
 */
export interface TypeArticleFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'image' (Image)
     * @name Image
     * @localized false
     */
    image?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'excerpt' (Excerpt)
     * @name Excerpt
     * @localized false
     */
    excerpt?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'slug' (Slug)
     * @name Slug
     * @localized false
     */
    slug: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'body' (Body)
     * @name Body
     * @localized false
     */
    body?: EntryFieldTypes.Text;
}

/**
 * Entry skeleton type definition for content type 'article' (Article)
 * @name TypeArticleSkeleton
 * @type {TypeArticleSkeleton}
 * @author 5NNxXgiWoZKjRM5QWIHqYe
 * @since 2023-03-30T13:38:28.072Z
 * @version 5
 */
export type TypeArticleSkeleton = EntrySkeletonType<TypeArticleFields, "article">;
/**
 * Entry type definition for content type 'article' (Article)
 * @name TypeArticle
 * @type {TypeArticle}
 * @author 5NNxXgiWoZKjRM5QWIHqYe
 * @since 2023-03-30T13:38:28.072Z
 * @version 5
 */
export type TypeArticle<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeArticleSkeleton, Modifiers, Locales>;

export function isTypeArticle<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: unknown): entry is TypeArticle<Modifiers, Locales> {
    const candidate = entry as { sys?: { contentType?: { sys?: { id?: string } } } };
    return candidate.sys?.contentType?.sys?.id === 'article'
}

export type TypeArticleWithoutLinkResolutionResponse = TypeArticle<"WITHOUT_LINK_RESOLUTION">;
export type TypeArticleWithoutUnresolvableLinksResponse = TypeArticle<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeArticleWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeArticle<"WITH_ALL_LOCALES", Locales>;
export type TypeArticleWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeArticle<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeArticleWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeArticle<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
