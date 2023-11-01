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

const Animations: NextPage = () => {
  return (
    <div className="animations_page">
      <ServicesBanner
        subHeading="Customized Animated Video"
        mainHeading="That Attracts Millions for just"
        styledHeading="$499"
        desc="Animated videos allow your brand and business to stand-out from the crowd and engage your audience at the max."
        bgImage="/images/Services/Ecommerce_Solutions/banner_bg_web_dev.jpg"
        Image="/images/Services/Ecommerce_Solutions/banner_web_dev.png"
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
        Image="/images/Services/Web_development/web_dev_about.webp"
        styledHeading="Build Customer Experiences"
        heading="Not The Typical Ecommerce Stores"
        desc="At Instant Logo Design, we offer tailored ecommerce website development services to develop universal yet unique features needed for smooth customer journeys. Whatever your business, niche, or technology model, we offer just the right expertise to do the job flawlessly."
        mainPoint="We love when our work becomes your brand story"
        points={[
          'Streamline ERP and data integrations',
          'Easy and smooth content management',
          'Fast checkouts and personalized solutions',
          'Custom ecommerce website responsive design',
          'Easy navigation, site security, and speed optimization',
          'Robust ecommerce features and functionality',
        ]}
      />

      {/* Service Types */}
      <section className="section relative overflow-hidden">
        <div className="div_container">
          <div className="info">
            <h3 className="mb-5 text-center text-[26px] font-bold leading-tight text-[#333] xl:mb-6 xl:text-[38px] 2xl:text-[38px]">
              Revolutionize{' '}
              <span className="text-blue">
                The Online Shopping Ecosystem
              </span>
            </h3>
            <p className="banner_description mb-[30px] text-center text-[16px] leading-snug text-[#333] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]">
              Our ecommerce solutions offer the best in standard features and functionality while remaining agile and completely customizable. The combination of our eCommerce solutions along with years of experience makes us the go-to ecommerce solution company for all things related to online stores.
              <br />
              <br />
              We move forward with an innovative approach and exceptional techniques without compromising on the aesthetic appearance of your digital store.
            </p>
          </div>
          <ServicesTypes
            defaultService="Responsive Website"
            categorizedServices={categorizedServices.filter((serivce) => {
              return serivce.cat === 'Ecommerce Solutions';
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
            <h6 className="section-subheading text-center">Our Recent Projects</h6>
            <h3 className="section_mainheading text-center">
              Browse Our Portfolio To See Creative Grind.
            </h3>
            <p className="section_description text-center">
              We create a logo with an out of the box design sense combined with words that grab the
              interest of your target audience.
            </p>
          </div>
        </div>

        <ServicesGallery
          serviceGallery={Galleries.filter((serivce) => {
            return serivce.cat === 'Ecommerce Solutions';
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
              We believe in delivering customized and distinguishing services at competitive price models.
            </p>
          </div>
          <FilteredPackages service="Ecommerce Solutions" />
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

export default Animations;
