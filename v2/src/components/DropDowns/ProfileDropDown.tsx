'use client';

import React from 'react';
import { useStateCtx } from '@/context/StateCtx';
import { useUserCtx } from '@/context/UserCtx';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/utils';
import { LogoutCurve, Profile, Setting4 } from 'iconsax-react';
import Button from '../ui/button';

const ProfileDropDown = () => {
  const { OpenProfile, setOpenProfile } = useStateCtx();
  const { user } = useUserCtx();
  return (
    <>
      <div
        className="min-h-screen h-screen top-0 left-0 w-full fixed z-[99] opacity-0 bg-black-main/25 cursor-default"
        role="dialog"
        onClick={() => setOpenProfile(!OpenProfile)}
      />
      <div
        role="dialog"
        className={cn(
          " absolute max-h-max border dark:border-dark-two p-4 mr-6  border-soft-light top-[80px] right-2 z-[999] dark:bg-dark-one  bg-white-100 backdrop-blur-xl flex flex-col gap-y-2   justify-between  shadow-[0_10px_40px_rgba(0,0,0,0.23)] rounded-xl before:absolute before:content-[''] before:h-[20px] before:w-[20px] before:bg-gradient-to-tl dark:from-transparent dark:via-transparent dark:to-dark-two from-white-100  to-white-100 before:overflow-hidden before:-top-2 before:rotate-[45deg] before:right-4 before:z-[-1] transform-gpu transition-all ",
          OpenProfile ? 'opacity-100 duration-500 ' : 'opacity-0 h-0 duration-200 overflow-hidden pointer-events-none',
        )}
      >
        <div className="flex items-center gap-3 border-b border-b-Grey-G30 dark:border-b-dark-two pb-3 px-2">
          <div className="w-[40px] h-[40px] rounded-full">
            <Image
              src={user?.profileImage!}
              alt="profile"
              width={40}
              height={40}
              className={cn(
                'w-full h-full object-cover rounded-full',
                user.profileImage ? 'border-2 border-primary-100 dark:border-dark-two' : '',
              )}
            />
          </div>
          <p className="flex text-Grey-G500 dark:text-dark-two font-semibold text-base">
            {user?.firstName} {user?.lastName}
          </p>
        </div>
        <div className="space-y-2 border-b border-b-Grey-G30 pb-3  dark:border-b-dark-two text-Grey-G500 dark:text-dark-two ">
          <Link href="/profile">
            <div className="flex items-center gap-2 p-2 cursor-pointer rounded-lg">
              <Profile size={18} />
              <p className=" font-medium text-sm">View profile</p>
            </div>
          </Link>
          <Link href="/settings">
            <div className="flex items-center gap-2 p-2 cursor-pointer rounded-lg">
              <Setting4 size={18} />
              <p className="font-medium text-sm">Settings</p>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-2 h-9 cursor-pointer text-Grey-G500  dark:text-dark-two rounded-lg px-2">
          <Link href="/" className="flex items-center gap-2">
            {/* <Button onClick={handleLogout} isLoading={isloading} className="px-2 h-9"> */}
            <LogoutCurve size={18} />
            <p className="font-medium text-sm">Logout</p>
            {/* </Button> */}
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileDropDown;
