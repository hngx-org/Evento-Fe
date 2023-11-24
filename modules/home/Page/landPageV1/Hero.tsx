'use client';
import Button from '@ui/Button';

import Link from 'next/link';
import { HeroLeft } from './HeroLeft';
import Right from './Right';

const Hero = () => (
  <section
    className=" grid md:grid-cols-2 min-h-[calc(100vh-105px)]  
      sm:mx-[105px]  items-center justify-center my-6 md:mt-0"
  >
    <div className="flex items-center justify-center">
      <div className="w-1/2 p-4">
        <HeroLeft
          title={
            <>
              {'Crafting'}
              <span
                className="xs:font-semibold z-20
              before:absolute before:-top-[70px] before:z-[-1] text-primary-500"
              >
                {' '}
                Experiences <br />
              </span>
              {'One'} <span className="text-primary-100">Event</span> {'at a Time'}
            </>
          }
          description={
            <>
              {'Bring your events to life effortlessly. Evento empowers you to create,'} <br />{' '}
              {'organize, and manage your events easily'}
            </>
          }
          button={
            <Link href="#">
              <Button
                styles={
                  ' w-[250px] h-auto py-4 rounded-lg mt-5 item-center justify-center border border-primary-100 flex gap-2 text-white-100 bg-primary-100'
                }
                title={''}
              >
                Create an Event
              </Button>
            </Link>
          }
        />
      </div>
      <div className="w-1/2 p-4">
        <Right />
      </div>
    </div>
  </section>
);

export default Hero;
