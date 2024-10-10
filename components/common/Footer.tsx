"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/images/Logo_Petfood.png";
import Facebook from "@/assets/images/facebook.png";
import Youtube from "@/assets/images/youtube.png";
import Instagram from "@/assets/images/instagram.png";
import Linkdin from "@/assets/images/linkdin.png";
import Phone from "@/assets/images/phone.png";
import Mail from "@/assets/images/mail.png";

const Footer: React.FC = () => {
  const [showServices, setShowServices] = useState(false);
  const [showPetFood, setShowPetFood] = useState(false);
  return (
    <div className="footer-bg bg-green-100 relative">
      <style jsx>{`
        .footer-bg::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: -83px;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("/images/footer-bg.png");
          background-repeat: no-repeat;
          background-size: cover;
          z-index: 99;
        }
        @media (min-width: 1023px) and (max-width: 1440px) {
          .footer-bg::before {
            background-position: center;
          }
        }
        @media (max-width: 768px) {
          .footer-bg::before {
            background-image: url("/images/footer-mobile-bg.png");
            background-position: center;
            background-size: cover;
          }
        }
      `}</style>
      <div className=" container mx-auto py-10 px-0 lg:py-16 lg:px-20 relative z-[999]">
        <div className="flex justify-between flex-col lg:flex-row gap-8 px-5 lg:px-0">
          <div className="flex justify-between gap-[50px]">
            <div className="flex-none w-full lg:w-1/3">
              <Image src={Logo} width={190} height={50} alt="Logo" />
              <p className="text-green-200 mt-4 font-medium text-[12px] leading-[18px] tracking-[0.02em]">
                © 2021 PetStore. All Rights Reserved.
              </p>
              <p className="text-black-300 mt-4 font-normal text-[14px] leading-[21px]">
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
              <div className="block lg:hidden mt-5">
                <h3 className="font-bold text-[22px] leading-[33px] text-green-50">
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
              className="w-full flex justify-between items-center px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 shadow-sm"
            >
              <span>Our Service</span>
              <span className="font-semibold text-lg">
                {showServices ? "-" : "+"}
              </span>
            </button>
            {showServices && (
              <ul className="mt-2 space-y-2 px-6 py-2 bg-white rounded-md">
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
              className="w-full flex justify-between items-center px-4 py-3 bg-white border border-gray-300 rounded-md mt-4 text-gray-900 shadow-sm"
            >
              <span>Pet Wise Food</span>
              <span className="font-semibold text-lg">
                {showPetFood ? "-" : "+"}
              </span>
            </button>
            {showPetFood && (
              <div className="grid grid-cols-2 mt-2 px-6 py-2 bg-white rounded-md">
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

          <div className="mt-4 text-gray-900 flex justify-between items-center lg:hidden">
            <p className="font-bold flex items-center">
              <Image src={Mail} className="mr-2 w-4 h-3" alt="Logo" />
              Sayhi@Dubidoo.Com
            </p>
            <div className="h-[30px] bg-black-50 w-[2px]"></div>
            <p className="font-bold flex items-center">
              <Image src={Phone} className="mr-2 w-4 h-3" alt="Logo" />
              (252) 555-0126
            </p>
          </div>
        </div>
      </div>

      <div className="bg-teal-800 text-white text-center py-4 text-xs lg:text-base">
        <ul className="flex justify-center space-x-6">
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
