import { useState } from "react";
import { BrowserRouter } from "react-router-dom"; // ← Add this import
import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import CategoryBar from "./components/layout/CategoryBar";
import Footer from "./components/layout/Footer";
import TrustBar from "./components/sections/TrustBar";
import HeroCarousel from "./components/sections/HeroCarousel";
import { Toaster } from "react-hot-toast";
import ShopByCategory from "./components/sections/ShopByCategory";
import FlashDeals from "./components/sections/FlashDeals";
import ProductPreview from "./components/sections/ProductPreview";
import TwoColumn from "./components/sections/TwoColumn";

function App() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  return (
    <BrowserRouter>
      {" "}
      {/* ← Wrap everything with BrowserRouter */}
      <Toaster position="top-center" />
      <div className="w-full min-w-0">
        {/* Announcement Bar */}
        <div
          className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
            showAnnouncement ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <AnnouncementBar onClose={() => setShowAnnouncement(false)} />
          </div>
        </div>

        <Navbar />
        <CategoryBar />
        <HeroCarousel />
        <ShopByCategory />
        <FlashDeals />
        <ProductPreview />
        <TwoColumn />
        <TrustBar />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
