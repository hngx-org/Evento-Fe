import React from 'react';
import Image from 'next/image';
import ExploreLayout from '@/layout/Explorelayout';
import { Work_Sans } from 'next/font/google';
import { IoIosArrowDropright } from 'react-icons/io';
import { City } from '@/@types';
import { Category } from '@/@types';
import Link from 'next/link';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

export default function Home() {
  const cities: City[] = [
    {
      name: 'Lagos',
      image: '/img/lagos.png',
    },
    {
      name: 'Portharcourt',
      image: '/img/port.png',
    },
    {
      name: 'Abuja',
      image: '/img/abj.png',
    },
    {
      name: 'Uyo',
      image: '/img/uyo.png',
    },
    {
      name: 'Enugu',
      image: '/img/enugu.png',
    },
    {
      name: 'Warri',
      image: '/img/warri.png',
    },
  ];

  const categories: Category[] = [
    {
      topic: 'Tech',
      image: '/img/tech.png',
    },
    {
      topic: 'Career',
      image: '/img/career.png',
    },
    {
      topic: 'Arts',
      image: '/img/arts.png',
    },
    {
      topic: 'Concert',
      image: '/img/concert.png',
    },
    {
      topic: 'Business',
      image: '/img/business.png',
    },
    {
      topic: 'Warri',
      image: '/img/warri.png',
    },
    {
      topic: 'Sport',
      image: '/img/sport.png',
    },
    {
      topic: 'Movies',
      image: '/img/movies.png',
    },
    {
      topic: 'Charity',
      image: '/img/charity.png',
    },
    {
      topic: 'Learning',
      image: '/img/learning.png',
    },
  ];

  return (
    <ExploreLayout>
      <section className="relative bg-custom-linear h-[80vh] w-full flex flex-col items-center justify-center">
        <h1 className="relative z-10 text-[52px] font-bold">Explore Events</h1>
        <p className="relative z-10 w-[33%] text-[16px] text-center">
          Lorem ipsum dolor sit amet consectetur. Euismod duis quam eget odio vivamus pellentesque. Lorem ipsum dolor
          sit amet consectetur. Euismod duis quam eget odio vivamus pellentesque.
        </p>
        <Image src="/img/Earth.png" alt="" width={150} height={150} className="absolute top-[20%] left-[28%] z-0" />
      </section>

      <section className="p-10">
        <div className="flex items-center justify-between">
          <h4 className="text-[28px] font-medium">Categories To Explore</h4>
          <Link href="/explore/all-categories">
            <IoIosArrowDropright className="text-primary-100 text-4xl cursor-pointer" />
          </Link>
        </div>

        <div className="grid grid-cols-5 items-center gap-8 py-7">
          {categories.slice(0, 5).map((category, index) => (
            <Link
              href={`/explore/category/${category.topic}`}
              key={index}
              className="flex flex-col items-center bg-[#FEFEFE] border border-[#F5F5F5] rounded-md p-5"
            >
              <Image src={category.image} width={50} height={50} alt={category.topic} />
              <p className="text-[28px] font-medium">{category.topic}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="p-10">
        <h4 className="text-[28px] font-medium">Explore By Cities</h4>

        <div className="grid grid-cols-3 items-center gap-8 py-7">
          {cities.map((city, index) => (
            <Link
              href={`/explore/city/${city.name}`}
              key={index}
              className="relative border border-Grey-G20 rounded-md"
            >
              <Image
                src={city.image}
                width={300}
                height={300}
                alt={`Image of ${city.name}`}
                className="relative w-full h-full"
              />
              <p className="text-[18px] font-medium text-white-100 absolute top-5 left-5 py-2 px-5 rounded-full bg-[#00000066]">
                {city.name}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </ExploreLayout>
  );
}
