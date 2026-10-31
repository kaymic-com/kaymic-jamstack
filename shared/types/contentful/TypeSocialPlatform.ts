import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeSocialPlatform'
 * @name TypeSocialPlatformFields
 * @type {TypeSocialPlatformFields}
 * @memberof TypeSocialPlatform
 */
export interface TypeSocialPlatformFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'link' (Link)
     * @name Link
     * @localized false
     */
    link: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'svg' (SVG)
     * @name SVG
     * @localized false
     */
    svg: EntryFieldTypes.Text;
}

/**
 * Entry skeleton type definition for content type 'socialPlatform' (Social Platform)
 * @name TypeSocialPlatformSkeleton
 * @type {TypeSocialPlatformSkeleton}
 * @author 5NNxXgiWoZKjRM5QWIHqYe
 * @since 2023-03-30T13:32:26.597Z
 * @version 1
 */
export type TypeSocialPlatformSkeleton = EntrySkeletonType<TypeSocialPlatformFields, "socialPlatform">;
/**
 * Entry type definition for content type 'socialPlatform' (Social Platform)
 * @name TypeSocialPlatform
 * @type {TypeSocialPlatform}
 * @author 5NNxXgiWoZKjRM5QWIHqYe
 * @since 2023-03-30T13:32:26.597Z
 * @version 1
 */
export type TypeSocialPlatform<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSocialPlatformSkeleton, Modifiers, Locales>;

export function isTypeSocialPlatform<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: unknown): entry is TypeSocialPlatform<Modifiers, Locales> {
    const candidate = entry as { sys?: { contentType?: { sys?: { id?: string } } } };
    return candidate.sys?.contentType?.sys?.id === 'socialPlatform'
}

export type TypeSocialPlatformWithoutLinkResolutionResponse = TypeSocialPlatform<"WITHOUT_LINK_RESOLUTION">;
export type TypeSocialPlatformWithoutUnresolvableLinksResponse = TypeSocialPlatform<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeSocialPlatformWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeSocialPlatform<"WITH_ALL_LOCALES", Locales>;
export type TypeSocialPlatformWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeSocialPlatform<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeSocialPlatformWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeSocialPlatform<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
