'use client';
import React, { useState } from 'react';
import Modal from '@ui/Modal';
import Button from '@ui/NewButton';
import { Input } from '@ui/NewInput';
import Image from 'next/image';
import { Work_Sans, Nunito, Montserrat } from 'next/font/google';
import { Eye, EyeSlash } from 'iconsax-react';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

function CompleteReset({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [defaultInpType, setDefaultInpType] = useState<'password' | 'text'>('password');
  const [email, setEmail] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  //   backemd implementation

  //   const handleResetPassword = async () => {
  //     // Call your backend API to send the reset link
  //     try {
  //       const response = await fetch('your-reset-api-endpoint', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ email }),
  //       });

  //       if (response.ok) {

  //         console.log('Password reset link sent!');
  //       } else {
  //         // Handle errors from the backend
  //         console.error('Failed to send reset link');
  //       }
  //     } catch (error) {
  //       console.error('Error sending reset link', error);
  //     }
  //   };
  return (
    <Modal closeOnOverlayClick isOpen={isOpen} closeModal={onClose} size="sm">
      <div className="p-6">
        <div className="p-4">
          <button onClick={onClose} className="absolute top-[76px] right-12">
            <Image src="/close-circle.svg" alt="Close icon" width={20} height={20} />
          </button>
        </div>
        <h1 className={`${montserrat.className} text-black-main text-2xl font-semibold`}>Enter New Password?</h1>
        <p className={`${nunito.className} mt-2 w-[370px;] text-sm font-medium`}>Complete Your Password Reset</p>
        <form>
          <div className="pt-4">
            <label htmlFor="email" className={`${nunito.className} mt-2 w-[370px;] text-md font-medium`}>
              Email:
            </label>
            <Input
              type="email"
              value={email}
              onChange={handleEmailChange}
              id="email"
              className="p-4 border w-full border-zinc-400 text-black-main font-medium leading-normal mt-2"
              placeholder="Enter email address"
            />
          </div>
          <Button
            //     onClick={handleResetPassword}
            className=" text-white-100 px-5 py-4 bg-primary-100 rounded-lg shadow text-base font-normal w-full mt-5 leading-normal"
          >
            Send recovery instructions
          </Button>
        </form>
      </div>
    </Modal>
  );
}
export default CompleteReset;
