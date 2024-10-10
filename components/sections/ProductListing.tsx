import React from "react";
import { products } from "@/app/constant";
import ProductCard from "@/components/common/ProductCard";

const ProductListing = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10 flex items-center justify-between lg:mb-16">
        <div>
          <h4 className="text-gray-300 text-[10px] lg:text-[16px] uppercase opacity-[50%] mb-2">
            Best From Our Clients Review
          </h4>
          <h2 className="text-black-300 text-[16px] lg:text-[30px] font-bold">
            Best Selling Product Of The Month
          </h2>
        </div>
        <a
          href="#"
          className="font-semibold text-sm text-black-300 hidden lg:block opacity-[50%]"
        >
          View All Product &rarr;
        </a>
      </div>

      <div className="scrollbar-custom max-w-full overflow-x-auto lg:mt-4">
        <div className="flex space-x-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <br />
      </div>
    </div>
  );
};

export default ProductListing;
