import Image from 'next/image';
import sampleImage from '@/public/assets/profile/imageCard.svg';
import React from 'react';
import { Global, Location, Timer1 } from 'iconsax-react';
import avatars from '@/public/assets/profile/avatars.svg';

const GridEventCard = () => {
  return (
    <div className="w-[405px]  rounded-2xl bg-[#FEFEFE] overflow-hidden border border-[#959595]">
      <Image src={sampleImage} alt={''} className="w-full h-[180px]" />
      <div className="w-full p-4 flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center justify-between text-primary-100 text-base font-semibold  ">
            <span className="">Mon. Oct 30</span>
            <span className="px-3 py-1 bg-secondary-100">$100</span>
          </div>

          <h6 className="text-2xl font-semibold ">HNG Finalist Meetup</h6>

          <div className="font-medium text-sm text-[#868686] flex flex-col gap-y-2">
            <div className="flex gap-x-2 items-center">
              <Location size="16" color="#303030" />

              <span className="">Greenfield, IK</span>
            </div>
            <div className="flex gap-x-2 items-center">
              <Timer1 size="16" color="#303030" />

              <span className="">3:00PM WAT</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-x-2 text-[#3C3C3C] text-xs font-medium items-center w-fit">
            <Image src={avatars} alt={''} />
            +32 People registered
          </div>

          <div className="flex gap-x-1 items-center text-xs text-[#868686] font-medium">
            <Global size="12" color="#303030" /> Public
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridEventCard;
