"use client";
import React from "react";
import Image from "next/image";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import RightArrow from "@/assets/images/right-arrow.png";
import LeftArrow from "@/assets/images/left-arrow.png";
import { NotificationSliderData } from "@/app/constant";

const HeaderNotificationSlider = () => {
  function SampleNextArrow(props: CustomArrowProps) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} !top-[68%] custom-arrow !right-[6px] lg:!right-[450px]`}
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
        className={`${className} !top-[68%] custom-arrow !left-[16px] lg:!left-[450px]`}
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
    <div className="notification-slider overflow-hidden slider-container bg-green-50 text-center text-white py-1 lg:py-2 text-sm">
      <Slider {...settings}>
        {NotificationSliderData.map((item, index) => (
          <div
            key={index}
            className="text-[8px] leading-[12px] lg:text-[14px] lg:font-semibold lg:leading-[21px] tracking-[0.02em] lg:tracking-[0.02em]"
          >
            {item.text}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeaderNotificationSlider;
