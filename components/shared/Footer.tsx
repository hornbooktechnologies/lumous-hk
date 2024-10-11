"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/images/Logo.png";
import Facebook from "@/assets/images/facebook.png";
import Youtube from "@/assets/images/youtube.png";
import Instagram from "@/assets/images/instagram.png";
import Linkdin from "@/assets/images/linkdin.png";
import Phone from "@/assets/images/phone.png";
import Mail from "@/assets/images/mail.png";
import Plus from "@/assets/images/plus.png";

const Footer: React.FC = () => {
  const [showServices, setShowServices] = useState(false);
  const [showPetFood, setShowPetFood] = useState(false);
  return (
    <div className="footer-bg bg-green-100 relative">
      <div className="absolute inset-0 -top-[83px] bg-[url('/images/footer-bg.png')] bg-no-repeat bg-cover z-0 lg:bg-center lg:bg-[length:cover] lg:w-full">
      </div>
      <div className="absolute inset-0 -top-[95px] bg-[url('/images/footer-mobile-bg.png')] bg-no-repeat bg-cover bg-center z-0 lg:hidden"></div>

      <div className=" container mx-auto pt-0 lg:pt-10 px-0 lg:py-16 lg:px-20 relative z-[999]">
        <div className="flex justify-between flex-col lg:flex-row gap-4 lg:gap-8 px-5 lg:px-0">
          <div className="flex justify-between gap-[50px]">
            <div className="flex-none w-full lg:w-1/3">
              <Image src={Logo} alt="Logo" className="w-[115px] h-[30px] lg:w-[190px] lg:h-[50px] object-cover lg:mt-6" />
              <p className="text-green-200 mt-1 lg:mt-4 font-medium text-[8px] lg:text-[12px] leading-[18px] tracking-[0.02em]">
                © 2021 PetStore. All Rights Reserved.
              </p>
              <p className="text-black-300 mt-4 font-normal text-[10px] lg:text-[14px] leading-4 lg:leading-[21px]">
                Egestas nec etiam maecenas aliquam a, lorem ornare eget non nec
                placerat elit a enim fermentum ac integer eget ante mattis
                cursus purus volutpat
              </p>
              <div className="mt-4 text-black-300 hidden lg:block font-semibold text-[16px] leading-[24px]">
                <p className="font-bold flex mb-3 items-center">
                  <Image src={Mail} alt="Logo" className="mr-2 w-4 h-3" />
                  Sayhi@Dubidoo.Com
                </p>
                <p className="font-bold flex items-center">
                  <Image src={Phone} alt="Logo" className="mr-2 w-4 h-3" />
                  (252) 555-0126
                </p>
              </div>
              <div className="block lg:hidden mt-3">
                <h3 className="font-bold text-[12px] lg:text-[22px] leading-[33px] text-green-50">
                  Social Media
                </h3>
                <div className="flex mt-2 space-x-4">
                  <Image
                    src={Facebook}
                    width={20}
                    height={20}
                    alt="Wishlist"
                    className="text-black-300 hover:text-teal-500 cursor-pointer"
                  />
                  <Image
                    src={Instagram}
                    width={20}
                    height={20}
                    alt="Wishlist"
                    className="text-black-300 hover:text-teal-500 cursor-pointer"
                  />
                  <Image
                    src={Youtube}
                    width={20}
                    height={20}
                    alt="Wishlist"
                    className="text-black-300 hover:text-teal-500 cursor-pointer"
                  />
                  <Image
                    src={Linkdin}
                    width={20}
                    height={20}
                    alt="Wishlist"
                    className="text-black-300 hover:text-teal-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="hidden flex-none w-1/4 lg:block">
              <h3 className="font-bold text-[22px] leading-[33px] text-green-50">
                Our Service
              </h3>
              <ul className="mt-4 space-y-2">
                <li className="text-black-300 font-medium text-[16px] leading-[24px] tracking-[0.02em] cursor-pointer hover:text-teal-500">
                  TRACK ORDER
                </li>
                <li className="text-black-300 font-medium text-[16px] leading-[24px] tracking-[0.02em] cursor-pointer hover:text-teal-500">
                  RETURNS
                </li>
                <li className="text-black-300 font-medium text-[16px] leading-[24px] tracking-[0.02em] cursor-pointer hover:text-teal-500">
                  SHIPPING INFO
                </li>
                <li className="text-black-300 font-medium text-[16px] leading-[24px] tracking-[0.02em] cursor-pointer hover:text-teal-500">
                  CERTIFICATES
                </li>
              </ul>
            </div>

            <div className="hidden flex-1 lg:block">
              <h3 className="font-bold text-[22px] leading-[33px] text-green-50">
                Pet Wise Food
              </h3>
              <div className="flex gap-10 mt-4 space-y-2">
                <ul className="space-y-2">
                  <li className="text-black-300 font-medium text-[16px] leading-[24px] tracking-[0.02em] cursor-pointer hover:text-teal-500">
                    DOG
                  </li>
                  <li className="text-black-300 font-medium text-[16px] leading-[24px] tracking-[0.02em] cursor-pointer hover:text-teal-500">
                    CAT
                  </li>
                  <li className="text-black-300 font-medium text-[16px] leading-[24px] tracking-[0.02em] cursor-pointer hover:text-teal-500">
                    MAMMALS
                  </li>
                  <li className="text-black-300 font-medium text-[16px] leading-[24px] tracking-[0.02em] cursor-pointer hover:text-teal-500">
                    HAMSTERS
                  </li>
                  <li className="text-black-300 font-medium text-[16px] leading-[24px] tracking-[0.02em] cursor-pointer hover:text-teal-500">
                    EAGLE
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="text-black-300 font-medium text-[16px] leading-[24px] tracking-[0.02em] cursor-pointer hover:text-teal-500">
                    OWL
                  </li>
                  <li className="text-black-300 font-medium text-[16px] leading-[24px] tracking-[0.02em] cursor-pointer hover:text-teal-500">
                    GOLD FISH
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setShowServices(!showServices)}
              className="w-full flex justify-between items-center px-4 py-3 bg-white rounded-md text-gray-900 shadow-sm"
            >
              <span className="text-[12px] font-bold text-[#195F6B]">
                Our Service
              </span>
              <span className="font-semibold text-lg">
                {/* {showServices ? "-" : "+"} */}
                <Image
                  src={Plus}
                  alt="plus"
                  className="text-black-300 hover:text-teal-500 cursor-pointer"
                />
              </span>
            </button>
            {showServices && (
              <ul className="mt-2 space-y-2 px-6 py-2 bg-white rounded-md text-[12px]">
                <li className="text-black-300 cursor-pointer hover:text-teal-500">
                  TRACK ORDER
                </li>
                <li className="text-black-300 cursor-pointer hover:text-teal-500">
                  RETURNS
                </li>
                <li className="text-black-300 cursor-pointer hover:text-teal-500">
                  SHIPPING INFO
                </li>
                <li className="text-black-300 cursor-pointer hover:text-teal-500">
                  CERTIFICATES
                </li>
              </ul>
            )}

            <button
              onClick={() => setShowPetFood(!showPetFood)}
              className="w-full flex justify-between items-center px-4 py-3 bg-white rounded-md mt-4 text-gray-900 shadow-sm"
            >
              <span className="text-[12px] font-bold text-[#195F6B]">
                Pet Wise Food
              </span>

              <span className="font-semibold text-lg">
                {/* {showPetFood ? "-" : "+"} */}
                <Image
                  src={Plus}
                  alt="plus"
                  className="text-black-300 hover:text-teal-500 cursor-pointer"
                />
              </span>
            </button>
            {showPetFood && (
              <div className="grid grid-cols-2 mt-2 px-6 py-2 bg-white rounded-md text-[12px]">
                <ul className="space-y-2">
                  <li className="text-black-300 cursor-pointer hover:text-teal-500">
                    DOG
                  </li>
                  <li className="text-black-300 cursor-pointer hover:text-teal-500">
                    CAT
                  </li>
                  <li className="text-black-300 cursor-pointer hover:text-teal-500">
                    MAMMALS
                  </li>
                  <li className="text-black-300 cursor-pointer hover:text-teal-500">
                    HAMSTERS
                  </li>
                  <li className="text-black-300 cursor-pointer hover:text-teal-500">
                    EAGLE
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="text-black-300 cursor-pointer hover:text-teal-500">
                    OWL
                  </li>
                  <li className="text-black-300 cursor-pointer hover:text-teal-500">
                    GOLD FISH
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="hidden lg:block">
            <h3 className="font-bold text-[22px] leading-[33px] text-green-50 w-max">
              Social Media
            </h3>
            <div className="flex mt-4 space-x-4">
              <Image
                src={Facebook}
                width={20}
                height={20}
                alt="Wishlist"
                className="text-black-300 hover:text-teal-500 cursor-pointer"
              />
              <Image
                src={Instagram}
                width={20}
                height={20}
                alt="Wishlist"
                className="text-black-300 hover:text-teal-500 cursor-pointer"
              />
              <Image
                src={Youtube}
                width={20}
                height={20}
                alt="Wishlist"
                className="text-black-300 hover:text-teal-500 cursor-pointer"
              />
              <Image
                src={Linkdin}
                width={20}
                height={20}
                alt="Wishlist"
                className="text-black-300 hover:text-teal-500 cursor-pointer"
              />
            </div>
          </div>

          <div className="mb-4 text-[gray-900] flex flex-row gap-3 items-center justify-between lg:hidden  mx-auto">
            <p className="font-medium flex items-center text-[10px] leading-[15px]">
              <Image src={Mail} className="mr-2 w-4 h-3" alt="Logo" />
              Sayhi@Dubidoo.Com
            </p>
            <div className="h-[30px] bg-[#222222] w-[2px] my-2"></div>
            <p className="font-medium flex items-center text-[10px] leading-[15px]">
              <Image src={Phone} className="mr-2 w-4 h-3" alt="Logo" />
              (252) 555-0126
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-green-50 text-white lg:!text-[12px] !text-[8px] text-center lg:py-4 py-1 text-xs">
        <ul className="flex justify-center space-x-4 lg:space-x-6">
          <li className="cursor-pointer hover:underline">Privacy Policy</li>
          <li className="cursor-pointer hover:underline w-[1px] bg-white"></li>
          <li className="cursor-pointer hover:underline">T & C</li>
          <li className="cursor-pointer hover:underline w-[1px] bg-white"></li>
          <li className="cursor-pointer hover:underline">FAQ</li>
          <li className="cursor-pointer hover:underline w-[1px] bg-white"></li>
          <li className="cursor-pointer hover:underline">Return Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
