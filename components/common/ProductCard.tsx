import React from "react";
import Image, { StaticImageData } from "next/image";
import StarIcon from "./StarIcon";

interface ProductCardProps {
  image: StaticImageData;
  title: string;
  price: string | number;
  oldPrice?: string | number;
  rating: number;
  discount?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  oldPrice,
  rating,
  discount,
}) => {
  return (
    <div className="w-[180px] lg:w-[230px] flex-shrink-0 mx-2 bg-white rounded-lg p-4 relative">
      {discount && (
        <div className="absolute top-2 left-2 font-bold lg:font-normal text-black-300 bg-yellow-50 p-2 px-4 rounded-md text-[12px] lg:text-[16px]">
          {discount}
          <span className="flex justify-end font-normal text-black-300">
            off
          </span>
        </div>
      )}

      <div className="w-full h-40 flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      <div className="flex items-center justify-center mt-5 mb-2">
        {[...Array(5)].map((_, index) => (
          <StarIcon key={index} filled={index < rating} />
        ))}
      </div>

      <h3 className="text-center text-[10px] lg:text-[16px] font-bold text-black-300 mt-3 mb-3 opacity-[80%]">
        {title}
      </h3>

      <div className="text-center text-[10px] lg:text-[16px] font-bold text-black-300">
        {price} -{" "}
        <span className="line-through font-normal text-black-300 opacity-[80%]">
          {oldPrice}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
