import facebookIcon from "../assets/icons/footer/facebook-icon.svg";
import twitterIcon from "../assets/icons/footer/twitter-icon.svg";
import instagramIcon from "../assets/icons/footer/instagram-icon.svg";

export type FooterLinkColumn = {
  title: string;
  links: string[];
};

export type FooterSocialLink = {
  name: string;
  href: string;
  icon: string;
};

export const linkColumns: FooterLinkColumn[] = [
  {
    title: "Pages",
    links: ["About Us", "Gift Cards", "Bundle Products", "Blogs"],
  },
  {
    title: "Shopping",
    links: ["Wishlist", "Cart", "Shop by Category"],
  },
  {
    title: "Information",
    links: ["Track My Order", "Corporate Enquires", "FAQs"],
  },
  {
    title: "Account",
    links: ["My Account", "My Orders"],
  },
];

export const socialLinks: FooterSocialLink[] = [
  { name: "Facebook", href: "#", icon: facebookIcon },
  { name: "Twitter", href: "#", icon: twitterIcon },
  { name: "Instagram", href: "#", icon: instagramIcon },
];

export const legalLinks: string[] = [
  "Teams & Condition",
  "Privacy & Policy",
  "Refund Policy",
];
