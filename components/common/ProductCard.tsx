import React from "react";
import Image from "next/image";
import { ProductCardProps } from "@/types/types";
import StarIcon from "./StarIcon";

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  oldPrice,
  rating,
  discount,
}) => {
  return (
    <div className="relative flex-shrink-0 w-[180px] lg:w-[230px] rounded-lg bg-white p-4 mx-2">
      {discount && (
        <div className="absolute top-2 left-2 bg-yellow-50 p-2 px-4 font-bold text-[12px] lg:text-[16px] text-black-300 rounded-md lg:font-normal">
          {discount}
          <span className="flex justify-end text-black-300 font-normal">
            off
          </span>
        </div>
      )}

      <div className="flex items-center justify-center w-full h-40">
        <Image
          src={image}
          alt={title}
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      <div className="flex justify-center items-center mt-5 mb-2">
        {[...Array(5)].map((_, index) => (
          <StarIcon key={index} filled={index < rating} />
        ))}
      </div>

      <h3 className="text-[10px] lg:text-[16px] text-black-300 text-center font-bold mt-3 mb-3 opacity-[80%]">
        {title}
      </h3>

      <div className="text-[10px] lg:text-[16px] text-center font-bold text-black-300">
        {price} -{" "}
        <span className="line-through text-black-300 font-normal opacity-[80%]">
          {oldPrice}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
