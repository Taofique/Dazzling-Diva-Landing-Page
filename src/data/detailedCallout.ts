import LeftColumnImage from "../assets/images/detailed-callout/left-column-big-image.png";
import TopLeftImage from "../assets/images/detailed-callout/right-col-top-left.png";
import TopRightImage from "../assets/images/detailed-callout/right-col-top-right.png";
import BottomLeftImage from "../assets/images/detailed-callout/right-col-bottom-left.png";
import BottomRightImage from "../assets/images/detailed-callout/right-col-bottom-right.png";
import type { ColumnCallout } from "./twoColumn";

export const mainCallout: ColumnCallout = {
  id: "three-pieces-detailed",
  label: "Three Pieces",
  heading: "Timeless Elegance. Modern Comfort.",
  image: LeftColumnImage,
  href: "/category/three-piece",
  imagePositionY: 25, // Show more body
  imagePositionX: 50, // Center
};

// NOTE: Figma repeats "Wedding Sets" / "Timeless Wedding Fashion for Every
// Woman." for all 4 grid callouts, even though each has a distinct image —
// same placeholder-duplication pattern seen in New Arrivals. Swap in real
// copy per callout once available.
export const smallCallouts: ColumnCallout[] = [
  {
    id: "wedding-sets-top-left",
    label: "Wedding Sets",
    heading: "Timeless Wedding Fashion for Every Woman.",
    image: TopLeftImage,
    href: "/category/wedding",
    imagePositionY: 10,
    imagePositionX: 50, // Move left slightly to show the subject
  },
  {
    id: "wedding-sets-top-right",
    label: "Wedding Sets",
    heading: "Timeless Wedding Fashion for Every Woman.",
    image: TopRightImage,
    href: "/category/wedding",
    imagePositionY: 8,
    imagePositionX: 40, // Move right slightly
  },
  {
    id: "wedding-sets-bottom-left",
    label: "Wedding Sets",
    heading: "Timeless Wedding Fashion for Every Woman.",
    image: BottomLeftImage,
    href: "/category/wedding",
    imagePositionY: 15,
    imagePositionX: 50, // Center
  },
  {
    id: "wedding-sets-bottom-right",
    label: "Wedding Sets",
    heading: "Timeless Wedding Fashion for Every Woman.",
    image: BottomRightImage,
    href: "/category/wedding",
    imagePositionY: 12,
    imagePositionX: 50, // Center
  },
];
