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

      <section
        className=" flex flex-col gap-[48px] md:gap-9 sm:gap-[72px] min-h-[680px] md:min-h-[calc(100vh-105px)]  
      sm:mx-[105] items-center justify-center xl:flex-row xl:gap-[162px]"
      >
        <div className=" flex flex-col justify-center items-center xl:items-start gap-4 md:gap-6 max-w-[358px] md:max-w-none">
          <h2 className=" text-2xl md:text-[35px] xl:text-[45px] md:leading-[36px] xl:leading-[52px] sm:font-bold xl:text-left max-w-[504px] text-center font-semibold ">
            {title}
          </h2>
          <p className="text-Grey-G300 lg:max-w-[623px] md:max-w-[90%]  text-base md:text-2xl font-semibold md:text-left text-center">
            {text} <br className="block md:hidden lg:block" />
            <span className="text-primary-100">
              {' '}
              <Link href={'/'}>Support@evento.com</Link>{' '}
            </span>
          </p>
          <Link href="/">
            <Button
              styles={'flex py-4 px-[18px] whitespace-nowrap justify-center gap-x-2 lg:hidden text-white-N0 mt-8'}
              title={'back home'}
            >
              <ArrowLeft size="32" color="#ffffff" /> Back to homepage
            </Button>
          </Link>
        </div>
        <Image
          src={oops}
          alt="Access-denied"
          className="w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] xl:w-[480px] xl:h-[480px]"
        />
      </section>
      <div className="p-6 md:p-0">
        <Homefooter />
      </div>
    </main>
  );
}
export default AccessDenied;
