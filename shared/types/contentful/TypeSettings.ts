import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePageSkeleton } from "./TypePage";
import type { TypeSidebarItemSkeleton } from "./TypeSidebarItem";
import type { TypeSocialPlatformSkeleton } from "./TypeSocialPlatform";

/**
 * Fields type definition for content type 'TypeSettings'
 * @name TypeSettingsFields
 * @type {TypeSettingsFields}
 * @memberof TypeSettings
 */
export interface TypeSettingsFields {
    /**
     * Field type definition for field 'email' (Email)
     * @name Email
     * @localized false
     */
    email?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'logo' (Logo)
     * @name Logo
     * @localized false
     */
    logo?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'navigation' (Navigation)
     * @name Navigation
     * @localized false
     */
    navigation?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePageSkeleton>>;
    /**
     * Field type definition for field 'footerNavigation' (Footer Navigation)
     * @name Footer Navigation
     * @localized false
     */
    footerNavigation?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePageSkeleton>>;
    /**
     * Field type definition for field 'socialPlatforms' (Social Platforms)
     * @name Social Platforms
     * @localized false
     */
    socialPlatforms?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSocialPlatformSkeleton>>;
    /**
     * Field type definition for field 'sidebar' (Sidebar)
     * @name Sidebar
     * @localized false
     */
    sidebar?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSidebarItemSkeleton>>;
    /**
     * Field type definition for field 'homeImages' (Home Images)
     * @name Home Images
     * @localized false
     */
    homeImages?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

/**
 * Entry skeleton type definition for content type 'settings' (Settings)
 * @name TypeSettingsSkeleton
 * @type {TypeSettingsSkeleton}
 * @author 5NNxXgiWoZKjRM5QWIHqYe
 * @since 2023-03-30T13:35:59.706Z
 * @version 17
 */
export type TypeSettingsSkeleton = EntrySkeletonType<TypeSettingsFields, "settings">;
/**
 * Entry type definition for content type 'settings' (Settings)
 * @name TypeSettings
 * @type {TypeSettings}
 * @author 5NNxXgiWoZKjRM5QWIHqYe
 * @since 2023-03-30T13:35:59.706Z
 * @version 17
 */
export type TypeSettings<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSettingsSkeleton, Modifiers, Locales>;

export function isTypeSettings<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: unknown): entry is TypeSettings<Modifiers, Locales> {
    const candidate = entry as { sys?: { contentType?: { sys?: { id?: string } } } };
    return candidate.sys?.contentType?.sys?.id === 'settings'
}

export type TypeSettingsWithoutLinkResolutionResponse = TypeSettings<"WITHOUT_LINK_RESOLUTION">;
export type TypeSettingsWithoutUnresolvableLinksResponse = TypeSettings<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeSettingsWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeSettings<"WITH_ALL_LOCALES", Locales>;
export type TypeSettingsWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeSettings<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeSettingsWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeSettings<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
