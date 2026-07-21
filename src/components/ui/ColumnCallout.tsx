import { Link } from "react-router-dom";
import type { ColumnCallout as ColumnCalloutType } from "../../data/twoColumn";

interface ColumnCalloutProps {
  column: ColumnCalloutType;
  size?: "large" | "small";
  heightClassName?: string;
  imagePositionY?: number;
  imagePositionX?: number;
}

const ColumnCallout = ({
  column,
  size = "large",
  heightClassName,
  imagePositionY,
  imagePositionX,
}: ColumnCalloutProps) => {
  const isSmall = size === "small";
  const defaultHeightClassName = isSmall
    ? "h-full"
    : "h-[400px] sm:h-[500px] md:h-[560px] lg:h-[620px] xl:h-[780px]";

  const positionY =
    imagePositionY !== undefined
      ? imagePositionY
      : column.imagePositionY !== undefined
        ? column.imagePositionY
        : 15;

  const positionX =
    imagePositionX !== undefined
      ? imagePositionX
      : column.imagePositionX !== undefined
        ? column.imagePositionX
        : 50;

  return (
    <div
      className={`relative flex w-full flex-1 items-end overflow-hidden ${
        heightClassName ?? defaultHeightClassName
      } ${isSmall ? "p-3 sm:p-4 md:p-6" : "p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12"}`}
      style={{
        backgroundImage: `url(${column.image})`,
        backgroundSize: "cover",
        backgroundPosition: `${positionX}% ${positionY}%`,
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 from-40% to-black sm:from-50%" />

      {/* Content */}
      <div
        className={
          isSmall
            ? "relative flex w-full flex-1 flex-col items-start gap-2 sm:gap-3"
            : "relative flex w-full flex-1 flex-col items-start gap-3 sm:gap-4 md:gap-5 lg:gap-6"
        }
      >
        <div
          className={
            isSmall
              ? "flex w-full flex-col items-start gap-1 text-white sm:gap-1.5"
              : "flex w-full flex-col items-start gap-1.5 text-white sm:gap-2 md:gap-2.5 lg:gap-3"
          }
        >
          <p
            className={
              isSmall
                ? "font-['Outfit',sans-serif] text-[10px] leading-normal font-normal uppercase sm:text-xs"
                : "font-['Outfit',sans-serif] text-xs leading-normal font-normal uppercase sm:text-sm"
            }
          >
            {column.label}
          </p>
          <p
            className={
              isSmall
                ? "w-full font-['Outfit',sans-serif] text-base leading-[1.2] font-semibold tracking-[-0.02em] capitalize sm:text-lg md:text-xl lg:text-[28px] lg:tracking-[-0.03em]"
                : "w-full font-['Outfit',sans-serif] text-xl leading-[1.2] font-semibold tracking-[-0.02em] capitalize sm:text-2xl md:text-3xl lg:text-4xl xl:text-[44px]"
            }
          >
            {column.heading}
          </p>
        </div>

        <Link
          to={column.href}
          className={
            isSmall
              ? "flex shrink-0 items-center rounded-full bg-white px-3 py-1.5 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg sm:px-3.5 sm:py-2"
              : "flex shrink-0 items-center rounded-full bg-white px-4 py-2 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg sm:px-[18px] sm:py-2.5 md:py-3"
          }
        >
          <span
            className={
              isSmall
                ? "font-['Outfit',sans-serif] text-xs font-semibold text-[#5a0c3d] capitalize sm:text-sm"
                : "font-['Outfit',sans-serif] text-sm font-semibold text-[#5a0c3d] capitalize sm:text-base lg:text-lg"
            }
          >
            Discover More
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ColumnCallout;
