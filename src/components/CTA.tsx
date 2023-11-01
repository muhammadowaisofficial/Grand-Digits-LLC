'use client'
import React from 'react';
import { Button } from '@/components/ui/Button';
import NextImage from '@/components/ui/NextImage';
import useRQGlobalState from '@/utils/useRQGlobalState';

const CTA = () => {
  const [modalActive, setModalActive]: any = useRQGlobalState("modal", false);
  return (
    <section className="section bg-black xl:py-0 2xl:py-0 ">
      <div className="div_container flex flex-col gap-4 sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center justify-between px-4">
        <div className="title h-full flex items-center">
          <h5 className="uppercase text-white font-bold">
            We are widely <br/><span className='font-normal'>Recognized On</span>
          </h5>
        </div>

        <div className="trust_imgs items-center justify-center gap-2 hidden xl:flex 2xl:flex ">
            <NextImage src={'/images/cta-trust-pilot.webp'} alt='Instatnt Design Studio CTA Trust Pilot' width={317} height={69} />
            <NextImage src={'/images/cta-speaker.webp'} alt='Instatnt Design Studio CTA Speaker' width={145} height={155} />
        </div>

        <div className="btn h-full flex items-center justify-end">
            <Button variant={'animated'} onClick={() => setModalActive(true)}>ORDER NOW</Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
