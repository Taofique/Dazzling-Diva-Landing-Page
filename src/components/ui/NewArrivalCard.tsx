import { Link } from "react-router-dom";
import BagIcon from "../../assets/images/product-preview/bag-design.svg";
import type { NewArrivalProduct } from "../../data/newArrival";

interface NewArrivalCardProps {
  product: NewArrivalProduct;
  onAddToCart?: (product: NewArrivalProduct) => void;
}

const formatPrice = (value: number) =>
  `BDT ${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const NewArrivalCard = ({ product, onAddToCart }: NewArrivalCardProps) => {
  return (
    <div className="group flex w-full flex-col items-start">
      {/* Product Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100 sm:aspect-[3/4]">
        <Link to={product.href} className="absolute inset-0">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </Link>

        {/* Bottom info bar — overlaid on the image */}
        <div className="absolute bottom-[13px] left-1/2 flex w-[calc(100%-26px)] max-w-[293px] -translate-x-1/2 items-start gap-2 bg-white px-3 py-2.5">
          <div className="flex min-w-0 flex-1 flex-col items-start gap-1">
            <Link
              to={product.href}
              className="w-full overflow-hidden font-['Outfit',sans-serif] text-xs font-medium text-ellipsis whitespace-nowrap text-black capitalize sm:text-sm"
            >
              {product.title}
            </Link>
            <p className="w-full font-['Outfit',sans-serif] text-xs font-semibold whitespace-nowrap text-black/50 capitalize sm:text-sm">
              {formatPrice(product.price)}
            </p>
          </div>

          <div className="group/bag shrink-0">
            <button
              type="button"
              onClick={() => onAddToCart?.(product)}
              aria-label={`Add ${product.title} to cart`}
              className="flex size-8 items-center justify-center rounded-full border border-black/20 bg-white transition-all duration-300 hover:scale-110 hover:border-black hover:bg-black hover:shadow-lg sm:size-10"
            >
              <img
                src={BagIcon}
                alt=""
                className="size-4 object-contain transition-all duration-300 group-hover/bag:brightness-0 group-hover/bag:invert sm:size-[18px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalCard;
