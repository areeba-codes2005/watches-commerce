import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "./Carousel.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { BsDashLg } from "react-icons/bs";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.webp";
import slide3 from "../../assets/slide3.png";
import MiniBanner from "../MiniBanner/MiniBanner";

const slides = [
  {
    img: slide1,
    alt: "Rolex luxury watch",
    title: (
      <>
        THE ICON
        <br />
        ROLEX
      </>
    ),
    description: (
      <>
        <BsDashLg className="mt-5" fontSize={60} /> UP TO 40% OFF{" "}
        <BsDashLg className="mt-5" fontSize={60} />
      </>
    ),
    button: "Shop now",
  },
  {
    img: slide2,
    alt: "Heuer Camaro vintage watch",
    title: (
      <>
        HEUER
        <br />
        CAMARO
      </>
    ),
    description: (
      <>
        <BsDashLg className="mt-5" fontSize={60} /> UP TO 40% OFF{" "}
        <BsDashLg className="mt-5" fontSize={60} />
      </>
    ),
    button: "Shop now",
  },
  {
    img: slide3,
    alt: "Grand sale premium watch",
    title: (
      <>
        GRAND
        <br />
        SALE
      </>
    ),
    description: (
      <>
        <BsDashLg className="mt-5" fontSize={60} /> UP TO 40% OFF{" "}
        <BsDashLg className="mt-5" fontSize={60} />
      </>
    ),
    button: "Shop now",
  },
];

const Carousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        effect="fade"
        modules={[EffectFade, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={2000}
        loop={true}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={slide.img} alt={slide.alt} />
              <div className="text-overlay">
                <h2 className="slide-title">{slide.title}</h2>

                <p className="slide-description">{slide.description}</p>
                <div className="d-flex justify-content-center">
                  <button>{slide.button}</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <MiniBanner />
    </div>
  );
};

export default Carousel;
