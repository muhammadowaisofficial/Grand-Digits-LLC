'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { PackagesType, checkoutClientDataType } from '@/types';
import { packages } from '@/content/Packages';

import { Icons } from '@/components/Icons';
import ClientOrderInfoForm from '@/components/Forms/ClientOrderInfoForm';

import PackageCard from '@/components/Filters/PackageCard';

type paramsType = {
  packageId: string;
};

const OrderPage = ({ params }: { params: paramsType }) => {
  const [filteredPackages, setFilteredPackages] = useState<PackagesType>();
  // const [clientData, setClientData] = useState<checkoutClientDataType>();


  useEffect(() => {
    setFilteredPackages(packages.find((data) => data.id === params.packageId));
  }, []);

  // const getClientInfo = ({data}: {data:checkoutClientDataType}) => {
  //   setClientData(data)
  //   console.log(data)
  // }


  return (
    <div className="Order_page">
      <section className="border-b border-b-lightborder px-4 py-10">
        <div className="div_container ">
          <h4 className="mb-4 text-center text-[24px] font-semibold leading-tight">
            Let's Get Started with Your Project
          </h4>
          <p className="text-center text-[16px] leading-tight text-purpule">
            Please Provide the information requested below.
          </p>
        </div>
      </section>

      <section className="section relative overflow-hidden">
        <div className="div_container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
            {/* Package Info */}
            <div className="package">
              {filteredPackages && (
                <PackageCard packageData={filteredPackages} checkout />
              )}
            </div>

            {/* Client Info Form */}
            <div className="client_info_form">
              <ClientOrderInfoForm darkmode  />
              {/* <ClientOrderInfoForm darkmode getClientInfo={getClientInfo}  /> */}
            </div>

            {/* Assitance Info */}
            <div className="assistance_info">
              <h4 className="font-semibold text-purpule">Need</h4>
              <h4 className="font-semibold text-black">Assistance?</h4>
              <div className="icon_group mt-6 flex flex-row items-center gap-2">
                <div className="icon_bg border-purpule flex h-12 w-12 items-center justify-center rounded-full border">
                  <Icons.phone className="h-[18px] w-[18px]" />
                </div>
                <div className="content">
                  <Link href={'tel:923323745184'}>
                    <p className="font-semibold uppercase">
                      TOLL FREE:
                    </p>
                    <p className="text-gray-500 ">+92 332 3745184</p>
                  </Link>
                </div>
              </div>
              <div className="icon_group mt-6 flex flex-row items-center gap-2">
                <div className="icon_bg border-purpule flex h-12 w-12 items-center justify-center rounded-full border">
                  <Icons.messageCircle className="h-6 w-h-6 text-blue" />
                </div>
                <div className="content">
                  <Link href={'#'}>
                    <p className="font-semibold uppercase">
                      Live Chat:
                    </p>
                    <p className="text-gray-500 ">with Our Design Expert</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderPage;
