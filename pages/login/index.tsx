'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/NewButton';
import Link from 'next/link';
import Homenav from '@/components/Home/homenav';

const Index = () => {
  const handleLinkClick = () => {
    window.location.href = 'https://evento-qo6d.onrender.com/api/v1/google';
    // signUpWithGoogle();
  };
  const [seePassword, setSeePassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  return (
    <>
      <Homenav />
      <div className="flex justify-center my-20 items-center m-auto">
        <div
          className="rounded-[8px] bg-[#fefefe] p-[80px] "
          style={{
            boxShadow: '0px 4px 4px 4px rgba(0, 0, 0, 0.04)',
          }}
        >
          <p className="text-[#1e1e1e] text-center text-[20px] sm:text-[32px] font-[600] pb-1 ">Welcome to Evento</p>
          <p className="text-[14px] sm:text-[16px] font-[400] leading-[24px] text-[#585858] pb-6 ">
            Sign up to continue using Evento
          </p>
          <Button
            className="px-12 py-4 rounded-lg border border-neutral-900 w-full flex items-center gap-[10px] justify-center"
            onClick={handleLinkClick}
            //   href='https://evento-qo6d.onrender.com/api/v1/google'
          >
            <Image src="/google.svg" alt="Google icon" width={24} height={24} />
            <span className="text-center text-stone-900 text-[16px] font-normal leading-normal">
              Log in with Google
            </span>
          </Button>
          <div className="flex items-center gap-[10px] my-6">
            <div className="w-full h-[0px] bg-neutral-500 border-b border-b-neutral-500" />
            <div className="text-center text-neutral-500 text-sm font-normal leading-tight">OR</div>
            <div className="w-full h-[0px] bg-neutral-500 border-b border-b-neutral-500" />
          </div>
          <form className="rounded-xl flex-col gap-6 flex">
            <label className="gilroy text-[14px] font-[600] leading-[20.3px] text-[#303030] ">Email</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="outline-none rounded-[8px] py-[8px] px-[12px] flex items-center focus:border-[#ff5c00] border border-[#b1b1b1] bg-[#fefefe] text-[#c0c0c0] text-[14px] leading-[20.3px] font-[400] mt-[-22px] "
            />

            <label className="gilroy text-[14px] font-[600] leading-[20.3px] text-[#303030] ">Password</label>
            <div
              className={`flex justify-between px-3 py-2 rounded-md  mt-[-22px]  ${
                passwordFocus ? 'border border-orange-600' : 'border border-[#b1b1b1]'
              }`}
            >
              <input
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                className="outline-none text-[#c0c0c0] text-[14px] leading-[20.3px] font-[400] "
                type={seePassword ? 'text' : 'password'}
                placeholder="Password"
              />
              <aside onClick={() => setSeePassword((prev) => !prev)} className="cursor-pointer">
                {!seePassword && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20.7069 3.29289C21.0974 3.68342 21.0974 4.31658 20.7069 4.70711L4.70686 20.7071C4.31634 21.0976 3.68317 21.0976 3.29265 20.7071C2.90212 20.3166 2.90212 19.6834 3.29265 19.2929L19.2926 3.29289C19.6832 2.90237 20.3163 2.90237 20.7069 3.29289Z"
                      fill="#B3B3B3"
                    />
                    <path
                      d="M15.7993 5.37204C14.673 4.84163 13.403 4.5 11.9997 4.5C9.05564 4.5 6.69852 6.00369 5.02335 7.59968C3.34432 9.19934 2.25486 10.9797 1.82359 11.7498C1.54097 12.2545 1.50731 12.8571 1.7393 13.3924C1.90131 13.7662 2.17684 14.3452 2.58294 15.0172C2.86859 15.4899 3.48333 15.6415 3.95601 15.3559C4.42868 15.0702 4.58029 14.4555 4.29464 13.9828C3.96802 13.4423 3.74137 12.9749 3.60389 12.6644C4.00964 11.9493 4.9706 10.4123 6.40292 9.0477C7.8824 7.63816 9.76978 6.5 11.9997 6.5C12.8018 6.5 13.5595 6.64724 14.2699 6.90139L15.7993 5.37204Z"
                      fill="#B3B3B3"
                    />
                    <path
                      d="M17.6903 9.13789C19.0708 10.4795 19.9987 11.965 20.3956 12.6644C20.2581 12.9749 20.0315 13.4423 19.7048 13.9828C19.4192 14.4555 19.5708 15.0702 20.0435 15.3559C20.5161 15.6415 21.1309 15.4899 21.4165 15.0172C21.8226 14.3452 22.0982 13.7662 22.2602 13.3924C22.4922 12.8571 22.4585 12.2545 22.1759 11.7498C21.7557 10.9995 20.7108 9.29032 19.1046 7.72355L17.6903 9.13789Z"
                      fill="#B3B3B3"
                    />
                    <path
                      d="M11.9998 8C12.3632 8 12.7175 8.03877 13.0589 8.1124L11.0011 10.1702C10.1476 10.4714 9.4712 11.1478 9.16999 12.0013L7.11216 14.0592C7.03853 13.7178 6.99976 13.3634 6.99976 13C6.99976 10.2386 9.23833 8 11.9998 8Z"
                      fill="#B3B3B3"
                    />
                    <path
                      d="M11.9998 16C11.6489 16 11.3121 15.9398 10.9991 15.8291L9.49807 17.3301C10.2339 17.7561 11.0883 18 11.9998 18C14.7612 18 16.9998 15.7614 16.9998 13C16.9998 12.0886 16.7559 11.2341 16.3299 10.4983L14.8288 11.9994C14.9395 12.3123 14.9998 12.6491 14.9998 13C14.9998 14.6569 13.6566 16 11.9998 16Z"
                      fill="#B3B3B3"
                    />
                  </svg>
                )}
                {seePassword && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path
                      d="M4.79464 13.9828C5.08029 14.4555 4.92868 15.0702 4.45601 15.3559C3.98333 15.6415 3.36859 15.4899 3.08294 15.0172C2.67684 14.3452 2.40131 13.7662 2.2393 13.3924C2.00731 12.8571 2.04097 12.2545 2.32359 11.7498C2.75486 10.9797 3.84432 9.19934 5.52335 7.59968C7.19852 6.00369 9.55564 4.5 12.4997 4.5C15.4438 4.5 17.801 6.00369 19.4761 7.59968C21.1552 9.19933 22.2446 10.9797 22.6759 11.7498C22.9585 12.2545 22.9922 12.8571 22.7602 13.3924C22.5982 13.7662 22.3226 14.3452 21.9165 15.0172C21.6309 15.4899 21.0161 15.6415 20.5435 15.3559C20.0708 15.0702 19.9192 14.4555 20.2048 13.9828C20.5315 13.4423 20.7581 12.9749 20.8956 12.6644C20.4898 11.9493 19.5289 10.4123 18.0966 9.0477C16.6171 7.63816 14.7297 6.5 12.4997 6.5C10.2698 6.5 8.3824 7.63816 6.90292 9.0477C5.4706 10.4123 4.50964 11.9493 4.10389 12.6644C4.24137 12.9749 4.46802 13.4423 4.79464 13.9828Z"
                      fill="#B3B3B3"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.4997 8C9.73831 8 7.49974 10.2386 7.49974 13C7.49974 15.7614 9.73831 18 12.4997 18C15.2612 18 17.4997 15.7614 17.4997 13C17.4997 10.2386 15.2612 8 12.4997 8ZM9.49974 13C9.49974 11.3431 10.8429 10 12.4997 10C14.1566 10 15.4997 11.3431 15.4997 13C15.4997 14.6569 14.1566 16 12.4997 16C10.8429 16 9.49974 14.6569 9.49974 13Z"
                      fill="#B3B3B3"
                    />
                  </svg>
                )}
              </aside>
            </div>
            <div className="flex justify-between mt-[-22px]">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  //   className="appearance-none w-4 h-4 rounded border checked:bg-[#e0580c] checked:border-transparent focus:outline-none"
                />

                <p className="text-[16px] leading-6 font-[400] ">Remember me</p>
              </div>
              <Link href="" className="text-[16px] font-[400] text-[#e0580c] leading-[24px] ">
                Forgot password?
              </Link>
            </div>
            <button
              style={{
                boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
              }}
              className="bg-[#e0580c] my-3 text-[#fefefe] rounded-[8px] flex justify-center items-center px-[20px] py-[16px] w-full text-[16px] font-[400] "
            >
              Continue
            </button>
          </form>
          <div className="flex gap-2 text-[16px] font-[400] leading-6 text-[#111] ">
            <p>Don&apos;t have an account?</p>
            <Link href="/signup" className="text-[#e0580c] font-[500]">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
