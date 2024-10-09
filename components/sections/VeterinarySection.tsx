"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ButtonFullRounded, ButtonmdRounded } from "../common/ButtonmdRounded";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import orderNow from "@/assets/images/orderNow.png";
import Ellen from "@/assets/images/ellen&co.png";

const VeterinarySection = () => {
  const [activeTab, setActiveTab] = useState("dog");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const tabs = [
    { name: "cat", icon: "/images/catBlack.svg" },
    { name: "dog", icon: "/images/dogBlack.svg" },
    { name: "new born", icon: "/images/newBornBlack.svg" },
    { name: "fish", icon: "/images/fish.svg" },
    { name: "birds", icon: "/images/bird.svg" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-15">
      <div className="text-center mb-8">
        <h4 className="text-sm uppercase font-medium text-[16px] leading-[24px] tracking-[0.02em] mb-5 text-black-300 opacity-50">
          Based on Veterinary Doctor's
        </h4>
        <h2 className="text-3xl font-medium text-[30px] leading-[45px] text-black-300 px-2 lg:px-80">
          Some Of Our Favourites To Care For Their Whole Health
        </h2>
      </div>

      <div className="hidden lg:flex justify-center space-x-8 mb-8 border border-slate-300 rounded-lg p-2">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex flex-col lg:flex-row items-center px-12 py-2 rounded-full font-medium text-sm capitalize space-x-2 ${activeTab === tab.name ? "bg-[#112025] text-[#EFF0F4]" : ""
              }`}
          >
            <div className="w-6 h-6 flex-shrink-0">
              <Image
                src={tab.icon}
                alt={tab.name}
                width={24}
                height={24}
                className={`w-full h-full ${activeTab === tab.name ? "filter invert" : ""
                  }`}
              />
            </div>
            <span
              className={`uppercase ${activeTab === tab.name ? "text-white" : "text-black-300"
                } `}
            >
              {tab.name}
            </span>
          </button>
        ))}
      </div>

      <div className="flex lg:hidden justify-between overflow-auto w-full mb-5 px-5">
        {tabs.map((tab, index) => (
          <button
            key={index + 1}
            onClick={() => setActiveTab(tab.name)}
            className={`flex flex-col justify-center items-center py-2.5 px-5 lg:rounded rounded-xl ${activeTab === tab.name ? "bg-[#112025]" : "bg-gray-50"
              } `}
          >
            <div className="w-6 h-6 flex-shrink-0">
              <Image
                src={tab.icon}
                alt={tab.name}
                width={24}
                height={24}
                className={`w-full h-full ${activeTab === tab.name ? "filter invert" : ""
                  }`}
              />
            </div>
            <span
              className={`font-medium text-[10px] leading-[15px] tracking-[0.02em] ${activeTab === tab.name ? "text-white" : "text-black-300"
                } `}
            >
              {tab.name}
            </span>
          </button>
        ))}
      </div>

      {activeTab === "dog" && (
        <>
          <div className="hidden lg:flex flex-col lg:flex-row gap-6">
            <div className="flex-auto w-[40%] relative">
              <div className="rounded-lg overflow-hidden relative min-h-[546px] bg-[url('/images/MaskGroup.png')]">
                <div className="absolute top-4 left-4 text-black-300 p-2 rounded mt-8">
                  <h3 className="text-[12px] font-medium text-[12px] leading-[18px] opacity-80">
                    Accessories + Food Combo
                  </h3>
                  <p className="text-[16px] uppercase text-semibold font-semibold text-[16px] leading-[24px] pr-60">
                    Ofcourse We Sale Product With Love
                  </p>
                  <ButtonmdRounded title={"Order Now"} />
                </div>
              </div>
            </div>

            <div className="flex-auto w-[30%] relative">
              <div className="rounded-lg overflow-hidden relative bg-[#FFC15B] min-h-[546px]">
                <div className="top-4 left-4 text-black-300 p-2 rounded text-center mt-8">
                  <h3 className="text-[16px] uppercase font-bold px-20 leading-[24px]">
                    Peanut Butter Cookies
                  </h3>
                  <p className="px-20 font-medium text-[12px] leading-[18px] tracking-[0.02em] opacity-80">
                    Lectus commodo pharetra, sit aliquam tristique neque in.
                  </p>
                  <ButtonmdRounded title={"Order Now"} />
                </div>
                <Image
                  src="/images/peanutButter.png"
                  alt="Peanut Butter Cookies"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 flex-auto w-[30%]">
              <div className="rounded-lg border overflow-hidden flex border-[#e0f4f4]">
                <div className="top-4 left-4 text-black-300 p-3 rounded">
                  <h3 className="text-[12px] font-medium mt-2">Axel & Blue</h3>
                  <p className="text-[16px] font-semibold mt-2 leading-[24px]">
                    Made From The Real Chocolate Ingredient
                  </p>
                  <ButtonFullRounded title={"Order Now"} />
                </div>
                <Image
                  src={orderNow}
                  alt="Food Image 1"
                  className="rounded-lg object-cover w-full"
                />
              </div>

              <div className="rounded-lg overflow-hidden bg-[#D5EFF9] flex">
                <div className="top-4 left-4 ml-2 text-black-300 p-3 !pr-0 rounded">
                  <h3 className="text-[12px] font-medium mt-2">Axel & Blue</h3>
                  <p className="text-[16px] font-semibold mt-2">
                    Made From The Real Chocolate Ingredient
                  </p>
                  <ButtonFullRounded title={"Order Now"} />
                </div>
                <Image
                  src={Ellen}
                  alt="Food Image 2"
                  className="rounded-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex lg:hidden flex-col">
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide flex-auto relative">
                <div className="rounded-lg overflow-hidden relative min-h-[546px] bg-[url('/images/MaskGroup.png')]">
                  {/* Text Overlay */}
                  <div className="absolute top-4 left-4  text-black-300 p-2 rounded mt-8">
                    <h3 className="text-[12px]">Accessories + Food Combo</h3>
                    <p className="text-[16px] uppercase text-semibold pr-52">
                      Ofcourse We Sale Product With Love
                    </p>
                    <ButtonmdRounded title={"Order Now"} />
                  </div>
                </div>
              </div>

              <div className="keen-slider__slide flex-auto relative">
                <div className="rounded-lg overflow-hidden relative bg-[#FFC15B] min-h-[546px]">
                  <div className="top-4 left-4 text-black-300 p-2 rounded text-center mt-8">
                    <h3 className="text-[16px] uppercase font-bold px-20">
                      Peanut Butter Cookies
                    </h3>
                    <p className="text-[12px] px-20">
                      Lectus commodo pharetra, sit aliquam tristique neque in.
                    </p>
                    <ButtonmdRounded title={"Order Now"} />
                  </div>
                  <Image
                    src="/images/peanutButter.png"
                    alt="Peanut Butter Cookies"
                    width={300}
                    height={300}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>

              <div className="keen-slider__slide rounded-lg border overflow-hidden flex flex-col border-[#16BAC6]">
                <div className="top-4 left-4 text-black-300 p-3 rounded">
                  <h3 className="text-[12px] font-medium mt-2">Axel & Blue</h3>
                  <p className="text-[16px] font-semibold mt-2">
                    Made From The Real Chocolate Ingredient
                  </p>
                  <ButtonFullRounded title={"Order Now"} />
                </div>
                <Image
                  src="/images/orderNow.png"
                  alt="Food Image 1"
                  width={200}
                  height={150}
                  className="rounded-lg object-cover w-full"
                />
              </div>

              <div className="keen-slider__slide rounded-lg border overflow-hidden bg-[#D5EFF9] flex flex-col">
                <div className="top-4 left-4 ml-2 text-black-300 p-3 !pr-0 rounded">
                  <h3 className="text-[12px] font-medium mt-2">Axel & Blue</h3>
                  <p className="text-[16px] font-semibold mt-2">
                    Made From The Real Chocolate Ingredient
                  </p>
                  <ButtonFullRounded title={"Order Now"} />
                </div>
                <Image
                  src="/images/ellen&co.png"
                  alt="Food Image 2"
                  width={200}
                  height={150}
                  className="rounded-lg object-cover w-full"
                />
              </div>
            </div>
            {loaded && instanceRef.current && (
              <div className="flex justify-center mt-5 space-x-2 pl-5 lg:pl-0">
                {[
                  ...Array(
                    instanceRef.current.track.details.slides.length
                  ).keys(),
                ].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={`w-3 h-3 rounded-full mx-1 ${currentSlide === idx ? "bg-gray-900" : "bg-gray-400"
                      }`}
                  ></button>
                ))}
              </div>
            )}
          </div>
        </>
      )}

      {activeTab === "cat" && (
        <div className="hidden lg:flex flex-col lg:flex-row gap-6">
          <div className="flex-auto w-64 relative">
            <div className="rounded-lg overflow-hidden relative min-h-[546px] bg-[url('/images/MaskGroup.png')]">
              <div className="absolute top-4 left-4  text-black-300 p-2 rounded mt-8">
                <h3 className="text-[12px]">Accessories + Food Combo</h3>
                <p className="text-[16px] uppercase text-semibold pr-52">
                  Ofcourse We Sale Product With Love
                </p>
                <ButtonmdRounded title={"Order Now"} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 flex-auto w-32">
            <div className="rounded-lg border overflow-hidden flex border-[#16BAC6]">
              <div className="top-4 left-4 text-black-300 p-3 rounded">
                <h3 className="text-[12px] font-medium mt-2">Axel & Blue</h3>
                <p className="text-[16px] font-semibold mt-2">
                  Made From The Real Chocolate Ingredient
                </p>
                <ButtonFullRounded title={"Order Now"} />
              </div>
              <Image
                src="/images/orderNow.png"
                alt="Food Image 1"
                width={200}
                height={150}
                className="rounded-lg object-cover w-full"
              />
            </div>

            <div className="rounded-lg border overflow-hidden bg-[#D5EFF9] flex">
              <div className="top-4 left-4 ml-2 text-black-300 p-3 !pr-0 rounded">
                <h3 className="text-[12px] font-medium mt-2">Axel & Blue</h3>
                <p className="text-[16px] font-semibold mt-2">
                  Made From The Real Chocolate Ingredient
                </p>
                <ButtonFullRounded title={"Order Now"} />
              </div>
              <Image
                src="/images/ellen&co.png"
                alt="Food Image 2"
                width={200}
                height={150}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>

          <div className="flex-auto w-32 relative">
            <div className="rounded-lg overflow-hidden relative bg-[#FFC15B] min-h-[546px]">
              <div className="top-4 left-4 text-black-300 p-2 rounded text-center mt-8">
                <h3 className="text-[16px] uppercase font-bold px-20">
                  Peanut Butter Cookies
                </h3>
                <p className="text-[12px] px-20">
                  Lectus commodo pharetra, sit aliquam tristique neque in.
                </p>
                <ButtonmdRounded title={"Order Now"} />
              </div>
              <Image
                src="/images/peanutButter.png"
                alt="Peanut Butter Cookies"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VeterinarySection;
