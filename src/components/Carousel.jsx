import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";

const Carousel = ({ hero }) => {
  return (
    <section
      aria-label="Homepage banner"
      className="relative w-full bg-(--color-bg-section)"
    >
      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 bg-black/60 flex items-center">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              {hero.heading}
            </h1>

            <p className="text-sm sm:text-base md:text-lg">
              {hero.description}
            </p>

            <nav
              aria-label="Homepage primary actions"
              className="flex flex-wrap justify-center gap-3 pt-4"
            >
              <Link
                to="/about"
                className="uppercase px-6 py-2 text-sm sm:text-base bg-red-500 hover:bg-red-600 transition-colors"
              >
                Discover More
              </Link>

              <Link
                to="/services"
                className="uppercase px-6 py-2 text-sm sm:text-base bg-transparent border border-white hover:bg-white hover:text-black transition-colors"
              >
                Learn More
              </Link>
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
        {hero.slides.map((src, index) => (
          <SwiperSlide key={src}>
            <figure className="w-full h-full">
              <img
                src={src}
                alt={`PETROFLEX FZE global petrochemical trading banner ${index + 1}`}
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
