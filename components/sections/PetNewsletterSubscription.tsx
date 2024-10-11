"use client";
import React from "react";
import Image from "next/image";
import DogImage from "@/assets/images/dog.png";

const PetNewsletterSubscription = () => {
  return (
    <div className="mx-auto max-w-7xl py-12 px-6">
      <div className="bg-[#F9FAFB] relative py-5 lg:py-14 px-6 rounded-lg sm:px-12 lg:px-24">
        <div className="flex flex-col items-center justify-between flex-wrap lg:flex-row lg:items-start">
          <div className="flex-1 lg:pr-10">
            <h2 className="mb-2 text-[#000000] text-[16px] lg:text-[30px] font-normal">
              Stay Connected With Us.
            </h2>
            <p className="mb-8 text-[12px] lg:text-[16px] text-[#666666]">
              Choose your pet and subscribe! Receive exclusive discounts to always buy at the best price in Petshop.
            </p>

            <div className="flex flex-wrap items-center justify-start gap-5 mb-4 mt-2 space-x-4">
              {["Dog", "Cat", "Small Pets", "Fish", "Birds"].map((pet, index) => (
                <div key={index} className="flex items-center text-[12px] lg:text-[16px]">
                  <input
                    type="checkbox"
                    id={pet.toLowerCase()}
                    name={pet.toLowerCase()}
                    className="mr-2 custom-checkbox"
                    defaultChecked={pet === "Dog"}
                  />
                  <label htmlFor={pet.toLowerCase()} className="text-[#444444]">
                    {pet}
                  </label>
                </div>
              ))}
            </div>

            <div className="flex text-[10px] lg:text-[14px] w-full lg:w-3/4 bg-white mt-5 lg:mt-16 p-2 rounded-full">
              <input
                type="text"
                placeholder="Signup for Newsletter"
                className="pl-3 lg:pl-5 flex-grow font-bold rounded-l-full outline-none placeholder:text-black-300 opacity-50"
              />
              <button className="px-6 py-2 lg:py-3 text-[10px] lg:text-[16px] bg-[#112025] text-white font-medium rounded-full hover:bg-[#0f1d20]">
                SUBMIT
              </button>
            </div>
          </div>

          <div className="flex-shrink-0 w-full lg:w-auto relative top-[18px] lg:top-[54px] lg:ml-10 lg:mt-0 flex justify-end">
            <Image
              src={DogImage}
              alt="Dog Image"
              className="w-[156px] h-[156px] lg:w-[300px] lg:h-[300px] object-cover lg:mt-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetNewsletterSubscription;
