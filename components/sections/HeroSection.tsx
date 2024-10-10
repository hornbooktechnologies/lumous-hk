"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FullRoundedButton } from "@/components/common/ButtonmdRounded";
import { HeroSectionSliderData } from "@/app/constant";

const HeroSection = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isTabletScreen, setIsTabletScreen] = useState(false);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 536);
    setIsTabletScreen(window.innerWidth > 536 && window.innerWidth <= 736);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    appendDots: (dots: any) => (
      <div
        className="custom-appendDots"
        style={{
          padding: "15px",
          marginTop: "25px",
          bottom: isSmallScreen ? "3px" : isTabletScreen ? "10px" : "-15px",
          right: isSmallScreen ? "40%" : isTabletScreen ? "35%" : "30%",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: any) => {
      const dotSize = isSmallScreen ? "5px" : isTabletScreen ? "7px" : "10px";
      const marginSpacing = isSmallScreen
        ? "0 3px"
        : isTabletScreen
        ? "0 4px"
        : "0 5px";
      return (
        <div
          style={{
            width: dotSize,
            height: dotSize,
            borderRadius: "50%",
            backgroundColor: "#666666",
            display: "inline-block",
            margin: marginSpacing,
          }}
        />
      );
    },
  };

  return (
    <div className="relative w-full hero-bg lg:h-screen">
      <div className="relative z-10 flex items-center justify-center h-full bg-opacity-70">
        <div className="max-w-2xl grid grid-cols-1 lg:grid-cols-3 pb-3 mx-2.5 lg:max-w-6xl lg:mx-auto">
          <div className="slider-container overflow-hidden">
            <Slider {...settings}>
              {HeroSectionSliderData.map((item, index) => (
                <div key={index} className="text-black-300 mb-10">
                  <h1 className="text-[18px] font-bold mb-2 lg:text-[36px] leading-[50px]">
                    {item.title}
                  </h1>
                  <p className="text-[10px] font-normal mb-4 lg:leading-6 lg:text-sm pr-32 lg:pr-0">
                    {item.content}
                  </p>
                  <FullRoundedButton
                    title={item.btnText}
                    className="capitalize lg:uppercase"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
