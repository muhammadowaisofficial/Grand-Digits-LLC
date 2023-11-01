'use client'
import React, { useEffect, useState } from 'react';
import NextImage from '@/components/ui/NextImage';
import { GalleryType, LightBoxImagesType } from '@/types';
import { Galleries } from '@/content/Galleries';

import {
  Lightbox,
  Counter,
  Slideshow,
  Captions,
  Fullscreen,
  Thumbnails,
  Video,
  Zoom,
} from '@/components/LightBox';
import { Carousel } from '@/components/Slider';
import { Icons } from '@/components/Icons';

const Gallery = () => {
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
      name: 'Ecommerce Solutions',
    },
    {
      id: '4',
      name: 'Animation',
    },
    {
      id: '5',
      name: 'Illustration',
    },
    {
      id: '6',
      name: 'Marketing Collateral',
    },
  ];

  const [galleryOpen, setGalleryOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [filteredGalley, setFilteredGalley] = useState<GalleryType[]>([]);
  const [lightBoxData, setLightBoxData] = useState<LightBoxImagesType>([]);

  useEffect(() => {
    // Setting Default Category to Logo Design
    setSelectedCategory('Logo Design');
    // Setting Default Gallery
    const defaultGallery = Galleries.filter(
      (data) => data.cat === 'Logo Design'
    );
    setFilteredGalley(defaultGallery);
  }, []);

  const changeCategory = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const category: string = e.currentTarget.value;
    setSelectedCategory(category);
    setFilteredGalley(Galleries.filter((data) => data.cat === category));
  };

  // Slider Controls
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 540 },
      items: 2,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 1,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };

  return (
    <div className=" overflow-hidden py-6">
      {/* Categories Filter */}
      <div className="div_container flex flex-wrap items-center justify-around  py-3">
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

      {/* Gallery */}
      <div className="hidden xl:grid 2xl:grid grid-cols-1 gap-3 py-3 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
        {filteredGalley.map((gallery) => (
          <div
            className="gallery_box flex w-full  cursor-pointer flex-col items-center justify-center border border-lightborder bg-white "
            key={gallery.id}
          >
            <div className="group relative  aspect-square h-full w-full">
              <NextImage
                src={gallery.image}
                alt={gallery.name}
                fill
                className="object-cover object-top"
              />
              <a
                onClick={() => setGalleryOpen(true)}
                className="absolute bottom-0 right-0 flex  h-0 w-0 items-center justify-center bg-overlay duration-700 group-hover:h-full group-hover:w-full"
              >
                <Icons.plus className="inset-x-0 h-12 w-12 text-white" />
              </a>
            </div>
          </div>
        ))}
        <Lightbox
          open={galleryOpen}
          close={() => setGalleryOpen(false)}
          slides={filteredGalley.map(({ image: src, ...rest }) => ({
            src,
            ...rest,
          }))}
          plugins={[
            Captions,
            Fullscreen,
            Slideshow,
            Thumbnails,
            Video,
            Zoom,
            Counter,
          ]}
        />
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
          itemClass="carousel-item-padding-40-px pb-[40px] px-[16px]"
        >
          {filteredGalley.map((gallery) => (
            <div
              className="gallery_box flex w-full  cursor-pointer flex-col items-center justify-center border border-lightborder bg-white "
              key={gallery.id}
            >
              <div className="group relative  aspect-square h-full w-full">
                <NextImage
                  src={gallery.image}
                  alt={gallery.name}
                  fill
                  className="object-cover object-top"
                />
                <a
                  onClick={() => setGalleryOpen(true)}
                  className="absolute bottom-0 right-0 flex  h-0 w-0 items-center justify-center bg-overlay duration-700 group-hover:h-full group-hover:w-full"
                >
                  <Icons.plus className="inset-x-0 h-12 w-12 text-white" />
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
