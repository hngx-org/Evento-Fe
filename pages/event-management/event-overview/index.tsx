'use client';

import React, { useRef } from 'react';
import EventManagementLayout from '@/layout/EventManagementLayout';
import Image from 'next/image';

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
  host_name: 'Ayodeji Sebanjo, Kalu John, Magaret Iyanya',
  host_email: 'ayoniyi28@gmail.com',
  image: '',
};

export default function Index() {
  // const copyRef = useRef<HTMLInputElement | null>(null);

  // function copyLink() {
  //   copyRef.current.select();
  //   document.execCommand('copy');
  // }

  return (
    <EventManagementLayout>
      {/* End Image */}
      <div className="mt-[52px] sm:mt-10 relative">
        <button className="absolute top-4 left-4 px-4 py-[6px] rounded-md bg-Grey-G40 text-xl font-semibold">
          {event?.type}
        </button>
        {/* The Immediate Div after this comment should be replace with the actual event Image during API consumption */}
        <div className="w-ful h-[433px] bg-[F5F5F5] sm:bg-[#00000033] rounded-2xl border border-Grey-G40"></div>
        <button
          type="button"
          title="Edit Event Image"
          className="absolute w-[52px] h-[52px] bottom-6 right-6 rounded-full bg-[#1E1E1E99] flex justify-center items-center"
        >
          <Image src={'/event-management/gallery-edit.svg'} width={24} height={24} alt="Edit Event Image" />
        </button>
      </div>
      {/* Event Name */}
      <h1 className="mt-8 sm:mt-10 text-2xl sm:text-[32px] font-bold text-Grey-G600">{event?.name}</h1>
      {/* Description */}
      <div className="mt-4 sm:mt-6 text-xl text-Grey-G300 grid gap-5">
        <p>{event?.description1}</p>
        <p>{event?.description2}</p>
        <p>{event?.description3}</p>
      </div>

      {/* Location, Start, and End */}
      <div className="mt-8 grid gap-8">
        {/* Location */}
        <div className="flex items-start gap-2">
          <Image src={'/event-management/location.svg'} width={24} height={24} className="mt-2" alt="Calender Icon" />
          <div>
            <h3 className="text-2xl font-medium text-primary-100">Location of event:</h3>
            <p className="mt-2 text-xl text-gray-fot">{event?.location}</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-6">
          {/* Start */}
          <div>
            <div className="flex gap-1 items-center">
              <Image
                src={'/event-management/calender.svg'}
                width={40}
                height={40}
                // className='w-6 h-7'
                alt="Calender Icon"
              />
              <h3 className="text-2xl font-medium text-primary-100">Start date:</h3>
            </div>
            <div className="px-4 mt-2 text-xl font-semibold">
              <h5 className="text-gray-fot">{event?.start_date}</h5>
              <p className="mt-2 text-Grey-G70">{event?.start_time}</p>
            </div>
          </div>
          {/* End */}
          <div>
            <div className="flex gap-1 items-center">
              <Image
                src={'/event-management/calender.svg'}
                width={40}
                height={40}
                // className='w-6 h-7'
                alt="Calender Icon"
              />
              <h3 className="text-2xl font-medium text-primary-100">End date:</h3>
            </div>
            <div className="px-4 mt-2 text-xl font-semibold">
              <h5 className="text-gray-fot">{event?.end_date}</h5>
              <p className="mt-2 text-Grey-G70">{event?.end_time}</p>
            </div>
          </div>
        </div>
        {/* Location */}
      </div>

      {/* Category, Capacity, Type */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center sm:text-left">
        <div>
          <h5 className="text-xl sm:text-2xl font-medium text-Grey-G70">Event category</h5>
          <p className="mt-2 text-xl text-gray-fot">{event?.category}</p>
        </div>
        <div>
          <h5 className="text-xl sm:text-2xl font-medium text-Grey-G70">Event capacity</h5>
          <p className="mt-2 text-xl text-gray-fot">{event?.capacity}</p>
        </div>
        <div className="col-span-2 sm:col-auto">
          <h5 className="text-xl sm:text-2xl font-medium text-Grey-G70">Event Ticket type</h5>
          <p className="mt-2 text-xl text-gray-fot">{event?.type}</p>
        </div>
      </div>

      {/* Event Link and Host */}
      <div className="mt-8 flex flex-col-reverse sm:flex-col gap-8 ">
        <div className="w-full flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-2">
          <h5 className="text-primary-100 text-2xl font-semibold">Host:</h5>
          <div className="font-medium">
            <h4 className="text-xl text-Grey-G500">{event?.host_name}</h4>
            {/* <p className="mt-1 text-Grey-G70">{event?.host_email}</p> */}
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-2">
          <h5 className="text-primary-100 text-2xl font-medium">Event link:</h5>
          <div className="sm:max-w-[257px] w-full relative">
            <input
              className="w-full py-3 px-4 rounded-lg border border-Success-S500 text-Success-S500 bg-Success-S50 font-bold"
              type="text"
              value={event?.link}
              title="Event Link"
              // ref={copyRef}
              readOnly
            />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2"
              title="copy event link"
              type="button"
              // onClick={copyLink}
            >
              <Image src={'/event-management/copy.svg'} width={24} height={24} alt="Copy" />
            </button>
          </div>
        </div>
      </div>

      {/* Edit Event */}
      <div className="mt-8 sm:mt-20">
        <button
          type="button"
          className="max-w-[411px] w-full mx-auto py-3 px-[18px] text-primary-100 bg-white-N0 border border-primary-100 rounded-lg flex justify-center items-center gap-2 font-bold"
        >
          <Image src={'/event-management/edit-2.svg'} width={20} height={20} alt="Edit" />
          <span>Edit Event</span>
        </button>
      </div>
    </EventManagementLayout>
  );
}
