import ShareeCollection from "../assets/images/shopbycategory/sharee-collection-org.jpg";
import ThreePieceCollection from "../assets/images/shopbycategory/three-piece-org.jpg";
import LehengaCollection from "../assets/images/shopbycategory/lehenga-collection-org.jpg";
import WeddingCollection from "../assets/images/shopbycategory/wedding-collection-org.jpg";

export interface Category {
  id: string;
  title: string;
  ctaLabel: string;
  image: string;
  href: string;
}

export const categories: Category[] = [
  {
    id: "sharee",
    title: "Sharee Collections",
    ctaLabel: "Explore All Sharee",
    image: ShareeCollection,
    href: "/category/sharee",
  },
  {
    id: "three-piece",
    title: "Three Piece Collections",
    ctaLabel: "Explore All Three Piece",
    image: ThreePieceCollection,
    href: "/category/three-piece",
  },
  {
    id: "lehenga",
    title: "Lehenga Collections",
    ctaLabel: "Explore All Lehenga",
    image: LehengaCollection,
    href: "/category/lehenga",
  },
  {
    id: "wedding",
    title: "Wedding Collections",
    ctaLabel: "Explore All Wedding Collection",
    image: WeddingCollection,
    href: "/category/wedding",
  },
];
