import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export const images = [
  { src: "https://res.cloudinary.com/dvb386cif/image/upload/v1740178393/converse-1920-x-500_nq88ri.webp", alt: "Imagen 1" },
  { src: "https://res.cloudinary.com/dvb386cif/image/upload/v1740178306/banner-suede-xl-1920-x-500_e6iukn.webp", alt: "Imagen 2" },
  { src: "https://res.cloudinary.com/dvb386cif/image/upload/v1740177730/banner-sl-72-1920-x-500_n9zvvr.webp", alt: "Imagen 3" },
  { src: "https://res.cloudinary.com/dvb386cif/image/upload/v1740177705/banner-gazelle-1920-x-500_hj6dv1.webp", alt: "Imagen 4" },
  { src: "https://res.cloudinary.com/dvb386cif/image/upload/v1740177680/zooko-upland-banner-desktop-1920_tngwsn.webp", alt: "Imagen 5" }
];

export const ImageSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image.src} alt={image.alt} className="w-full h-auto" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};


