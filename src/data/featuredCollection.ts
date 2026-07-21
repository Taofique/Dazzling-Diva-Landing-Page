import WovenDesign4 from "../assets/images/new-arrival/woven-design-4.png";
import WineMaroon from "../assets/images/new-arrival/wine-maroon.png";
import WovenDesign5 from "../assets/images/new-arrival/woven-design-5.png";

export interface FeaturedProduct {
  id: string;
  name: string;
  image: string;
}

export const featuredProducts: FeaturedProduct[] = [
  {
    id: "woven-design-4",
    name: "Woven Design Organza Saree",
    image: WovenDesign4,
  },
  {
    id: "wine-maroon",
    name: "Wine Maroon Embroidered Anarkali Suit",
    image: WineMaroon,
  },
  {
    id: "woven-design-5",
    name: "Woven Design Organza Saree",
    image: WovenDesign5,
  },
];
