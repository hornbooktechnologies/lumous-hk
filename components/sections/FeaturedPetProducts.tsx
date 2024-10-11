"use client";
import React from "react";
import Image from "next/image";
import { FullRoundedButton } from "@/components/shared/ButtonmdRounded";
import DogFoodBanner from "@/assets/images/premium-organic-dog-food-banner.png";

const FeaturedPetProducts = () => {
  return (
    <div className="mx-auto py-8 mt-8 max-w-8xl">
      <div
        className="relative hidden w-full h-[600px] bg-center bg-cover lg:block"
        style={{ backgroundImage: "url('/images/banner.png')" }}
      >
        <div className="h-full flex items-center justify-end pr-16">
          <div className="space-y-6 max-w-md text-right">
            <h1 className="text-[36px] font-bold text-left text-black-300">
              Dogs do speak, but only to those who know how to listen.
            </h1>
            <p className="text-left font-normal text-[14px] text-black-300">
              Sweet roll ice cream powder candy canes ice cream donut pudding
              biscuit ice cream. Cupcake tootsie roll sugar plum danish pudding
              fruitcake cheesecake.
            </p>
            <FullRoundedButton title={"EXPLORE NOW"} />
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <Image
          src={DogFoodBanner}
          alt="Banner Image"
          className="w-full rounded-lg object-cover"
        />
        <div className="px-4 mt-4">
          <h1 className="pr-10 text-left lg:text-[16px] lg:leading-[24px] font-bold text-black-300">
            Dogs do speak, but only to those who know how to listen.
          </h1>
          <p className="pr-8 text-left text-[10px] font-normal text-black-300">
            Sweet roll ice cream powder candy canes ice cream donut pudding
            biscuit ice cream. Cupcake tootsie roll sugar plum danish pudding
            fruitcake cheesecake.
          </p>
          <div className="flex mt-4 lg:justify-center uppercase">
            <FullRoundedButton title={"Explore Now"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPetProducts;
