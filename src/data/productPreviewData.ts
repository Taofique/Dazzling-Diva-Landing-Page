import MauvePinkImage from "../assets/images/product-preview/mauve-pink-image.png";
import WineMaroonImage from "../assets/images/product-preview/wine-maroon.png";
import BlackSilkImage from "../assets/images/product-preview/black-silk.png";
import WovenDesignImage from "../assets/images/product-preview/woven-design.png";

export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  href: string;
}

export const products: Product[] = [
  {
    id: "mauve-pink-tissue-lehenga",
    title: "Mauve Pink Embroidered Tissue Lehenga",
    image: MauvePinkImage,
    price: 19057.5,
    originalPrice: 27225.0,
    discountPercentage: 30,
    href: "/product/mauve-pink-tissue-lehenga",
  },
  {
    id: "wine-maroon-anarkali-suit",
    title: "Wine Maroon Embroidered Anarkali Suit",
    image: WineMaroonImage,
    price: 15785.0,
    originalPrice: 20500.0,
    discountPercentage: 25,
    href: "/product/wine-maroon-anarkali-suit",
  },
  {
    id: "black-silk-eid-lehenga-choli",
    title: "Black Silk Eid Lehenga & Choli",
    image: BlackSilkImage,
    price: 13635.0,
    originalPrice: 15150.0,
    discountPercentage: 10,
    href: "/product/black-silk-eid-lehenga-choli",
  },
  {
    id: "woven-design-organza-saree",
    title: "Woven Design Organza Saree",
    image: WovenDesignImage,
    price: 26112.5,
    originalPrice: 52225.0,
    discountPercentage: 50,
    href: "/product/woven-design-organza-saree",
  },
  {
    id: "premium-woven-organza-saree",
    title: "Premium Woven Design Organza Saree",
    image: WineMaroonImage,
    price: 22125.0,
    originalPrice: 29500.0,
    discountPercentage: 25,
    href: "/product/premium-woven-organza-saree",
  },
];
