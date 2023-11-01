'use client'
import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';

import { PackagesType } from '@/types';
import { packages } from '@/content/Packages';

import NextImage from '@/components/ui/NextImage';
import PagesBanner from '@/components/PagesBanner';

import PackageCard from '@/components/Filters/PackageCard';

const ComboPackages: NextPage = () => {
  const [filteredPackages, setFilteredPackages] = useState<PackagesType[]>([]);

  useEffect(() => {
    const defaultPackages = packages.filter(
      (data) => data.category === 'Combo'
    );
    setFilteredPackages(defaultPackages);
  }, []);
  return (
    <div className="combopackages_page">
      {/* Combo Packages Banner */}
      <PagesBanner
        bgImage="/images/banner-combo-package.png"
        image={'/images/banner-item-combo-package.png'}
        mainHeading="Customer Base because of our High-End Work"
        subHeading="We are Loved & Supported by our"
        desc="We highly regard our customers' reviews as it helps us to do better in the future and apply any changes in our work processes if required"
      />

      {/* Packages  */}
      <section className="section relative ">
        <div className="div_container">
          <div className="heading">
            <h6 className="section-subheading text-center">Pricing Plan</h6>
            <h3 className="section_mainheading text-center">
              That Works For Everyone!
            </h3>
            <p className="section_description text-center">
              We believe in delivering customized and distinguishing services at
              competitive price models.
            </p>
          </div>
          <div className="overflow-hidden py-4">
            {/* Packages */}
            <div className="mx-4 grid grid-cols-1 gap-7 py-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
              {filteredPackages.map((filteredpackage) => (
                <PackageCard
                  packageData={filteredpackage}
                  key={filteredpackage.id}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="Section_Spinners absolute top-3 left-0 -z-[1]  w-fit">
          <NextImage
            src={'/images/element-6.webp'}
            alt="Section Box Spiner bg"
            width={241}
            height={282}
          />
        </div>
        <div className="Section_Spinners absolute -top-[300px] right-0 -z-[1]  w-fit ">
          <NextImage
            src={'/images/element-7.png'}
            alt="Section Left Triangles bg"
            width={546}
            height={839}
          />
        </div>
        <div className="Section_Spinners absolute top-16 left-10 -z-[1]  w-fit animate-spin">
          <NextImage
            src={'/images/section_spin_elem2.png'}
            alt="Section Box Spiner"
            width={100}
            height={115}
          />
        </div>
        <div className="Section_Spinners absolute top-16 right-10 -z-[1]  w-fit animate-spin">
          <NextImage
            src={'/images/section_spin_elem.png'}
            alt="Section Left Trangles Spiner"
            width={100}
            height={115}
          />
        </div>
      </section>
    </div>
  );
};

export default ComboPackages;
