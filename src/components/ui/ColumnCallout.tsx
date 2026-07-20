import { Link } from "react-router-dom";
import type { ColumnCallout as ColumnCalloutType } from "../../data/twoColumn";

interface ColumnCalloutProps {
  column: ColumnCalloutType;
}

const ColumnCallout = ({ column }: ColumnCalloutProps) => {
  return (
    <div className="relative flex h-[420px] flex-1 items-end overflow-hidden p-6 sm:h-[520px] sm:p-10 lg:h-[640px] lg:p-12">
      {/* Background image + gradient overlay */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <img
          src={column.image}
          alt=""
          className="absolute size-full max-w-none object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 from-50% to-black" />
      </div>

      {/* Content */}
      <div className="relative flex w-full flex-1 flex-col items-start gap-4 sm:gap-6">
        <div className="flex w-full flex-col items-start gap-2 text-white sm:gap-3">
          <p className="font-['Outfit',sans-serif] text-sm leading-normal font-normal uppercase">
            {column.label}
          </p>
          <p className="w-full font-['Outfit',sans-serif] text-2xl leading-[1.2] font-semibold tracking-[-0.02em] capitalize sm:text-4xl sm:tracking-[-0.03em] lg:text-[44px]">
            {column.heading}
          </p>
        </div>

        <Link
          to={column.href}
          className="flex shrink-0 items-center rounded-full bg-white px-4 py-2.5 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg sm:px-[18px] sm:py-3"
        >
          <span className="font-['Outfit',sans-serif] text-base font-semibold text-[#5a0c3d] capitalize sm:text-lg">
            Discover More
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ColumnCallout;
