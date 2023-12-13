import React from 'react';
import AuthenticatedHeader from '@/components/components/authenticatedheader';
import Frame1 from '../../public/assets/eventnphone.svg';
import Date from '../../public/assets/date.svg';
import Loc from '../../public/assets/loc.svg';
import LocPointer from '../../public/assets/locpointer.svg';
import App3 from '../../public/assets/app2.svg';
import Image from 'next/image';

const Index = () => {
  return (
    <div>
      <AuthenticatedHeader />
      <div className="flex flex-col md:flex-row gap-8 md:space-between items-center max-w-[1240px] mx-auto p-4 pt-8 ">
        <div>
          <Image src={Frame1} width={0} alt="Event" className="w-[100%]" />
          <div className="flex pt-3 gap-4">
            <Image src={App3} width={0} alt="Host" />
            <p className="text-[20px] font-[500] text-[#1e1e1e] ">Hosted by Iseoluwa</p>
          </div>
        </div>
        <div className="md:pb-[40px]">
          <p className="text-[#1e1e1e] pb-4 font-mono text-[30px] sm:text-[40px] font-[600] leading-[52px] ">
            Dey Play Event
          </p>
          <div className="flex gap-6 pb-6 ">
            <Image
              src={Date}
              width={0}
              alt="Date Icon"
              className="w-[56px] h-[56px] py-[3px] px-[4px] flex justify-center items-center gap-[10px] rounded-[8px] border border-[#a4a4a4] "
            />
            <div className="flex flex-col gap-1 text-[#1e1e1e]">
              <p className="text-[14px] sm:text-[20px] font-Worksans font-[500] leading-[28px] ">
                Wednesday, November 15, 2023
              </p>
              <p className="text-[12px] sm:text-[16px] font-[400] leading-[24px] ">1:00 PM to 2:00 PM</p>
            </div>
          </div>
          <div className="flex gap-6 pb-4 ">
            <Image
              src={Loc}
              width={0}
              alt="Date Icon"
              className="w-[56px] h-[56px] py-[3px] px-[4px] flex justify-center items-center gap-[10px] rounded-[8px] border border-[#a4a4a4] "
            />
            <div className="flex flex-col text-[#1e1e1e]">
              <p className="text-[14px] sm:text-[20px] font-Worksans font-[500] leading-[28px] ">
                Location
                <Image src={LocPointer} alt="Location Pointer" className="inline" />
              </p>
              <p className="text-[12px] sm:text-[16px] font-[400] leading-[24px] ">Lagos, Nigeria</p>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-4 py-8">
            <div className="flex flex-col gap-2 w-[194px] p-[16px] border border-[#360789] border-t-1 border-r-[3px] border-b-[3px] border-l-[1px] items-start flex-shrink-0 rounded-[8px] ">
              <p>Event Category</p>
              <p>Tech</p>
            </div>
            <div className="flex flex-col gap-2 w-[193px] p-[16px] border border-[#e0580c] border-t-1 border-r-[3px] border-b-[3px] border-l-[1px] items-start flex-shrink-0 rounded-[8px] ">
              <p>Event Capacity</p>
              <p>50 persons</p>
            </div>
            <div className="flex flex-col gap-2 w-[194px] p-[16px] border border-[#12b76a] border-t-1 border-r-[3px] border-b-[3px] border-l-[1px] items-start flex-shrink-0 rounded-[8px] ">
              <p>Ticket type</p>
              <p>Free</p>
            </div>
          </div>
          <div className="rounded-[12px] border-[0.5px] border-[#c0c0c0] flex flex-col p-[16px] items-start gap-[24px] ">
            <p className="text-[16px] sm:text-[20px] font-[400] leading-[28px] text-[#1e1e1e]  ">
              Hello! To join the event, please register below.
            </p>
            <button
              style={{
                boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
              }}
              className="text-[16px] text-[#fefefe] font-[500] leading-[24px] w-[100%] rounded-[8px] py-[16px] px-[20px] flex items-center justify-center bg-[#e0580c] border border-[#e0580c] "
            >
              Click to Register
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-4 pt-3">
        <p className="text-[18px] pt-4 pb-4 sm:text-[24px] font-[500] leading-[32px] text-[#000] ">About this event</p>
        <p className="text-[16px] sm:text-[20px] font-[400] leading-7 text-[#585858] ">
          Embark on an extraordinary journey into the realm of innovation and technology with our upcoming event! We
          invite you to immerse yourself in an electrifying atmosphere where groundbreaking ideas and cutting-edge
          solutions converge. This event is not just a gathering; it&apos;s a celebration of technological marvels and
          the visionaries shaping the future.
        </p>

        <p className="text-[16px] sm:text-[20px] font-[400] leading-7 py-8 text-[#585858] ">
          Throughout the day, you&apos;ll have the opportunity to engage with industry trailblazers through insightful
          keynote sessions, hands-on workshops, and interactive panel discussions. Get ready to broaden your horizons,
          exchange ideas with like-minded enthusiasts, and witness firsthand the transformative power of technology.
        </p>
        <p className="text-[16px] sm:text-[20px] font-[400] leading-7 text-[#585858] ">
          Whether you&apos;re a seasoned professional, an aspiring tech wizard, or simply curious about the latest
          trends, our event offers something for everyone. Join us as we explore the boundless possibilities of the tech
          landscape, fostering collaboration, and sparking inspiration that transcends conventional boundaries.
        </p>
      </div>
    </div>
  );
};

export default Index;
