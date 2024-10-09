import React from "react";
import Image from "next/image";
import Instagram from "@/app/img/instagram-color.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import defaultImage from "@/app/img/no-image.png";

interface ExploreCardProps {
  img?: string | StaticImport;
  multiData?: boolean;
}

const ExploreCard: React.FC<ExploreCardProps> = ({
  img,
  multiData = false,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden flex flex-col w-[300px] lg:w-full">
      <Image
        src={img || defaultImage}
        alt="Post Image"
        className="w-full object-cover"
      />
      <div className="p-4">
        {!multiData && (
          <p className="text-black-300 text-sm mb-2">
            Simply tag <span className="font-bold">@pet food</span> in your
            caption on Instagram or Twitter to be featured on our website.
          </p>
        )}
        <div className="flex justify-between">
          <div>
            <p className="text-gray-900 font-semibold text-sm">
              Instagram User
            </p>
            <p className="text-gray-500 text-xs">48 min ago</p>
          </div>
          <Image
            src={Instagram}
            alt="Instagram"
            className="text-pink-600 text-xl mt-2 w-8 h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
