'use client'
import { NextPage } from 'next';

import NextImage from '@/components/ui/NextImage';
import { Button } from '@/components/ui/Button';
import { Carousel } from '@/components/Slider';
import AboutServicesSec from '@/components/AboutServices';
import ServicesBanner from '@/components/ServicesBanner';
import CTA from '@/components/CTA';

import FilteredPackages from '@/components/Filters/filteredPackages';
import useRQGlobalState from '@/utils/useRQGlobalState';

type CategoriesSecType = {
  id: string;
  name: string;
  desc: string;
}[];

const SEOServices: NextPage = () => {
  const [modalActive, setModalActive]: any = useRQGlobalState("modal", false);


  const CategoriesSecData: CategoriesSecType = [
    {
      id: '1',
      name: 'E-commerce',
      desc: 'We deliver proven results through performing extensive keyword research, custom ecommerce SEO strategy and product optimization. Take the pressure of SEO off the plate with specialized, tailored and full-service ecommerce SEO services.',
    },
    {
      id: '2',
      name: 'B2B',
      desc: "Our B2B-focused SEO campaigns build a website's relevance and trust with search engines and improve your website's ranking. Developing a customized B2B SEO strategy based on their target audience, profit margins, lead time, business objectives and many other variables.",
    },
    {
      id: '3',
      name: 'B2C',
      desc: 'Maximize your revenue by taking advantage of proven methodologies and experiences that solve pain points around marketing and growth by optimizing title tags, earning backlinks, and setting up a Google My Business profile.',
    },
    {
      id: '4',
      name: 'Non-Profit',
      desc: 'Winning meaningful market share for brands, igniting visibility and delivering real business results for nonprofit organizations. Various nonprofits trust SEO services to deliver results when it comes to increasing exposure and boosting reach – driving search traffic to your website.',
    },
    {
      id: '5',
      name: 'Startups',
      desc: 'Kickstart your organic growth and increase your sales without paying for promotion rather, leverage SEO organic reach and build awareness for startups. From link building to keyword research and everything in between to amplify your digital marketing efforts.',
    },
    {
      id: '6',
      name: 'Enterprise',
      desc: 'We help enterprises like yours maximize search visibility, increase brand awareness, and drive revenue. Or course, every web resource owner and digital entrepreneur wants to have their company at the top among search engines. And Instant Logo Design helps you optimize search engine algorithms through industry experience and expertise.',
    },
  ];

  // Slider Controls
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 680 },
      items: 2,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 680, min: 0 },
      items: 1,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };
  return (
    <div className="seo_services_page">
      <ServicesBanner
        subHeading="Reach the Top-Spot in"
        mainHeading="Search-Engine Focused And"
        styledHeading="Solution-Oriented Services"
        desc="We connect global brands with their target customers across all digital touch-points via highly relevant, customized and targeted experiences."
        bgImage="/images/Services/Seo-services/banner_bg_web_dev.jpg"
        Image="/images/Services/Seo-services/banner_web_dev.png"
      />

      {/* CMS Icons */}
      <section className=" bg-[#ededed]">
        <div className="div_container">
          <NextImage
            src={'/images/Services/cms_icons.png'}
            alt="SMS Icons"
            width={1200}
            height={72}
            priority
          />
        </div>
      </section>

      {/* About Services */}
      <AboutServicesSec
        Image="/images/Services/Seo-services/web_dev_about.jpg"
        styledHeading="Gain More Web Search Traffic"
        heading="And Revenue With SEO-Focused Services"
        desc="Google doesn't randomly decide which websites go to the top of the search results. Instead, it's the algorithm which adjusts ranking based on several factors. Leave it to our experts to optimize your SEO efforts, enabling a higher position of your website on the Google result page."
        mainPoint="We love when our work becomes your brand story"
        points={[
          'Increased website traffic and sales',
          'Higher search engine ranking ',
          'Marketing channel permeates ',
          'Front-loaded value driving impact',
          'Boost online exposure',
          'Diversified suite of digital services',
          'Systemized campaigns to fit your needs',
        ]}
      />

      {/* Service Types */}
      <section className="section relative overflow-hidden bg-[#F0F0F0]">
        <div className="div_container">
          <div className="heading">
            <h6 className="section-subheading text-center">
              Reach New Heights with
            </h6>
            <h3 className="section_mainheading text-center">
              ROI-Driven SEO Strategies & Proven Methodologies That Drive
              Business Results
            </h3>
            <p className="section_description text-center">
              In fact, SEO relies on technology to make it functional but
              affects real individuals – that's exactly why we have real humans
              working on your campaign. Having your business on the internet is
              no longer optional if you want to attract customers.
              <br />
              <br />
              So that means having SEO for your website isn't optional either.
              But thanks to our unique scalable model, we can do something for
              every business at every budget.
            </p>
          </div>
          <div className="relative">
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
              removeArrowOnDeviceType={['desktop','tablet', 'mobile']}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px p-[20px] pb-[40px]"
            >
              {CategoriesSecData.map((category) => (
                <div
                  className="group mx-auto bg-[#cccccc] hover:bg-purpule h-[330px] sm:h-[250px] md:h-[320px] xl:h-[450px] 2xl:h-[380px]"
                  key={category.id}
                >
                  <div className="content flex flex-col items-center p-5">
                    <p className="mb-3 text-center font-bold leading-tight group-hover:text-white xl:text-[20px] 2xl:text-[20px]">
                      {category.name}
                    </p>
                    <p className="text-center font-normal text-[#666] group-hover:text-white">
                      {category.desc}
                    </p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          {/* <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 ">
            {CategoriesSecData.map((category) => (
              <div
                className="group mx-auto bg-[#cccccc] hover:bg-purpule"
                key={category.id}
              >
                <div className="content flex flex-col items-center p-5">
                  <p className="mb-3 text-center font-bold group-hover:text-white leading-tight xl:text-[20px] 2xl:text-[20px]">
                    {category.name}
                  </p>
                  <p className="text-center font-normal text-[#666] group-hover:text-white">
                    {category.desc}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
          <div className="flex items-center justify-center pt-8">
            <Button variant={'outline'} borders={'rounded'} onClick={() => setModalActive(true)}>
              Sign up now to &nbsp;
              <span className="text-blue">Avail 70% Discount</span>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* Packages  */}
      <section className="section relative overflow-hidden border border-t-lightborder">
        <div className="div_container">
          <div className="heading">
            <h6 className="section-subheading text-center">Pricing Plan</h6>
            <h3 className="section_mainheading text-center">
              Our Pricing Packages Have been Designed for Your Success. Success That Are Worth
              Every Penny
            </h3>
            <p className="section_description text-center">
              Crafting responsive, search-engine friendly digital experiences
              with impactful, impressive results that effectively position your
              brand in today's increasingly complex landscape. There's no one
              model for all bands, which is why we offer tailored quotes that
              meet your business needs.
            </p>
          </div>
          <FilteredPackages service="Seo" />
        </div>
        <div className="Section_Spinners absolute left-0 top-3 -z-[1]  w-fit">
          <NextImage
            src={'/images/element-6.webp'}
            alt="Section Box Spiner bg"
            width={241}
            height={282}
          />
        </div>
        <div className="Section_Spinners absolute -top-[300px] right-0 -z-[1]  w-fit ">
          <NextImage
            src={'/images/element-7.png'}
            alt="Section Left Triangles bg"
            width={546}
            height={839}
          />
        </div>
        <div className="Section_Spinners absolute left-10 top-16 -z-[1]  w-fit animate-spin">
          <NextImage
            src={'/images/section_spin_elem2.png'}
            alt="Section Box Spiner"
            width={100}
            height={115}
          />
        </div>
        <div className="Section_Spinners absolute right-10 top-16 -z-[1]  w-fit animate-spin">
          <NextImage
            src={'/images/section_spin_elem.png'}
            alt="Section Left Trangles Spiner"
            width={100}
            height={115}
          />
        </div>
      </section>
    </div>
  );
};

export default SEOServices;
