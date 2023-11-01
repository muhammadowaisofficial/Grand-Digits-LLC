import { NextPage } from 'next';

import { categorizedServices } from '@/content/categorizedServices';
import { Galleries } from '@/content/Galleries';

import NextImage from '@/components/ui/NextImage';
import AboutServicesSec from '@/components/AboutServices';
import ServicesBanner from '@/components/ServicesBanner';
import CTA from '@/components/CTA';

import ServicesGallery from '@/components/Filters/ServicesGallery';
import ServicesTypes from '@/components/Filters/ServicesTypes';
import FilteredPackages from '@/components/Filters/filteredPackages';

const Animation: NextPage = () => {
  return (
    <div className="animation_page">
      <ServicesBanner
        subHeading="Customized Animated Video"
        mainHeading="That Attracts Millions for just"
        styledHeading="$499"
        desc="Animated videos allow your brand and business to stand-out from the crowd and engage your audience at the max."
        bgImage="/images/Services/Animation/banner_bg_web_dev.webp"
        Image="/images/Services/Animation/banner_web_dev.webp"
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
        Image="/images/Services/Animation/web_dev_about.webp"
        styledHeading="With great animated videos,"
        heading="you get the traction you need"
        desc="Our highly creative and talented experts can produce videos that will grab the attention you need to achieve your business goals. From 3 second videos to series, we can produce engaging videos that are sure to differentiate your brand and leave a lasting impression on your audience. Discuss your ideas with our art director and we'll make sure you get the best job anyone can offer in this industry."
        mainPoint="Following are few of the advantages of having an ecommerce website"
        points={[
          'Providing fully customized solutions',
          'We are a team of expert designers',
          'We offer immaculate designs',
          'We ensure you guaranteed satisfaction',
        ]}
      />

      {/* Service Types */}
      <section className="section relative overflow-hidden">
        <div className="div_container">
          <div className="info">
            <h3 className="mb-5 text-center text-[26px] font-bold leading-tight text-[#333] xl:mb-6 xl:text-[38px] 2xl:text-[38px]">
            Premium Quality{' '}
              <span className="text-blue">
              Animation Solution
              </span>
            </h3>
            <p className="banner_description mb-[30px] text-center text-[16px] leading-snug text-[#333] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]">
            We help organizations, small businesses, startups and entrepreneurs grow with
              <br />
              result-oriented custom solutions.
            </p>
          </div>
          <ServicesTypes
            defaultService="2D Animated Videos"
            categorizedServices={categorizedServices.filter((serivce) => {
              return serivce.cat === 'Animation';
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
            We create a logo with an out of the box design sense combined with words that grab the <br /> interest of your target audience.
            </p>
          </div>
        </div>

        <ServicesGallery
          serviceGallery={Galleries.filter((serivce) => {
            return serivce.cat === 'Animation';
          })}
        />
      </section>

      {/* Packages  */}
      <section className="section relative overflow-hidden border border-t-lightborder">
        <div className="div_container">
          <div className="heading">
            <h6 className="section-subheading text-center">Pricing Plan</h6>
            <h3 className="section_mainheading text-center">
            That Works For Everyone!
            </h3>
            <p className="section_description text-center">
            We believe in delivering customized and distinguishing services at competitive price models.
            </p>
          </div>
          <FilteredPackages service="Animation" />
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

export default Animation;
