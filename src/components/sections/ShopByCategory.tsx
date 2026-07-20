import ArrowSign from "../../assets/images/shopbycategory/arrow-sign.svg";
import { categories } from "../../data/categories";

const ShopByCategory = () => {
  return (
    <section className="flex flex-col items-center gap-8 px-4 py-12 sm:px-8 sm:py-16 lg:px-16">
      {/* Header */}
      <div className="flex w-full max-w-[610px] flex-col items-center gap-2 text-center">
        <p className="font-['Outfit',sans-serif] text-lg text-black capitalize">
          Shop By Category
        </p>
        <h2 className="font-['Outfit',sans-serif] text-3xl font-semibold text-black uppercase sm:text-4xl lg:text-5xl">
          Find Your Perfect Style
        </h2>
      </div>

      {/* Product List */}
      <div className="grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2 lg:h-[447px] lg:grid-cols-4">
        {categories.map((category) => (
          <a
            key={category.id}
            href={category.href}
            className="group relative flex h-[380px] flex-1 flex-col justify-end overflow-hidden rounded-xl p-6 lg:h-full"
          >
            <img
              src={category.image}
              alt={category.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-xl"
              style={{
                backgroundImage:
                  "linear-gradient(179.92deg, rgba(0, 0, 0, 0) 60.057%, rgba(0, 0, 0, 1) 99.95%)",
              }}
            />

            <div className="relative flex flex-col items-start gap-2.5">
              <p className="font-['Outfit',sans-serif] text-2xl font-semibold text-white capitalize">
                {category.title}
              </p>
              <span className="flex items-center gap-2.5 font-['Outfit',sans-serif] text-sm text-white capitalize">
                {category.ctaLabel}
                <img src={ArrowSign} alt="" className="h-3.5 w-3.5" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
