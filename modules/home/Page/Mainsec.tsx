'use client';
import Button from '@ui/Button';
import Image from 'next/image';
import top from 'public/Home/Home3.png';
import mid from 'public/Home/Home1.png';
import but from 'public/Home/Home5.png';
import butt from 'public/Home/Home2.png';
import butd from 'public/Home/Home4.png';
import Link from 'next/link';
import { ArrowRight2 } from 'iconsax-react';

const title = `Evento`;
const title1 = `Create a memorable event today, invite friends and sell tickets.`;
const text = `Create your event`;
const btnText = `Explore other events`;
function Mainsec() {
  return (
    <section
      className=" flex flex-col gap-9 sm:gap-[72px] min-h-[calc(100vh-105px)]  
      sm:mx-[105] items-center justify-center xl:flex-row-reverse xl:gap-[162px]"
    >
      <div className="flex flex-row space-x-4">
        <div className="flex flex-col space-y-4">
          <Image src={top} alt="img" width={300} height={100} />
          <Image src={mid} alt="img" width={300} height={280} />
          <Image src={but} alt="img" width={300} height={100} />
        </div>
        <div className="flex flex-col space-y-4">
          <Image src={butt} alt="img" width={280} height={265} />
          <Image src={butd} alt="img" width={280} height={265} />
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center xl:items-start gap-6">
        <Link href={''}>
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
        <Button
          styles={
            ' w-[350px] h-auto py-6 rounded-lg item-center justify-center font-semibold  bg-primary-100 flex gap-2 text-white-100'
          }
          title={''}
        >
          {text}
        </Button>
      </div>
    </section>
  );
}
export default Mainsec;
