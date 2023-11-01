'use client'
import React, { FC } from 'react';
import NextImage from '@/components/ui/NextImage';
import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/Button';
import useRQGlobalState from '@/utils/useRQGlobalState';

type AboutServicesSecType = {
  Image: string;
  styledHeading: string;
  heading: string;
  desc: string;
  mainPoint: string;
  points: string[];
};

const AboutServicesSec: FC<AboutServicesSecType> = ({
  Image,
  styledHeading,
  heading,
  desc,
  points,
  mainPoint,
}) => {
  const [modalActive, setModalActive]: any = useRQGlobalState("modal", false);
  return (
    <section className="section relative overflow-hidden">
      <div className="div_container grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        <div className="image_wrapper relative ">
          <NextImage src={Image} alt="About Services Image" width={657} height={657} />
        </div>
        <div className="info">
          <h3 className="mb-5 text-[26px] font-bold leading-tight text-[#333] xl:mb-6 xl:text-[38px] 2xl:text-[38px]">
            <span className="text-blue">{styledHeading}</span> {heading}
          </h3>
          <p className="banner_description mb-[30px] text-[16px] leading-snug text-[#333] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]">
            {desc}
          </p>
          <p className="banner_description mb-[25px] text-[16px] font-semibold leading-snug text-[#333] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]">
            {mainPoint}
          </p>
          <ul className="combo_points md:columns-2 lg:columns-2 xl:columns-2 2xl:columns-2 mb-7">
            {points.map((point,index) => (
              <li className="point mb-4  flex items-start gap-1 text-[16px]  font-medium text-dark group-hover:text-white" key={index}>
                <Icons.play className="mt-[3px] h-[15px] w-[15px] text-purpule" />
                {point}
              </li>
            ))}
          </ul>
          <Button variant={'outline'} borders={'rounded'} onClick={() => setModalActive(true)}>Sign up now to &nbsp;<span className='text-blue'>Avail 70% Discount</span></Button>
        </div>
      </div>
    </section>
  );
};

export default AboutServicesSec;
