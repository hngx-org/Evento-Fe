import React from 'react';
import Image from 'next/image';
import ExploreLayout from '@/layout/Explorelayout';
import { Work_Sans, Nunito, Montserrat } from 'next/font/google';
import ExploreNav from '@/components/Explore/Explorenav';
import EventCard from '@/components/components/card/event';
import EventHero from '@/components/components/event-hero/event-hero';
import EventGrids from '@/components/components/event-grids/event-grids';

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

const upcoming_events = [
  {
    id: 'event1',
    banner: '/assets/banner1.png',
    date: 'Sat. Oct 6, 10:00AM WAT',
    title: 'HNG Finalist Meetup',
    location: 'Ndubuisi Kanu Park',
    price: 10,
  },
  {
    id: 'event2',
    banner: '/assets/banner2.png',
    date: 'Sat. Dec 8, 7:00PM WAT',
    title: 'Afro Nation Lagos 2023',
    location: 'Teslim Balogun Stadium',
    price: 100,
  },
  {
    id: 'event3',
    banner: '/assets/banner3.jpg',
    date: 'Mon. Oct 30, 3:00PM WAT',
    title: 'The Web3 Summit In Africa',
    location: 'Teslim Balogun Stadium',
    price: 'free',
  },
  {
    id: 'event4',
    banner: '/assets/banner1.png',
    date: 'Sat. Oct 6, 10:00AM WAT',
    title: 'HNG Finalist Meetup',
    location: 'Ndubuisi Kanu Park',
    price: 10,
  },
  {
    id: 'event5',
    banner: '/assets/banner1.png',
    date: 'Sat. Oct 6, 10:00AM WAT',
    title: 'HNG Finalist Meetup',
    location: 'Ndubuisi Kanu Park',
    price: 10,
  },
  {
    id: 'event4',
    banner: '/assets/banner1.png',
    date: 'Sat. Oct 6, 10:00AM WAT',
    title: 'HNG Finalist Meetup',
    location: 'Ndubuisi Kanu Park',
    price: 10,
  },
];

function Category() {
  return (
    <div className={workSans.className}>
      <EventHero label="Category" title="Tech Events" banner="hero-section-tech.png" />
      <div className="container mx-auto pt-16 pb-10">
        <h4 className="mb-8 flex justify-between items-center">
          <span className={`${montserrat.className} text-3xl font-semibold text-Grey-G800`}>Events</span>
          <div className="w-fit py-2.5 px-5  text-black-main border border-[#D7D7D7] rounded-xl">
            <select name="" id="" className="focus:outline-none">
              <option value="date">Date</option>
            </select>
          </div>
        </h4>
        <EventGrids events={upcoming_events} />
      </div>
    </div>
  );
}

export default Category;
