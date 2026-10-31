import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeEmployer'
 * @name TypeEmployerFields
 * @type {TypeEmployerFields}
 * @memberof TypeEmployer
 */
export interface TypeEmployerFields {
    /**
     * Field type definition for field 'name' (Name)
     * @name Name
     * @localized false
     */
    name: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'logo' (Logo)
     * @name Logo
     * @localized false
     */
    logo?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'jobTitle' (Job Title)
     * @name Job Title
     * @localized false
     */
    jobTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'startDate' (Start Date)
     * @name Start Date
     * @localized false
     */
    startDate: EntryFieldTypes.Date;
    /**
     * Field type definition for field 'endDate' (End Date)
     * @name End Date
     * @localized false
     */
    endDate?: EntryFieldTypes.Date;
    /**
     * Field type definition for field 'note' (Note)
     * @name Note
     * @localized false
     */
    note?: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'employer' (Employer)
 * @name TypeEmployerSkeleton
 * @type {TypeEmployerSkeleton}
 * @author 5NNxXgiWoZKjRM5QWIHqYe
 * @since 2023-03-30T19:08:39.668Z
 * @version 5
 */
export type TypeEmployerSkeleton = EntrySkeletonType<TypeEmployerFields, "employer">;
/**
 * Entry type definition for content type 'employer' (Employer)
 * @name TypeEmployer
 * @type {TypeEmployer}
 * @author 5NNxXgiWoZKjRM5QWIHqYe
 * @since 2023-03-30T19:08:39.668Z
 * @version 5
 */
export type TypeEmployer<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeEmployerSkeleton, Modifiers, Locales>;

export function isTypeEmployer<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: unknown): entry is TypeEmployer<Modifiers, Locales> {
    const candidate = entry as { sys?: { contentType?: { sys?: { id?: string } } } };
    return candidate.sys?.contentType?.sys?.id === 'employer'
}

export type TypeEmployerWithoutLinkResolutionResponse = TypeEmployer<"WITHOUT_LINK_RESOLUTION">;
export type TypeEmployerWithoutUnresolvableLinksResponse = TypeEmployer<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeEmployerWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeEmployer<"WITH_ALL_LOCALES", Locales>;
export type TypeEmployerWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeEmployer<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeEmployerWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeEmployer<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
