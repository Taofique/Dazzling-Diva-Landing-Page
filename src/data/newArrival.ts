import MauvePinkImage from "../assets/images/new-arrival/mauve-pink-image.png";
import WineMaroonImage from "../assets/images/new-arrival/wine-maroon.png";
import BlackSilkImage from "../assets/images/new-arrival/black-silk.png";
import WovenDesignImage from "../assets/images/new-arrival/woven-design.png";
import WovenDesignImage2 from "../assets/images/new-arrival/woven-design-2.png";
import WovenDesignImage3 from "../assets/images/new-arrival/woven-design-3.png";
import WovenDesignImage4 from "../assets/images/new-arrival/woven-design-4.png";
import WovenDesignImage5 from "../assets/images/new-arrival/woven-design-5.png";

export interface NewArrivalProduct {
  id: string;
  title: string;
  price: number;
  image: string;
  href: string;
}

// All available images for reuse
const images = [
  MauvePinkImage,
  WineMaroonImage,
  BlackSilkImage,
  WovenDesignImage,
  WovenDesignImage2,
  WovenDesignImage3,
  WovenDesignImage4,
  WovenDesignImage5,
];

// Product titles for variety
const productTitles = [
  "Mauve Pink Embroidered Tissue Lehenga",
  "Wine Maroon Embroidered Anarkali Suit",
  "Black Silk Eid Lehenga & Choli",
  "Woven Design Organza Saree",
  "Embroidered Silk Bridal Lehenga",
  "Golden Tissue Sharara Set",
  "Pastel Blue Embroidered Saree",
  "Crimson Red Banarasi Lehenga",
  "Ivory Silk Wedding Saree",
  "Green Embroidered Anarkali Suit",
  "Peach Pink Organza Lehenga",
  "Royal Blue Silk Saree",
  "Maroon Velvet Sharara Set",
  "Champagne Gold Lehenga Choli",
  "Lavender Embroidered Saree",
  "Teal Green Silk Anarkali",
  "Rose Gold Tissue Lehenga",
  "Navy Blue Banarasi Saree",
  "Blush Pink Embroidered Suit",
  "Sage Green Organza Saree",
  "Dusty Rose Sharara Set",
  "Emerald Green Silk Lehenga",
  "Diamond White Embroidered Saree",
  "Sunset Orange Anarkali Suit",
  "Platinum Grey Tissue Saree",
  "Burgundy Velvet Lehenga",
  "Ocean Blue Embroidered Saree",
  "Mulberry Pink Silk Suit",
  "Charcoal Gold Organza Saree",
  "French Rose Embroidered Lehenga",
  "Coral Pink Silk Saree",
  "Gold Embroidered Lehenga Choli",
  "Mint Green Organza Suit",
  "Plum Velvet Sharara Set",
  "Off White Silk Banarasi Saree",
  "Rust Orange Embroidered Lehenga",
  "Baby Pink Net Saree",
  "Peacock Blue Anarkali Suit",
  "Rose Gold Sequined Lehenga",
  "Cream Silk Embroidered Suit",
  "Lilac Purple Organza Saree",
  "Bottle Green Silk Lehenga",
  "Peach Blush Embroidered Saree",
  "Wine Red Velvet Sharara",
  "Sky Blue Embroidered Suit",
  "Golden Yellow Silk Saree",
  "Mauve Pink Sharara Set",
  "Teal Blue Embroidered Lehenga",
  "Ivory Gold Banarasi Saree",
  "Coral Red Embroidered Suit",
];

// Generate 50 products for the landing page
const generateProducts = (): NewArrivalProduct[] => {
  const products: NewArrivalProduct[] = [];

  for (let i = 0; i < 50; i++) {
    const imageIndex = i % images.length;
    const titleIndex = i % productTitles.length;
    // Generate realistic prices between 15,000 and 60,000
    const price = Math.floor(Math.random() * (60000 - 15000 + 1) + 15000);
    const formattedPrice = Math.round(price / 25) * 25; // Round to nearest 25

    products.push({
      id: `product-${String(i + 1).padStart(2, "0")}`,
      title: productTitles[titleIndex],
      price: formattedPrice,
      image: images[imageIndex],
      href: `/product/product-${String(i + 1).padStart(2, "0")}`,
    });
  }

  return products;
};

export const newArrivalProducts: NewArrivalProduct[] = generateProducts();

// Export for use in component
export const INITIAL_DISPLAY_COUNT = 8;
