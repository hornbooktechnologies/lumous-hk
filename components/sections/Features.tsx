import React from 'react';
import Tree from '@/assets/images/Vector 164.png';
import Truck from '@/assets/images/Group 5719.png';
import Flexible from '@/assets/images/Order@1x.png';
import Image from "next/image";
import { IInfoBlock } from '@/types/types'
import defaultImage from "@/assets/images/no-image.png";

const InfoBlock: React.FC<IInfoBlock> = ({ title, subTitle, img }) => {
  return (
    <div className="h-[240px] rounded-lg shadow-lg flex p-8 flex-col bg-white w-[300px] lg:w-[390px]">
      <div className="shadow-lg flex justify-center text-4xl text-teal-500 items-center rounded-lg mb-4 w-[40px] h-[40px]">
        <Image src={img || defaultImage} width={20} height={20} alt="Logo" />
      </div>
      <h3 className="text-black-50 text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{subTitle}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className='py-10 feature-bg lg:py-16 bg-blue-50'>
      <div className='container overflow-x-auto lg:overflow-x-hidden px-4 mx-auto w-full'>
        <div className='inline-flex space-x-6 justify-center lg:space-x-6 lg:space-y-0 lg:flex-row ml-4 mr-6'>
          <InfoBlock
            title='Fresh Product'
            subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ultrices turpis proin nulla.'
            img={Tree}
          />
          <InfoBlock
            title='Fast Shipping, Always'
            subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ultrices turpis proin nulla.'
            img={Truck}
          />
          <InfoBlock
            title='Flexible Delivery'
            subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ultrices turpis proin nulla.'
            img={Flexible}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
