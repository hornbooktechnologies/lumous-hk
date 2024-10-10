import React from "react";
import { IExploreCardProps } from "@/types/types";
import Instagram from "@/assets/images/instagram-color.png";
import defaultImage from "@/assets/images/no-image.png";
import Image from "next/image";

const ExploreCard: React.FC<IExploreCardProps> = ({
  img,
  multiData = false,
}) => {
  return (
    <div className="w-[300px] lg:w-full bg-white rounded-lg flex flex-col overflow-hidden">
      <Image
        src={img || defaultImage}
        alt="Post Image"
        className="object-cover w-full"
      />
      <div className="p-4">
        {!multiData && (
          <p className="mb-2 text-sm text-black-300">
            Simply tag <span className="font-bold">@pet food</span> in your
            caption on Instagram or Twitter to be featured on our website.
          </p>
        )}
        <div className="flex justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Instagram User
            </p>
            <p className="text-xs text-gray-500">48 min ago</p>
          </div>
          <Image
            src={Instagram}
            alt="Instagram"
            className="mt-2 w-8 h-8 text-xl text-pink-600"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
