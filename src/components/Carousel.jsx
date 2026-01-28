import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Carousel = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1768849940833-88a1be7a6b44?q=80&w=1166&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1761839258075-585182da7521?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1769084644249-ad3e8b8ba730?q=80&w=1092&auto=format&fit=crop",
  ];

  return (
    <section
      aria-label="Homepage Banner Carousel"
      className="relative w-full bg-(--color-bg-section)"
    >
      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 bg-black/60 flex items-center">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              Unlock global markets with trusted trade solutions
            </h1>

            <p className="text-sm sm:text-base md:text-lg">
              Welcome to Regas Trading FZE, your trusted global trade partner.
            </p>

            <nav
              aria-label="Homepage primary actions"
              className="flex flex-wrap justify-center gap-3 pt-4"
            >
              <a
                href="/about"
                className="uppercase px-6 py-2 text-sm sm:text-base bg-red-500 hover:bg-red-600 transition-colors"
              >
                Discover More
              </a>

              <a
                href="/services"
                className="uppercase px-6 py-2 text-sm sm:text-base bg-transparent border border-white hover:bg-white hover:text-black transition-colors"
              >
                Learn More
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-[45vh] sm:h-[55vh] md:h-[65vh] max-h-[520px]"
      >
        {heroImages.map((src, index) => (
          <SwiperSlide key={index}>
            <figure className="w-full h-full">
              <img
                src={src}
                alt={`Regas Trading global trade banner ${index + 1}`}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
