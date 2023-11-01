import React from 'react';
import Link from 'next/link';
import NextImage from '@/components/ui/NextImage';

const CTAContact = () => {
  return (
    <section className="section relative overflow-hidden border border-t-lightborder lg:py-[100px] xl:py-[100px] 2xl:py-[100px]">
      <div className="div_container relative">
        <h1 className="gradient_text mx-auto text-center text-[54px] font-bold uppercase">
          Ready
        </h1>
        <h1 className="mb-2 mt-6  text-center text-[24px] font-bold uppercase">
          To Work With Us?
        </h1>
        <p className="section_description text-center">
          Our capable web design and development firm in the United States helps you to engage your target audience in fascinating new ways.

        </p>

        <div className="contact relative w-fit flex flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center gap-4 mx-auto">
          <div className="phone_contact relative w-[320px]">
            <div className="phone flex w-fit border-2 border-dark p-4">
              <NextImage src={'/images/phone_icon.png'} alt='Phone Icon' height={53} width={53} />
            </div>
            <Link
              href={'tel:923323745184'}
              className="absolute left-20 top-4 bg-white py-2"
            >
              <p className="text-[14px] text-black ">
                Call Us Anytime
                <br />
                <span className="text-[18px] font-bold">+92 332 3745184</span>
              </p>
            </Link>
          </div>
          <div className="chat_contact relative w-[320px]">
            <div className="chat flex w-fit border-2 border-dark p-4 px-5">
              <NextImage src={'/images/chat_icon.png'} alt='chat Icon' height={47} width={47} />
            </div>
            <Link
              href={'mailto:granddigits@gmail.com'}
              className="absolute left-20 top-4 bg-white py-1"
            >
              <p className="text-[14px] text-black ">
                Talt to Us Now To
                <br />
                <span className="text-[18px] font-bold">granddigits@gmail.com</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAContact;
