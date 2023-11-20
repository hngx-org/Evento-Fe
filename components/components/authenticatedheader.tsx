import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/logo.svg';
import profile from 'public/profileB.svg';
import {
  Add,
  SearchNormal1,
  Notification,
  Profile,
  Setting4,
  LogoutCurve,
  HambergerMenu,
  Notepad,
  Star,
} from 'iconsax-react';
import useVisible from '@/hooks/useVisible';
import Input from '../ui/Input';

function AuthenticatedHeader() {
  const [toggle, setToggle] = useState(false);

  const { ref: profileRef, isVisible: profileDropdown, setIsVisible: setProfileDropdown } = useVisible();
  const { ref: searchRef, isVisible: searchDropdown, setIsVisible: setSearchDropdown } = useVisible();

  return (
    <header className="max-w-[1240px] mx-auto bg-white-N0 border-b border-b-Grey-G30 relative">
      <nav className="relative py-6 px-8">
        <div className="flex items-center justify-between">
          <Link href={'/'}>
            <Image src={logo} alt="logo" width={84} height={32} />
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/explore" className="text-Grey-G500 font-medium text-base">
              Explore
            </Link>
            <Link href="/manage-events" className="text-Grey-G500 font-medium text-base">
              Manage Events
            </Link>
            <Link href="/create-event" className="text-Grey-G500 font-medium text-base flex items-center gap-2">
              Create Event
              <Add size={20} color="#3C3C3C" />
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <div className="cursor-pointer" onClick={() => setSearchDropdown(true)}>
              <SearchNormal1 size={22} color="#3C3C3C" />
            </div>
            <div className="cursor-pointer">
              <Notification size={22} color="#3C3C3C" />
            </div>
            <div className="cursor-pointer" onClick={() => setProfileDropdown(true)}>
              <Image src={profile} alt="profile" width={32} height={32} />
            </div>
          </div>
          <div className="lg:hidden" onClick={() => setToggle(toggle ? false : true)}>
            {toggle ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 32 32">
                <g>
                  <mask
                    id="mask0_1327_22604"
                    style={{ maskType: 'alpha' }}
                    width="32"
                    height="32"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                  >
                    <path fill="#D9D9D9" d="M0 0H32V32H0z"></path>
                  </mask>
                  <g mask="url(#mask0_1327_22604)">
                    <path
                      fill="#E0580C"
                      d="M8.534 25.333l-1.867-1.866L14.134 16 6.667 8.533l1.867-1.866L16 14.133l7.467-7.466 1.867 1.866L17.867 16l7.467 7.467-1.867 1.866L16 17.867l-7.466 7.466z"
                    ></path>
                  </g>
                </g>
              </svg>
            ) : (
              <HambergerMenu size={24} color="#E0580C" />
            )}
          </div>
        </div>
        {/* Mobile dropdown */}
        <div
          className={`lg:hidden absolute w-full h-[calc(100vh-75px)] bg-primary-100 z-30 ${
            toggle ? 'left-0' : '-left-[100%]'
          } top-[75px] transition-all ease-in-out duration-500 px-8 py-6 flex flex-col gap-5`}
        >
          <Link href="/explore" className="text-white-100 font-medium text-lg flex items-center gap-3">
            <Star size={22} color="#fff" />
            Explore
          </Link>
          <Link href="/manage-events" className="text-white-100 font-medium text-lg flex items-center gap-3">
            <Notepad size={22} color="#fff" />
            Manage Events
          </Link>
          <Link
            href="/create-event"
            className="text-white-100 font-medium text-lg flex items-center gap-3 border-b border-b-gray-50/50 pb-5"
          >
            <Add size={22} color="#fff" />
            Create Event
          </Link>
          <div className="flex items-center gap-3">
            <Profile size={22} color="#fff" />
            <p className="text-white-100 font-medium text-lg">View profile</p>
          </div>
          <div className="flex items-center gap-3 border-b border-b-gray-50/50 pb-5">
            <Setting4 size={22} color="#fff" />
            <p className="text-white-100 font-medium text-lg">Settings</p>
          </div>
          <div className="flex items-center gap-3">
            <LogoutCurve size={18} color="#fff" />
            <p className="text-white-100 font-medium text-lg">Logout</p>
          </div>
        </div>
      </nav>
      {/* Profile Dropdown Container */}
      {profileDropdown && (
        <div
          ref={profileRef}
          style={{ boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)' }}
          className="absolute bg-white-N0 rounded-lg w-[15rem] p-3 right-8 top-[92px]"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 border-b border-b-Grey-G30 pb-3 px-2">
              <Image src={profile} alt="profile" width={40} height={40} />
              <p className="text-Grey-G500 font-semibold text-base">Ahmed Tinubu</p>
            </div>
            <div className="space-y-2 border-b border-b-Grey-G30 pb-4">
              <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-Grey-G20 rounded-lg">
                <Profile size={18} color="#3C3C3C" />
                <p className="text-Grey-G500 font-medium text-sm">View profile</p>
              </div>
              <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-Grey-G20 rounded-lg">
                <Setting4 size={18} color="#3C3C3C" />
                <p className="text-Grey-G500 font-medium text-sm">Settings</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-Grey-G20 rounded-lg">
              <LogoutCurve size={18} color="#3C3C3C" />
              <p className="text-Grey-G500 font-medium text-sm">Logout</p>
            </div>
          </div>
        </div>
      )}
      {/* Search Dropdown Container */}
      {searchDropdown && (
        <div
          ref={searchRef}
          style={{ boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)' }}
          className="absolute bg-white-N0 rounded-lg w-[15rem] p-3 right-8 top-[92px]"
        >
          <Input placeholder="Search anything" className="border border-Grey-G60 rounded-lg bg-white-N0" />
        </div>
      )}
    </header>
  );
}

export default AuthenticatedHeader;
