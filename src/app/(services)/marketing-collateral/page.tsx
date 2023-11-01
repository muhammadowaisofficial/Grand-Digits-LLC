import { NextPage } from 'next';

import { Galleries } from '@/content/Galleries';
import { categorizedServices } from '@/content/categorizedServices';

import NextImage from '@/components/ui/NextImage';
import ServicesBanner from '@/components/ServicesBanner';
import AboutServicesSec from '@/components/AboutServices';
import CTA from '@/components/CTA';

import ServicesGallery from '@/components/Filters/ServicesGallery';
import ServicesTypes from '@/components/Filters/ServicesTypes';
import FilteredPackages from '@/components/Filters/filteredPackages';

const MarketingCollateral: NextPage = () => {
  return (
    <div className="marketing-collateral_page">
      <ServicesBanner
        subHeading="Top-Quality"
        mainHeading="Marketing Collateral Designs for just"
        styledHeading="$99"
        desc="Create unique, informative and eye-catching branding content that not only promotes your brand but also establishes a competitive edge."
        bgImage="/images/Services/Marketing_collateral/banner_bg_web_dev.jpg"
        Image="/images/Services/Marketing_collateral/banner_web_dev.png"
      />

     {/* CMS Icons */}
     <section className="py-6 bg-[#ededed] hidden lg:block xl:block 2xl:block">
        <div className="div_container px-4 grid gap-6 grid-cols-3 ">
          <div className="stats">
            <h5 className="text-[#17629b] text-[30px] font-bold text-center">250+</h5>
            <p className="text-[#1e0e4e] font-medium mt-1 text-center">Website development and design</p>
          </div>
          <div className="stats">
            <h5 className="text-[#5e258b] text-[30px] font-bold text-center">150+</h5>
            <p className="text-[#1e0e4e] font-medium mt-1 text-center">Developers & Engineers under one roof</p>
          </div>
          <div className="stats">
            <h5 className="text-[#468c13] text-[30px] font-bold text-center">10x</h5>
            <p className="text-[#1e0e4e] font-medium mt-1 text-center">Years in Digtal Makrketing & Branding Business</p>
          </div>
          <div className="stats">
            <h5 className="text-[#135e9b] text-[30px] font-bold text-center">99%</h5>
            <p className="text-[#1e0e4e] font-medium mt-1 text-center">Client Retention Rate</p>
          </div>
          <div className="stats">
            <h5 className="text-[#d02e64] text-[30px] font-bold text-center">250+</h5>
            <p className="text-[#1e0e4e] font-medium mt-1 text-center">Industry Proven Professionals</p>
          </div>
          <div className="stats">
            <h5 className="text-[#ff5d42] text-[30px] font-bold text-center">100%</h5>
            <p className="text-[#1e0e4e] font-medium mt-1 text-center">Ownership Rights</p>
          </div>
          <div className="stats col-span-3">
            <h5 className="text-[#ff5d42] text-[30px] font-bold text-center">500+</h5>
            <p className="text-[#1e0e4e] font-medium mt-1 text-center">Experienced and Proven Results</p>
          </div>
        </div>
      </section>

      {/* About Services */}
      <AboutServicesSec
        Image="/images/Services/Marketing_collateral/web_dev_about.jpg"
        styledHeading="Professionally Crafted, High-Impact"
        heading="Impact & Ground-Breaking Marketing Collateral"
        desc="At Instant Logo Design, we know a thing or two about marketing collateral. We know the impact it can have on your business. We know it's critical to business growth and sales success. That's why we have a team of creative professionals who develop marketing assets that make an impact on your business."
        mainPoint="We love when our work becomes your brand story"
        points={[
          'Consistently shares a brand story ',
          'One asset, multiple usages',
          'wide variety of formats',
          'Professionally designed marketing and branding collateral',
          'Drives lead, sales and results',
          'Seamlessly flows with sales conversions',
        ]}
      />

      {/* Service Types */}
      <section className="section relative overflow-hidden">
        <div className="div_container">
          <div className="info">
            <h3 className="mb-5 text-center text-[26px] font-bold leading-tight text-[#333] xl:mb-6 xl:text-[38px] 2xl:text-[38px]">
            Beyond Just Branding{' '}
              <span className="text-blue">- Perfect Combination For Business Growth</span>
            </h3>
            <p className="banner_description mb-[30px] text-center text-[16px] leading-snug text-[#333] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]">
            Good marketing collateral gives businesses an incalculable edge over the competition when executed properly. It helps provide a happy and effortless customer experience and projects an image of growth and modernity.
              <br /><br />
              Enhance your brand presence with a creative and ground-breaking marketing collateral company and get everything done professionally.
            </p>
          </div>
          <ServicesTypes
            defaultService="Stationery Design"
            categorizedServices={categorizedServices.filter((serivce) => {
              return serivce.cat === 'Marketing Collateral';
            })}
          />
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* Gallery  */}
      <section className="section relative ">
        <div className="div_container">
          <div className="heading">
            <h6 className="section-subheading text-center">
            Recent Work
            </h6>
            <h3 className="section_mainheading text-center">
            Browse Our Portfolio To See Creative Grind.
            </h3>
            <p className="section_description text-center">
            Reach full digital potential with the latest search accessibility and compatibility that streamline digital flows through the dynamic content management system.
            </p>
          </div>
        </div>

        <ServicesGallery
          serviceGallery={Galleries.filter((serivce) => {
            return serivce.cat === 'Marketing Collateral';
          })}
        />
      </section>

      {/* Packages  */}
      <section className="section relative overflow-hidden border border-t-lightborder">
        <div className="div_container">
          <div className="heading">
            <h6 className="section-subheading text-center">Pricing Plan</h6>
            <h3 className="section_mainheading text-center">
            Our Pricing Packages Have been Designed for Your Success.
            </h3>
            <p className="section_description text-center">
            Crafting end-to-end solutions for all your marketing needs while ensuring alignment with your corporate identity – allowing us to create impeccable digital experiences with impactful, impressive results that effectively position your brand in today's increasingly complex landscape. There's no one model for all bands, which is why we offer tailored quotes that meet your business needs.
            </p>
          </div>
          <FilteredPackages service="Marketing Collateral" />
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

export default MarketingCollateral;
