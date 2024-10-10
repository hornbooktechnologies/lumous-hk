import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import HealthCareProducts from "@/components/sections/HealthCareProducts";
import Features from "./Features";
import ExplorePetPosts from "./ExplorePetPosts";
import PetNewsletterSubscription from "./PetNewsletterSubscription";
import ProductListing from "./ProductListing";
import FeaturedPetProducts from "./FeaturedPetProducts";
import FeaturedPetProductsSlider from "./FeaturedPetProductsSlider";

const Dashboard: React.FC = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <HealthCareProducts />
      <FeaturedPetProducts />
      <FeaturedPetProductsSlider />
      <ProductListing />
      <Features />
      <ExplorePetPosts />
      <PetNewsletterSubscription />
    </div>
  );
};

export default Dashboard;
