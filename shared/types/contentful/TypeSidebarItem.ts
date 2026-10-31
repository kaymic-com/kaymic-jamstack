import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeSidebarItem'
 * @name TypeSidebarItemFields
 * @type {TypeSidebarItemFields}
 * @memberof TypeSidebarItem
 */
export interface TypeSidebarItemFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'component' (Component)
     * @name Component
     * @localized false
     */
    component?: EntryFieldTypes.Symbol<"ContactForm" | "ContactInfo" | "EmploymentHistory" | "Headshot">;
    /**
     * Field type definition for field 'componentProps' (Component Properties)
     * @name Component Properties
     * @localized false
     */
    componentProps?: EntryFieldTypes.Object;
    /**
     * Field type definition for field 'teleport' (Teleport)
     * @name Teleport
     * @localized false
     * @summary Teleports the sidebar item above the body content
     */
    teleport?: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'image' (Image)
     * @name Image
     * @localized false
     */
    image?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'sidebarItem' (Sidebar Item)
 * @name TypeSidebarItemSkeleton
 * @type {TypeSidebarItemSkeleton}
 * @author 5NNxXgiWoZKjRM5QWIHqYe
 * @since 2023-03-30T16:18:19.671Z
 * @version 9
 */
export type TypeSidebarItemSkeleton = EntrySkeletonType<TypeSidebarItemFields, "sidebarItem">;
/**
 * Entry type definition for content type 'sidebarItem' (Sidebar Item)
 * @name TypeSidebarItem
 * @type {TypeSidebarItem}
 * @author 5NNxXgiWoZKjRM5QWIHqYe
 * @since 2023-03-30T16:18:19.671Z
 * @version 9
 */
export type TypeSidebarItem<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSidebarItemSkeleton, Modifiers, Locales>;

export function isTypeSidebarItem<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: unknown): entry is TypeSidebarItem<Modifiers, Locales> {
    const candidate = entry as { sys?: { contentType?: { sys?: { id?: string } } } };
    return candidate.sys?.contentType?.sys?.id === 'sidebarItem'
}

export type TypeSidebarItemWithoutLinkResolutionResponse = TypeSidebarItem<"WITHOUT_LINK_RESOLUTION">;
export type TypeSidebarItemWithoutUnresolvableLinksResponse = TypeSidebarItem<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeSidebarItemWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeSidebarItem<"WITH_ALL_LOCALES", Locales>;
export type TypeSidebarItemWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeSidebarItem<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeSidebarItemWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeSidebarItem<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
