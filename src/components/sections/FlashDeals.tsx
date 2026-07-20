import CountdownTimer, { TimerColon } from "../ui/CountdownTimer";
import { useTimer } from "../../hooks/useTimer";
import bgHeroImage from "../../assets/images/flash-deals/bg-flash-deals.png";
import dealsTextBg from "../../assets/images/flash-deals/deals-text-bg-design.svg";

const FlashDeals = () => {
  const timeLeft = useTimer({
    days: 10,
    hours: 3,
    minutes: 9,
    seconds: 50,
  });

  return (
    <section className="bg-brand-maroon relative flex w-full items-center justify-center overflow-hidden">
      {/* Background Image - Shows left side on mobile, full image on larger screens */}
      <img
        src={bgHeroImage}
        className="absolute inset-0 h-full w-full object-cover object-left sm:object-fill"
        alt="Flash Deals Background"
      />

      {/* Gradient Overlay */}
      <div className="from-brand-maroon/90 via-brand-maroon/60 absolute inset-0 bg-gradient-to-r to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] justify-center px-4 py-10 sm:px-6 sm:py-14 md:justify-start md:px-16 lg:py-20">
        <div className="flex w-full max-w-[90%] flex-col items-center gap-4 sm:max-w-[560px] sm:gap-6">
          {/* FLASH DEALS LIVE NOW */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
            <span className="font-outfit text-2xl font-bold text-white uppercase sm:text-3xl md:text-4xl lg:text-5xl">
              Flash
            </span>

            {/* DEALS with SVG background and text on top */}
            <span className="relative inline-flex h-[38px] w-[80px] items-center justify-center sm:h-[46px] sm:w-[97px] md:h-[52px] md:w-[110px] lg:h-[59px] lg:w-[125px]">
              {/* SVG Background */}
              <img
                src={dealsTextBg}
                alt=""
                className="absolute inset-0 h-full w-full object-contain"
              />

              {/* DEALS Text on top of SVG */}
              <span
                className="relative z-10 text-center font-['Instrument_Serif'] font-normal uppercase italic"
                style={{
                  color: "#5A0C3D",
                  lineHeight: "100%",
                  fontSize: "clamp(14px, 2.5vw, 35px)",
                }}
              >
                DEALS
              </span>
            </span>

            <span className="font-outfit text-2xl font-bold text-white uppercase sm:text-3xl md:text-4xl lg:text-5xl">
              Live Now
            </span>
          </div>

          {/* Timer with Colons */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-3">
            <CountdownTimer value={timeLeft.days} label="Days" />
            <TimerColon />
            <CountdownTimer value={timeLeft.hours} label="Hours" />
            <TimerColon />
            <CountdownTimer value={timeLeft.minutes} label="Minutes" />
            <TimerColon />
            <CountdownTimer value={timeLeft.seconds} label="Sec" />
          </div>

          {/* UP TO 50% OFF - 50% in yellow (#EEFF00) */}
          <p className="font-outfit text-base font-bold text-white uppercase sm:text-lg md:text-xl lg:text-2xl">
            Up to <span style={{ color: "#EEFF00" }}>50%</span> off
          </p>

          {/* Description */}
          <p className="font-outfit text-center text-xs text-white capitalize sm:text-sm md:text-base">
            Because Every Woman Deserves to Shine.
            <br />
            Grab It Before It's Gone!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;
