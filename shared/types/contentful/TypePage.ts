import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSidebarItemSkeleton } from "./TypeSidebarItem";

/**
 * Fields type definition for content type 'TypePage'
 * @name TypePageFields
 * @type {TypePageFields}
 * @memberof TypePage
 */
export interface TypePageFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'slug' (Slug)
     * @name Slug
     * @localized false
     */
    slug: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'navigationTitle' (Navigation Title)
     * @name Navigation Title
     * @localized false
     */
    navigationTitle?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'subtitle' (Subtitle)
     * @name Subtitle
     * @localized false
     */
    subtitle?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'body' (Body)
     * @name Body
     * @localized false
     */
    body?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'sidebar' (Sidebar)
     * @name Sidebar
     * @localized false
     */
    sidebar?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSidebarItemSkeleton>>;
    /**
     * Field type definition for field 'sidebarReplace' (Replace Sidebar)
     * @name Replace Sidebar
     * @localized false
     */
    sidebarReplace?: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'sidebarAppend' (Append Sidebar)
     * @name Append Sidebar
     * @localized false
     */
    sidebarAppend?: EntryFieldTypes.Boolean;
}

/**
 * Entry skeleton type definition for content type 'page' (Page)
 * @name TypePageSkeleton
 * @type {TypePageSkeleton}
 * @author 5NNxXgiWoZKjRM5QWIHqYe
 * @since 2023-03-30T13:27:19.522Z
 * @version 3
 */
export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
/**
 * Entry type definition for content type 'page' (Page)
 * @name TypePage
 * @type {TypePage}
 * @author 5NNxXgiWoZKjRM5QWIHqYe
 * @since 2023-03-30T13:27:19.522Z
 * @version 3
 */
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;

export function isTypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: unknown): entry is TypePage<Modifiers, Locales> {
    const candidate = entry as { sys?: { contentType?: { sys?: { id?: string } } } };
    return candidate.sys?.contentType?.sys?.id === 'page'
}

export type TypePageWithoutLinkResolutionResponse = TypePage<"WITHOUT_LINK_RESOLUTION">;
export type TypePageWithoutUnresolvableLinksResponse = TypePage<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypePageWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypePage<"WITH_ALL_LOCALES", Locales>;
export type TypePageWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypePage<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypePageWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypePage<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
