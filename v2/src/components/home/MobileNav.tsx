/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React from 'react';
import { cn } from '@/utils';
import Link from 'next/link';
import { CloseSquare } from 'iconsax-react';
import { useStateCtx } from '@/context/StateCtx';
import useUserSession from '@/hooks/useSession';

const MobileNav = () => {
  const { openMenu, setopenMenu } = useStateCtx();
  const { signIn, signUp } = useUserSession();
  return (
    <>
      <div
        className={cn(
          'lg:hidden fixed min-h-screen w-full bg-black-main/50 top-0 left-0 z-20 transition-all duration-300',
          openMenu ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
        onClick={() => setopenMenu(false)}
      />
      <nav
        className={cn(
          'pt-20 lg:hidden  px-4 sm:px-8 xl:px-16 2xl:px-24 flex w-full max-w-[300px] sm:max-w-[60%] md:max-w-[50%] justify-between items-center bg-white-100/90 dark:bg-primary/90 backdrop-blur-lg fixed right-0 top-0 z-50 h-screen transition-all opacity-0',
          openMenu ? 'translate-x-0 duration-1000 opacity-100' : 'translate-x-full duration-300',
        )}
      >
        <button
          autoFocus
          aria-label="close menu"
          type="button"
          className="outline-none dark:text-gray-100 text-primary text-2xl sm:text-4xl absolute top-2 right-2 h-12 w-12 rounded-full flex justify-center items-center"
          onClick={() => setopenMenu(false)}
          tabIndex={0}
        >
          <CloseSquare size="32" variant="Broken" />
        </button>
        <div className="flex flex-col  items-start h-full gap-y-10 ">
          <div className="w-[267px] h-16 p-2 justify-center items-center gap-4 lg:flex-row flex flex-col mt-20  lg:mt-0 z-20">
            <div className="justify-center items-center lg:w-auto w-[100%] gap-2 lg:flex-row flex flex-col">
              <button className="text-center text-primary-100 text-base font-bold leading-normal tracking-tight px-6 py-3 bg-secondary-100 bg-opacity-50 rounded-lg justify-center items-center gap-4 flex lg:w-auto w-[100%]">
                <Link href="/auth/sign-in" onClick={signIn}>
                  Sign in
                </Link>
              </button>

              <button
                style={{
                  color: 'white',
                }}
                className="px-6 py-3 bg-primary-100 rounded-lg justify-center items-center gap-4 flex text-center text-base font-bold  leading-normal tracking-tight text-white lg:w-auto w-[100%]"
              >
                <Link href="/auth/sign-up" onClick={signUp}>
                  Create Event
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
