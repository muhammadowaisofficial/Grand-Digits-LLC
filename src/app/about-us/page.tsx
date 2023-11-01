'use client'
import { NextPage } from 'next';

import { AboutServices } from '@/content/AboutServices';

import { Button } from '@/components/ui/Button';
import NextImage from '@/components/ui/NextImage';
import { Separator } from '@/components/ui/Separator';
import PagesBanner from '@/components/PagesBanner';
import { Icons } from '@/components/Icons';
import { Carousel } from '@/components/Slider';
import ComboSec from '@/components/ComboSec';
import CTAContact from '@/components/CTAContact';
import Testimonials from '@/components/Testimonials';
import useRQGlobalState from '@/utils/useRQGlobalState';

const AboutUs: NextPage = () => {
  const [modalActive, setModalActive]: any = useRQGlobalState("modal", false);

  // Slider Controls
  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 1200 },
      items: 4,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    laptop: {
      breakpoint: { max: 1200, min: 900 },
      items: 3,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 900, min: 600 },
      items: 2,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 599, min: 0 },
      items: 1,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };
  return (
    <div className="about_us_page">
      {/* About Us Banner */}
      <PagesBanner
        bgImage=""
        image={'/images/banner-item-aboutus.webp'}
        mainHeading="Digital marketing and Design agency"
        subHeading="A true unified"
        desc="We believe that within each impossible, it is possible to try to get out. We are a team of creative thinkers and problem solvers dedicated to pushing the limits of what is possible by helping brands achieve their goals."
      />

      {/* Digital Success */}
      <section className="digital_success section relative ">
        <div className="div_container">
          <div className="heading">
            <h6 className="section-subheading text-center">
              We Are Instant Logo Design
            </h6>
            <h3 className="section_mainheading text-center">
              Creativity and determination guiding you to the ultimate digital
              success
            </h3>
          </div>
          <div className="content mt-4 grid items-center gap-4 xl:mt-16 xl:grid-cols-3 2xl:mt-16 2xl:grid-cols-3">
            <div className="card col-span-1">
              <p className="section_description w-full border border-lightborder bg-white p-4 shadow-2xl">
                The digital services we offer are extensive, but at each stage
                our work is driven by one main objective: To drive significant
                amount of traffic to your Brand.
              </p>
            </div>
            <p className="section_description  xl:col-span-2 2xl:col-span-2">
              We are a full-service progressive digital marketing, design, and
              ecommerce agency that crafts engaging brands and digital
              experiences that create history. We are obsessed with finding
              opportunities allowing brands to elevate their experiences and
              drive unprecedented revenue growth. Since day one, our focus has
              been implementing customer-centric approaches and result-oriented
              services that position our clients to succeed in today's dynamic,
              constantly evolving world. At Instant Logo Design, we're driven to
              grow our client's businesses and exceed their expectations by
              delivering value.
              <br />
              <Button borders={'rounded'} variant={'outline'} className="mt-4" onClick={() => setModalActive(true)}>
                Sign up now to &nbsp;
                <span className="text-blue">Avail 70% Discount</span>
              </Button>
            </p>
          </div>
        </div>
        <div className="Section_Spinners absolute left-10 top-16   hidden w-fit animate-spin 2xl:block">
          <NextImage
            src={'/images/section_spin_elem.png'}
            alt="Section Trangles Spinner"
            width={150}
            height={165}
          />
        </div>
        <div className="Section_Spinners absolute right-0 top-16 -z-[1]  hidden  w-fit 2xl:block">
          <NextImage
            src={'/images/element-16.png'}
            alt="Section Box Spiner"
            width={341}
            height={360}
          />
        </div>
        <div className="Section_Spinners absolute bottom-16 left-0 -z-[1]  w-fit">
          <NextImage
            src={'/images/element-15.webp'}
            alt="Section Box Spiner"
            width={126}
            height={427}
          />
        </div>
        <div className="Section_Spinners absolute bottom-16 left-10 -z-[1]  hidden w-fit animate-spin xl:block 2xl:block">
          <NextImage
            src={'/images/section_spin_elem2.png'}
            alt="Section Box Spiner"
            width={70}
            height={85}
          />
        </div>
        <div className="Section_Spinners absolute bottom-16 right-10 -z-[1]  hidden w-fit  animate-spin xl:block 2xl:block">
          <NextImage
            src={'/images/section_spin_elem.png'}
            alt="Section Right Trangles Spinner"
            width={100}
            height={115}
          />
        </div>
      </section>

      {/* Facts */}
      <section className="facts section relative overflow-hidden">
        <div className="div_container">
          <div className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3">
            <div className="placeholder"></div>
            <div className="info relative xl:col-span-2 2xl:col-span-2">
              <div className="bg_text absolute -left-[30px] -top-[10px] -z-[1] text-[280px] font-extrabold uppercase leading-[180px] text-[#c7c7c7] opacity-20">
                FACTS
              </div>
              <h5 className="pb-3 text-[26px] font-bold leading-tight text-lightdark lg:text-[30px] xl:text-[30px] 2xl:text-[30px]">
                We Are Your Strategic Business Partner
              </h5>
              <p className="mb-7 text-[#666] lg:mb-12 xl:mb-12 2xl:mb-12">
                Businesses take up the mantle of trust, and that's why our team
                empowers brands to become the next leaders of the digital space.
              </p>
              <ul className="stats mb-[5px] flex flex-wrap items-center justify-between gap-5">
                <li className="flex  w-fit gap-4">
                  <span className="h-7 w-7 rounded-full bg-purpule" />
                  <div className="stats_info flex flex-col">
                    <h5 className="mb-3 text-[42px] font-extrabold text-black">
                      5000+
                    </h5>
                    <p className="text-[18px] text-[#666]">Projects Done</p>
                  </div>
                </li>
                <li className="flex  w-fit gap-4">
                  <span className="h-7 w-7 rounded-full bg-purpule" />
                  <div className="stats_info flex flex-col">
                    <h5 className="mb-3 text-[42px] font-extrabold text-black">
                      48000+
                    </h5>
                    <p className="text-[18px] text-[#666]">Happy Clients</p>
                  </div>
                </li>
                <li className="flex  w-fit gap-4">
                  <span className="h-7 w-7 rounded-full bg-blue" />
                  <div className="stats_info flex flex-col">
                    <h5 className="mb-3 text-[42px] font-extrabold text-black">
                      91.30%
                    </h5>
                    <p className="text-[18px] text-[#666]">Success Rate</p>
                  </div>
                </li>
              </ul>

              <div className="mt-4 flex flex-col items-start gap-4 sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row ">
                <Button variant={'animated'} borders={'rounded'} onClick={() => setModalActive(true)}>
                  GET IN TOUCH
                </Button>
                <div className="contact_details rder-l-lightborder m-0 flex items-center p-0 md:ml-8 md:border-l md:pl-8 xl:ml-8 xl:border-l xl:pl-8 2xl:ml-8 2xl:border-l 2xl:pl-8">
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
              <Separator className="my-[30px] xl:my-[100px] 2xl:my-[100px]" />
            </div>
          </div>
          <div className="div_container mt-7 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            <div className="mission">
              <div className="heading flex items-center justify-start gap-4">
                <Icons.play className="h-[20px] w-[20px] text-purpule" />
                <h5 className="pb-3 text-[26px] font-bold uppercase leading-tight lg:text-[30px] xl:text-[30px] 2xl:text-[30px]">
                  Mission
                </h5>
              </div>
              <p className="mb-7 text-[#666] lg:mb-12 xl:mb-12 2xl:mb-12">
                Deliver modern digital experiences designed to define brands and
                push the boundaries in the online ecosystem
              </p>
            </div>
            <div className="vission">
              <div className="heading flex items-center justify-start gap-4">
                <Icons.play className="h-[20px] w-[20px] text-purpule" />
                <h5 className="pb-3 text-[26px] font-bold uppercase leading-tight lg:text-[30px] xl:text-[30px] 2xl:text-[30px]">
                  Vission
                </h5>
              </div>
              <p className="mb-7 text-[#666] lg:mb-12 xl:mb-12 2xl:mb-12">
                Embrace change and leverage transformative digital capabilities
                to empower brands.
              </p>
            </div>
          </div>
        </div>
        <div className="Section_Spinners absolute left-0 top-0 -z-[1]  hidden w-[35%] xl:block xl:w-[35%] 2xl:block">
          <NextImage
            src={'/images/element-12.webp'}
            alt="Section bg image"
            width={672}
            height={571}
          />
        </div>
      </section>

      {/* Services  */}
      <section className="section relative border border-b-lightborder">
        <div className="div_container">
          <div className="heading">
            <h6 className="section-subheading text-center">
              We Are In It For The Long Haul
            </h6>
            <h3 className="section_mainheading text-center">
              A Wide Variety Of Premium Services We Offer
            </h3>
            <p className="section_description text-center">
              While we're unfailingly future-focused, we're also proud of our
              heritage. We have deep technical knowledge and creative ability,
              make sound recommendations based on real experience and love
              nothing more than a new challenge.
            </p>
          </div>
          <div className="relative py-4">
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
              removeArrowOnDeviceType={['tablet', 'mobile', 'desktop', 'laptop']}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px pb-[40px] px-[16px]"
            >
              {AboutServices.map((service) => (
                <div
                  className="relative mx-auto flex h-[326px] w-[270px] items-end rounded-xl p-4 shadow-lg"
                  key={service.id}
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  {/* <NextImage src={service.image} alt={`${service.name}`} fill /> */}
                  <h4 className="w-[80%] text-[20px] font-semibold uppercase text-white">
                    {service.name}
                  </h4>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Combo Section */}
      <ComboSec />

      {/* CTA Contact */}
      <CTAContact />

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
};

export default AboutUs;
