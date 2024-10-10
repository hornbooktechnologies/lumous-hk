import React from "react";
import Image from "next/image";
import Instagram from "@/assets/images/instagram-color.png";
import Heart from "@/assets/images/heart_fill.png";
import FluffyDogInOrangePajamas from "@/assets/images/fluffy-dog-in-orange-pajamas.png";
import PuppiesInPajamas from "@/assets/images/puppies-in-pajamas.png";
import DogBoneTreatsInBowl from "@/assets/images/dog-bone-treats-in-bowl.png";
import PuppyInDuckPajamas from "@/assets/images/puppy-in-duck-pajamas.png";

import ExploreCard from "../common/ExploreCard";

const ExplorePetPosts = () => {
  return (
    <div className="px-6 py-16 lg:px-20 bg-white">
      <div className="container mx-auto">
        <h2 className="mb-4 text-[30px] leading-[45px] font-medium text-center text-gray-800">
          Explore #Dubidoo
        </h2>
        <p className="mb-12 text-[14px] leading-[21px] font-normal text-center text-gray-600">
          Simply tag <span className="font-bold">@pet food</span> in your caption on Instagram or Twitter to be featured on our website.
        </p>
        <div className="w-full overflow-x-auto sm:overflow-visible">
          <div className="inline-flex gap-6 lg:grid lg:grid-cols-2 lg:grid-cols-4">
            <ExploreCard img={FluffyDogInOrangePajamas} />
            <div className="hidden lg:block">
              <div className="hidden flex-col justify-center lg:flex bg-white rounded-lg overflow-hidden">
                <div className="py-8 px-4 bg-[#195F6B29]">
                  <Image
                    src={Heart}
                    width={30}
                    height={30}
                    alt="Heart"
                    className="mb-4 mx-auto text-pink-500"
                  />
                  <p className="mb-4 text-[24px] leading-[36px] text-center text-green-200 font-normal">
                    "I Think Having An Animal In Your Life Makes You A Better Human."
                  </p>
                </div>
                <div className="flex justify-between py-2">
                  <div>
                    <p className="font-semibold text-sm text-gray-900">
                      Instagram User
                    </p>
                    <p className="text-xs text-gray-500">48 min ago</p>
                  </div>
                  <Image
                    src={Instagram}
                    alt="Instagram"
                    className="mt-2 w-8 h-8 text-pink-600 text-xl"
                  />
                </div>
              </div>

              <ExploreCard img={PuppyInDuckPajamas} multiData={true} />
            </div>

            <ExploreCard img={DogBoneTreatsInBowl} />

            <div className="hidden lg:block">
              <ExploreCard img={PuppiesInPajamas} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePetPosts;
