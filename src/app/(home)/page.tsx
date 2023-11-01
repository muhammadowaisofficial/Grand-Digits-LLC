'use client';
import { NextPage } from 'next';
import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import NextImage from '@/components/ui/NextImage';
import Categories from '@/components/Filters/Categories';
import { Icons } from '@/components/Icons';
import Gallery from '@/components/Filters/Gallery';
import Packages from '@/components/Filters/Packages';
import CTA from '@/components/CTA';
import ComboSec from '@/components/ComboSec';
import CTAContact from '@/components/CTAContact';
import Testimonials from '@/components/Testimonials';
import useRQGlobalState from '@/utils/useRQGlobalState';

const Home: NextPage = () => {
  const [modalActive, setModalActive]: any = useRQGlobalState("modal", false);

  return (
    <div className="home_page">
      {/* Banner */}
      <section className="home_banner banner relative w-full  bg-[url('/images/home_banner_bg.webp')] bg-cover 2xl:h-[850px]">
        <div className="div_container flex items-center justify-between">
          <div className="banner_content p-4 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
            <h6 className="banner-subheading uppercase text-white">
              PROFICIENT DESIGN AGENCY.
            </h6>
            <h2 className="banner_mainheading text-white">
            Our Web Designs Give Visitors With A Great Experience.
            </h2>
            <p className="banner_description text-white">
            Get a personalized website for your company that accurately displays your job and works on all devices. We create user-friendly websites for your brand that are unique, appealing, and greatly raise traffic.
            </p>
            <Button variant={'animated'} onClick={() => setModalActive(true)}>GET STARTED</Button>
          </div>
          <div className="banner_img hidden w-1/2 lg:block xl:block 2xl:block">
            <Image
              src={'/images/home_banner_img.webp'}
              alt="Grand Digits Banner"
              priority={true}
              width={847}
              height={564}
              className=""
            />
          </div>
        </div>
      </section>

      {/* History */}
      <section className="history border border-y-lightborder  p-[16px]">
        <div className="div_container flex flex-col items-center justify-center  xl:flex-row 2xl:flex-row">
          <h6 className="mb-[15px] text-center text-lighttext lg:text-left lg:text-[18px]   xl:m-0 xl:mr-10 xl:border-r xl:border-r-lightborder xl:text-left xl:text-[18px] 2xl:m-0 2xl:mr-10 2xl:border-r 2xl:border-r-lightborder 2xl:text-left 2xl:text-[18px] ">
          Companies that we assisted in the formation of
          </h6>
          <Image
            src={'/images/visionary-businesses.png'}
            alt="Grand Digits history"
            priority={true}
            width={956}
            height={91}
            className="my-auto"
          />
        </div>
      </section>

      {/* Categories  */}
      <section className="section relative ">
        <div className="div_container">
          <div className="heading">
            <h6 className="section-subheading text-center text-blue">
            Our unrivaled websites
            </h6>
            <h3 className="section_mainheading text-center">
            For Building a Strong Digital Brand.
            </h3>
            <p className="section_description text-center">
            Let's face it! When it comes to branding, first impressions are everything. We know it and have done it, and we're not sure what our secret is. It's because brands that gain new admirers are the ones who are willing to stretch their creative boundaries.
            </p>
          </div>
          <Categories />
        </div>
      </section>

      {/* <section className="section">
        <div className="div_container">
          <div className="heading">
            <h6 className="section-subheading text-center text-blue">
              Build Experience-Driven Digital Designs
            </h6>
            <p className="section_description mb-5 text-center">
              We help you by wowing your audience through stunning designs.
              Fueled by creatives, strategists, analytics, and developers
              combined with agile methodology, we strengthen your brand personas
              through impressive digital experiences. We are driven by
              measurable business results and will tackle your biggest
              challenges boldly.
            </p>
          </div>
        </div>
      </section> */}

      {/* Endorse Section */}
      <section className="section relative w-full  bg-[url('/images/bg-endorse-section.webp')] bg-cover">
        <div className="div_container">
          <div className="flex items-center justify-between">
            <div className="banner_img hidden w-1/2 lg:block xl:block 2xl:block">
              <Image
                src={'/images/endorse_img.webp'}
                alt="Grand Digits Endorse Image"
                priority={true}
                width={868}
                height={647}
                className=""
              />
            </div>
            <div className="banner_content p-4 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
              <h6 className="section-subheading text-blue">
              Support Your Company
              </h6>
              <h3 className="section_mainheading">
              Today's Leading Web Development Agency
              </h3>
              <p className="section_description mb-5">
              Grand Digits is more than simply a design firm; it's a creative studio eager to learn about your organization. Everyone at Grand Digits is competent and equipped to provide you with the premium quality service you deserve! We can't wait to welcome you to our prestigious clientele...
              </p>
              <div className="flex flex-col items-start gap-4 md:flex-row xl:flex-row 2xl:flex-row">
                <Button variant={'animated'} onClick={() => setModalActive(true)}>GET IN TOUCH</Button>
                <div className="contact_details m-0 flex items-center border-l-lightborder p-0 md:ml-8 md:pl-8 xl:ml-8 xl:border-l xl:pl-8 2xl:ml-8 2xl:border-l 2xl:pl-8">
                  <Icons.phone className="mr-3 h-7 w-7 rotate-45 text-blue" />
                  <div className="flex flex-col items-start justify-center">
                    <p className="text-[10px] uppercase text-black">
                      Call us at
                    </p>
                    <p className="font-semibold uppercase text-black">
                      +92 332 3745184
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <Button variant={'animated'} onClick={() => setModalActive(true)}>GET STARTED</Button>
          </div>
        </div>
      </section>

      {/* Packages  */}
      <section className="section relative ">
        <div className="div_container">
          <div className="heading">
            <h6 className="section-subheading text-center text-blue">
            Our Price Model
            </h6>
            <h3 className="section_mainheading text-center">
            Our Pricing Packages Have been Designed for Your Success.
            </h3>
            <p className="section_description text-center">
            Our packages are pocket-friendly and tailored to your specific needs.
            </p>
          </div>
          <Packages />
          
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* Combo Section */}
      <ComboSec />

      {/* CTA Contact */}
      <CTAContact />

      {/* Testimonials */}
      <Testimonials />


      
    </div>
  );
};

export default Home;
