import { useState } from "react";
import NewArrivalCard from "../ui/NewArrivalCard";
import {
  newArrivalProducts,
  INITIAL_DISPLAY_COUNT,
} from "../../data/newArrival";
import type { NewArrivalProduct } from "../../data/newArrival";

const NewArrival = () => {
  const [showAll, setShowAll] = useState(false);

  const handleAddToCart = (product: NewArrivalProduct) => {
    // Wire up to your cart context / API call here
    console.log("Add to cart:", product.id);
  };

  // Determine which products to display
  const displayedProducts = showAll
    ? newArrivalProducts
    : newArrivalProducts.slice(0, INITIAL_DISPLAY_COUNT);

  const totalProducts = newArrivalProducts.length;

  const handleViewAll = () => {
    setShowAll(!showAll);
    // Scroll back to the section on either transition — otherwise collapsing
    // the grid shrinks the page height under a fixed scroll position, leaving
    // the viewport stranded over whatever section comes next.
    setTimeout(() => {
      document.getElementById("new-arrivals")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <section
      id="new-arrivals"
      className="flex scroll-mt-20 flex-col items-center gap-6 px-4 py-8 sm:gap-8 sm:px-8 sm:py-12 lg:gap-10 lg:px-16 lg:py-12"
    >
      {/* Header */}
      <div className="flex w-full max-w-[610px] flex-col items-center gap-2 text-center">
        <p className="font-['Outfit',sans-serif] text-base text-black capitalize sm:text-lg">
          New Arrivals
        </p>
        <h2 className="font-['Outfit',sans-serif] text-2xl text-black uppercase sm:text-3xl md:text-4xl lg:text-5xl">
          The latest styles you&apos;ll love.
        </h2>
      </div>

      {/* Product List */}
      <div className="grid w-full max-w-7xl grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:gap-5">
        {displayedProducts.map((product) => (
          <NewArrivalCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {/* View All / Show Less Button */}
      {totalProducts > INITIAL_DISPLAY_COUNT && (
        <button
          onClick={handleViewAll}
          className="flex shrink-0 items-center justify-center rounded-lg bg-[#5a0c3d] px-5 py-2.5 transition-all duration-300 hover:scale-105 hover:bg-[#4a0a32] hover:shadow-lg sm:px-6 sm:py-3"
        >
          <span className="font-['Outfit',sans-serif] text-sm font-semibold text-white capitalize sm:text-base lg:text-lg">
            {showAll ? "Show Less" : `View All New Products`}
          </span>
        </button>
      )}

      {/* Product Counter (Optional) */}
      <p className="font-['Outfit',sans-serif] text-sm text-gray-500">
        Showing {showAll ? totalProducts : INITIAL_DISPLAY_COUNT} of{" "}
        {totalProducts} products
      </p>
    </section>
  );
};

export default NewArrival;
