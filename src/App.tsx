import { useState } from "react";
import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import CategoryBar from "./components/layout/CategoryBar";
import Footer from "./components/layout/Footer";
import TrustBar from "./components/sections/TrustBar";

function App() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  return (
    <div className="w-full min-w-0 overflow-x-hidden">
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

      <TrustBar />
      <Footer />
    </div>
  );
}

export default App;
