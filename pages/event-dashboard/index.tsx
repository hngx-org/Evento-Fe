'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AuthLayout from '@/layout/Authlayout';
import withAuth from '@/helpers/withAuth';
import EventCard from '@/components/components/card/event';
import { withUserAuth } from '@/helpers/withAuth';
import { fetchAuthToken } from '@/http/authapi';
import { toast } from 'react-toastify';

const events = {
  upcoming_events: [
    {
      id: 'event1',
      banner: '/assets/hngevent.svg',
      date: 'Today, 30 May',
      title: 'Tech simplified for beginners',
      location: 'Zoom meeting',
      time: '2pm',
      price: 100,
    },
    {
      id: 'event2',
      banner: '/assets/hngevent.svg',
      date: '2nd June, 2023',
      title: 'Balancing Law and tech',
      location: 'Zoom meeting',
      time: '2pm',
      price: 100,
    },
    {
      id: 'event3',
      banner: '/assets/hngevent.svg',
      date: 'Mon. Oct 30, 3:00PM WAT',
      title: 'Data analysis simplified',
      location: 'Zoom meeting',
      time: '2pm',
      price: 100,
    },
    {
      id: 'event4',
      banner: '/assets/hngevent.svg',
      date: 'Mon. Oct 30, 3:00PM WAT',
      title: 'Data analysis simplified',
      location: 'Zoom meeting',
      time: '2pm',
      price: 100,
    },
  ],
  past_events: [
    {
      id: 'event1',
      banner: '/assets/hngevent.svg',
      date: 'Today, 30 May',
      title: 'Tech simplified for beginners',
      location: 'Zoom meeting',
      time: '2pm',
      price: 200,
    },
    {
      id: 'event2',
      banner: '/assets/hngevent.svg',
      date: '2nd June, 2023',
      title: 'Balancing Law and tech',
      location: 'Zoom meeting',
      time: '2pm',
      price: 100,
    },
    {
      id: 'event3',
      banner: '/assets/hngevent.svg',
      date: 'Mon. Oct 30, 3:00PM WAT',
      title: 'Data analysis simplified',
      location: 'Zoom meeting',
      time: '2pm',
      price: 100,
    },
    {
      id: 'event4',
      banner: '/assets/hngevent.svg',
      date: 'Mon. Oct 30, 3:00PM WAT',
      title: 'Data analysis simplified',
      location: 'Zoom meeting',
      time: '2pm',
      price: 100,
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

function EventDashboard({ tag, tag_image }: EventProps) {
  const [event, setEvent] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const authToken = await fetchAuthToken();
        console.log(authToken);

        // Use authToken as needed for secure API calls or other actions
      } catch (error) {
        console.error('Error fetching authentication token:', error);
        // Handle errors or redirect to login
        toast.error('Error fetching authentication token. Please log in.');
        // Redirect to login page
        // You might want to use Next.js router for this, for example:
        // import { useRouter } from 'next/router';
        // const router = useRouter();
        // router.push('/login');
      }
    }

    fetchData();
  }, []); 

  function changeEvent() {
    setEvent(!event);
  }

 

  return (
    <AuthLayout>
      <div className="">
        <div className="w-full border-b-[0.2px] border-Grey-G50 py-12 px-10 lg:px-24 bg-gradient-to-b from-[#e05a0c3b] to-[#ffffff]">
          <h4 className="font-montserrat text-3xl font-semibold uppercase text-[#1E1E1E]">Events</h4>
        </div>
        <div className="w-full max-w-[1240px] mx-auto pb-10 md:px-14 lg:px-20">
          <div className="lg:px-20 text-center flex flex-row py-10 items-center justify-center">
            <div
              className={`${
                event ? 'border-primary-100 text-Grey-G700' : 'text-Grey-G60 border-Grey-G50'
              } w-full flex justify-center items-center text-center pb-4 sm:px-2 border-b-[3px] sm:text-lg font-semibold sm:font-bold cursor-pointer transition-colors ease-in-out`}
              onClick={changeEvent}
            >
              <p className="">Upcoming</p>
            </div>
            <div
              className={`${
                !event ? 'border-primary-100 text-Grey-G700' : 'text-Grey-G50 border-Grey-G50'
              } w-full flex justify-center items-center text-center pb-4 sm:px-2 border-b-[3px] sm:text-lg font-semibold sm:font-bold cursor-pointer transition-colors ease-linear`}
              onClick={changeEvent}
            >
              <p className="">Past</p>
            </div>
          </div>
          <div className="lg:px-20 py-6 lg:pt-14 flex flex-row justify-between items-center">
            <p>Filter by </p>
            <div className="flex gap-2 items-center">
              <Image src="/assets/listview-icon.svg" alt="list view icon" width={30} height={30} />
              <div className="bg-[#FCEEE7] rounded p-2">
                <Image src="/assets/gridview-icon.svg" alt="grid view icon" width="18" height={18} />
              </div>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-6 lg:gap-x-10 lg:gap-y-16 mb-8 px-4 sm:px-12 md:px-16 lg:px-20 lg:py-10">
            {event
              ? events?.upcoming_events?.map((item, index) => {
                  return (
                    <EventCard
                      key={index}
                      date={item.date}
                      title={item.title}
                      location={item.location}
                      imagePath={item.banner}
                      price={item.price}
                    />
                  );
                })
              : events?.past_events?.map((item, index) => {
                  return (
                    <EventCard
                      key={index}
                      date={item.date}
                      title={item.title}
                      location={item.location}
                      imagePath={item.banner}
                      price={item.price}
                    />
                  );
                })}
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default  EventDashboard;
