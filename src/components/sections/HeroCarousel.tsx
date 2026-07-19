import { useEffect, useState } from "react";
import { heroSlides } from "../../data/heroSlides";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === heroSlides.length - 1 ? 0 : prevSlide + 1,
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [currentSlide, isPaused]);

  const goToPrevious = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? heroSlides.length - 1 : prevSlide - 1,
    );
  };

  const goToNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === heroSlides.length - 1 ? 0 : prevSlide + 1,
    );
  };

  return (
    <section className="w-full overflow-hidden">
      {/* Hero Image Container */}
      <div
        className="relative aspect-[96/35] w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {heroSlides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Previous Button */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={goToPrevious}
          className="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-lg text-gray-800 shadow-md transition-all duration-200 hover:scale-105 hover:bg-white sm:left-5 sm:h-10 sm:w-10 md:left-8 md:h-11 md:w-11"
        >
          &#10094;
        </button>

        {/* Next Button */}
        <button
          type="button"
          aria-label="Next slide"
          onClick={goToNext}
          className="absolute top-1/2 right-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-lg text-gray-800 shadow-md transition-all duration-200 hover:scale-105 hover:bg-white sm:right-5 sm:h-10 sm:w-10 md:right-8 md:h-11 md:w-11"
        >
          &#10095;
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 sm:bottom-5">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 sm:h-2 ${
                currentSlide === index
                  ? "w-6 bg-white sm:w-20 md:w-40"
                  : "w-1.5 bg-white/60 hover:bg-white/80 sm:w-5 md:w-10"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
