import React from 'react'
import { NextPage } from 'next';

import { Button } from '@/components/ui/Button';
import { Icons } from '@/components/Icons';
import PagesBanner from '@/components/PagesBanner';

import Gallery from '@/components/Filters/Gallery';

const Portfolio:NextPage = () => {
  return (
    <div className='portfolio_page'>
      {/* Portfolio Banner */}
      <PagesBanner bgImage='/images/banner-portfolio.png' image={'/images/banner-item-portfolio.png'} mainHeading='At Grand Digits, Everything Is Possible' subHeading='Serving Clients Worldwide' desc='We are a team of creative thinkers and problem solvers dedicated
to expanding the limits of what is possible by helping brands
achieve their goals.' />
      
      
      {/* Gallery  */}
      <section className="section relative border border-b-lightborder">
        <div className="container_full">
          <div className="heading">
            <h6 className="section-subheading text-center text-blue">
              Our featured works
            </h6>
            <h3 className="section_mainheading text-center">
              Our Services Are All About You
            </h3>
            <p className="section_description text-center">
            Check out how we solve problems to address our clients' needs and deliver <br/> 
            effective web design solutions.
            </p>
          </div>
          <Gallery />
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row sm:gap-10 md:gap-10 lg:gap-10 xl:gap-10 2xl:gap-10 ">
            <div className="contact_details  flex items-center ">
              <Icons.phone className="mr-3 h-7 w-7 rotate-45 text-blue" />
              <div className="flex flex-col items-start justify-center">
                <p className="text-[14px] uppercase text-black font-medium">Call us at</p>
                <p className="font-bold uppercase text-black text-[22px]">
                  +92 332 3745184
                </p>
              </div>
            </div>
            <Button variant={'animated'}>GET STARTED</Button>
          </div>
        </div>
      </section>

      
    </div>
  )
}

export default Portfolio