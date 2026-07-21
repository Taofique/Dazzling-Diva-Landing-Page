import BagIcon from "../../assets/images/product-preview/bag-design.svg";
import { featuredProducts } from "../../data/featuredCollection";

const FeaturedCollection = () => {
  return (
    <section className="flex flex-col items-center gap-8 self-stretch overflow-hidden px-6 py-12 sm:px-10 sm:py-16 md:gap-12 md:px-16 md:py-12">
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="font-outfit text-lg font-normal text-black capitalize">
          Most Loved Collection
        </p>
        <h2 className="font-outfit max-w-4xl text-3xl font-normal text-black uppercase sm:text-4xl md:text-5xl">
          Shop the styles our customers can't get enough of.
        </h2>
      </div>

      <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="group relative flex aspect-[4/5] flex-1 items-end justify-center overflow-hidden bg-gray-200 sm:aspect-auto sm:h-[650px]"
          >
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />

            {/* Nested group for the bag button - same pattern as ProductCard */}
            <div className="group/bag relative mb-6">
              <button
                type="button"
                aria-label={`Add ${product.name} to cart`}
                className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-black/20 bg-white transition-all duration-300 hover:scale-110 hover:border-black hover:bg-black hover:shadow-lg sm:h-20 sm:w-20"
              >
                <img
                  src={BagIcon}
                  alt=""
                  className="h-6 w-6 object-contain transition-all duration-300 group-hover/bag:brightness-0 group-hover/bag:invert sm:h-8 sm:w-8"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollection;
