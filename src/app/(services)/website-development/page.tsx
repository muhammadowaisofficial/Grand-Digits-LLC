import { NextPage } from 'next';
import { PackagesType } from '@/types';

import { Galleries } from '@/content/Galleries';
import { packages } from '@/content/Packages';
import { categorizedServices } from '@/content/categorizedServices';

import NextImage from '@/components/ui/NextImage';
import AboutServicesSec from '@/components/AboutServices';
import ServicesBanner from '@/components/ServicesBanner';
import CTA from '@/components/CTA';

import ServicesGallery from '@/components/Filters/ServicesGallery';
import ServicesTypes from '@/components/Filters/ServicesTypes';
import FilteredPackages from '@/components/Filters/filteredPackages';

const WebsiteDevelopment: NextPage = () => {
  const filteredPackages: PackagesType[] = packages.filter((packageData) => {
    return packageData.category === 'Website Development';
  });
  return (
    <div className="website_development_page">
      <ServicesBanner
        subHeading="Highly-attractive"
        mainHeading="Web Designs Starting From"
        styledHeading="$244"
        desc="Client-focus, high-performing, feature-packed, and customer-centric digital experiences transforming the online landscape."
        bgImage="/images/Services/Web_development/banner_bg_web_dev.png"
        Image="/images/Services/Web_development/banner_web_dev.png"
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
        styledHeading="Discover Prospects"
        heading="For Enhancing Customer Stories And Brand Experiences"
        desc="Instant Logo Design is a revolutionary web design and development agency dedicated to offering personalized digital experiences through web solutions. We professionally design, redesign and continuously support customer-facing and enterprise web apps to achieve high conversion and adoption rates."
        mainPoint="Professionally design custom web designs"
        points={[
          'Providing fully customized solutions',
          'Custom CMS Integration',
          'Mobile-optimized and SEO-friendly web structure',
          'dvanced website functionality',
          'Hacking secured websites',
          'User-friendly back-end system',
        ]}
      />

      {/* Service Types */}
      <section className="section relative overflow-hidden">
        <div className="div_container">
          <div className="info">
            <h3 className="mb-5 text-center text-[26px] font-bold leading-tight text-[#333] xl:mb-6 xl:text-[38px] 2xl:text-[38px]">
              Progressive Enhancement{' '}
              <span className="text-blue">
                Developing Cross-Platform Web Experiences
              </span>
            </h3>
            <p className="banner_description mb-[30px] text-center text-[16px] leading-snug text-[#333] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]">
              Our web experiences are high-performing, feature-packed, and
              digitally transformative, designed to be user-friendly, fully
              functional, very secure, and able to scale as your enterprise
              grows.
              <br />
              <br />
              Our team of engineers, web architects, and developers create
              interactive prototyping and usability to ensure enhanced user
              experience.
            </p>
          </div>
          <ServicesTypes
            defaultService="Responsive Website"
            categorizedServices={categorizedServices.filter((serivce) => {
              return serivce.cat === 'Website Development';
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
              Reach full digital potential with the latest search accessibility
              and compatibility that streamline digital flows through the
              dynamic content management system.
            </p>
          </div>
        </div>

        <ServicesGallery
          serviceGallery={Galleries.filter((serivce) => {
            return serivce.cat === 'Website Design';
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
          <FilteredPackages service="Website Development" />
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

export default WebsiteDevelopment;
