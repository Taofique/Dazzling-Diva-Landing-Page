import { Link } from "react-router-dom";
import BagIcon from "../../assets/images/product-preview/bag-design.svg";
import DiscountBadge from "./DiscountBadge";
import type { Product } from "../../data/productPreviewData";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onSelectOptions?: (product: Product) => void;
}

const formatPrice = (value: number) =>
  `BDT ${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const ProductCard = ({
  product,
  onAddToCart,
  onSelectOptions,
}: ProductCardProps) => {
  return (
    <div className="group flex w-full flex-col items-start gap-3 transition-transform duration-300 hover:-translate-y-1">
      {/* Product Image - 3:4 aspect ratio */}
      <div
        className="relative w-full overflow-hidden rounded-xl bg-gray-100 shadow-sm transition-shadow duration-300 group-hover:shadow-xl"
        style={{ aspectRatio: "3/4" }}
      >
        <Link to={product.href} className="absolute inset-0">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </Link>

        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

        <DiscountBadge percentage={product.discountPercentage} />

        {/* Nested group for the bag button */}
        <div className="group/bag absolute top-[13px] right-[13px]">
          <button
            type="button"
            onClick={() => onAddToCart?.(product)}
            aria-label={`Add ${product.title} to cart`}
            className="flex size-10 items-center justify-center rounded-full border border-black/20 bg-white transition-all duration-300 hover:scale-110 hover:border-black hover:bg-black hover:shadow-lg"
          >
            <img
              src={BagIcon}
              alt=""
              className="size-[18px] transition-all duration-300 group-hover/bag:brightness-0 group-hover/bag:invert"
            />
          </button>
        </div>

        <button
          type="button"
          onClick={() => onSelectOptions?.(product)}
          className="absolute bottom-[13px] left-1/2 w-[calc(100%-26px)] max-w-[294px] -translate-x-1/2 rounded-md bg-white p-2.5 font-['Outfit',sans-serif] text-sm font-normal text-black capitalize transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white hover:shadow-lg"
        >
          Select Options
        </button>
      </div>

      {/* Product Title */}
      <Link
        to={product.href}
        className="w-full overflow-hidden font-['Outfit',sans-serif] text-base text-ellipsis whitespace-nowrap text-black capitalize transition-colors duration-300 group-hover:text-gray-700 sm:text-lg"
      >
        {product.title}
      </Link>

      {/* Product Pricing */}
      <div className="flex w-full items-center gap-3 whitespace-nowrap capitalize">
        <p className="font-['Outfit',sans-serif] text-base font-semibold text-black transition-colors duration-300 group-hover:text-gray-800 sm:text-lg">
          {formatPrice(product.price)}
        </p>
        <p className="font-['Outfit',sans-serif] text-xs text-black/50 line-through decoration-solid sm:text-sm">
          {formatPrice(product.originalPrice)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
