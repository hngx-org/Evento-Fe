import React, { useState, useEffect, useRef } from 'react';
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
import logoutUser from '@/hooks/logout';
import { logoutUser as lgout } from '@/http/authapi';
import Button from '@ui/NewButton';
import { useRouter } from 'next/navigation';
import Notifications from '../ui/notification';

function AuthenticatedHeader() {
  const [toggle, setToggle] = useState(false);
  const notificationsRef = useRef<HTMLDivElement | null>(null);
  const [unreadNotifications, setUnreadNotifications] = useState(0);
  const [notificationMenu, setNotificationMenu] = useState(false);
  const { ref: profileRef, isVisible: profileDropdown, setIsVisible: setProfileDropdown } = useVisible();
  const { ref: searchRef, isVisible: searchDropdown, setIsVisible: setSearchDropdown } = useVisible();
  const [isloading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const body = document.querySelector('body');
    if (toggle) {
      body?.classList.add('mobile-menu-open');
    } else {
      body?.classList.remove('mobile-menu-open');
    }
  }, [toggle]);

  // const handleLogout = () => {
  //   // Call the function when the button is clicked
  //   Logout();
  // };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const targetNode = event.target as Node | null;
      if (notificationsRef.current && !notificationsRef.current.contains(targetNode)) {
        console.log(notificationsRef.current);
        setNotificationMenu(false);
      }
    }

    if (toggle || notificationMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggle, notificationMenu]);

  const handleNotificationsToggle = () => {
    setNotificationMenu(!notificationMenu);
  };

  // const handleLogout = () => {
  //   logoutUser();
  //   try {
  //     await lgout();
  //     // Additional logic after successful logout, if needed
  //   } catch (error) {
  //     // Handle errors if necessary
  //   }
  // };
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     //    window.location.href = 'https://evento-qo6d.onrender.com/api/v1/logout';
  //   }, 5000);
  // };

  const handleLogout = async () => {
    setIsLoading(true);
    logoutUser();

    try {
      await lgout();
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <header className="w-full bg-white-N0 border-b border-b-Grey-G30">
      <nav className="relative max-w-[1240px] p-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/event-dashboard">
            <Image src={logo} alt="logo" width={84} height={32} />
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/explore" className="text-Grey-G500 font-medium text-base">
              Explore
            </Link>
            <Link href="/event-management" className="text-Grey-G500 font-medium text-base">
              Manage Events
            </Link>
            <Link href="/create-events" className="text-Grey-G500 font-medium text-base flex items-center gap-2">
              Create Event
              <Add size={20} color="#3C3C3C" />
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <div className="cursor-pointer" onClick={() => setSearchDropdown(true)}>
              <SearchNormal1 size={22} color="#3C3C3C" />
            </div>
            <div className="cursor-pointer">
              <button onClick={handleNotificationsToggle} draggable={false}>
                <Notification size={22} color="#3C3C3C" />
              </button>
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
          style={{ boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)' }}
          className={`lg:hidden absolute z-30 ${
            toggle ? 'right-4' : '-left-[100%]'
          } top-[63px] transition-all ease-in-out duration-500 bg-white-N0 rounded-lg w-[15rem] p-3`}
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 border-b border-b-Grey-G30 pb-3 px-2">
              <Image src={profile} alt="profile" width={40} height={40} />
              <p className="text-Grey-G500 font-semibold text-base">Ahmed Tinubu</p>
            </div>
            <div className="space-y-6 border-b border-b-Grey-G30 pb-4 pt-2">
              <Link href="/explore" className="text-Grey-G500 font-medium text-sm flex items-center gap-2 px-2">
                <Profile size={16} color="#3C3C3C" />
                Explore
              </Link>
              <Link
                href="/event-management"
                className="text-Grey-G500 font-medium text-sm flex items-center gap-2 px-2"
              >
                <Profile size={16} color="#3C3C3C" />
                Manage Events
              </Link>
              <Link href="/create-events" className="text-Grey-G500 font-medium text-sm flex items-center gap-2 px-2">
                <Add size={16} color="#3C3C3C" />
                Create Event
              </Link>
            </div>
            <div className="space-y-6 border-b border-b-Grey-G30 pb-4 pt-2">
              <Link href="/profile" className="text-Grey-G500 font-medium text-sm flex items-center gap-2 px-2">
                <Profile size={16} color="#3C3C3C" />
                View Profile
              </Link>
              <Link href="/settings" className="text-Grey-G500 font-medium text-sm flex items-center gap-2 px-2">
                <Setting4 size={16} color="#3C3C3C" />
                Settings
              </Link>
            </div>
            <Link href="/" className="text-Grey-G500 font-medium text-sm flex items-center gap-2 px-2 py-2">
              <Button onClick={handleLogout} isLoading={isloading}>
                <LogoutCurve size={16} color="#3C3C3C" />
                Logout
              </Button>
            </Link>
          </div>
        </div>
        {/* Profile Dropdown Container */}
        {profileDropdown && (
          <div
            ref={profileRef}
            style={{ boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)' }}
            className="absolute bg-white-N0 rounded-lg w-[15rem] p-3 right-8 top-[80px]"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 border-b border-b-Grey-G30 pb-3 px-2">
                <Image src={profile} alt="profile" width={40} height={40} />
                <p className="text-Grey-G500 font-semibold text-base">Ahmed Tinubu</p>
              </div>
              <div className="space-y-2 border-b border-b-Grey-G30 pb-4">
                <Link href="/profile">
                  <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-Grey-G20 rounded-lg">
                    <Profile size={18} color="#3C3C3C" />
                    <p className="text-Grey-G500 font-medium text-sm">View profile</p>
                  </div>
                </Link>
                <Link href="/settings">
                  <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-Grey-G20 rounded-lg">
                    <Setting4 size={18} color="#3C3C3C" />
                    <p className="text-Grey-G500 font-medium text-sm">Settings</p>
                  </div>
                </Link>
              </div>
              <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-Grey-G20 rounded-lg">
                <Link href="/">
                  <Button onClick={handleLogout} isLoading={isloading}>
                    <LogoutCurve size={18} color="#3C3C3C" />
                    <p className="text-Grey-G500 font-medium text-sm">Logout</p>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
        {/* Search Dropdown Container */}
        {searchDropdown && (
          <div
            ref={searchRef}
            style={{ boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)' }}
            className="absolute bg-white-N0 rounded-lg w-[15rem] p-3 right-8 top-[80px]"
          >
            <Input placeholder="Search anything" className="border border-Grey-G60 rounded-lg bg-white-N0" />
          </div>
        )}
        {notificationMenu && (
          <div className="absolute bg-white-100 top-full w-fit md:2/4 lg:w-1/4 right-0 " ref={notificationsRef}>
            <Notifications notificationsRef={notificationsRef} unreadNotifications={setUnreadNotifications} />
          </div>
        )}
      </nav>
    </header>
  );
}

export default AuthenticatedHeader;
