'use client';
import Button from '@ui/Button';
import Image from 'next/image';
import mid from 'public/Home/homev21.svg';
import butd from 'public/Home/homev22.svg';
import Link from 'next/link';
import { ArrowRight2 } from 'iconsax-react';

const title = `Evento`;
const title1 = `Create a memorable event today, invite friends and sell tickets.`;
const text = `Create your event`;
const btnText = `Explore other events`;
function Homev2() {
  return (
    <section
      className=" flex flex-col gap-9 sm:gap-[72px] min-h-[calc(100vh-105px)]  
      sm:mx-[105] items-center justify-center xl:flex-row-reverse xl:gap-[162px]"
    >
      <div className="flex item-center justify-center flex-col">
        <div className="relative">
          <Image src={butd} width={400} height={376} alt="illustration " />
          <div className=" top-0 left-0 w-full h-full z-10 flex items-center justify-center">
            <Image
              src={mid}
              width={400}
              height={376}
              alt="illustration"
              className="transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-col top-0 gap-6">
        <Link href={'/explore'}>
          <Button
            styles={
              ' w-[250px] h-auto py-4 rounded-lg item-center bg-white-100 justify-center font-semibold border border-primary-100 flex gap-2 text-primary-100'
            }
            title={''}
          >
            {btnText}
            <ArrowRight2 size="22" color="#E0580C" />
          </Button>
        </Link>
        <h1 className="text-3xl max-w-[550px]">{title}</h1>
        <h2 className="text-4xl sm:font-bold xl:text-left max-w-[504px] text-center font-medium ">
          Unleash the <span className="bg-gradient-to-r from-teal-400 to-orange-500 bg-clip-text">Extraordinary,</span>{' '}
          Where moments becomes memory
        </h2>
        <h1 className="text-xl max-w-[504px]">{title1}</h1>
        <Link href={'/create-event'}>
          <Button
            styles={
              ' w-[400px] h-auto py-4 rounded-lg item-center justify-center font-semibold  bg-primary-100 flex gap-2 text-white-100'
            }
            title={''}
          >
            {text}
          </Button>
        </Link>
      </div>
    </section>
  );
}
export default Homev2;
