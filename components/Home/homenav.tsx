import React, { useState } from 'react';
import logo from '../../public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AuthModal from '../components/modal/auth/AuthModal';
import SignUp from '../components/modal/auth/SignUP';
import useDisclosure from '@/hooks/useDisclosure';
import SignIn from '../components/modal/auth/SignIn';
import Button from '@ui/NewButton';

function Homenav() {
  const [isToggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!isToggle);
  };

  return (
    <nav className="w-full py-3  bg-white-100 justify-between items-center px-4  relative z-20">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between  ">
        <div className="flex gap-14">
          <Link href="/">
            <Image width={120} height={15} src={logo} alt="Evento logo" />
          </Link>
        </div>
        <div className="hidden lg:block md:block">
          <div className="flex gap-7">
            <button className="py-3 px-10 border-primary-100 border bg-white text-primary-100 z-10 hover:bg-white hover:text-secondary-300 rounded-lg font-bold  transition-all duration-300 ease-in-out">
              <Link href="/auth/sign-in">Sign in</Link>
            </button>

            <Button
              type="button"
              className="py-3 px-7 border border-primary-100 hover:border-primary-100 z-10  rounded-lg font-bold  text-white-100 transition-all duration-300 ease-in-out bg-primary-100"
            >
              <Link href="/auth/sign-up">Create Event</Link>
            </Button>
          </div>
        </div>

        <div
          className={`flex items-center lg:hidden md:hidden gap-4 lg:static absolute lg:flex-row flex-col z-20 ${
            isToggle ? 'left-0' : 'left-[-100dvw]'
          }  bg-white-100 w-[100%] py-8 lg:py-0 lg:w-auto lg:opacity-100 transition-all ease-in-out duration-500 top-[9vh]  z-[20]`}
        >
          <div className="w-[267px] h-16 p-2 justify-center items-center gap-4 lg:flex-row flex flex-col mt-20  lg:mt-0 z-20">
            <div className="justify-center items-center lg:w-auto w-[100%] gap-2 lg:flex-row flex flex-col">
              <button className="text-center text-primary-100 text-base font-bold leading-normal tracking-tight px-6 py-3 bg-secondary-100 bg-opacity-50 rounded-lg justify-center items-center gap-4 flex lg:w-auto w-[100%]">
                <Link href="/auth/sign-in">Sign in</Link>
              </button>

              <button
                style={{
                  color: 'white',
                }}
                className="px-6 py-3 bg-primary-100 rounded-lg justify-center items-center gap-4 flex text-center  text-base font-bold  leading-normal tracking-tight text-white lg:w-auto w-[100%]"
              >
                <Link href="/auth/sign-up">Create Event</Link>
              </button>
            </div>
          </div>
        </div>
        <MenuIcon toggle={isToggle} style="lg:hidden md:hidden" toggler={handleToggle} />
      </div>
    </nav>
  );
}

export default Homenav;

function MenuIcon({ style, toggle, toggler }: { style?: string; toggle?: boolean; toggler: () => void }) {
  if (toggle) {
    // Close Icon
    return (
      <div className={`${style}`} onClick={toggler}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
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
      </div>
    );
  }

  return (
    // Open Icon
    <div className={`${style}`} onClick={toggler}>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
        <g>
          <g fill="#E0580C">
            <path d="M28 10.333H4c-.547 0-1-.453-1-1 0-.546.453-1 1-1h24c.547 0 1 .454 1 1 0 .547-.453 1-1 1z"></path>
            <path d="M28 17H4c-.547 0-1-.453-1-1 0-.547.453-1 1-1h24c.547 0 1 .453 1 1 0 .547-.453 1-1 1z"></path>
            <path d="M28 23.667H4c-.547 0-1-.454-1-1 0-.547.453-1 1-1h24c.547 0 1 .453 1 1 0 .546-.453 1-1 1z"></path>
          </g>
        </g>
      </svg>
    </div>
  );
}
