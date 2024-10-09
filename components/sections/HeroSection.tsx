"use client";
import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ButtonFullRounded } from "@/components/common/ButtonmdRounded";

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

  const sliderData = [
    {
      title: "The only thing you need is all here",
      content:
        "Sagittis in et purus euismod lorem nunc varius porta. Semper elit porttitor vestibulum, habitant duis arcu sit feugiat diam.",
      btnText: "Shop Now",
    },
    {
      title: "All your pet needs in one place",
      content:
        "Discover a wide range of pet products that are designed for your pet’s comfort and happiness.",
      btnText: "Explore",
    },
    {
      title: "Care for Your Pets",
      content:
        "From food to toys, we have everything to make your pet’s life more enjoyable.",
      btnText: "Learn More",
    },
    {
      title: "Pamper Your Furry Friend",
      content:
        "Get the best for your pet with our carefully selected range of products.",
      btnText: "View Collection",
    },
  ];

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
      const marginSpacing = isSmallScreen ? "0 3px" : isTabletScreen ? "0 4px" : "0 5px";
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
    <div className="relative w-full lg:h-screen hero-bg">
      <div className="relative z-10 flex items-center justify-center h-full bg-opacity-70">
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-2.5 max-w-2xl lg:max-w-6xl lg:mx-auto pb-3">
          <div className="slider-container overflow-hidden">
            <Slider {...settings}>
              {sliderData.map((item, index) => (
                <div key={index} className="text-black-300 mb-10">
                  <h1 className="text-[18px] lg:text-[36px] font-bold leading-[50px] mb-2">
                    {item.title}
                  </h1>
                  <p className="mb-4 text-[10px] lg:text-sm font-normal lg:leading-6 pr-32 lg:pr-0">
                    {item.content}
                  </p>
                  <ButtonFullRounded title={item.btnText} className="lg:uppercase capitalize"/>
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