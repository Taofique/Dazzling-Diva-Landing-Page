interface DiscountBadgeProps {
  /** Discount percentage as a plain number, e.g. 30 renders as "-30%" */
  percentage: number;
  className?: string;
}

const DiscountBadge = ({ percentage, className = "" }: DiscountBadgeProps) => {
  return (
    <div
      className={`absolute top-0 left-0 flex items-center justify-center rounded-[4px] bg-red-600 px-3 py-1 ${className}`}
    >
      <p className="font-['Outfit',sans-serif] text-sm leading-normal font-bold whitespace-nowrap text-white capitalize">
        -{percentage}%
      </p>
    </div>
  );
};

export default DiscountBadge;
