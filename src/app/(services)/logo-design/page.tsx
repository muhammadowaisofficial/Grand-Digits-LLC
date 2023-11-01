import { NextPage } from 'next';

import { Galleries } from '@/content/Galleries';
import { categorizedServices } from '@/content/categorizedServices';

import NextImage from '@/components/ui/NextImage';
import AboutServicesSec from '@/components/AboutServices';
import ServicesBanner from '@/components/ServicesBanner';
import CTA from '@/components/CTA';

import ServicesGallery from '@/components/Filters/ServicesGallery';
import ServicesTypes from '@/components/Filters/ServicesTypes';
import FilteredPackages from '@/components/Filters/filteredPackages';

const LogoDesign: NextPage = () => {
  return (
    <div className="logo_design_page">
      <ServicesBanner
        subHeading="Get Unique and"
        mainHeading="Creative Logo Designs in just"
        styledHeading="$35"
        desc="Harness the power of consistent creativity to create brands that exude power, prestige, and exquisiteness."
        bgImage="/images/Services/Logo_Design/banner_bg_web_dev.webp"
        Image="/images/Services/Logo_Design/banner_web_dev.webp"
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
        Image="/images/Services/Logo_Design/web_dev_about.webp"
        styledHeading="Reclaim Your Position"
        heading="In The Market With Manifested Design"
        desc="Being a top-notch design agency based in Pakistan, we create premium, everlasting, and powerful brand impressions having the power to define moments. We give your brand a unique, symbolic, yet iconic identity with a thoughtful name, timeless logo design, and captivating visual language. We take pride in shaping a clear brand identity that leaves a lasting and memorable imprint on the hearts and minds of its target customer."
        mainPoint="We love when our work becomes your brand story"
        points={[
          'Compassionate design and quality above all',
          'Crafting soul into a brand identity',
          'Creating a new path forward for the brand',
          'Captivating and inspiring designs',
          'Conducting research before style and trend',
          'Creating a new path forward for the brand',
        ]}
      />

      {/* Service Types */}
      <section className="section relative overflow-hidden">
        <div className="div_container">
          <div className="info">
            <h3 className="mb-5 text-center text-[26px] font-bold leading-tight text-[#333] xl:mb-6 xl:text-[38px] 2xl:text-[38px]">
            The Leading Logo Design Agency For{' '}
              <span className="text-blue">
              Modern Brands (LOGO HERE)
              </span>
            </h3>
            <p className="banner_description mb-[30px] text-center text-[16px] leading-snug text-[#333] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]">
            Wondering what makes us the top priority when it comes to designing brand identity logos?
              <br />
              <br />
              We are a new-age graphic design agency that helps brands to look creative & bold using our cutting-edge design & branding services. Our team of professionals elevates brand experiences through personalized designing and creativity.
            </p>
          </div>
          <ServicesTypes
            defaultService="Iconic Logo"
            categorizedServices={categorizedServices.filter((serivce) => {
              return serivce.cat === 'Logo Design';
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
            <h6 className="section-subheading text-center">Recent Work</h6>
            <h3 className="section_mainheading text-center">
              Browse Our Portfolio To See Creative Grind.
            </h3>
            <p className="section_description text-center">
            Our logo design services are result-driven and based on the insights that help attract your customers' eyeballs, turning them into potential leads.
            </p>
          </div>
        </div>

        <ServicesGallery
          serviceGallery={Galleries.filter((serivce) => {
            return serivce.cat === 'Logo Design';
          })}
        />
      </section>

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
          <FilteredPackages service="Logo Design" />
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

export default LogoDesign;
