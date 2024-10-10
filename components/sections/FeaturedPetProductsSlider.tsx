"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OutlinedButton } from "@/components/common/ButtonmdRounded";
import Image from "next/image";
import RightArrow from "@/assets/images/thin_long_right.png";
import { sliderData } from "@/app/constant";

const FeaturedPetProductsSlider = () => {
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
      <div className="mt-10 mb-6 flex justify-between items-center px-10 lg:px-64 text-[#112025]">
        <div>
          <p className="font-semibold text-2xl">Everything Your</p>
          <p className="text-3xl font-bold text-[#16BAC6]">Pet Needs</p>
        </div>
        <div className="flex cursor-pointer">
          View All Products
          <Image
            src={RightArrow}
            alt="User Account"
            className="ml-2 cursor-pointer"
          />
        </div>
      </div>

      <div className="relative overflow-hidden pet-slider slider-container">
        <Slider {...settings}>
          {sliderData.map((item, index) => (
            <div key={index} className="relative">
              <div
                className={`w-full h-[300px] lg:h-[500px] rounded-lg overflow-hidden transform transition-transform duration-500 ${
                  index === activeSlide ? "scale-105" : "scale-90 blur-[2px]"
                }`}
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-x-0 top-5 flex items-center justify-center bg-black bg-opacity-30">
                  <OutlinedButton
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

export default FeaturedPetProductsSlider;
