import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import HealthCareProducts from "@/components/sections/HealthCareProducts";
import Features from "./Features";
import PetCommunityShowcase from "./PetCommunityShowcase";
import PetNewsletterSubscription from "./PetNewsletterSubscription";
import BestSellingProducts from "./BestSellingProducts";
import FeaturedPetProducts from "./FeaturedPetProducts";
import FeaturedPetProductsSlider from "./FeaturedPetProductsSlider";

const Dashboard: React.FC = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <HealthCareProducts />
      <FeaturedPetProducts />
      <FeaturedPetProductsSlider />
      <BestSellingProducts />
      <Features />
      <PetCommunityShowcase />
      <PetNewsletterSubscription />
    </div>
  );
};

export default Dashboard;
