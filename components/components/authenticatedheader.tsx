import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/logo.png';
import profile from 'public/profileB.svg';
import { Add, SearchNormal1, Notification, Profile, Setting4, LogoutCurve, HambergerMenu } from 'iconsax-react';
import useVisible from '@/modules/header/useVisible';
import Input from '../ui/Input';

function AuthenticatedHeader() {
  const { ref: profileRef, isVisible: profileDropdown, setIsVisible: setProfileDropdown } = useVisible();
  const { ref: searchRef, isVisible: searchDropdown, setIsVisible: setSearchDropdown } = useVisible();

  return (
    <header className="max-w-[1240px] mx-auto py-6 px-8 bg-[#FEFEFE] border-b border-b-Grey-G30 relative">
      <nav>
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between">
          <Link href={'/'}>
            <Image src={logo} alt="logo" width={84} height={32} />
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/explore" className="text-Grey-G500 font-medium text-base">
              Explore
            </Link>
            <Link href="/manage-events" className="text-Grey-G500 font-medium text-base">
              Manage Events
            </Link>
            <Link href="/create-event" className="text-Grey-G500 font-medium text-base flex items-center gap-1">
              Create Event
              <Add size={20} color="#3C3C3C" />
            </Link>
          </div>
          <div className="flex items-center gap-6">
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
        </div>
        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center justify-between">
          <Link href={'/'}>
            <Image src={logo} alt="logo" width={84} height={32} />
          </Link>
          <div>
            <HambergerMenu size={24} color="#3C3C3C" />
          </div>
        </div>
      </nav>
      {/* Profile Dropdown Container */}
      {profileDropdown && (
        <div
          ref={profileRef}
          style={{ boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)' }}
          className="absolute bg-[#FEFEFE] rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06)_0px_1px_3px_0px_rgba(16,24,40,0.10)] w-[15rem] p-3 right-8 top-[92px]"
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
          className="absolute bg-[#FEFEFE] rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06)_0px_1px_3px_0px_rgba(16,24,40,0.10)] w-[15rem] p-3 right-8 top-[92px]"
        >
          <Input placeholder="Search anything" className="border border-Grey-G60 rounded-lg bg-[#FEFEFE]" />
        </div>
      )}
    </header>
  );
}

export default AuthenticatedHeader;
