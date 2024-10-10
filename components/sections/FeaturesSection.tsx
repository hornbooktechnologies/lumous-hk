import React from 'react';
import Tree from '@/assets/images/Vector 164.png';
import Truck from '@/assets/images/Group 5719.png';
import Flexible from '@/assets/images/Order@1x.png';
import FeatureCard from '../common/FeatureCard';

const FeaturesSection = () => {
  return (
    <div className='bg-blue-50 feature-bg py-10 lg:py-16'>
      <div className='container mx-auto px-4 overflow-x-auto w-full'>
        <div className='inline-flex lg:flex lg:flex-row justify-center space-x-6 lg:space-y-0 lg:space-x-6 ml-4 mr-6'>
          <FeatureCard
            title='Fresh Product'
            subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ultrices turpis proin nulla.'
            img={Tree}
          />
          <FeatureCard
            title='Fast Shipping, Always'
            subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ultrices turpis proin nulla.'
            img={Truck}
          />
          <FeatureCard
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

export default FeaturesSection;
