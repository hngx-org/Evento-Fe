'use client';

import { Input } from '@ui/NewInput';
import Button from '@ui/NewButton';
import Image from 'next/image';
import React, { useState } from 'react';
import Homenav from '@/components/Home/homenav';
import Sucessemail from '@/components/components/modal/auth/Sucessemail';
import { resetPassword } from '@/http/authapi';
import { useRouter } from 'next/navigation';
import { Montserrat, Nunito } from 'next/font/google';

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

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [modOpen, setOpen] = useState(false);
  const isClose = () => setOpen(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await resetPassword({ email });
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
        router.push('/');
      }, 5000);
    } catch (error) {
      console.error('Password reset error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="md:w-[80%] md:mx-auto h-[100vh]">
        <Homenav />
        <div className="lg:w-[50%] justify-center items-center lg:mx-auto lg:my-[20px] pt-[20px] lg:shadow-lg">
          <div className="px-3">
            <div className="relative sm:pt-[30px] sm:pb-[24px] rounded-[16px] bg-white-100 lg:px-[40px]">
              <h1 className={`${montserrat.className} text-center font-[600]  text-[28px]`}>Forgot Password</h1>
              <span className={`${nunito.className} block text-center font-[400] text-[20px] mt-2 mb-6 text-dark-400 `}>
                Enter Registered Email
              </span>

              <form action="" className="flex flex-col mt-1" onSubmit={handleResetPassword}>
                <label htmlFor="Email" className="font-semibold">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeHolder="Enter Registered Email Address"
                  required
                  className="mt-1 mb-3 p-[20px] w-full text-black h-[60px] border text-md font-medium rounded-md"
                />
                <Button className="w-full rounded-md my-3 bg-primary-100" type="submit" isLoading={isLoading}>
                  Reset Password
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="fixed -bottom-40 md:hidden z-[-20]">
          <Image
            src="/mobile.svg"
            alt="backgroud_ng_for_mobile"
            width={140}
            height={50}
            className="h-[739.363px] w-[684.675px]"
          />
        </div>
        <Sucessemail isOpen={modOpen} onClose={isClose} />
      </section>
    </>
  );
};

export default ForgotPassword;
