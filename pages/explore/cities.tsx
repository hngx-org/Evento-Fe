import React from 'react';
import Image from 'next/image';
import ExploreLayout from '@/layout/Explorelayout';
import { Work_Sans } from 'next/font/google';
import { CiFilter, CiLocationOn } from 'react-icons/ci';
import { Events } from '@/@types';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

const Cities = () => {
  const events: Events[] = [
    {
      image: '/img/hngfinalist.png',
      date: 'Sat. Oct 6, 10:00AM WAT',
      eventName: 'HNG Finalist Meetup',
      location: 'Ndubuisi Kanu Park',
      amount: '$10',
      eventType: '',
    },
    {
      image: '/img/afronation.png',
      date: 'Sat. Dec 8, 7:00PM WAT',
      eventName: 'Afro Nation Lagos 2023',
      location: 'Teslim Balogun Stadium',
      amount: '$100',
      eventType: '',
    },
    {
      image: '/img/web3.png',
      date: 'Mon. Oct 30, 3:00PM WAT',
      eventName: 'The Web3 Summit In Africa',
      location: 'Teslim Balogun Stadium',
      amount: 'Free',
      eventType: 'Business',
    },
  ];
  return (
    <ExploreLayout>
      <section className="relative h-[70vh] w-full">
        <div className="relative h-full w-full">
          <Image src="/img/lagos.png" width={300} height={300} alt="cities" className="w-full h-full object-cover" />
        </div>

        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center">
          <div className="w-full h-full bg-gradient-to-b from-[#049CA3] to-[#000] absolute top-0 left-0 opacity-[0.5]"></div>

          <p className="text-[18px] font-medium text-white-100 py-2 px-10 rounded-full bg-[#00000066] z-10">City</p>

          <h1 className="text-white-100 text-[38px] text-center font-bold z-10">Lagos</h1>
        </div>
      </section>

      <section className="p-10">
        <div className="flex items-center justify-between">
          <h4 className="text-[28px] font-medium">Events</h4>
          <div className="bg-primary-100 py-1 px-3 rounded-lg flex items-center cursor-pointer">
            <CiFilter className="text-white-100 text-3xl font-medium " />
            <p className="text-[24px] text-white-100 font-medium">Filter</p>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center gap-8 py-7">
          {events.map((eventDetails, index) => (
            <div className="relative flex flex-col gap-4 p-5 border border-[#F5F5F5] rounded-md" key={index}>
              <div className="relative">
                <Image
                  src={eventDetails.image}
                  width={300}
                  height={300}
                  alt="Image of events"
                  className="relative w-full h-full"
                />
                {eventDetails.eventType && (
                  <div className="flex items-center gap-1 py-2 px-5 rounded-full bg-[#00000066] absolute top-2 left-2">
                    <Image src="/img/briefcase.png" width={30} height={30} alt="briefcase" />
                    <p className="text-white-100 text-[18px] font-bold">{eventDetails.eventType}</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[14px] text-Grey-G90">{eventDetails.date}</p>
                <h1 className="text-[24px] text-Grey-G800 font-bold">{eventDetails.eventName}</h1>
                <div className="flex items-center gap-1">
                  <CiLocationOn className="text-primary-100 text-xl" />
                  <p className="text-[16px] text-Grey-G500">{eventDetails.location}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex items-start relative">
                      <Image src="/img/user1.png" width={30} height={30} alt="user" className="relative" />
                      <Image src="/img/user2.png" width={30} height={30} alt="user" className="relative left-[-5px] " />
                      <Image src="/img/user3.png" width={30} height={30} alt="user" className="relative left-[-10px]" />
                      <div className="p-1 flex items-center justify-center rounded-full bg-primary-100 border-[2px] border-Grey-G40 text-[14px] font-semibold text-white-100 relative left-[-15px]">
                        53+
                      </div>
                    </div>

                    <p className="text-primary-100 text-[16px] font-semibold">Going</p>
                  </div>

                  <h1 className="text-[24px] text-Grey-G800 font-bold">{eventDetails.amount}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </ExploreLayout>
  );
};

export default Cities;
