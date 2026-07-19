type AnnouncementBarProps = {
  onClose: () => void;
};

const AnnouncementBar = ({ onClose }: AnnouncementBarProps) => {
  return (
    <div className="bg-promo-bar flex items-center justify-center gap-2.5 px-4 py-2.5 sm:px-8 md:px-16 lg:px-32">
      <p className="font-outfit text-center text-sm font-normal text-white">
        ⏳ Limited Time! Enjoy 15% OFF on Regular Items — Online Only. Shop
        Before It Ends!
      </p>

      <button
        type="button"
        aria-label="Dismiss promo banner"
        onClick={onClose}
        className="shrink-0 text-white transition-opacity duration-200 hover:opacity-70"
      >
        ✕
      </button>
    </div>
  );
};

export default AnnouncementBar;
