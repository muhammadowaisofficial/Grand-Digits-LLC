'use client'
import React from 'react';
import { Icons } from '@/components/Icons';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import NextImage from '@/components/ui/NextImage';
import useRQGlobalState from '@/utils/useRQGlobalState';

const ComboSec = () => {
  const [modalActive, setModalActive]: any = useRQGlobalState("modal", false);
  return (
    <section className="section overflow-hidden relative border border-b-lightborder bg-garysec lg:py-20 xl:py-20 2xl:py-20">
    <div className="div_container flex flex-col justify-between  xl:flex-row 2xl:flex-row">
      <div className="combo_info mb-5">
        <h2 className="mb-3 font-extrabold  leading-tight text-blue lg:text-[50px] xl:text-[50px] 2xl:text-[50px]">
          All in one
        </h2>
        <h2 className="gradient_text mb-2 text-[62px] font-extrabold uppercase leading-[1] lg:text-[133px] xl:text-[133px] 2xl:text-[133px]">
          Combo
        </h2>
        <p className="mb-7 text-[22px] font-medium leading-snug text-black ">
        Grand Digits offers branding solutions to expand your reach and <br/> establish an online presence
        </p>
        <ul className="combo_points md:columns-2 lg:columns-2 xl:columns-2 2xl:columns-2">
          <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
            <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />
            Logo Design
          </li>
          <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
            <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />6
            Stationery Design
          </li>
          <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
            <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />
            Website Design
          </li>
          <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
            <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />
            Cup Design
          </li>
          <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
            <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />
            Banner Design
          </li>
          <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
            <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />
            Social Media Design
          </li>
          <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
            <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />
            Brand Guide
          </li>
          <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
            <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />5
            T-shirt Design
          </li>
          <li className="point mb-1  flex items-start gap-1 text-[14px] font-medium text-dark group-hover:text-white">
            <Icons.right className="mt-[3px] h-[15px] w-[15px] text-green" />
            Newsletter Design
          </li>
        </ul>
      </div>
      <div className="combo_card relative rounded-lg border-2 border-blue bg-gradient-to-br from-blue to-purpule md:mx-auto md:w-[80%] lg:mx-auto lg:w-[80%]">
        <div className="info mb-5 flex flex-col items-center justify-center px-5 py-8">
          <h3 className="mb-2 text-[26px] font-bold text-white lg:text-[42px] xl:text-[42px] 2xl:text-[42px]">
            Combo Packages
          </h3>
          <h3 className="text-[16px]  text-white lg:text-[20px] xl:text-[20px] 2xl:text-[20px]">
            Complete Branding Solution
          </h3>
        </div>
        <div className="price mb-4 flex flex-col items-center justify-center  sm:flex-row sm:gap-8 md:flex-row md:gap-8 lg:flex-row lg:gap-8 xl:flex-row xl:gap-3 2xl:flex-row 2xl:gap-4">
          <h3 className="w-fit text-[72px] font-bold leading-[1]  text-white lg:text-[110px] xl:text-[110px] 2xl:text-[110px]">
            $999
          </h3>
          <h6 className="w-fit text-center text-[24px] font-bold text-white">
            <span className="line-through decoration-purpule">$2,999</span>
            <br />
            Only
          </h6>
        </div>
        <div className="dicount bg-black py-3">
          <h6 className="text-center text-[22px] font-bold uppercase text-blue lg:text-[30px] xl:text-[30px] 2xl:text-[30px]">
            20% off <span className="capitalize text-white">Next Order</span>
          </h6>
        </div>
        <div className="info flex flex-col items-center justify-center px-5 py-8">
          <Link href={'tel:923323745184'} className="mb-8">
            <p className="text-center text-[16px] text-white">
              Speak with Us
              <br />
              <span className="font-semibold">+92 332 3745184</span>
            </p>
          </Link>
          <Button
            variant={'animated'}
            borders={'rounded'}
            className="border-2 border-white !bg-black uppercase"
            onClick={() => setModalActive(true)}
          >
            Start Project
          </Button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ComboSec;
