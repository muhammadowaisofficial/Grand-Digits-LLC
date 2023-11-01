'use client'
import React, { useState } from 'react';
import { PackagesType } from '@/types';
import PackageCard from '@/components/Filters/PackageCard'
import { packages } from '@/content/Packages';

const FilteredPackages = ({ service }: { service: string }) => {

  const [filteredPackages,setFilteredPackages] = useState<PackagesType[]>(packages.filter((packageData) => {
    return packageData.category === service;
  }));

  return (
    <div className="overflow-hidden py-4">
      <div className="mx-4 grid grid-cols-1 gap-7 py-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
        {filteredPackages.map((filteredpackage) => (
          <PackageCard packageData={filteredpackage} key={filteredpackage.id} />
        ))}
      </div>
    </div>
  );
};

export default FilteredPackages;
