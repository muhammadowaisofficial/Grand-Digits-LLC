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

const Illustration: NextPage = () => {
  return (
    <div className="illustration_page">
      <ServicesBanner
        subHeading="Creative & Top-Notch"
        mainHeading="2D & 3D illustration
        Designs for Just"
        styledHeading="$249"
        desc="Get your hands on personalized, on-brand illustrations guaranteed to take your marketing efforts to the next level.."
        bgImage="/images/Services/Illustration/banner_bg_web_dev.jpg"
        Image="/images/Services/Illustration/banner_web_dev.png"
      />

      {/* CMS Icons */}
      <section className="py-6 bg-[#ededed] hidden lg:block xl:block 2xl:block">
        <div className="div_container px-4 grid gap-6 grid-cols-6">
          <div className="stats">
            <h5 className="text-[#17629b] text-[30px] font-bold text-center">300+</h5>
            <p className="text-[#1e0e4e] font-medium mt-1 text-center">Illustration And Animation Projects</p>
          </div>
          <div className="stats">
            <h5 className="text-[#5e258b] text-[30px] font-bold text-center">98%</h5>
            <p className="text-[#1e0e4e] font-medium mt-1 text-center">Customer Satisfaction</p>
          </div>
          <div className="stats">
            <h5 className="text-[#468c13] text-[30px] font-bold text-center">20x</h5>
            <p className="text-[#1e0e4e] font-medium mt-1 text-center">Faster Than In-House</p>
          </div>
          <div className="stats">
            <h5 className="text-[#135e9b] text-[30px] font-bold text-center">75%</h5>
            <p className="text-[#1e0e4e] font-medium mt-1 text-center">Reduced Turnaround Time</p>
          </div>
          <div className="stats">
            <h5 className="text-[#d02e64] text-[30px] font-bold text-center">300+</h5>
            <p className="text-[#1e0e4e] font-medium mt-1 text-center">Industry Leading Professionals</p>
          </div>
          <div className="stats">
            <h5 className="text-[#ff5d42] text-[30px] font-bold text-center">100%</h5>
            <p className="text-[#1e0e4e] font-medium mt-1 text-center">Ownership Rights</p>
          </div>
        </div>
      </section>

      {/* About Services */}
      <AboutServicesSec
        Image="/images/Services/Illustration/web_dev_about.jpg"
        styledHeading="Crafting Unique Brand Persona"
        heading="With Visually Impactful Yet Bespoke Illustrations"
        desc="Our team of experienced designers crafts the perfect voice of a brand through in-depth research and choosing the right color palettes, visuals, and symbols. We bring custom brand identity to life by injecting and maximizing blissfulness, exquisiteness, and meaningfulness into an illustration. We are known for truly listening and helping businesses achieve clarity that builds lasting customer bonds."
        mainPoint="If you can imagine it, we can illustrate it"
        points={[
          '100% original artwork',
       'Storyboarding and vector art',
          'Understanding of color, shape, and form',
          'Creative direction',
          'Incorporating different art techniques',
        ]}
      />

      {/* Service Types */}
      <section className="section relative overflow-hidden">
        <div className="div_container">
          <div className="info">
            <h3 className="mb-5 text-center text-[26px] font-bold leading-tight text-[#333] xl:mb-6 xl:text-[38px] 2xl:text-[38px]">
            Modern Illustration{' '}
              <span className="text-blue">Design Is Story Telling</span>
            </h3>
            <p className="banner_description mb-[30px] text-center text-[16px] leading-snug text-[#333] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]">
            Illustration creates a world that words cannot. We are known for bringing your ideas to life by creating images you never thought imaginable. We make custom illustration design and artworks for your brand that communicates your unique story in a universal language and leaves an eternal impression on the minds of your audience.
              <br /><br />
              We are ready to create a unique, personalized illustration that will capture your target audience's imagination. It's a great way to add an extra layer to your communication marketing strategy to attract people's attention.
            </p>
          </div>
          <ServicesTypes
            defaultService="2D Animated Videos"
            categorizedServices={categorizedServices.filter((serivce) => {
              return serivce.cat === 'Illustration';
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
            Lead Focused Web Designs
            </h6>
            <h3 className="section_mainheading text-center">
            Innovative Digital Visual Solutions That Accelerate Your Growth
            </h3>
            <p className="section_description text-center">
            Attract and delight your target audience with original and vivid illustrations. Instant Logo Design offers tailored illustration services to help businesses share a cohesive buzz around their brand through stunning and impactful visuals.
            </p>
          </div>
        </div>

        <ServicesGallery
          serviceGallery={Galleries.filter((serivce) => {
            return serivce.cat === 'Illustration';
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
            Crafting memorable, lively, and eye-catching illustrations that deliver impactful, impressive results to position your brand effectively in today's increasingly complex landscape. There's no one model for all bands, which is why we offer tailored quotes that meet your business needs.
            </p>
          </div>
          <FilteredPackages service="Illustration" />
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

export default Illustration;
