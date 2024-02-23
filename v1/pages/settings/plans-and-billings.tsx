import Settingslayout from '@/layout/Settingslayout';
import React, { useState } from 'react';
import { Montserrat, Nunito } from 'next/font/google';
import Plans from '@/components/Settings/Plans-Billings.tsx/Plans';
import PaymentHistory from '@/components/Settings/Plans-Billings.tsx/PaymentHistory';
import withAuth from '@/helpers/withAuth';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

function PlansAndBillings() {
  return (
    <Settingslayout>
      <h2 className={`${montserrat.className} text-Grey-G700 text-2xl lg:text-[2rem] font-semibold mt-5 lg:mt-0`}>
        Plans & Billings
      </h2>
      <div className={`${nunito.className} flex flex-col gap-10`}>
        <Plans />
        {/* <CardInfo /> */}
        <PaymentHistory />
        {/* <div className="mt-3 flex flex-col gap-9">
          <div className={`space-y-2`}>
            <h3 className="text-Grey-G700 text-xl font-medium">Cards</h3>
            <p className="text-Grey-G100 text-sm">
              Take full control of your cards; toggle the switch to set a default card for automatic plan renewal
            </p>
          </div>
          <div className="flex flex-col gap-8">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`flex items-center justify-between ${
                  card.id !== cards.length ? 'border-b border-b-Grey-G40 pb-8' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded border border-Grey-G30 flex items-center justify-center">
                    <Image src={card.logo} alt="" width={24} height={18} />
                  </div>
                  <div>
                    <p className="text-Grey-600 font-medium">{card.name}</p>
                    <p className="text-Grey-G400 text-[0.625rem]">{card.code}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <Switch defaultValue={false} />
                  <div className="text-sm text-primary-100 font-normal cursor-pointer">Remove Card</div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </Settingslayout>
  );
}

export default withAuth(PlansAndBillings);
