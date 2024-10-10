import React from "react";
import Features from "./Features";
import HeroSection from "@/components/sections/HeroSection";
import VeterinarySection from "@/components/sections/VeterinarySection";
import ExplorePostSection from "./ExplorePostSection";
import NewsletterSection from "./NewsletterSection";
import ProductListSection from "../sections/ProductListSection";
import ExploreProducts from "../sections/ExploreProducts";
import PetSlider from "./PetSlider";

const Dashboard: React.FC = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <VeterinarySection />
      <ExploreProducts />
      <PetSlider />
      <ProductListSection />
      <Features />
      <ExplorePostSection />
      <NewsletterSection />
    </div>
  );
};

export default Dashboard;
