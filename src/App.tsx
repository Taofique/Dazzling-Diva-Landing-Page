import { useState } from "react";
import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";

function App() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  return (
    <div className="grid grid-rows-[auto_auto]">
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          showAnnouncement ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <AnnouncementBar onClose={() => setShowAnnouncement(false)} />
        </div>
      </div>

      <Navbar />
    </div>
  );
}

export default App;
