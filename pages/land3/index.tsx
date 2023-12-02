import React from 'react';
import HomeLayout from '@/layout/Homelayout';
import { Montserrat, Work_Sans } from 'next/font/google';
import Image from 'next/image';
import FrameA from 'public/Home/homev31.svg';
import top from '../../public/home3.svg';
import HeroImg from 'public/btmm2.svg';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight2 } from 'iconsax-react';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

function Home() {
  const btnText = `Plan your special event with us now`;
  return (
    <div className={`${montserrat.className} flex justify-between mb-10 max-w-[1240px] mx-auto`}>
      <div>
        <div className="flex mt-24 items-center flex-col sm:flex-row">
          <div className="sm:w-1/2 space-y-5 sm:pr-8">
            <Link href={'/explore'}>
              <Button
                styles={
                  '  h-auto py-4 rounded-lg mb-4 item-center bg-white-100 justify-center font-semibold border border-primary-100 flex gap-2 text-primary-100'
                }
                title={''}
              >
                {btnText}
                <ArrowRight2 size="22" color="#E0580C" />
              </Button>
            </Link>
            <h1 className="text-[3.25rem] font-bold text-Grey-G700 tracking-[-0.125rem]">
              Never miss a moment with {} <span className="text-primary-100">Evento</span>
            </h1>
            <p className="text-black-main font-semibold mb-4 sm:w-[70%]">
              {/* Bring your events to life effortlessly. Evento empowers you to create, organize, and manage your events
              easily */}
              Effortlessly organize your schedule an stay on top of your plans.
            </p>
            <Image src={HeroImg} alt="" className="mb-3" width={414} height={32} />
            <Button type="button" title="upload-button" styles="text-white-N0 font-bold text-sm mt-8 px-5 py-4">
              Create an Event
            </Button>
          </div>
          <div className="mt-8 sm:mt-0 sm:w-1/2">
            <Image src={top} alt="" width={730} height={726} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
