import React from "react";
import Image from "next/image";
import Instagram from "@/assets/images/instagram-color.png";
import Heart from "@/assets/images/heart_fill.png";
import Reactangle from "@/assets/images/Rectangle-1.png";
import Reactangle1 from "@/assets/images/Rectangle-2.png";
import Reactangle2 from "@/assets/images/Rectangle-3.png";
import Reactangle3 from "@/assets/images/Rectangle-4.png";
import ExploreCard from "../common/ExploreCard";

const ExplorePostSection = () => {
  return (
    <div className="bg-white py-16 px-6 lg:px-20">
      <div className="container mx-auto">
        <h2 className="text-center font-medium text-[30px] leading-[45px] text-gray-800 mb-4">
          Explore #Dubidoo
        </h2>
        <p className="text-center text-gray-600 mb-12 font-normal text-[14px] leading-[21px]">
          Simply tag <span className="font-bold">@pet food</span> in your
          caption on Instagram or Twitter to be featured on our website.
        </p>
        <div className="overflow-x-auto w-full sm:overflow-visible">
          <div className="inline-flex lg:grid lg:grid-cols-2 lg:grid-cols-4 gap-6">
            <ExploreCard img={Reactangle3} />
            <div className="hidden lg:block">
              <div className="hidden bg-white rounded-lg overflow-hidden  lg:flex flex-col justify-center">
                <div className="py-8 px-4 bg-[#195F6B29]">
                  <Image
                    src={Heart}
                    width={30}
                    height={30}
                    alt="Heart"
                    className="text-pink-500 mb-4 mx-auto"
                  />

                  <p className="text-center font-normal text-[24px] leading-[36px] text-green-200 mb-4">
                    "I Think Having An Animal In Your Life Makes You A Better
                    Human."
                  </p>
                </div>
                <div className="flex justify-between py-2">
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

              <ExploreCard img={Reactangle2} multiData={true} />
            </div>

            <ExploreCard img={Reactangle1} />

            <div className="hidden lg:block">
              <ExploreCard img={Reactangle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePostSection;
