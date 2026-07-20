import ColumnImage1 from "../assets/images/two-column/column-image-1.png";
import ColumnImage2 from "../assets/images/two-column/column-image-2.png";

export interface ColumnCallout {
  id: string;
  label: string;
  heading: string;
  image: string;
  href: string;
}

export const columnCallouts: ColumnCallout[] = [
  {
    id: "three-pieces",
    label: "Three Pieces",
    heading: "Timeless Elegance. Modern Comfort.",
    image: ColumnImage1,
    href: "/category/three-piece",
  },
  {
    id: "wedding-sets",
    label: "Wedding Sets",
    heading: "Timeless Wedding Fashion for Every Woman.",
    image: ColumnImage2,
    href: "/category/wedding",
  },
];
