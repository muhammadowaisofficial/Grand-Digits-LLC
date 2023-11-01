import React from 'react';
import { Icons } from '@/components/Icons';
import NextImage from '@/components/ui/NextImage';
import { Carousel } from '@/components/Slider';
import { testimonies } from '@/content/Testimonies';

const Testimonials = () => {
  // Slider Controls
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 769 },
      items: 2,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };
  return (
    <>
      <section className="relative">
        <div className="bg section bg-blue">
          <div className="div_container grid grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-2">
            <div className="headings ">
              <h6 className="text-[18px] font-medium text-purpule lg:text-[24px] xl:text-[24px] 2xl:text-[24px]">
                Client Love
              </h6>
              <h6 className="mb-2 mt-1 text-[28px] font-semibold leading-tight text-white lg:text-[50px] xl:text-[50px] 2xl:text-[50px]">
              What do our clients say?
              </h6>
              <p className="text-[16px] text-white lg:text-[18px] xl:text-[18px] 2xl:text-[18px]">
              We take pride in our exceptional development services, and this is one of the reasons why people put their trust in our services for growing exponentially.
              </p>
            </div>
            <div className="stats">
              <p className="stars flex items-center justify-start gap-1">
                <Icons.star className="h-4 w-4" />
                <Icons.star className="h-4 w-4" />
                <Icons.star className="h-4 w-4" />
                <Icons.star className="h-4 w-4" />
                <Icons.star className="h-4 w-4" />
              </p>
              <p className="my-5 text-[14px] text-white lg:text-[16px] xl:text-[16px] 2xl:text-[16px]">
                Rated 4.9/5.0 by 300+ clients for Design and Marketing Services
                on various platforms.
              </p>
              <NextImage
                src={'/images/testimonials-partners.png'}
                alt="Testimonials Partners"
                height={77}
                width={555}
              />
            </div>
          </div>
        </div>

        {/* Testimonial Slider */}
        <div className="testimonials -mt-14">
          <div className="div_container">
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
              removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px p-[20px] pb-[40px]"
            >
              {testimonies.map((testimony) => (
                <div
                  className="testimonial_Card rounded-md border border-border bg-white py-8 pl-2 pr-3"
                  key={testimony.id}
                >
                  <div className="quote_wrapper flex gap-1">
                    <div className="h-[150px] w-[150px]">
                    <Icons.quote className="rotate-180" />
                    </div>
                    <div className="testimony ml-4">
                      <p className="mb-8 text-[16px] text-darktext lg:h-[150px] lg:text-[18px] xl:h-[120px] xl:text-[18px] 2xl:h-[100px] 2xl:text-[18px]">
                        “{testimony.testimony}”
                      </p>
                      <div className="client_info flex items-center justify-start gap-4">
                        <div className="client relative h-[70px] w-[70px] rounded-full bg-cover">
                          <NextImage
                            src={testimony.image}
                            alt={testimony.clientName}
                            width={70}
                            height={70}
                          />
                        </div>
                        <div className="info flex flex-col items-start justify-start">
                          <h6 className="mb-2 text-[16px] font-semibold text-black">
                            {testimony.clientName}
                          </h6>
                          <p className="stars flex items-center justify-start gap-1">
                            {[...Array(testimony.stars)].map((e, i) => (
                              <Icons.star className="h-4 w-4" key={i} />
                            ))}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section relative">
        <div className="div_container">
        <div className="heading"> 
            <h3 className="section_mainheading text-center">
            Our Technology Partners
            </h3>
            <p className="section_description text-center">
            With our coalition of the world's technology companies, we're delivering on our promise of transforming management of modern infrastructure and enabling IT to move at the speed of business.
            </p>
          </div>
          <NextImage
            src={'/images/testimonials_brands.webp'}
            alt="Brands"
            width={1142}
            height={67}
          />
        </div>
      </section>
    </>
  );
};

export default Testimonials;
