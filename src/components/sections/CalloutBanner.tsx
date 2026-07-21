import { Link } from "react-router-dom";
import finalCalloutBg from "../../assets/images/detailed-callout/final-callout-bg.png";

const CalloutBanner = () => {
  return (
    <section className="flex items-end justify-center self-stretch overflow-hidden bg-white">
      <div
        className="relative flex w-full flex-1 items-end justify-center gap-2.5 bg-cover bg-center px-6 py-10 sm:px-12 sm:py-16 md:h-[521px] md:p-12"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(90, 12, 61, 0.00) 50.1%, #5A0C3D 100%), url(${finalCalloutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 from-50% to-black/60" />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-3">
            <p className="font-outfit text-center text-sm font-medium tracking-wider text-white uppercase">
              Three Pieces
            </p>
            <h2 className="font-outfit max-w-3xl text-center text-3xl leading-[1.2] font-semibold tracking-[-0.03em] text-white capitalize sm:text-4xl md:text-[44px]">
              Discover Festive Wardrobe Now on Sale Don't Miss Out
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-outfit flex items-center gap-2.5 rounded-full bg-white px-[18px] py-3 text-lg font-semibold text-[#5a0c3d] capitalize transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CalloutBanner;
