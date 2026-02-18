"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Button from "./Button";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper"; // Импортируем тип

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  {
    path: "/images/gallery/barber-shop-gallery-image-1.jpg",
    alt: "Фото интерьера 1",
  },
  {
    path: "/images/gallery/barber-shop-gallery-image-2.jpg",
    alt: "Фото интерьера 2",
  },
  {
    path: "/images/gallery/barber-shop-gallery-image-3.jpg",
    alt: "Фото интерьера 3",
  },
  {
    path: "/images/gallery/barber-shop-gallery-image-4.jpg",
    alt: "Фото интерьера 4",
  },
  {
    path: "/images/gallery/barber-shop-gallery-image-5.jpg",
    alt: "Фото интерьера 5",
  },
];

export default function MainSwiper() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      <div className="main-swiper-wrapper">
        <h2 className="paper-block__title">Фотогалерея</h2>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          className="mySwiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image.path}>
              <Image
                style={{
                  width: "100%",
                  display: "flex",
                  height: "auto",
                  border: "10px solid #fff",
                  boxSizing: "border-box",
                }}
                width={288}
                height={164}
                src={image.path}
                alt={image.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="photo-preview__buttons">
          <Button
            onClick={() => swiperRef.current?.slidePrev()}
            modifications={["width-auto", "swiper-previous"]}
          >
            Назад
          </Button>
          <Button
            onClick={() => swiperRef.current?.slideNext()}
            modifications={["width-auto", "swiper-next"]}
          >
            Вперед
          </Button>
        </div>
      </div>
    </>
  );
}
