import React from 'react';
import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/Dialog';
import NextImage from '@/components/ui/NextImage';
//import { Button } from './ui/Button';
import useRQGlobalState from '@/utils/useRQGlobalState';
import GetStartedForm from '@/components/Forms/GetStartedForm';

const ContactDialog = () => {
  const active = true;
  const [modalActive, setModalActive]:any = useRQGlobalState("modal", false);
  if (!modalActive) return null;
  return (
    <Dialog open={modalActive} onOpenChange={setModalActive}>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="dialog_header mb-6">
            <p className="text-left text-white xl:text-[20px] 2xl:text-[20px] mb-4">
              <strong>Wait!!</strong> Looking for an{' '}
              <strong>Amazing Offer?</strong>
            </p>
            <h4 className="text-[24px] font-normal text-white xl:text-[42px] 2xl:text-[42px] text-left">
              Get Your <strong>Design Now</strong>
            </h4>
          </div>
        </DialogHeader>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 2xl:grid-cols-5">
            <div className="dialog_form xl:col-span-2 2xl:col-span-2">
                <GetStartedForm darkmode={false} />
            </div>
            <div className="dialog_info hidden lg:block xl:block 2xl:block border-l border-l-[#5c4283] m-4 p-4 xl:col-span-2 2xl:col-span-2">
                <div className=' email py-2 mb-4 border-b border-b-[#5c4283]'>
                <Link href={"mailto:granddigits@gmail.com"} className='py-2 '>
                    <h6 className="text-white text-[24px] font-bold mb-2">Email</h6>
                    <p className="text-[#fbf7f7] text-[16px] mb-2">granddigits@gmail.com</p>
                </Link>
                </div>
                <div className=' phone py-2 mb-4 border-b border-b-[#5c4283]'>
                <Link href={"tel:923323745184"} className='py-2 '>
                    <h6 className="text-white text-[24px] font-bold mb-2">Phone</h6>
                    <p className="text-[#fbf7f7] text-[16px] mb-2">+92 332 3745184</p>
                </Link>
                </div>
                <div className=' address py-2'>
                <Link href={"#"} className='py-2 '>
                    <h6 className="text-white text-[24px] font-bold mb-2">Address</h6>
                    <p className="text-[#fbf7f7] text-[16px] mb-2">Karachi Pakistan, 75100</p>
                </Link>
                </div>

            </div>
        </div>
        <NextImage src={'/images/section_spin_elem2.png'} alt="Dialog Box Dotted Image" width={100} height={100} className="hidden xl:block 2xl:block absolute right-[200px] top-[80px]"/>
        <NextImage src={'/images/dialog_img.webp'} alt="Dialog Box Girl Image" width={467} height={449} className="hidden xl:block 2xl:block absolute -right-[138px] bottom-0"/>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
