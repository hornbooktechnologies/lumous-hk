"use client";
import React from "react";
import ProductCard from "@/components/common/ProductCard";

const products = [
  {
    image: "/images/product4.png",
    title: "Homestead Turkey & Ancient Grains Dry Dog Food",
    price: "$35.99",
    oldPrice: "$42.99",
    rating: 3,
  },
  {
    image: "/images/product5.png",
    title: "Homestead Turkey & Ancient Grains Dry Dog Food",
    price: "$35.99",
    oldPrice: "$42.99",
    rating: 3,
    discount: "20%",
  },
  {
    image: "/images/product1.png",
    title: "Homestead Turkey & Ancient Grains Dry Dog Food",
    price: "$35.99",
    oldPrice: "$42.99",
    rating: 4,
  },
  {
    image: "/images/product2.png",
    title: "Homestead Turkey & Ancient Grains Dry Dog Food",
    price: "$35.99",
    oldPrice: "$42.99",
    rating: 3,
    discount: "20%",
  },
  {
    image: "/images/product3.png",
    title: "Homestead Turkey & Ancient Grains Dry Dog Food",
    price: "$35.99",
    oldPrice: "$42.99",
    rating: 4,
  },
  {
    image: "/images/product1.png",
    title: "Homestead Turkey & Ancient Grains Dry Dog Food",
    price: "$35.99",
    oldPrice: "$42.99",
    rating: 4,
    discount: "20%",
  },
];

const ProductListSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="flex justify-between items-center mb-10 lg:mb-16">
        <div>
          <h4 className="text-[10px] lg:text-[16px] uppercase mb-2 text-gray-300 opacity-[50%]">
            Best From Our Clients Review
          </h4>
          <h2 className="text-[16px] lg:text-[30px] font-bold text-black-300">
            Best Selling Product Of The Month
          </h2>
        </div>
        <a
          href="#"
          className="text-black-300 text-sm font-semibold hidden lg:block opacity-[50%]"
        >
          View All Product &rarr;
        </a>
      </div>

      <div className="max-w-full overflow-x-auto scrollbar-custom lg:mt-4">
        <div className="flex space-x-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default ProductListSection;
