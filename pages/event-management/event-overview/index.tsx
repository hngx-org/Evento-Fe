'use client';

import React, { useRef } from 'react';
import EventManagementLayout from '@/layout/EventManagementLayout';
import Image from 'next/image';

const event = {
  name: 'Event Name',
  description:
    'Lorem ipsum dolor sit amet consectetur. Dis non diam neque at ac fringilla in consequat. Facilisis velit in cum lorem feugiat. Libero elementum donec at nulla. Sed auctor nunc phasellus tristique porttitor tortor fames natoque.',
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
        <div className="w-ful h-[433px] bg-Grey-G20 rounded-2xl border border-Grey-G40"></div>
      </div>

      <h1 className="mt-8 sm:mt-10 text-2xl sm:text-[32px] font-bold text-Grey-G600">{event?.name}</h1>

      <p className="mt-4 sm:mt-6 text-xl text-Grey-G500">{event?.description}</p>

      {/* Start and End */}
      <div className="mt-8 sm:mt-11 grid sm:grid-cols-2 gap-8 sm:gap-6">
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
        {/* Location */}
        <div className="sm:hidden flex items-start gap-2">
          <Image src={'/event-management/location.svg'} width={24} height={24} className="mt-2" alt="Calender Icon" />
          <div>
            <h3 className="text-2xl font-medium text-primary-100">Location of event:</h3>
            <p className="mt-2 text-xl text-gray-fot">{event?.location}</p>
          </div>
        </div>
      </div>

      {/* Category, Capacity, Type */}
      <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 text-center sm:text-left">
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

      {/* Location */}
      <div className="mt-10 hidden sm:flex items-start gap-2">
        <Image src={'/event-management/location.svg'} width={24} height={24} className="mt-2" alt="Calender Icon" />
        <div>
          <h3 className="text-2xl font-medium text-Grey-G70">Location of event:</h3>
          <p className="mt-2 text-xl text-gray-fot">{event?.location}</p>
        </div>
      </div>

      <div className="mt-8 sm:mt-11 flex flex-col sm:flex-row gap-8 sm:gap-6">
        <div className="sm:max-w-[302px] w-full">
          <h5 className="text-primary-100 text-xl font-semibold">Event link:</h5>
          <div className="mt-4 relative">
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
        <div className="sm:max-w-[302px] w-full">
          <h5 className="text-primary-100 text-xl font-semibold">Host:</h5>
          <div className="mt-[14px] font-semibold">
            <h4 className="text-xl text-gray-fot">{event?.host_name}</h4>
            <p className="mt-1 text-Grey-G70">{event?.host_email}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-20 grid sm:grid-cols-2 gap-4 sm:gap-6 items-center">
        <button className="py-3 px-[18px] text-primary-100 bg-white-N0 border border-primary-100 rounded-lg flex justify-center items-center gap-2 font-bold">
          <Image src={'/event-management/edit-2.svg'} width={20} height={20} alt="Edit" />
          <span>Edit Event</span>
        </button>
        <button className="py-3 px-[18px] text-primary-100 bg-secondary-100 border border-secondary-100 rounded-lg flex justify-center items-center gap-2 font-bold">
          <span>Edit Event</span>
          <Image src={'/event-management/edit-2.svg'} width={20} height={20} alt="Edit" />
        </button>
      </div>
    </EventManagementLayout>
  );
}
