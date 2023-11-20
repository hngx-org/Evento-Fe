import React from 'react';
import Image from 'next/image';
import ExploreLayout from '@/layout/Explorelayout';
import { Work_Sans } from 'next/font/google';
import { Category } from '@/@types';
import Link from 'next/link';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

const AllCategories = () => {
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
      <section className="p-10">
        <div className="flex items-start justify-start">
          <h4 className="text-[28px] font-medium">All Categories</h4>
        </div>

        <div className="grid grid-cols-5 items-center gap-8 py-7">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center bg-[#FEFEFE] border border-[#F5F5F5] rounded-md p-5">
              <Image src={category.image} width={50} height={50} alt={category.topic} />
              <p className="text-[28px] font-medium">{category.topic}</p>
            </div>
          ))}
        </div>
      </section>
    </ExploreLayout>
  );
};

export default AllCategories;
