'use client'

import '@/styles/globals.css';
import { Exo } from 'next/font/google';
import { TrpcProvider } from '@/utils/trpc-provider';
import { cn } from '@/utils/utils';
import ContactDialog from '@/components/ContactDialog';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TakeOurWordsCTA from '@/components/TakeOurWordsCTA';
import { Toaster } from '@/components/ui/Toaster';

const exo = Exo({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TrpcProvider session={undefined}>
    <html lang="en" className={cn('mx-auto max-w-[1920px]', exo.className)}>
      <body className="relative mx-auto min-h-screen  pt-[99px] antialiased">
        <ContactDialog />
        <Navbar />
              {children}
        <TakeOurWordsCTA />
        <Footer />
        <Toaster />
      </body>
    </html>
    </TrpcProvider>
  );
}
