'use client';
import Button from '@ui/Button';
import Link from 'next/link';
import { HeroLeft } from './HeroLeft';
import HeroRight from './HeroRight';
import Image from 'next/image';
import top from '../../../../public/blob.svg';

const LandpageV4 = () => (
  <section
    className=" grid md:grid-cols-2 gap-9 sm:gap-[72px] min-h-[calc(100vh-105px)]  
      sm:mx-[105px]  items-center justify-center px-10 my-6 md:mt-0"
  >
    <div className="relative  flex ">
      <div className="absolute -z-[1] opacity-10 -my-10">
        <Image className="rounded-3xl -top-[10" src={top} alt="img" width={450} height={300} />
      </div>

      <HeroLeft
        title={
          <>
            {'Crafting'}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1] text-primary-500"
            >
              {' '}
              Experiences{' '}
            </span>
            {'One'} <span className="text-primary-100">Event</span> {'at a Time'}
          </>
        }
        description="Bring your events to life effortlessly. Evento empowers you to create, organize, and manage your events easily"
        button={
          <Link href="#">
            <Button
              styles={
                ' w-[250px] h-auto py-4 rounded-lg mt-5 item-center justify-center font-semibold border border-primary-100 flex gap-2 text-white-100 bg-primary-100'
              }
              title={''}
            >
              Create an Event
            </Button>
          </Link>
        }
      />
    </div>

    <HeroRight />
  </section>
);

export default LandpageV4;
