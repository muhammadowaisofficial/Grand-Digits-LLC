'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { subCategoriesType } from '@/types';
import { subCategories } from '@/content/SubCategories';
import NextImage from '@/components/ui/NextImage';
import { Carousel } from '@/components/Slider';

const Categories = () => {
  const categories = [
    {
      id: '1',
      name: 'Logo Design',
    },
    {
      id: '2',
      name: 'Website Design',
    },
    {
      id: '3',
      name: 'Digital Marketing',
    },
    {
      id: '4',
      name: 'Mobile Apps',
    },
    {
      id: '5',
      name: 'Animation',
    },
    {
      id: '6',
      name: 'Marketing Collateral',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [filteredSubCategories, setFilteredSubCategories] = useState<
    subCategoriesType[]
  >([]);

  useEffect(() => {
    // Setting Default Category to Logo Design
    setSelectedCategory('Logo Design');
    // Setting Default Sub Categories
    const defaultSubCategories = subCategories.filter(
      (data) => data.cat === 'Logo Design'
    );
    setFilteredSubCategories(defaultSubCategories);
  }, []);

  const changeCategory = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const category: string = e.currentTarget.value;
    setSelectedCategory(category);
    setFilteredSubCategories(
      subCategories.filter((data) => data.cat === category)
    );
  };

  // Slider Controls
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 680 },
      items: 2,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 680, min: 0 },
      items: 1,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };

  return (
    <div className="overflow-hidden py-6">
      {/* Categories Filter */}
      <div className="flex flex-wrap items-center justify-around  py-3">
        {categories.map((option) => (
          <button
            className={`${
              selectedCategory === option.name
                ? ' bg-gradient-to-r from-blue to-purpule text-white'
                : 'bg-transparent'
            } my-1 flex cursor-pointer items-center justify-center px-5 py-1 text-[16px] font-semibold hover:bg-gradient-to-r hover:from-blue hover:to-purpule hover:text-white `}
            value={option.name}
            key={option.id}
            onClick={(e) => changeCategory(e)}
          >
            {option.name}
          </button>
        ))}
      </div>

      {/* SubCategories */}
      <div className="hidden xl:grid 2xl:grid grid-cols-1 gap-3 py-3 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
        {filteredSubCategories.map((subcategory) => (
          <div
            className="subCategory_box flex w-full  cursor-pointer flex-col items-center justify-center border border-lightborder bg-white p-10 duration-500 hover:shadow-2xl"
            key={subcategory.id}
          >
            <Link href={subcategory.link}>
              <div className="relative aspect-square h-[100px] w-[160px]">
                <NextImage
                  src={subcategory.image}
                  alt={subcategory.name}
                  fill
                />
              </div>
              <p className="mt-6 text-center text-[18px] font-semibold text-black">
                {subcategory.name}
              </p>
            </Link>
          </div>
        ))}
      </div>

      {/* SubCategories Slider */}
      <div className="relative xl:hidden 2xl:hidden">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          renderDotsOutside
          responsive={responsive}
          // ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== 'mobile' ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          // customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px p-[20px] pb-[40px]"
        >
          {filteredSubCategories.map((subcategory) => (
          <div
            className="subCategory_box flex w-full  cursor-pointer flex-col items-center justify-center border border-lightborder bg-white p-10 duration-500 hover:shadow-2xl"
            key={subcategory.id}
          >
            <Link href={subcategory.link}>
              <div className="relative aspect-square h-[100px] w-[160px]">
                <NextImage
                  src={subcategory.image}
                  alt={subcategory.name}
                  fill
                />
              </div>
              <p className="mt-6 text-center text-[18px] font-semibold text-black">
                {subcategory.name}
              </p>
            </Link>
          </div>
        ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Categories;
