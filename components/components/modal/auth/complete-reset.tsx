'use client';
import React, { useState } from 'react';
import Modal from '@ui/Modal';
import Button from '@ui/NewButton';
import { Input } from '@ui/NewInput';
import Image from 'next/image';
import { Work_Sans, Nunito, Montserrat } from 'next/font/google';
import { Eye, EyeSlash } from 'iconsax-react';
import PasswordPopover from '@ui/PasswordPopover';

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
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [resetSuccess, setResetSuccess] = useState<boolean>(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const isResetDisabled = password !== confirmPassword || password === '' || confirmPassword === '';

  // const handleResetPassword = async () => {
  //   // Call your backend API to complete the password reset
  //   try {
  //     const response = await fetch('your-reset-api-endpoint', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ password, confirmPassword }),
  //     });

  //     if (response.ok) {
  //       // Password reset successful
  //       setResetSuccess(true);
  //     } else {
  //       // Handle errors from the backend
  //       console.error('Failed to complete password reset');
  //     }
  //   } catch (error) {
  //     console.error('Error completing password reset', error);
  //   }
  // };

  return (
    <Modal closeOnOverlayClick isOpen={isOpen} closeModal={onClose} size="sm">
      <div className="p-6 px-9 h-[476px] items-center justify-center">
        <div className="p-4">
          <button onClick={onClose} className="absolute top-[76px] right-12">
            <Image src="/close-circle.svg" alt="Close icon" width={20} height={20} />
          </button>
        </div>
        <h1 className={`${montserrat.className} text-black-main text-2xl font-semibold`}>Enter New Password?</h1>
        <p className={`${nunito.className} mb-9 mt-2 w-[370px;] text-sm font-normal`}>Complete Your Password Reset</p>
        <form>
          <div>
            <label htmlFor="password" className={`${workSans.className} text-md text-black-main font-semibold`}>
              New Password
            </label>
            <PasswordPopover password={password}>
              <Input
                id="password"
                name="password"
                type={defaultInpType}
                placeholder="Enter New Passworrd"
                autoComplete="new-password"
                value={password}
                onChange={handlePasswordChange}
                required
                rightIcon={
                  defaultInpType === 'text' ? (
                    <Eye color="#777" onClick={() => setDefaultInpType('password')} />
                  ) : (
                    <EyeSlash color="#777" onClick={() => setDefaultInpType('text')} />
                  )
                }
                className="mt-1 p-2 w-full text-black-main border text-md font-medium rounded-md"
              />
            </PasswordPopover>
          </div>
          <div className="mt-6">
            <label htmlFor="confirmPassword" className={`${workSans.className} text-md text-black-main font-semibold`}>
              Confirm New Password
            </label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Passworrd"
              type="password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
              className="mt-1 p-2 w-full text-black-main text-md font-medium border rounded-md"
            />
          </div>
          <Button
            // type="button"
            // onClick={handleResetPassword}
            disabled={isResetDisabled}
            className=" text-white-100 px-5 py-4 bg-primary-100 rounded-lg shadow text-base font-normal w-full mt-9 leading-normal"
          >
            Reset Password
          </Button>
        </form>
      </div>
    </Modal>
  );
}
export default CompleteReset;
