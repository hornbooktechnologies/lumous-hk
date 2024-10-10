import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import defaultImage from "@/assets/images/no-image.png";

interface FeatureCardProps {
  title?: string;
  subTitle?: string;
  img?: string | StaticImport;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, subTitle, img }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col w-[300px] lg:w-[390px] h-[240px]">
      <div className="text-4xl text-teal-500 mb-4 shadow-lg w-[40px] h-[40px] flex justify-center rounded-lg items-center">
        <Image src={img || defaultImage} width={20} height={20} alt="Logo" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-black-50">{title}</h3>
      <p className="text-gray-600">{subTitle}</p>
    </div>
  );
};

export default FeatureCard;
