'use client';
import React, { FC, useEffect, useState } from 'react';
import { CategorizedServicesType, servicesProps } from '@/types';
import NextImage from '@/components/ui/NextImage';
import { Icons } from '@/components/Icons';
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

const ServicesTypes: FC<servicesProps> = ({
  categorizedServices,
  // serviceGallery,
  defaultService,
}) => {
  const [galleryOpen, setGalleryOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedServiceData, setSelectedServiceData] = useState<
    CategorizedServicesType[]
  >([]);

  useEffect(() => {
    // For Services Tabs Filter
    setSelectedService(defaultService);
    // Changing Selected Service Data and Gallery
    setSelectedServiceData(
      categorizedServices.filter(
        (serviceData) => serviceData.serviceName === defaultService
      )
    );
  }, []);

  const changeService = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSelectedService(e.currentTarget.value);
    setSelectedServiceData(
      categorizedServices.filter(
        (serviceData) => serviceData.serviceName === e.currentTarget.value
      )
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
    <div className="services_types_wrapper w-full rounded-2xl shadow-2xl">
      {/* Services Selection Tabs */}
      <div className="tabs flex w-full flex-wrap items-center justify-around rounded-t-2xl bg-[#0E0D23] px-4 py-5">
        {categorizedServices.map((service) => (
          <button
            onClick={(e) => changeService(e)}
            value={service.serviceName}
            id={service.id}
            key={service.id}
            className={` ${
              selectedService === service.serviceName
                ? 'text-purpule'
                : ' text-white'
            } flex cursor-pointer items-center justify-center p-2 px-5 py-[8px] hover:text-purpule`}
            aria-label="service-filter-button"
          >
            {service.serviceName}
          </button>
        ))}
      </div>

      {selectedServiceData.map((service) => (
        <div className="service_wrapper p-4" key={service.id}>
          <div className="service_info">
            <h4 className="service_name mb-5 text-[30px] font-bold text-purpule ">
              {service.serviceName}
            </h4>
            <p className="service_description mb-4 text-[18px] leading-snug text-[#666]">
              {service.serviceDesc}
            </p>
          </div>

          {/* Gallery */}
          <div className="hidden grid-cols-1 gap-3 py-3 lg:grid-cols-2 xl:grid xl:grid-cols-4 2xl:grid 2xl:grid-cols-4">
            {service.serviceGallery.map((gallery) => (
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
              slides={service.serviceGallery.map(({ image: src, ...rest }) => ({
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
          {service.serviceGallery.map((gallery) => (
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
      ))}
    </div>
  );
};

export default ServicesTypes;
