import { NextPage } from 'next';

import { categorizedServices } from '@/content/categorizedServices';

import NextImage from '@/components/ui/NextImage';
import AboutServicesSec from '@/components/AboutServices';
import ServicesBanner from '@/components/ServicesBanner';
import CTA from '@/components/CTA';

import ServicesTypes from '@/components/Filters/ServicesTypes';
import FilteredPackages from '@/components/Filters/filteredPackages';
//import ServicesGallery from '@/components/Filters/ServicesGallery';
//import { Galleries } from '@/content/Galleries';

const CreativeCopywriting: NextPage = () => {
  return (
    <div className="creative_copywriting_page">
      <ServicesBanner
        subHeading="Highly-creative & Unique"
        mainHeading="Writing Services Starting from just"
        styledHeading="$129"
        desc="Take full advantage of the 6 seconds by griping their wandering attention with inspiring, resonating and enticing content."
        bgImage="/images/Services/creative-copywriting/banner_bg_web_dev.jpg"
        Image="/images/Services/creative-copywriting/banner_web_dev.png"
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
        Image="/images/Services/creative-copywriting/web_dev_about.jpg"
        styledHeading="Content That Works Miracles"
        heading="In Driving Your Business Forward"
        desc="Content is powerful – period – it speaks volumes to your target customers while establishing creditability and expertise. It's the fuel that drives websites, blogs, and whatnot by painting a picture that gets stuck in your customer's mind, forever. Great visuals can make your company noticed, but great copywriting can capture the story and drive the message home."
        mainPoint="We love when our work becomes your brand story"
        points={[
          'Pack a punch through words',
          'Wide range of formats and tones ',
          'Consistently shares a brand story',
          'One asset, multiple usages',
          'Excellent eye for details',
          'Meeting strict deadlines',
          'Drives lead, sales and results',
        ]}
      />

      {/* Service Types */}
      <section className="section relative overflow-hidden">
        <div className="div_container">
          <div className="info">
            <h3 className="mb-5 text-center text-[26px] font-bold leading-tight text-[#333] xl:mb-6 xl:text-[38px] 2xl:text-[38px]">
            The Art Of Selling, {' '}
              <span className="text-blue">
              Backed By The Science Of Strategy
              </span>
            </h3>
            <p className="banner_description mb-[30px] text-center text-[16px] leading-snug text-[#333] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]">
            Your business is unique. But guess what? So are all your competitors, so as a matter of fact, we want your customers to notice you. Our creativity and branding know-how will help you cut through the noise with a voice that's more persuasive, memorable, and powerful than anyone.
              <br />
              <br />
              Our team of wordslingers combines the power of proven formulas with a creative flair that customers can't resist.
            </p>
          </div>
          <ServicesTypes
            defaultService="Article Writing"
            categorizedServices={categorizedServices.filter((serivce) => {
              return serivce.cat === 'Creative Copywriting';
            })}
          />
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* Gallery  */}
      {/* <section className="section relative ">
        <div className="div_container">
          <div className="heading">
            <h6 className="section-subheading text-center">Recent Work</h6>
            <h3 className="section_mainheading text-center">
              Browse Our Portfolio To See Creative Grind.
            </h3>
            <p className="section_description text-center">
            Build cross-platform apps that run on both iOS and Android from a single code base or take advantage of unlimited possibilities through virtual or augmented reality - we always find the right balance among price, quality, and project requirements through our solutions.
            </p>
          </div>
        </div>

        <ServicesGallery
          serviceGallery={Galleries.filter((serivce) => {
            return serivce.cat === 'Creative Copywriting';
          })}
        />
      </section> */}

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
          <FilteredPackages service="Creative Copywriting" />
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

export default CreativeCopywriting;
