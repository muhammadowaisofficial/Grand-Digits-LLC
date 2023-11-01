import React from 'react';
import Link from 'next/link';
import { Icons } from '@/components/Icons';
import NextImage from '@/components/ui/NextImage';

const Footer = () => {
  return (
    <footer className='Footer'>

      {/* Main Footer */}
      <div className="footer_top bg-[url('/images/bg-footer.webp')] bg-cover py-5  xl:py-[60px] 2xl:py-[60px] px-4">
        <div className="div_container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-3">
          {/* Footer Info */}
          <div className="info_footer">
            <Link href={'/'} className='w-fit'>
              <NextImage src={'/images/white-logo.png'} alt='Grand Digits Logo' height={57} width={120} />
            </Link>
            <p className="web_desc text-[14px] text-darktext my-10">We are your reliable partners who are as committed to your success as you are. This is why we offer customized solutions targeted at meeting your specific needs to ensure you enjoy the success you deserve.</p>
          </div>
          {/* Quick Links */}
          <div className="quick_links">
            <h6 className="text-[18px] text-white mb-6">Quick Links</h6>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Home
                </Link>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                About Us
                </Link>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Packages
                </Link>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Combo Packages
                </Link>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Portfolio
                </Link>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Reviews
                </Link>
          </div>
          {/* Services */}
          <div className="services">
            <h6 className="text-[18px] text-white mb-6">Services</h6>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Website Development
                </Link>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Logo Design
                </Link>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Ecommerce Solutions
                </Link>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Animation
                </Link>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Illustration
                </Link>
              <Link href={'/'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Marketing Collateral
                </Link>
          </div>
          {/* Contact */}
          <div className="Contact_info">
            <h6 className="text-[18px] text-white mb-6">Get in Touch Now!</h6>
              <Link href={'tel:923323745184'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                +92 332 3745184
                </Link>
              <Link href={'mailto:granddigits@gmail.com'} className='text-darktext tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                granddigits@gmail.com
                </Link>
              <Link href={'#'} className='text-darktext relative tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue pl-5'>
                <Icons.play className='w-[14px] h-[14px] absolute top-1 left-0' />
                Karachi Pakistan, 75100
                </Link>
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="footer_bottom border-t border-t-[#5d5c5e] bg-[#212121] py-3 px-4">
        <div className="div_container flex items-center justify-center gap-3 flex-col lg:flex-row xl:flex-row 2xl:flex-row lg:justify-between xl:justify-between 2xl:justify-between">
          <p className="text-lighttext">
            Copyright © 2023 Grand Digits All Rights Reserved.
          </p>
          <div className="socials flex items-center gap-2">
            <Link
              href={
                '#'
              }
              className="facebook_social flex items-center justify-center rounded-full bg-white p-2"
            >
              <Icons.facebook className="" />
            </Link>
            <Link
              href={'#'}
              className="facebook_social flex items-center justify-center rounded-full bg-white p-2"
            >
              <Icons.insta className="" />
            </Link>
            <Link
              href={'#'}
              className="facebook_social flex items-center justify-center rounded-full bg-white p-2"
            >
              <Icons.linkedin className="" />
            </Link>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
