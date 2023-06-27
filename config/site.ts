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
      title: "Blog",
      href: "#",
    },
  ],
  links: {
    signup: "/application",
  },
}
