"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ButtonOutline } from "@/components/common/ButtonmdRounded";
import Image from "next/image";
import RightArrow from "@/assets/images/thin_long_right.png";
import { sliderData } from "@/app/constant";

const PetSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 5,
    speed: 500,
    focusOnSelect: true,
    arrows: true,
    beforeChange: (_current: any, next: React.SetStateAction<number>) =>
      setActiveSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
        },
      },
    ],
  };

  return (
    <div>
      <div className="flex justify-between items-center px-10 lg:px-64 text-[#112025] mt-10 mb-6">
        <div>
          <p className="text-2xl font-semibold">Everything Your</p>
          <p className="text-3xl font-bold text-[#16BAC6]">Pet Needs</p>
        </div>
        <div className="cursor-pointer flex">
          View All Products
          <Image
            src={RightArrow}
            alt="User Account"
            className="cursor-pointer ml-2"
          />
        </div>
      </div>

      <div className="slider-container relative overflow-hidden pet-slider">
        <Slider {...settings}>
          {sliderData.map((item, index) => (
            <div key={index} className="relative">
              <div
                className={`w-full h-[300px] lg:h-[500px] overflow-hidden rounded-lg transition-transform duration-500 transform ${
                  index === activeSlide ? "scale-105" : "scale-90 blur-[2px]"
                }`}
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute top-5 inset-x-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <ButtonOutline
                    title={item.btnText}
                    className={`${item.btnClass} uppercase`}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PetSlider;
