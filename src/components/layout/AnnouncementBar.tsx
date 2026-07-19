import { useState } from "react";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      setVisible(false);
    }, 500);
  };

  return (
    <>
      {visible && (
        <div
          className={`bg-promo-bar flex items-center justify-center gap-2.5 px-4 py-2.5 transition-all duration-500 sm:px-8 md:px-16 lg:px-32 ${closing ? "-translate-y-full opacity-0" : "-translate-y-0 opacity-100"}`}
        >
          <p className="font-outfit text-center text-sm font-normal text-white">
            ⏳ Limited Time! Enjoy 15% OFF on Regular Items — Online Only. Shop
            Before It Ends!
          </p>
          <button
            type="button"
            aria-label="Dismiss promo banner"
            onClick={handleClose}
            className="shrink-0 text-white transition-opacity duration-200 hover:opacity-70"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default AnnouncementBar;
