'use client';

import React, { useRef } from 'react';
import { Work_Sans, Nunito, Montserrat } from 'next/font/google';
import EventManagementLayout from '@/layout/EventManagementLayout';
import Image from 'next/image';
import { Edit2, Copy, Calendar, Location } from 'iconsax-react';
import Frame1 from '../../public/assets/eventnphone.svg';
import LocPointer from '../../public/assets/locpointer.svg';
import App3 from '../../public/assets/app2.svg';
import Button from '@ui/NewButton';
import AuthenticatedHeader from '@/components/components/authenticatedheader';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const event = {
  name: 'Event Name',
  description1: `Embark on an extraordinary journey into the realm of innovation and technology with our upcoming event! We invite you to immerse yourself in an electrifying atmosphere where groundbreaking ideas and cutting-edge solutions converge. This event is not just a gathering; it's a celebration of technological marvels and the visionaries shaping the future.`,
  description2: `Throughout the day, you'll have the opportunity to engage with industry trailblazers through insightful keynote sessions, hands-on workshops, and interactive panel discussions. Get ready to broaden your horizons, exchange ideas with like-minded enthusiasts, and witness firsthand the transformative power of technology.`,
  description3: `Whether you're a seasoned professional, an aspiring tech wizard, or simply curious about the latest trends, our event offers something for everyone. Join us as we explore the boundless possibilities of the tech landscape, fostering collaboration, and sparking inspiration that transcends conventional boundaries.`,
  start_date: 'Thursday, November 16, 2023',
  end_date: 'Thursday, November 21, 2023',
  start_time: '5:00 PM to 6:00 PM',
  end_time: '5:00 PM to 6:00 PM',
  category: 'Tech',
  capacity: '50 persons',
  ticket: 'Free',
  type: 'Virtual',
  location: 'Location of the event entered is displayed here for the planner to see',
  link: 'evento/yk1fzl2f',
  host_name: 'Ayodeji Sebanjo',
  host_email: 'ayoniyi28@gmail.com',
  image: Frame1,
};

export default function Index() {
  return (
    <>
      <AuthenticatedHeader />
      <div className="flex flex-col md:flex-row gap-8 md:space-between items-center max-w-[1240px] mx-auto p-4 pt-8 ">
        <div>
          <Image src={event?.image} width={528} height={541} alt="Event" />
          <div className="flex pt-3 gap-4">
            <Image src={App3} width={0} alt="Host" />
            <p className="text-[20px] font-[500] text-[#1e1e1e] ">{event?.host_name}</p>
          </div>
        </div>
        <div className="md:pb-[40px]">
          <p className="text-[#1e1e1e] pb-4 font-mono text-[30px] sm:text-[40px] font-[600] leading-[52px] ">
            {event?.name}
          </p>
          <div className="flex gap-6 pb-6 ">
            <div className="w-[56px] h-[56px] py-[3px] px-[4px] flex justify-center items-center gap-[10px] rounded-[8px] border border-[#a4a4a4] ">
              <Calendar size="50" color="#000000" />
            </div>
            <div className="flex flex-col gap-1 text-[#1e1e1e]">
              <p className="text-[14px] sm:text-[20px] font-Worksans font-[500] leading-[28px] ">{event?.start_date}</p>
              <p className="text-[12px] sm:text-[16px] font-[400] leading-[24px] ">{event?.start_time}</p>
            </div>
          </div>
          <div className="flex gap-6 pb-4 ">
            <div className="w-[56px] h-[56px] py-[3px] px-[4px] flex justify-center items-center gap-[10px] rounded-[8px] border border-[#a4a4a4] ">
              <Location size="50" color="#000000" />
            </div>
            <div className="flex flex-col text-[#1e1e1e]">
              <p className="text-[14px] sm:text-[20px] font-Worksans font-[500] leading-[28px] ">
                Location
                <Image src={LocPointer} alt="Location Pointer" className="inline" />
              </p>
              <p className="text-[12px] sm:text-[16px] font-[400] leading-[24px] ">{event?.location}</p>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-4 py-8">
            <div className="flex flex-col gap-2 w-[194px] p-[16px] border border-[#360789] border-t-1 border-r-[3px] border-b-[3px] border-l-[1px] items-start flex-shrink-0 rounded-[8px] ">
              <p>Event Category</p>
              <p>{event?.category}</p>
            </div>
            <div className="flex flex-col gap-2 w-[193px] p-[16px] border border-[#e0580c] border-t-1 border-r-[3px] border-b-[3px] border-l-[1px] items-start flex-shrink-0 rounded-[8px] ">
              <p>Event Capacity</p>
              <p>{event?.capacity}</p>
            </div>
            <div className="flex flex-col gap-2 w-[194px] p-[16px] border border-[#12b76a] border-t-1 border-r-[3px] border-b-[3px] border-l-[1px] items-start flex-shrink-0 rounded-[8px] ">
              <p>Ticket type</p>
              <p>{event?.ticket}</p>
            </div>
          </div>

          <div className="rounded-[12px] border-[0.5px] border-[#c0c0c0] flex flex-col p-[16px] items-start gap-[24px] ">
            <p className="text-[16px] sm:text-[20px] font-[400] leading-[28px] text-[#1e1e1e]  ">
              Hello! To join the event, please register below.
            </p>
            <Button
              style={{
                boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
              }}
              className="text-[16px] text-[#fefefe] font-[500] leading-[24px] w-[100%] rounded-[8px] py-[16px] px-[20px] flex items-center justify-center bg-[#e0580c] border border-[#e0580c] "
            >
              Click to Register
            </Button>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-4 pt-3">
        <p className="text-[18px] pt-4 pb-4 sm:text-[24px] font-[500] leading-[32px] text-[#000] ">About this event</p>
        <p className="text-[16px] sm:text-[20px] font-[400] leading-7 text-[#585858] ">{event?.description1}</p>

        <p className="text-[16px] sm:text-[20px] font-[400] leading-7 py-8 text-[#585858] ">{event?.description2}</p>
        <p className="text-[16px] sm:text-[20px] font-[400] leading-7 text-[#585858] ">{event?.description3}</p>
      </div>
    </>
  );
}
