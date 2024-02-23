'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Add, Notification, CloseSquare, HambergerMenu } from 'iconsax-react';
import { useRouter } from 'next/navigation';
import { useUserCtx } from '@/context/UserCtx';
import { useStateCtx } from '@/context/StateCtx';
import { cn } from '@/utils';
import ProfileDropDown from '../DropDowns/ProfileDropDown';

const NavBarAuthenticated = () => {
  const { user } = useUserCtx();
  const { OpenNotification, setOpenNotification, OpenProfile, setOpenProfile } = useStateCtx();

  return (
    <header className=" max-[500px]:py-1 w-full justify-between items-center bg-white-100 dark:bg-dark-one transition-colors duration-500 border border-b-Grey-G30 dark:border-b-dark-two px-6">
      <nav className="relative p-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex gap-14 text-primary-100 dark:text-dark-two text-[30px] font-medium font-chelsea"
          >
            EVENTO
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/explore" className="text-Grey-G500 dark:text-dark-two font-medium text-base">
              Explore
            </Link>
            <Link
              href="/create-events"
              className="text-Grey-G500 dark:text-dark-two font-medium text-base flex items-center gap-2"
            >
              Create Event
              <Add size={20} />
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <div
              className="cursor-pointer relative dark:text-white-100"
              onClick={() => setOpenNotification(!OpenNotification)}
            >
              <Notification size={22} />
              <div className="w-4 h-4 bg-primary-100 text-white-100 dark:bg-dark-two text-xs rounded-full absolute -top-[6px] left-2 flex items-center justify-center">
                {/* {notifications ? notifications.length : 0} */} 2
              </div>
            </div>
            <div className="w-[32px] h-[32px] cursor-pointer" onClick={() => setOpenProfile(true)}>
              <Image
                src={user?.profileImage!}
                alt="profile"
                width={32}
                height={32}
                className={cn(
                  ' w-full h-full object-cover rounded-full',
                  user.profileImage ? 'border-2 border-primary-100 dark:border-dark-two' : '',
                )}
              />
            </div>
          </div>
          <div
            className="lg:hidden text-white-100 dark:text-dark-two"
            onClick={() => setOpenProfile(OpenProfile ? false : true)}
          >
            {OpenProfile ? <CloseSquare size={24} /> : <HambergerMenu size={24} />}
          </div>
        </div>
      </nav>
      <ProfileDropDown />
    </header>
  );
};

export default NavBarAuthenticated;
