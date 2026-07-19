import downArrowIcon from "../../assets/icons/category/down-arrow-icon.svg";
import newStarIcon from "../../assets/icons/category/new-star-icon.svg";
import percentageOfferIcon from "../../assets/icons/category/percentage-offer-icon.svg";
import searchIcon from "../../assets/icons/category/search-icon.svg";
import { categoryLinks } from "../../data/categoryLinks";
import { useDragScroll } from "../../hooks/useDragScroll";

const CategoryBar = () => {
  const { ref: scrollRef, handlers } = useDragScroll<HTMLDivElement>();

  return (
    <div className="w-full min-w-0 border-b border-gray-100 bg-white py-3 sm:py-4">
      <div className="font-outfit flex flex-col gap-3 px-4 sm:gap-4 sm:px-8 md:px-16 lg:h-13 lg:flex-row lg:items-center lg:gap-6 lg:px-32">
        {/* ROW 1 (mobile/tablet), LEFT group (desktop): Select Category / New In / Offers */}
        <div className="scrollbar-hide flex h-11 shrink-0 items-center gap-2 overflow-x-auto sm:h-12 lg:h-13 lg:gap-3 lg:overflow-visible">
          <button
            type="button"
            className="flex h-11 w-[150px] shrink-0 items-center justify-between rounded-full border-[0.5px] border-[#444444]/20 bg-[#F8F8F8] py-1.5 pr-1.5 pl-3 text-xs text-black sm:h-12 sm:w-[180px] sm:py-2 sm:pr-2 sm:text-sm lg:h-13 lg:w-[226px] lg:text-base"
          >
            <span className="whitespace-nowrap">Select Category</span>

            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white transition-all duration-200 hover:scale-105 hover:bg-gray-100 sm:h-9 sm:w-9">
              <img
                src={downArrowIcon}
                alt=""
                className="h-5 w-5 sm:h-8 sm:w-8"
              />
            </span>
          </button>

          <a
            href="/new-in"
            className="flex h-11 shrink-0 items-center gap-1.5 rounded-full border-[0.5px] border-[#444444]/20 bg-white px-2.5 py-1.5 text-xs text-black transition-opacity hover:opacity-70 sm:h-12 sm:gap-2.5 sm:px-3 sm:py-2 sm:text-sm lg:h-13 lg:text-base"
          >
            <img
              src={newStarIcon}
              alt=""
              className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
            />

            <span className="whitespace-nowrap">New In</span>
          </a>

          <a
            href="/offers"
            className="flex h-11 shrink-0 items-center gap-1.5 rounded-full border-[0.5px] border-[#444444]/20 bg-white px-2.5 py-1.5 text-xs text-black transition-opacity hover:opacity-70 sm:h-12 sm:gap-2.5 sm:px-3 sm:py-2 sm:text-sm lg:h-13 lg:text-base"
          >
            <img
              src={percentageOfferIcon}
              alt=""
              className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
            />

            <span className="whitespace-nowrap">Offers</span>
          </a>
        </div>

        {/* ROW 2 (mobile/tablet), CENTER (desktop): search — full width below lg, flex-1 at lg+ */}
        <div className="flex h-11 w-full min-w-0 items-center justify-between gap-2 rounded-full border-[0.5px] border-[#444444]/20 bg-[#F8F8F8] px-3 py-1.5 sm:h-12 sm:px-3 sm:py-2 lg:h-13 lg:min-w-[180px] lg:flex-1 lg:shrink">
          <input
            type="text"
            placeholder="search..."
            className="min-w-0 flex-1 border-none bg-transparent text-sm text-black outline-none placeholder:text-gray-400 lg:text-base"
          />

          <button
            type="button"
            aria-label="Search"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5A0C3D] transition-all duration-200 hover:scale-105 hover:opacity-90"
          >
            <img src={searchIcon} alt="" className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

        {/* ROW 3 (mobile/tablet), RIGHT (desktop): draggable category carousel */}
        <div className="min-w-0 shrink-0 lg:max-w-[38%]">
          <div
            ref={scrollRef}
            {...handlers}
            className="scrollbar-hide flex h-11 items-center gap-2 overflow-x-auto overflow-y-hidden scroll-smooth py-0.5 select-none sm:h-12 sm:gap-2.5 lg:h-13"
          >
            {categoryLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                draggable={false}
                className="flex h-11 shrink-0 items-center gap-2 rounded-full border-[0.5px] border-[#444444]/20 bg-white px-2.5 py-1.5 text-xs text-black transition-all hover:border-[#5A0C3D] hover:text-[#5A0C3D] sm:h-12 sm:gap-2.5 sm:px-3 sm:py-2 sm:text-sm lg:h-13 lg:text-base"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
