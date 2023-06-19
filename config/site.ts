export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "ForestParcel",
  description: "Deliver parcels with HumanForest",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Become a Courier",
      href: "/couriers",
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
