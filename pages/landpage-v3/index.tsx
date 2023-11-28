import React from 'react';
import HomeLayout from '@/layout/Homelayout';
import { Montserrat, Work_Sans } from 'next/font/google';
import Image from 'next/image';
import FrameA from 'public/Home/homev31.svg';
import HeroImg from 'public/Home/homev32.svg';
import Button from '@/components/ui/Button';
import SignUp from '@/components/components/modal/auth/SignUP';
import useDisclosure from '@/hooks/useDisclosure';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

function Home() {
  return (
    <>
      <div className={`${montserrat.className} flex justify-between mb-10 max-w-[1240px] mx-auto`}>
        <div>
          <div className="-ml-8">
            <Image src={FrameA} alt="" width={300} height={300} />
          </div>
          <div>
            <h1 className="text-[3.25rem] font-bold text-Grey-G700 tracking-[-0.125rem]">
              Crafting Experiences <br /> One <span className="text-primary-100">Event</span> at a Time
            </h1>
            <p className="text-Grey-G100 w-[70%]">
              Bring your events to life effortlessly. Evento empowers you to create, organize, and manage your events
              easily
            </p>
            <Button type="button" title="upload-button" styles="text-white-N0 font-bold text-sm mt-10 px-5 py-4">
              Create an Event
            </Button>
          </div>
        </div>
        <div className="mt-24">
          <Image src={HeroImg} alt="" width={730} height={726} />
        </div>
      </div>
      {/* <SignUp
        isOpen={false}
        onClose={function (): void {
          throw new Error('Function not implemented.');
        }}
      /> */}
    </>
  );
}

export default Home;
