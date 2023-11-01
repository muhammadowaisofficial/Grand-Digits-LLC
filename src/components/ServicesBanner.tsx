'use client'
import React, { FC } from 'react';
import { Button } from '@/components/ui/Button';
import NextImage from '@/components/ui/NextImage';
import useRQGlobalState from '@/utils/useRQGlobalState';

type ServicesBannerType = {
  subHeading: string;
  mainHeading: string;
  styledHeading: string;
  desc: string;
  bgImage: string;
  Image: string;
};
const ServicesBanner: FC<ServicesBannerType> = ({
  subHeading,
  mainHeading,
  styledHeading,
  desc,
  bgImage,
  Image,
}) => {
  const [modalActive, setModalActive]: any = useRQGlobalState("modal", false);
  return (
    <section
      className="section relative bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="div_container">
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2">
          <div className="banner_content">
            <h6 className="banner_SubHeading mb-2 text-[18px] font-medium text-white lg:text-[24px] xl:text-[24px] 2xl:text-[24px]">
              {subHeading}
            </h6>
            <h2 className="banner_Heading text-white mb-2 text-[34px]   font-bold leading-tight lg:text-[54px] xl:text-[54px] 2xl:text-[54px] lg:mb-5 xl:mb-5 2xl:mb-5">
              {mainHeading} &nbsp;
              <span className="text-purpule">{styledHeading}</span>
            </h2>
            <p className="banner_description mb-[30px] text-[14px] leading-snug text-white lg:text-[18px] xl:text-[18px] 2xl:text-[18px]">
              {desc}
            </p>
            <div className="ctas flex flex-col  md:flex-row  lg:flex-row xl:flex-row 2xl:flex-row  gap-5">
              <Button
                variant={'default'}
                borders={'rounded'}
                className="border-2 border-white duration-300 uppercase w-fit"
                onClick={() => setModalActive(true)}
              >
                Avail flat 70% off
              </Button>
              <Button
              variant={'animatedOutlined'}
              borders={'rounded'}
              className=" uppercase w-fit"
              onClick={() => setModalActive(true)}
            >
              Start Project
            </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="banner_image absolute right-0 top-0 hidden h-full w-1/2 xl:block 2xl:block">
        <NextImage
          src={Image}
          alt="Banner Image"
          // height={415}
          // width={369}
          fill
          priority
        />
      </div>
    </section>
  );
};

export default ServicesBanner;
