export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "MXT",
  description: "Personal blog",
  navItems: [
    {label: "Home", href: "/"},
    {label: "Blog", href: "/blog"},
    {label: "About", href: "/about"},
  ],
  navMenuItems: [
    {label: "Home", href: "/"},
    {label: "Blog", href: "/blog"},
    {label: "About", href: "/about"},
  ],
};
