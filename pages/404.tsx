'use client';
import Button from '@ui/Button';
import Image from 'next/image';
import oops from 'public/Home/404.svg';
import Link from 'next/link';
import PlainHeader from '@modules/home/PlainHeader/PlainHeader';
import Container from '@modules/home/container/container';
import Head from 'next/head';
import Homefooter from '@/components/Home/homefooter';
import { ArrowLeft } from 'iconsax-react';

const title = `Oops! this page is Gone`;
const text = `Sorry we can't find this page`;
const btnText = `Back to homepage`;
function Error404() {
  return (
    <>
      {' '}
      <Head>
        <link rel="icon" href="/" />
        <title>Evento - 404</title>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Evento" />
        <meta itemProp="name" content="Evento - 404" />
        <meta itemProp="description" content="You've wandered afar" />
        <meta name="keywords" content="Evento, 404" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        <meta name="twitter:title" content="Evento - 404" />
        <meta name="twitter:description" content="You've wandered afar." />
      </Head>
      <main className=" bg-white-100 min-h-screen">
        <PlainHeader />
        <div className=" border-b border-white-115 border-style: solid" />

        <section
          className=" flex flex-col gap-9 sm:gap-[72px] min-h-[calc(100vh-105px)]  
      sm:mx-[105] items-center justify-center xl:flex-row-reverse xl:gap-[162px]"
        >
          <Image
            src={oops}
            alt="oops"
            className="w-[300px] h-[300px] sm:w-[480px] sm:h-[480px] xl:w-[480px] xl:h-[480px]"
          />
          <div className=" flex flex-col justify-center items-center xl:items-start gap-6">
            <h2 className=" text-2xl md:text-[32px] xl:text-[45px] md:leading-[36px] xl:leading-[52px] sm:font-bold xl:text-left max-w-[504px] text-center font-semibold ">
              {title}
            </h2>
            <p className="text-Grey-G300 max-w-[623px] text-sm sm:text-2xl  text-center  ">{text}</p>
            <Link href="/">
              <Button
                styles={
                  ' w-[200px] h-auto py-4 rounded-lg item-center justify-center  flex gap-2 text-white-100 text-base mt-3'
                }
                title={''}
              >
                <ArrowLeft size="22" color="#fefefe" />
                {btnText}
              </Button>
            </Link>
          </div>
        </section>

        <Homefooter />
      </main>
    </>
  );
}
export default Error404;
