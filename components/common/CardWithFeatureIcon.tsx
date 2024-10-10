import React from "react";
import { IFeatureCardProps } from "@/types/types";
import defaultImage from "@/assets/images/no-image.png";
import Image from "next/image";

const CardWithFeatureIcon: React.FC<IFeatureCardProps> = ({ title, subTitle, img }) => {
  return (
    <div className="flex flex-col bg-white w-[300px] lg:w-[390px] h-[240px] p-8 rounded-lg shadow-lg">
      <div className="flex items-center justify-center w-[40px] h-[40px] text-teal-500 text-4xl mb-4 shadow-lg rounded-lg">
        <Image src={img || defaultImage} width={20} height={20} alt="Logo" />
      </div>
      <h3 className="mb-2 text-black-50 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{subTitle}</p>
    </div>
  );
};

export default CardWithFeatureIcon;
