const icons: Record<string, string> = {
  github: "i-simple-icons-github",
  linkedin: "i-simple-icons-linkedin",
  instagram: "i-simple-icons-instagram",
  x: "i-simple-icons-x",
  twitter: "i-simple-icons-x",
  youtube: "i-simple-icons-youtube",
  facebook: "i-simple-icons-facebook",
  mastodon: "i-simple-icons-mastodon",
  bluesky: "i-simple-icons-bluesky",
  discord: "i-simple-icons-discord",
  twitch: "i-simple-icons-twitch",
  codepen: "i-simple-icons-codepen",
};

/** Maps a Contentful social platform title to an Iconify icon name. */
export const socialIcon = (title?: string) =>
  icons[title?.trim().toLowerCase() ?? ""] ?? "i-lucide-link";
