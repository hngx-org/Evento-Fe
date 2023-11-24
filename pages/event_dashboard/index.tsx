import React, { useState } from 'react';
import Image from 'next/image';
import AuthLayout from '@/layout/Authlayout';

const events = {
  upcoming_events: [
    {
      id: 'event1',
      banner: '/assets/event_dash1.svg',
      date: 'Today, 30 May',
      title: 'Tech simplified for beginners',
      location: 'Zoom meeting',
      time: '2pm',
    },
    {
      id: 'event2',
      banner: '/assets/event_dash2.svg',
      date: '2nd June, 2023',
      title: 'Balancing Law and tech',
      location: 'Zoom meeting',
      time: '2pm',
    },
    {
      id: 'event3',
      banner: '/assets/event_dash1.svg',
      date: 'Mon. Oct 30, 3:00PM WAT',
      title: 'Data analysis simplified',
      location: 'Zoom meeting',
      time: '2pm',
    },
  ],
};

interface EventProps {
  imagePath?: string;
  date?: string;
  title?: string;
  location?: string;
  price?: number | string;
  tag?: string;
  tag_image?: string;
}

function EventDashboard({ imagePath, date, title, location, price, tag, tag_image }: EventProps) {
  const [images] = useState(['/assets/attendee_dash1.svg']);
  return (
    <AuthLayout>
      <div className="">
        <div className="container mx-auto pt-16 pb-10 lg:px-14">
          <h4 className="mb-8 max-w-[1240px] mx-auto flex justify-between items-center">
            <span className={`text-3xl font-semibold capitalize text-Grey-G800`}>Events</span>
            <div className="w-fit bg-[#EAEDF6] px-0.5 py-0.5 flex flex-row justify-between items-center text-black-main border border-[#D7D7D7] rounded-lg">
              <div className="bg-[#E0580C] py-3 px-4 rounded-lg text-[#fff] w-fit">
                <p>Upcoming</p>
              </div>
              <div className="py-3 px-3 ">
                <p className="px-4">Past</p>
              </div>
            </div>
          </h4>
          <div className="flex flex-col mb-32 gap-8">
            {events?.upcoming_events?.map((item, index) => {
              return (
                <div className={`bg-[#FCF9F7] -6 rounded-lg flex flex-row justify-between`} key={index}>
                  <div className="py-6 px-8 flex flex-col justify-center gap-4">
                    <span className={`font-bold text text-[#E0580C]`}>{item.date}</span>
                    <h2 className={`text-Grey-G800 text-2xl pt-1`}>{item.title}</h2>
                    <p className={`text-Grey-G200 flex items-center gap-3`}>
                      {item.location}
                      <span className={`font-medium`}>{item.time}</span>
                    </p>
                    <div className={`flex items-center`}>
                      <div className="flex items-center">
                        {images.map((item, index) => {
                          return (
                            <div key={index} className=" -ml-1.5 overflow-hidden">
                              <Image
                                src={item}
                                height={36}
                                width={36}
                                alt="Attendant"
                                className="object-top object-cover"
                              />
                            </div>
                          );
                        })}
                        <span className="px-2 text-gray-700">30 confirmed attendees</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-[30%] rounded-lg overflow-hidden">
                    <Image src={item.banner} fill alt="Event Image" className="object-cover w-[30%]" />
                    <div className="h-full w-full bg-black-main/50 absolute top-0 left-0 p-4">
                      {tag_image && (
                        <span className="flex items-center px-4 font-bold gap-2 tracking-[-0.5px] py-1 bg-black-main/40 w-fit rounded-full p-2 text-white-100">
                          <Image src={tag_image} height={24} width={24} alt="Tag Icon" />
                          <span>{tag}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default EventDashboard;
