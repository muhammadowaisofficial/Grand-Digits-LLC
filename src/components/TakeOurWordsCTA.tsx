import React from 'react';
import Link from 'next/link';
import GetStartedForm from '@/components/Forms/GetStartedForm';
import NextImage from './ui/NextImage';

const TakeOurWordsCTA = () => {
  return (
    <section className="section relative py-5 xl:py-20 2xl:py-20">
      <div className="absolute left-0 top-0 -z-[1] h-0 w-full bg-blue xl:h-[192px] 2xl:h-[192px]"></div>
      <div className="div_container">
        <div className="grid grid-cols-1 xl:grid-cols-5 xl:gap-14 2xl:grid-cols-5 2xl:gap-14">
          <div className="col-span-2 bg-black p-6 xl:p-16 2xl:p-16">
            <p className="text-white">Let’s Create Together</p>
            <h4 className="mb-7 mt-3 font-semibold text-blue">
              Are you ready to take your digital presence to the next level?
            </h4>
            <div className="phone_contact relative w-[320px]">
            <div className="phone flex w-fit p-4 align-middle">
              <NextImage src={'/images/phone_icon.png'} alt='Phone Icon' height={30} width={30} />
            </div>
            <Link
              href={'tel:923323745184'}
              className="absolute left-20 top-0 py-2"
            >
              <p className="text-[14px] text-white ">
                Call Us Anytime
                <br />
                <span className="text-[18px] font-bold">+92 332 3745184</span>
              </p>
            </Link>
          </div>
            <br />
            <div className="chat_contact relative w-[320px]">
              <div className="chat flex w-fit p-4 px-5 align-middle">
                <NextImage
                  src={'/images/chat_icon.png'}
                  alt="chat Icon"
                  height={30}
                  width={30}
                />
              </div>
              <Link
                href={'mailto:granddigits@gmail.com'}
                className="absolute left-20 top-0 py-1"
              >
                <p className="text-[14px] text-white ">
                  Talt to Us Now To
                  <br />
                  <span className="text-[18px] font-bold">
                    granddigits@gmail.com
                  </span>
                </p>
              </Link>
            </div>
          </div>

          <div className="form col-span-3">
            <h3 className="mb-2 mt-8 text-[30px] font-bold xl:mt-0 xl:text-white 2xl:mt-0 2xl:text-[35px] 2xl:text-white">
              Get in touch
            </h3>
            <p className="mt-5 font-normal xl:mb-16 xl:text-white 2xl:mb-16 2xl:text-white">
              Feel free to contact us regarding any query. We will be happy to
              serve you at our best.
            </p>
            <GetStartedForm darkmode={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TakeOurWordsCTA;
