"use client";
import React from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "@/app/img/left-arrow.png";
import RightArrow from "@/app/img/right-arrow.png";
import Image from "next/image";

const NotificationSlider = () => {
  const sliderData = [
    { text: "Free same-day delivery on orders $35+ when you order by 2PM." },
    { text: "Free same-day delivery on orders $35+ when you order by 2PM." },
    { text: "Free same-day delivery on orders $35+ when you order by 2PM." },
    { text: "Free same-day delivery on orders $35+ when you order by 2PM." },
  ];

  function SampleNextArrow(props: CustomArrowProps) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow !right-[50px] lg:!right-[450px] !top-[65%]`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <Image src={RightArrow} alt="Right Arrow" className="cursor-pointer" />
      </div>
    );
  }

  function SamplePrevArrow(props: CustomArrowProps) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow !left-[50px] lg:!left-[450px] !top-[65%]`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <Image src={LeftArrow} alt="Left Arrow" className="cursor-pointer" />
      </div>
    );
  }

  const settings = {
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slider-container overflow-hidden bg-teal-800 text-white text-center py-2 text-sm notification-slider">
      <Slider {...settings}>
        {sliderData.map((item, index) => (
          <div
            key={index}
            className="text-[8px] leading-[12px] tracking-[0.02em] lg:font-semibold lg:text-[14px] lg:leading-[21px] lg:tracking-[0.02em]"
          >
            {item.text}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NotificationSlider;
