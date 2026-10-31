import type { Asset } from "contentful";
import type {
  TypeArticle,
  TypeEmployer,
  TypePage,
  TypeProject,
  TypeSettings,
  TypeSidebarItem,
  TypeSocialPlatform,
} from "./contentful";

/**
 * Entries as returned by the `/api/v1` routes: the Contentful client runs
 * `withoutUnresolvableLinks`, so unpublished/missing links are simply absent.
 */
type Resolved = "WITHOUT_UNRESOLVABLE_LINKS";

export type AssetEntry = Asset<Resolved, string>;
export type ArticleEntry = TypeArticle<Resolved, string>;
export type EmployerEntry = TypeEmployer<Resolved, string>;
export type PageEntry = TypePage<Resolved, string>;
export type ProjectEntry = TypeProject<Resolved, string>;
export type SettingsEntry = TypeSettings<Resolved, string>;
export type SidebarItemEntry = TypeSidebarItem<Resolved, string>;
export type SocialPlatformEntry = TypeSocialPlatform<Resolved, string>;
