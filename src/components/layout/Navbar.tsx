import { useState } from "react";
import dazzlingDivaLogo from "../../assets/icons/navbar/dazzling-diva-logo.png";
import storeIcon from "../../assets/icons/navbar/store-icon.svg";
import trackIcon from "../../assets/icons/navbar/track-icon.svg";
import bagIcon from "../../assets/icons/navbar/bag-icon.svg";
import accountIcon from "../../assets/icons/navbar/account-icon.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-navbar relative flex items-center justify-between px-4 py-4 sm:px-8 sm:py-5 md:px-16 lg:px-32 lg:py-6">
      {/* Left: hamburger menu */}
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
        className="flex flex-col items-start justify-center gap-1.5 sm:gap-2.5"
      >
        <span className="h-0.5 w-6 bg-gray-800 sm:w-7" />
        <span className="h-0.5 w-6 bg-gray-800 sm:w-7" />
        <span className="h-0.5 w-4 bg-gray-800 sm:w-5" />
      </button>

      {/* Center: logo — absolutely centered, independent of left/right widths */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <img
          src={dazzlingDivaLogo}
          alt="Dazzling Diva"
          className="h-6 w-auto sm:h-7 md:h-8 lg:h-[32.727px] lg:w-[231.429px]"
        />
      </div>

      {/* Right: store / track order / wishlist / account */}
      <div className="flex items-center gap-3 sm:gap-4">
        <a
          href="/store"
          className="font-outfit hidden items-center gap-1.5 text-sm whitespace-nowrap text-gray-800 transition-opacity hover:opacity-70 lg:flex"
        >
          <img src={storeIcon} alt="" className="h-4 w-4" />
          Store
        </a>
        <a
          href="/track-order"
          className="font-outfit hidden items-center gap-1.5 text-sm whitespace-nowrap text-gray-800 transition-opacity hover:opacity-70 lg:flex"
        >
          <img src={trackIcon} alt="" className="h-4 w-4" />
          Track Order
        </a>
        <button
          type="button"
          aria-label="Wishlist"
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 transition-opacity hover:opacity-70 sm:h-9 sm:w-9"
        >
          <img src={bagIcon} alt="" className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Account"
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 transition-opacity hover:opacity-70 sm:h-9 sm:w-9"
        >
          <img src={accountIcon} alt="" className="h-4 w-4" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
