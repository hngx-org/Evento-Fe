'use client';

import React from 'react';
import { cn } from '@/utils';
import Image from 'next/image';
import { useExploreCtx } from '@/context/ExploreCtx';
import { FormInput } from '@/components/ui/FormInput';
import { SearchNormal } from 'iconsax-react';
import { X } from 'lucide-react';


const Hero = () => {
  const { seteventsSearchTerm, eventsSearchTerm } = useExploreCtx();
  return (
    <div className="relative">
      <div className="relative flex flex-col items-center justify-center bg-secondary-100 gap-y-9 dark:bg-dark-six/55 py-11 sm:py-[74px] px-6">
        <div className="max-w-[634px] lg:max-w-[1002px] mx-auto text-center">
          <svg
            className="hidden md:block z-40 absolute top-1/2 translate-y-1/3 lg:-translate-y-1/2 -left-4 lg:left-0 h-[62px] w-[130px] lg:h-[119px] lg:w-[189px]"
            xmlns="http://www.w3.org/2000/svg"
            width="189"
            height="119"
            viewBox="0 0 189 119"
            fill="none"
          >
            <path
              d="M-52.9011 60.2781C-26.645 44.2749 7.90156 31.0312 41.8126 36.8524C63.4839 40.5725 82.652 56.605 84.9051 74.2111C87.033 90.8387 80.4022 108.382 59.7678 115.04C49.0124 118.51 37.7107 117.781 30.9112 109.528C20.5232 96.9202 29.9211 76.9181 40.2736 66.3004C72.5816 33.1647 133.111 13.4939 185.198 21.0311"
              stroke="#E0580C"
              strokeWidth="3.04636"
              strokeLinecap="round"
            />
            <path
              d="M153.68 2C161.613 5.78834 179.384 14.8804 186.999 20.9417"
              stroke="#E0580C"
              strokeWidth="3.04636"
              strokeLinecap="round"
            />
            <path
              d="M187 20.9416C179.066 24.7299 161.296 33.8219 153.68 39.8833"
              stroke="#E0580C"
              strokeWidth="3.04636"
              strokeLinecap="round"
            />
          </svg>
          <h1 className="text-2xl sm:text-[2.5rem] lg:text-6xl font-semibold text-Grey-G900 dark:text-dark-two mb-4 sm:mb-8 font-montserrat">
            Finding Events Have <span className="text-primary-100">Never</span> been{' '}
            <span className="text-primary-100">Easier</span>
          </h1>
          <p className="max-w-[600px] lg:max-w-[800px] mx-auto text-lg font-nunito dark:text-dark-two">
            Embark on a journey of personalized event discovery with Evento&apos;s unique recommendation engine. As you
            scroll through the Explore Page, immerse yourself in a finely curated feed of events meticulously crafted to
            align seamlessly with your individual preferences, location, and favorite categories.
          </p>
        </div>
        <div className="flex max-w-[500px] min-w-[350px] relative items-center self-center">
          <div className="flex items-center w-full relative">
            <FormInput
              tabIndex={0}
              onChange={(e) => seteventsSearchTerm(e.target.value)}
              value={eventsSearchTerm}
              type="text"
              placeholder="Search via events name..."
              className=" mt-1 mb-3 p-[16px] w-full text-black h-[60px] border text-md font-medium rounded-md font-Worksans"
            />
            {eventsSearchTerm.length === 0 && (
              <span className="absolute right-3 text-header dark:text-dark-two">
                <SearchNormal size={18} />
              </span>
            )}
          </div>

          <button
            type="button"
            tabIndex={0}
            aria-label="Clear search"
            onClick={() => seteventsSearchTerm('')}
            className={cn('absolute right-2 transition-opacity duration-700', {
              'opacity-0 duration-300': !eventsSearchTerm,
            })}
          >
            <X size={18} className="text-header dark:text-white-100" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
