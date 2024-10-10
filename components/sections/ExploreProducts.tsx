"use client";
import React from "react";
import Image from "next/image";
import { ButtonFullRounded } from "@/components/common/ButtonmdRounded";
import bannermb from "@/assets/images/bannermb.png";

const ExploreProducts = () => {
  return (
    <div className="max-w-8xl mx-auto py-8 mt-8">
      <div
        className="relative w-full h-[600px] bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: "url('/assets/images/banner.png')" }}
      >
        <div className="flex items-center justify-end h-full pr-16">
          <div className="max-w-md text-right space-y-6">
            <h1 className="text-[36px] font-bold text-black-300 text-left">
              Dogs do speak, but only to those who know how to listen.
            </h1>
            <p className="text-[14px] text-black-300 font-normal text-left">
              Sweet roll ice cream powder candy canes ice cream donut pudding
              biscuit ice cream. Cupcake tootsie roll sugar plum danish pudding
              fruitcake cheesecake.
            </p>
            <ButtonFullRounded title={"EXPLORE NOW"} />
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <Image
          src={bannermb}
          alt="Banner Image"
          className="rounded-lg object-cover w-full"
        />
        <div className="px-4 mt-4">
          <h1 className="text-[16px] font-bold text-black-300 text-left pr-10">
            Dogs do speak, but only to those who know how to listen.
          </h1>
          <p className="text-[10px] text-black-300 font-normal text-left pr-8">
            Sweet roll ice cream powder candy canes ice cream donut pudding
            biscuit ice cream. Cupcake tootsie roll sugar plum danish pudding
            fruitcake cheesecake.
          </p>
          <div className="flex lg:justify-center mt-4 uppercase">
            <ButtonFullRounded title={"Explore Now"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreProducts;
