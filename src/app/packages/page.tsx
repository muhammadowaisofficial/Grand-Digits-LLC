import React from 'react';
import { NextPage } from 'next';

import NextImage from '@/components/ui/NextImage';
import PagesBanner from '@/components/PagesBanner';

import Packages from '@/components/Filters/Packages';

const Package: NextPage = () => {
  return (
    <div className="packages_page">
      {/* Packages Banner */}
      <PagesBanner
        bgImage="/images/banner-packages.png"
        image={'/images/banner-item-package.webp'}
        mainHeading="Customer Base because of our High-End Work"
        subHeading="We are Loved & Supported by our"
        desc="We highly regard our customers reviews as it helps us to do better in the future and apply any changes in our work processes if required"
      />

      {/* Packages  */}
      <section className="section relative ">
        <div className="div_container">
          <div className="heading">
            <h6 className="section-subheading text-center text-blue">
            Our Price Model
            </h6>
            <h3 className="section_mainheading text-center">
            Our Pricing Packages Have been Designed for Your Success.
            </h3>
            <p className="section_description text-center">
            Our packages are pocket-friendly and tailored to your specific needs.
            </p>
          </div>
          <Packages />
          
        </div>
        <div className="Section_Spinners absolute bottom-16 right-10 -z-[1]  w-fit animate-spin">
          <NextImage
            src={'/images/section_spin_elem.png'}
            alt="Section Right Trangles Spinner"
            width={100}
            height={115}
          />
        </div>
      </section>
      
    </div>
  );
};

export default Package;
