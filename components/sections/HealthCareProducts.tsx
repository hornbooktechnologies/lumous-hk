"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FullRoundedButton, MediumRoundedButton } from "../shared/ButtonmdRounded";
import orderNow from "@/assets/images/orderNow.png";
import Ellen from "@/assets/images/ellen-and-co-peanut-butter-treats.png";
import PeanutButter from "@/assets/images/peanut-butter.png";
import { tabs } from "@/app/constant";

const HealthCareProducts = () => {
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

  return (
    <div className="py-8 max-w-7xl mx-auto px-15">
      <div className="text-center mb-8">
        <h4 className="font-medium text-sm text-[16px] tracking-[0.02em] leading-[24px] uppercase text-black-300 opacity-50 mb-5">
          Based on Veterinary Doctor's
        </h4>
        <h2 className="px-2 text-3xl lg:px-80 text-[30px] leading-[45px] font-medium text-black-300">
          Some Of Our Favourites To Care For Their Whole Health
        </h2>
      </div>

      <div className="hidden lg:flex justify-center border border-slate-300 space-x-8 p-2 mb-8 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex flex-col lg:flex-row items-center font-medium capitalize py-2 px-12 text-sm space-x-2 rounded-full ${
              activeTab === tab.name ? "bg-[#112025] text-[#EFF0F4]" : ""
            }`}
          >
            <div className="w-6 h-6 flex-shrink-0">
              <Image
                src={tab.icon}
                alt={tab.name}
                width={24}
                height={24}
                className={`w-full h-full ${activeTab === tab.name ? "filter invert" : ""}`}
              />
            </div>
            <span className={`uppercase ${activeTab === tab.name ? "text-white" : "text-black-300"}`}>
              {tab.name}
            </span>
          </button>
        ))}
      </div>

      <div className="lg:hidden flex gap-2.5 justify-between w-full px-5 mb-5 overflow-auto">
        {tabs.map((tab, index) => (
          <button
            key={index + 1}
            onClick={() => setActiveTab(tab.name)}
            className={`flex flex-col items-center justify-center py-2.5 px-5 rounded-xl lg:rounded ${
              activeTab === tab.name ? "bg-[#112025]" : "bg-gray-50"
            }`}
          >
            <div className="w-6 h-6 flex-shrink-0">
              <Image
                src={tab.icon}
                alt={tab.name}
                width={24}
                height={24}
                className={`w-full h-full ${activeTab === tab.name ? "filter invert" : ""}`}
              />
            </div>
            <span
              className={`font-medium text-[10px] leading-[15px] tracking-[0.02em] w-max ${
                activeTab === tab.name ? "text-white" : "text-black-300"
              }`}
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
              <div className="relative bg-[url('../assets/images/dog-food-and-leash.png')] min-h-[546px] rounded-lg overflow-hidden">
                <div className="absolute top-4 left-4 p-2 text-black-300 rounded mt-8">
                  <h3 className="text-[12px] font-medium leading-[18px] opacity-80">
                    Accessories + Food Combo
                  </h3>
                  <p className="uppercase font-semibold text-[16px] leading-[24px] pr-60">
                    Ofcourse We Sale Product With Love
                  </p>
                  <MediumRoundedButton title={"Order Now"} />
                </div>
              </div>
            </div>

            <div className="relative flex-auto w-[30%]">
              <div className="min-h-[546px] bg-[#FFC15B] relative rounded-lg overflow-hidden">
                <div className="top-4 left-4 mt-8 text-center text-black-300 p-2 rounded">
                  <h3 className="font-bold uppercase text-[16px] px-20 leading-[24px]">
                    Peanut Butter Cookies
                  </h3>
                  <p className="font-medium text-[12px] opacity-80 px-20 leading-[18px] tracking-[0.02em]">
                    Lectus commodo pharetra, sit aliquam tristique neque in.
                  </p>
                  <MediumRoundedButton title={"Order Now"} />
                </div>
                <Image
                  src={PeanutButter}
                  alt="Peanut Butter Cookies"
                  width={300}
                  height={300}
                  className="w-full object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 flex-auto w-[30%]">
              <div className="flex overflow-hidden rounded-lg border border-[#e0f4f4]">
                <div className="p-3 top-4 left-4 rounded text-black-300">
                  <h3 className="mt-2 font-medium text-[12px]">Axel & Blue</h3>
                  <p className="mt-2 font-semibold text-[16px] leading-[24px]">
                    Made From The Real Chocolate Ingredient
                  </p>
                  <FullRoundedButton title={"Order Now"} />
                </div>
                <Image
                  src={orderNow}
                  alt="Food Image 1"
                  className="w-full object-cover rounded-lg"
                />
              </div>

              <div className="flex overflow-hidden rounded-lg bg-[#D5EFF9]">
                <div className="ml-2 top-4 left-4 p-3 !pr-0 rounded text-black-300">
                  <h3 className="mt-2 font-medium text-[12px]">Axel & Blue</h3>
                  <p className="mt-2 font-semibold text-[16px]">
                    Made From The Real Chocolate Ingredient
                  </p>
                  <FullRoundedButton title={"Order Now"} />
                </div>
                <Image
                  src={Ellen}
                  alt="Food Image 2"
                  className="w-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          {/* Mobile Version */}
          <div className="flex flex-col lg:hidden">
          <div ref={sliderRef} className="flex space-x-4 overflow-x-auto scrollbar-hide">
    <div className="flex-none w-[300px] relative">
      <div className="relative bg-[url('/images/dog-food-and-leash.png')] min-h-[546px] rounded-lg overflow-hidden">
        <div className="absolute top-4 left-4 p-2 text-black-300 rounded mt-8">
          <h3 className="text-[12px]">Accessories + Food Combo</h3>
          <p className="text-[16px] uppercase pr-52 text-semibold">
            Ofcourse We Sale Product With Love
          </p>
          <MediumRoundedButton title={"Order Now"} />
        </div>
      </div>
    </div>

    <div className="flex-none w-[300px] relative">
      <div className="min-h-[546px] bg-[#FFC15B] relative rounded-lg overflow-hidden">
        <div className="top-4 left-4 mt-8 text-center text-black-300 p-2 rounded">
          <h3 className="uppercase font-bold text-[16px] px-20">
            Peanut Butter Cookies
          </h3>
          <p className="text-[12px] px-20">
            Lectus commodo pharetra, sit aliquam tristique neque in.
          </p>
          <MediumRoundedButton title={"Order Now"} />
        </div>
        <Image
          src="/images/peanut-butter.png"
          alt="Peanut Butter Cookies"
          width={300}
          height={300}
          className="w-full object-cover rounded-lg"
        />
      </div>
    </div>

    <div className="flex-none w-[300px] flex flex-col overflow-hidden rounded-lg border border-[#16BAC6]">
      <div className="p-3 top-4 left-4 rounded text-black-300">
        <h3 className="mt-2 font-medium text-[12px]">Axel & Blue</h3>
        <p className="mt-2 font-semibold text-[16px]">
          Made From The Real Chocolate Ingredient
        </p>
        <FullRoundedButton title={"Order Now"} />
      </div>
      <Image
        src="/images/orderNow.png"
        alt="Food Image 1"
        width={200}
        height={150}
        className="w-full object-cover rounded-lg"
      />
    </div>

    <div className="flex-none w-[300px] flex flex-col overflow-hidden rounded-lg bg-[#D5EFF9]">
      <div className="ml-2 top-4 left-4 p-3 !pr-0 rounded text-black-300">
        <h3 className="mt-2 font-medium text-[12px]">Axel & Blue</h3>
        <p className="mt-2 font-semibold text-[16px]">
          Made From The Real Chocolate Ingredient
        </p>
        <FullRoundedButton title={"Order Now"} />
      </div>
      <Image
        src="/images/ellen-and-co-peanut-butter-treats.png"
        alt="Food Image 2"
        width={200}
        height={150}
        className="w-full object-cover rounded-lg"
      />
    </div>
  </div>
            {/* {loaded && instanceRef.current && (
              <div className="flex space-x-2 justify-center mt-5 pl-5 lg:pl-0">
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
                    className={`w-3 h-3 rounded-full mx-1 ${
                      currentSlide === idx ? "bg-gray-900" : "bg-gray-400"
                    }`}
                  ></button>
                ))}
              </div>
            )} */}
          </div>
        </>
      )}

      {activeTab === "cat" && (
        <div className="hidden lg:flex flex-col lg:flex-row gap-6">
          <div className="relative flex-auto w-64">
            <div className="relative bg-[url('/images/dog-food-and-leash.png')] min-h-[546px] rounded-lg overflow-hidden">
              <div className="absolute top-4 left-4 p-2 text-black-300 rounded mt-8">
                <h3 className="text-[12px]">Accessories + Food Combo</h3>
                <p className="text-[16px] uppercase pr-52 text-semibold">
                  Ofcourse We Sale Product With Love
                </p>
                <MediumRoundedButton title={"Order Now"} />
              </div>
            </div>
          </div>

          <div className="flex-auto flex flex-col gap-6 w-32">
            <div className="flex overflow-hidden rounded-lg border border-[#16BAC6]">
              <div className="p-3 top-4 left-4 rounded text-black-300">
                <h3 className="mt-2 font-medium text-[12px]">Axel & Blue</h3>
                <p className="mt-2 font-semibold text-[16px]">
                  Made From The Real Chocolate Ingredient
                </p>
                <FullRoundedButton title={"Order Now"} />
              </div>
              <Image
                src="/images/orderNow.png"
                alt="Food Image 1"
                width={200}
                height={150}
                className="w-full object-cover rounded-lg"
              />
            </div>

            <div className="flex overflow-hidden rounded-lg bg-[#D5EFF9]">
              <div className="ml-2 top-4 left-4 p-3 !pr-0 rounded text-black-300">
                <h3 className="mt-2 font-medium text-[12px]">Axel & Blue</h3>
                <p className="mt-2 font-semibold text-[16px]">
                  Made From The Real Chocolate Ingredient
                </p>
                <FullRoundedButton title={"Order Now"} />
              </div>
              <Image
                src="/images/ellen-and-co-peanut-butter-treats.png"
                alt="Food Image 2"
                width={200}
                height={150}
                className="w-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="relative flex-auto w-32">
            <div className="relative bg-[#FFC15B] min-h-[546px] rounded-lg overflow-hidden">
              <div className="top-4 left-4 mt-8 text-center text-black-300 p-2 rounded">
                <h3 className="font-bold uppercase text-[16px] px-20">
                  Peanut Butter Cookies
                </h3>
                <p className="text-[12px] px-20">
                  Lectus commodo pharetra, sit aliquam tristique neque in.
                </p>
                <MediumRoundedButton title={"Order Now"} />
              </div>
              <Image
                src="/images/peanut-butter.png"
                alt="Peanut Butter Cookies"
                width={300}
                height={300}
                className="w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthCareProducts;
