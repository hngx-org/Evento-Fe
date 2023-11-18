import React, { useState } from 'react';
import logo from '../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Homenav() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    console.log('toggle', toggle);
  };
  const router = useRouter();
  const activeLink = (path: string) =>
    router.pathname === path
      ? 'text-green-950 group-hover:text-white text-base font-semibold  leading-normal tracking-tight'
      : 'text-gray-600 text-base font-semibold  leading-normal tracking-tight';
  return (
    <nav className="w-full py-2  bg-white-100 border-b border-[#EBEEEF] justify-between items-center px-4  z-[10000] relative ">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between  ">
        <div className=" flex gap-14">
          <Image className="object-contain" width={120} height={15} src={logo} alt="Evento logo" />
        </div>
        <div className="hidden lg:block md:block">
          <div className="flex gap-7">
            <Link href="auth/login">
              <button className="py-3 px-10 border-primary-100 border bg-white text-primary-100 z-10 hover:bg-white hover:text-secondary-300 rounded-lg font-bold  transition-all duration-300 ease-in-out">
                Sign in
              </button>
            </Link>

            <Link href="auth/signup">
              <button className="py-3 px-7 border border-primary-100 hover:border-primary-100 z-10  rounded-lg font-bold  text-white-100 transition-all duration-300 ease-in-out bg-primary-100">
                Create Event
              </button>
            </Link>
          </div>
        </div>

        <div
          className={`flex items-center lg:hidden md:hidden gap-4 lg:static absolute lg:flex-row flex-col ${
            toggle ? 'left-0' : 'left-[-100dvw]'
          }  bg-white-100 w-[100%] py-8 lg:py-0 lg:w-auto lg:opacity-100 transition-all ease-in-out duration-500 top-[9vh]  z-[1]`}
        >
          <div className="w-[267px] h-16 p-2 justify-center items-center gap-4 lg:flex-row flex flex-col mt-20  lg:mt-0">
            <div className="justify-center items-center lg:w-auto w-[100%] gap-2 lg:flex-row flex flex-col">
              <Link
                href={'/'}
                className="text-center text-primary-100 text-base font-bold leading-normal tracking-tight px-6 py-3 bg-secondary-100 bg-opacity-50 rounded-lg justify-center items-center gap-4 flex lg:w-auto w-[100%]"
              >
                Sign In
              </Link>

              <Link
                style={{
                  color: 'white',
                }}
                href={'/'}
                className="px-6 py-3 bg-primary-100 rounded-lg justify-center items-center gap-4 flex text-center  text-base font-bold  leading-normal tracking-tight text-white lg:w-auto w-[100%]"
              >
                Create Event
              </Link>
            </div>
          </div>
        </div>
        <MenuIcon toggle={toggle} style="lg:hidden md:hidden" toggler={handleToggle} />
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
