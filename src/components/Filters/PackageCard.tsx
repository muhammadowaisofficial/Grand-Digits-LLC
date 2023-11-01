import Link from 'next/link';
import { PackagesType } from '@/types';
//import { Button, buttonVariants } from '../ui/Button';
import { Icons } from '@/components/Icons';
import { cn } from '@/utils/utils';

const PackageCard = ({ packageData, checkout=false }: { packageData: PackagesType, checkout?:boolean }) => {
  return (
    <div
      className="package_Card group cursor-pointer rounded-lg border-2 border-blue bg-[url('/images/bg-package.webp')] bg-cover px-6 py-9 hover:bg-gradient-to-b hover:from-blue hover:to-purpule "
      key={packageData.id}
    >
      <div className="package_info mb-4">
        <h5 className="package_name mb-2 text-[18px] leading-[20px] group-hover:text-white">
          {packageData.name}
        </h5>
        <div className="mb-2 flex items-center justify-start">
          <h6 className="w-fit text-[18px] font-medium uppercase text-lighttext line-through decoration-blue group-hover:text-white group-hover:decoration-purpule">
            {packageData.price}
          </h6>
          <h6 className="ml-2 w-fit text-[18px] font-medium uppercase text-lighttext group-hover:text-white">
            ONLY
          </h6>
        </div>
        <h3 className="discounted_price mb-2 text-[42px] font-bold leading-[46px] text-blue group-hover:text-white">
          {packageData.discountedPrice}
        </h3>
        <p className="package_desc text-[13px] font-medium text-black group-hover:text-white">
          {packageData.desc}
        </p>
      </div>
      <div className="package_points mb-4">
        <ul className="points h-32 overflow-y-scroll">
          {packageData.points.map((point, index) => (
          <li
                  className={cn((point.heading ? "font-semibold" : "font-normal"),"point mb-1  text-[12px] text-black group-hover:text-white flex items-start gap-3")}
                  // className="point mb-1  text-[12px] font-medium text-black group-hover:text-white flex items-start gap-3"
                  key={index}
                >
                  <Icons.list className='w-[12px] h-[12px] mt-[3px]' />
                  {
                    point.heading ? (
                      <>
                      {' - '}{point.message}{' - '}
                      </>
                    ) : (
                      <>
                      {point.message}
                      </>
                    )
                  }
                  
                </li>
          ))}
        </ul>
        {/* <ul className="points h-32 overflow-y-scroll">
          {packageData.points.map((point, index) => (
            <>
              {point.heading ? (
                <p
                  className="points_heading mb-1 text-[12px] font-bold text-black group-hover:text-white"
                  key={index}
                >
                  {'- '}
                  {point.message}
                  {' -'}
                </p>
              ) : (
                <li
                  className="point mb-1  text-[12px] font-medium text-black group-hover:text-white flex items-start gap-3"
                  key={index}
                >
                  <Icons.list className='w-[12px] h-[12px] mt-[3px]' />
                  {point.message}
                </li>
              )}
            </>
          ))}
        </ul> */}
      </div>
      <div className="package_btn mb-5 flex items-center justify-center">
        {/* <Button
          borders={'rounded'}
          variant={'outline'}
          className="px-[40px] py-[14px] text-[15px] font-semibold uppercase group-hover:bg-white group-hover:text-blue"
          onClick={()=> `window.location.href=/order/${packageData.id}`}
        >
          Order Now
        </Button> */}
        {
          !checkout ? (

            <a href={`/order/${packageData.id}`} className="bg-transparent flex items-center justify-center text-black outline outline-2 outline-purpule hover:text-blue hover:bg-white h-[54px] rounded-full px-[40px] py-[14px] text-[15px]  font-semibold uppercase group-hover:bg-white group-hover:text-blue ">Order Now</a>
            ) : null
        }
      </div>
      <div className="package_contact flex flex-col items-center justify-center">
        <Link href={'tel:923323745184'}>
          <p className="text-center text-[12px] font-medium text-purpule group-hover:text-white">
            Share your idea?
          </p>
          <p className="text-center text-[16px] font-bold text-[#333] group-hover:text-white">
            +92 332 3745184
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
