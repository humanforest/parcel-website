export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "ForestParcel",
  description: "Deliver parcels with HumanForest",
  mainNav: [
    {
      title: "Home",
      href: "/couriers",
    },
    {
      title: "Become a Courier",
      href: "/application",
    },
    {
      title: "Pricing",
      href: "#",
    },
    {
      title: "Blog",
      href: "#",
    },
    {
      title: "Help",
      href: "#",
    },
  ],
  links: {
    signup: "/application",
  },
}
