'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { chelsea } from '@/fonts';
import { cn } from '@/utils';
import { ArrowLeft } from 'iconsax-react';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const title = `Oops! this page is Gone`;
  const text = `Sorry we can't find this page`;
  const btnText = `Back to homepage`;
  const router = useRouter();
  return (
    <>
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
      <main className=" bg-white-100 dark:bg-dark-one min-h-screen">
        <PlainHeader />
        <div className=" border-b border-white-115 dark:border-dark-two" />
        <section
          className={cn(
            'flex flex-col-reverse gap-9 sm:gap-[72px] py-12 lg:py-0 lg:min-h-[calc(100vh-105px)',
            ' sm:mx-[105] items-center justify-center xl:flex-row-reverse xl:gap-[162px]',
          )}
        >
          <Image
            src="/Home/404.svg"
            alt="404"
            width={60}
            height={60}
            className="w-[320px] h-[240px] md:w-[440px] md:h-[440px] xl:w-[480px] xl:h-[480px] dark:invert"
          />
          <div className=" flex flex-col justify-center items-center xl:items-start gap-6">
            <h2 className="xl:text-[45px] md:leading-[36px] xl:leading-[52px] sm:font-bold xl:text-left dark:text-dark-two max-w-[504px] text-center font-semibold font-montserrat">
              {title}
            </h2>
            <p className="text-Grey-G300 max-w-[623px] text-sm sm:text-2xl  text-center dark:text-dark-two">{text}</p>
            <button
              tabIndex={0}
              aria-label="Go Back"
              onClick={() => router.back()}
              type="button"
              className="w-[200px] h-auto py-4 rounded-lg item-center justify-center bg-primary-100 dark:bg-dark-two  flex gap-2 text-white-100 dark:text-dark-one text-base mt-3"
            >
              <ArrowLeft size="22" />
              {btnText}
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default NotFound;

function PlainHeader() {
  return (
    <header className="w-full py-4  h-[100px] justify-between items-center px-6  z-99 relative ">
      <Link href={'../'}>
        <div className={`${chelsea.className} flex gap-14 text-primary-100 dark:text-dark-two text-[30px] font-medium`}>
          <Link href="/">EVENTO</Link>
        </div>
      </Link>
    </header>
  );
}
