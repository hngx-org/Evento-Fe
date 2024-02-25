'use client';

import { Input } from '@ui/NewInput';
import Button from '@ui/NewButton';
import React, { useState } from 'react';
import Homenav from '@/components/Home/homenav';
import { useRouter } from 'next/router';
import { Montserrat, Nunito, Work_Sans } from 'next/font/google';
import PasswordPopover from '@ui/PasswordPopover';
import { Eye, EyeSlash, Call } from 'iconsax-react';
import { finishReset } from '@/http/authapi';
import { ResetPasswordProps } from '@/@types';
import { toast } from 'react-toastify';

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

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const [defaultInpType, setDefaultInpType] = useState<'password' | 'text'>('password');

  const router = useRouter();
  const { userID, token } = router.query;

  const [formData, setFormData] = useState({
    userID: userID,
    password: '',
    confirmPassword: '',
  });
  const isResetDisabled =
    formData.password !== formData.confirmPassword || formData.password === '' || formData.confirmPassword === '';

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match. Please enter matching passwords.');
      return;
    }

    try {
      await finishReset({
        UserID: formData.userID as string,
        password: formData.password,
      });
    } catch (error) {
      console.error('Password reset error:', error);
    }
  };

  return (
    <>
      <section className="md:w-[80%] md:mx-auto h-[100vh]">
        <Homenav />
        <div className="lg:w-[50%] justify-center items-center lg:mx-auto lg:my-[20px] pt-[20px] lg:shadow-lg">
          <div className="px-3">
            <div className="relative sm:pt-[30px] sm:pb-[24px] rounded-[16px] bg-white-100 lg:px-[40px]">
              <h1 className={`${montserrat.className} text-center font-[600]  text-[28px]`}>Complete Reset Password</h1>
              <span className={`${nunito.className} block text-center font-[400] text-[20px] mt-2 mb-6 text-dark-400 `}>
                Enter New Password
              </span>

              <form onSubmit={handleResetPassword}>
                <div>
                  <label htmlFor="password" className={`${workSans.className} text-md text-black-main font-medium`}>
                    New Password
                  </label>
                  <PasswordPopover password={formData.password}>
                    <Input
                      id="password"
                      name="password"
                      type={defaultInpType}
                      placeholder="Enter New Passworrd"
                      autoComplete="new-password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                      rightIcon={
                        defaultInpType === 'text' ? (
                          <Eye color="#777" onClick={() => setDefaultInpType('password')} />
                        ) : (
                          <EyeSlash color="#777" onClick={() => setDefaultInpType('text')} />
                        )
                      }
                      className="mt-1 mb-3 p-[16px] w-full text-black h-[60px] border text-md font-medium rounded-md"
                    />
                  </PasswordPopover>
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="confirmPassword"
                    className={`${workSans.className} text-md text-black-main font-medium`}
                  >
                    Confirm New Password
                  </label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                    autoComplete="new-password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                    rightIcon={
                      defaultInpType === 'text' ? (
                        <Eye color="#777" onClick={() => setDefaultInpType('password')} />
                      ) : (
                        <EyeSlash color="#777" onClick={() => setDefaultInpType('text')} />
                      )
                    }
                    className="mt-1 mb-3 p-[16px] w-full text-black h-[60px] border text-md font-medium rounded-md"
                  />
                </div>
                <Button className="w-full rounded-md my-3 mt-9 bg-primary-100" type="submit" disabled={isResetDisabled}>
                  Complete Reset
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
