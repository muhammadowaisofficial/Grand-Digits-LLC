'use client'
import { NextPage } from 'next';

import { Button } from '@/components/ui/Button';
import NextImage from '@/components/ui/NextImage';
import AboutServicesSec from '@/components/AboutServices';
import ServicesBanner from '@/components/ServicesBanner';
import CTA from '@/components/CTA';

import FilteredPackages from '@/components/Filters/filteredPackages';

import useRQGlobalState from '@/utils/useRQGlobalState';

type CategoriesSecType = {
  id: string;
  img: string;
  name: string;
  desc: string;
}[];

const DigitalMarketing: NextPage = () => {
  const [modalActive, setModalActive]: any = useRQGlobalState("modal", false);


  const CategoriesSecData: CategoriesSecType = [
    {
      id: '1',
      img: '/images/Services/Digital_marketing/digitalmarketingCat1.png',
      name: 'Customized Plan',
      desc: 'We leverage your data to drive your marketing strategy that perfectly aligns with customer profiles while speaking volumes to your ideal audience. Re-engage your audience with dynamic retargeting and a brand lift strategy that optimizes your efforts explicitly tailored to meet your marketing goals.',
    },
    {
      id: '2',
      img: '/images/Services/Digital_marketing/digitalmarketingCat2.png',
      name: 'Community Management',
      desc: 'Build relationships with businesses and customers – online and offline – and utilize every opportunity to establish brand identity in social and online spaces. We design, deliver, and evaluate impactful campaigns that tackle your digital presence while developing a broad online community.',
    },
    {
      id: '3',
      img: '/images/Services/Digital_marketing/digitalmarketingCat3.png',
      name: 'Follower Growth',
      desc: "Amplify your social media followers and unlock your online success by consistently promoting your business. The good news is that even if you don't have hours and hours to spend actively recruiting new followers, you can work with Instant Logo Design to systematize your follower growth.",
    },
    {
      id: '4',
      img: '/images/Services/Digital_marketing/digitalmarketingCat4.png',
      name: 'Interactive Engagement',
      desc: "Bring your brand to life, enhance user experiences and outcomes across multiple platforms. Make the most of the interactive marketing features, visuals, videos, and techniques to capture your audience's attention while creatively presenting your product or service.",
    },
  ];
  return (
    <div className="digital_marketing_page">
      <ServicesBanner
        subHeading="Top-notch"
        mainHeading="Digital Marketing Service for just"
        styledHeading="$99"
        desc="Custom strategy combined with data-driven insights impact business traffic, revenue, and growth, fueled by expert-led marketing services."
        bgImage="/images/Services/Digital_marketing/banner_bg_web_dev.jpg"
        Image="/images/Services/Digital_marketing/banner_web_dev.png"
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
        Image="/images/Services/Digital_marketing/web_dev_about.jpg"
        styledHeading="Turn Digital Marketing Into"
        heading="Proven And Revenue-Driven Growth"
        desc="Instant Logo Design's digital marketing services specialize to fit the needs of growing businesses. Everything from our pricing to how we deliver our services is tailored to fit the needs of your business. Many agencies boast about working with Fortune 500 companies and popular name-brands. We don't. We earn our stripes by delivering real results for businesses."
        mainPoint="We love when our work becomes your brand story"
        points={[
          'Sustain a positive revenue trend ',
          'An extension of your marketing team',
          'Client relationship and result focused',
          'Customized services perfectly aligned',
          'Glitz and glamor that convert leads',
          'Wide variety of digital services',
        ]}
      />

      {/* Service Types */}
      <section className="section relative overflow-hidden bg-[#F0F0F0]">
        <div className="div_container">
          <div className="heading">
            <h6 className="section-subheading text-center">
              Inject Your Brand With
            </h6>
            <h3 className="section_mainheading text-center">
              Exceptional And Impeccable Branding Services
            </h3>
            <p className="section_description text-center">
              Our fantastic brand marketing services help to raise brand
              awareness, increase revenue, and provide a great return on
              investment. Our digital marketing services give businesses of all
              sizes an opportunity to market their brand 24/7 and expand their
              reach at a low cost. As long as your business has a strong digital
              presence, your customers will always find you and create that with
              Instant Logo Design.
              <br />
              <br />
              Let your brand revolve efficiently around the digital world with a
              degree of 360 marketing Services.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 ">
            {CategoriesSecData.map((category) => (
              <div
                className="group mx-auto bg-[#cccccc] hover:bg-purpule"
                key={category.id}
              >
                <div className="content flex flex-col items-center p-5">
                  {category.img && (
                    <NextImage
                      src={category.img}
                      alt={category.name}
                      width={80}
                      height={80}
                      className="mb-4"
                    />
                  )}
                  <p className="mb-3 text-center font-bold group-hover:text-white leading-tight xl:text-[20px] 2xl:text-[20px]">
                    {category.name}
                  </p>
                  <p className="text-center font-normal text-[#666] group-hover:text-white">
                    {category.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center pt-8">
          <Button variant={'outline'} borders={'rounded'} onClick={() => setModalActive(true)}>Sign up now to &nbsp;<span className='text-blue'>Avail 70% Discount</span></Button>
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
          <FilteredPackages service="Digital Marketing" />
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

export default DigitalMarketing;
