import { formatNumber } from "../../hooks/useTimer";

interface CountdownTimerProps {
  value: number;
  label: string;
}

const CountdownTimer = ({ value, label }: CountdownTimerProps) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-center justify-center bg-white px-3 py-2 transition-transform duration-300 hover:scale-105 sm:px-4 sm:py-2.5 md:px-[18px] md:py-3">
        <span className="font-outfit text-brand-maroon text-center text-lg font-bold uppercase sm:text-xl md:text-2xl">
          {formatNumber(value)}
        </span>
      </div>
      <span className="font-outfit text-center text-xs text-white capitalize sm:text-sm md:text-base">
        {label}
      </span>
    </div>
  );
};

// Simple text-based colon - perfectly centered
const TimerColon = () => (
  <span className="relative top-[-15px] self-center text-xl font-bold text-white sm:text-2xl md:text-3xl">
    :
  </span>
);

export { TimerColon };
export default CountdownTimer;
