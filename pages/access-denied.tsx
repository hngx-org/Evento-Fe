'use client';
import Button from '@ui/Button';
import Image from 'next/image';
import oops from 'public/Home/Access-denied.svg';
import Link from 'next/link';
import PlainHeader from '@modules/home/PlainHeader/PlainHeader';
import Homefooter from '@/components/Home/homefooter';
import { ArrowLeft } from 'iconsax-react';

const title = `Access Denied`;
const text = `Oops! It seems like you’ve taken a wrong turn. You don’t have permission to access this page. If you need assistance, contact support;`;
const btnText = `Back to homepage`;
function AccessDenied() {
  return (
    <main className=" bg-white-100 min-h-screen">
      <PlainHeader />
      <div className=" border-b border-white-115 border-style: solid" />

      <section
        className=" flex flex-col gap-9 sm:gap-[72px] min-h-[calc(100vh-105px)]  
      sm:mx-[105] items-center justify-center xl:flex-row-reverse xl:gap-[162px]"
      >
        <Image
          src={oops}
          alt="Access-denied"
          className="w-[300px] h-[300px] sm:w-[480px] sm:h-[480px] xl:w-[480px] xl:h-[480px]"
        />
        <div className=" flex flex-col justify-center items-center xl:items-start gap-6">
          <h2 className=" text-2xl md:text-[32px] xl:text-[45px] md:leading-[36px] xl:leading-[52px] sm:font-bold xl:text-left max-w-[504px] text-center font-semibold ">
            {title}
          </h2>
          <p className="text-Grey-G300 max-w-[623px]  text-sm sm:text-2xl font-semibold text-left  ">
            {text} <br />
            <span className="text-primary-100">Support@evento.com</span>
          </p>
        </div>
      </section>

      <Homefooter />
    </main>
  );
}
export default AccessDenied;
