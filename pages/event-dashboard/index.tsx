import React, { useState } from 'react';
import Image from 'next/image';
import AuthLayout from '@/layout/Authlayout';
import withAuth from '@/helpers/withAuth';

const events = {
  upcoming_events: [
    {
      id: 'event1',
      banner: '/assets/banner1.png',
      date: 'Today, 30 May',
      title: 'Tech simplified for beginners',
      location: 'Zoom meeting',
      time: '2pm',
    },
    {
      id: 'event2',
      banner: '/assets/banner2.png',
      date: '2nd June, 2023',
      title: 'Balancing Law and tech',
      location: 'Zoom meeting',
      time: '2pm',
    },
    {
      id: 'event3',
      banner: '/assets/banner3.jpg',
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
  const [images] = useState(['/assets/attend3.jpg', '/assets/attend1.jpg', '/assets/attend2.jpg']);

  return (
    <AuthLayout>
      <div>
        <div className="container mx-auto pt-16 pb-10 lg:px-14">
          <h4 className="mb-8 max-w-[1240px] mx-auto flex justify-between items-center">
            <span className="font-montserrat text-3xl font-semibold capitalize text-Grey-G800">Events</span>
            <div className="w-fit bg-[#EAEDF6] px-0.5 py-0.5 flex flex-row justify-between items-center text-black-main border border-[#D7D7D7] rounded-lg">
              <div className="bg-[#E0580C] py-3 px-4 rounded-lg text-[#fff] w-fit">
                <p>Upcoming</p>
              </div>
              <div className="py-3 px-3">
                <p className="px-4">Past</p>
              </div>
            </div>
          </h4>
          <div className="flex flex-col mb-32 gap-8">
            {events?.upcoming_events?.map((item) => {
              return (
                <div key={item.id} className={`bg-[#FCF9F7] -6 rounded-lg flex flex-row justify-between`}>
                  <div className="py-6 px-8 flex flex-col justify-center gap-4">
                    <span className="font-montserrat font-bold text text-[#E0580C]">{item.date}</span>
                    <h2 className="font-montserrat text-Grey-G800 text-2xl font-bold pt-1">{item.title}</h2>
                    <p className="font-nunito text-Grey-G200 flex items-center gap-3">
                      {item.location}
                      <span className="font-nunito font-medium">{item.time}</span>
                    </p>
                    <div className="font-nunito flex items-center">
                      <div className="flex items-center">
                        {images.map((image, index) => {
                          return (
                            <div
                              key={index}
                              className="h-9 w-9 -ml-1.5 border-2 border-Grey-G40 rounded-full overflow-hidden"
                            >
                              <Image
                                src={image}
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
                          <span className="font-nunito">{tag}</span>
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

export default withAuth(EventDashboard);
