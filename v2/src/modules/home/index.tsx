'use client';

import React from 'react';
import { cn } from '@/utils';
import useInView from '@/hooks/useInview';
import Button from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight2 } from 'iconsax-react';
import Image from 'next/image';

const HomePage = () => {
  const HomePageRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(HomePageRef);
  const btnText = `Plan your special event with us now`;
  return (
    <section
      ref={HomePageRef}
      className={cn(
        'flex justify-between max-w-[1240px] mt-10 md:mt-0 mx-auto px-5 md:px-10 lg:px-5 xl:px-0 font-montserrat',
        isInView ? 'opacity-100 translate-y-0 md:delay-300 duration-500 relative' : ' opacity-0 translate-y-36',
      )}
    >
      <>
        <div className="flex items-center flex-col  sm:flex-row">
          <div className="sm:w-1/2 space-y-5 sm:pr-8">
            <Link href={'/explore'} className="w-fit">
              <Button className="h-auto py-4 hover:bg-white-100 rounded-lg mb-4 item-center bg-white-100 justify-center md:[20px] font-semibold border border-primary-100 flex gap-2 text-primary-100 text-[16px] tracking-[-0.025rem] whitespace-nowrap">
                {btnText}
                <ArrowRight2 size="22" color="#E0580C" />
              </Button>
            </Link>
            <h1 className="text-[2.5rem] md:text-[3.1rem] lg:text-[3.25rem] font-bold text-Grey-G700 tracking-[-0.125rem] max-w-[90%] md:max-w-none">
              Never miss a moment with <span className="text-primary-100">Evento</span>
            </h1>
            <p
              className={`text-black-main font-semibold mb-4 sm:w-[100%] lg:w-[80%] md:text-base text-[20px] md:text-[24px] max-w-[90%] md:max-w-none`}
            >
              Effortlessly organize your schedule an stay on top of your plans.
            </p>
            <div className="flex text-black-main font-medium mb-4  text-[.6rem] md:text-xs gap-1 md:gap-2 items-center">
              <Image src="/assets/eventDashboard3/avartarCards.svg" alt="" className=" " width={95} height={32} />
              Join over 12,00+ people in creating events{' '}
            </div>

            <Button
              className="text-white-N0 rounded-md bg-primary font-bold text-sm mt-6 px-5 py-4 bg-primary-100"
              href="/create-event"
            >
              Create an Event
            </Button>
          </div>
          <div className="mt-8 sm:mt-0 sm:w-1/2 ">
            <Image src="/home3.svg" alt="" width={730} height={726} className="aspect-[730/726] max-w-[90%] " />
          </div>
        </div>
      </>
    </section>
  );
};

export default HomePage;
