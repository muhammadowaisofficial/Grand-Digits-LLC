import React from 'react';

import CTAContact from '@/components/CTAContact';
import ComboSec from '@/components/ComboSec';
import Testimonials from '@/components/Testimonials';

export const metadata = {
  title: 'Services',
  description: 'Website Name and its Description',
};

const ServicesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {children}
      {/* Combo Section */}
      <ComboSec />

      {/* CTA Contact */}
      <CTAContact />

      {/* Testimonials */}
      <Testimonials />
    </main>
  );
};

export default ServicesLayout;
