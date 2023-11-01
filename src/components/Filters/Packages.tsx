'use client'
import { categories } from '@/content/Categories';
import { packages } from '@/content/Packages';
import { PackagesType } from '@/types';
import React, { useEffect, useState } from 'react';
import PackageCard from './PackageCard';

const Packages = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [filteredPackages, setFilteredPackages] = useState<PackagesType[]>([]);

  useEffect(() => {
    // Setting Default Category to Logo Design
    setSelectedCategory('Logo Design');
    // Setting Default Sub Categories
    const defaultPackages = packages.filter(
      (data) => data.category === 'Logo Design'
    );
    setFilteredPackages(defaultPackages);
  }, []);

  const changeCategory = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const category: string = e.currentTarget.value;
    setSelectedCategory(category);
    setFilteredPackages(packages.filter((data) => data.category === category));
  };

  return (
    <div className="overflow-hidden py-6">
      {/* Categories Filter */}
      <div className="flex flex-wrap items-center justify-center gap-x-6 py-3 mb-5">
        {categories.map((option) => (
          <button
            className={`${
              selectedCategory === option.name
                ? ' bg-gradient-to-r from-blue to-purpule text-white'
                : 'bg-transparent'
            } my-1 flex cursor-pointer items-center justify-center  px-5 py-1 text-[14px] rounded-t-sm  hover:bg-gradient-to-r hover:from-blue hover:to-purpule hover:text-white `}
            value={option.name}
            key={option.id}
            onClick={(e) => changeCategory(e)}
          >
            {option.name}
          </button>
        ))}
      </div>

      {/* Packages */}
      <div className="py-6 mx-4 grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
        {filteredPackages.map((filteredpackage) => (
          <PackageCard packageData={filteredpackage} key={filteredpackage.id} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
