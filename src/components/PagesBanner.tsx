'use client'
import React, { FC } from 'react';
import { StaticImageData } from 'next/image';
import NextImage from '@/components/ui/NextImage';
import { Button } from '@/components/ui/Button';
import useRQGlobalState from '@/utils/useRQGlobalState';

type PagesBannerType = {
  subHeading: string;
  mainHeading: string;
  desc: string;
  bgImage: string;
  image: string | StaticImageData;
};

const PagesBanner: FC<PagesBannerType> = ({
  subHeading,
  mainHeading,
  desc,
  bgImage,
  image,
  ...props
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
            <h6 className="banner_SubHeading mb-2 text-[18px] font-medium text-black lg:text-[24px] xl:text-[24px] 2xl:text-[24px]">
              {subHeading}
            </h6>
            <h2 className="banner_Heading gradient_text mb-2 text-[34px]   font-bold leading-tight lg:text-[52px] xl:text-[52px] 2xl:text-[52px]">
              {mainHeading}
            </h2>
            <p className="banner_description mb-[30px] text-[14px] leading-snug text-black lg:text-[18px] xl:text-[18px] 2xl:text-[18px]">
              {desc}
            </p>
            <Button
              variant={'animated'}
              borders={'rounded'}
              className="uppercase"
              onClick={() => setModalActive(true)}
            >
              Avail flat 70% off
            </Button>
          </div>
        </div>
      </div>
      <div className="banner_image absolute right-0 top-0 hidden h-full w-1/2 xl:block 2xl:block">
        <NextImage
          src={image}
          alt="Banner Image"
          // height={415}
          // width={369}
          fill
          priority
        />
      </div>
    </section>
    // <section
    //   className="section relative bg-cover"
    //   style={{ backgroundImage: `url(${bgImage})` }}
    // >
    //   <div className="div_container">
    //     <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2">
    //       <div className="banner_content">
    //         <h6 className="banner_SubHeading mb-2 text-[18px] font-medium text-black lg:text-[24px] xl:text-[24px] 2xl:text-[24px]">
    //           {subHeading}
    //         </h6>
    //         <h2 className="banner_Heading gradient_text mb-2 text-[34px]   font-bold leading-tight lg:text-[52px] xl:text-[52px] 2xl:text-[52px]">
    //           {mainHeading}
    //         </h2>
    //         <p className="banner_description text-black text-[14px] mb-[30px] leading-snug lg:text-[18px] xl:text-[18px] 2xl:text-[18px]">{desc}</p>
    //         <Button variant={'animated'} borders={'rounded'} className='uppercase' >Avail flat 70% off</Button>
    //       </div>
    //       <div className="banner_image relative hidden xl:block 2xl:block">
    //         <NextImage
    //           src={image}
    //           alt="Banner Image"
    //           // height={415}
    //           // width={369}
    //           fill
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default PagesBanner;
