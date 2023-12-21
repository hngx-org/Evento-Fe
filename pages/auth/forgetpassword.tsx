'use client';

import { Input } from '@ui/NewInput';
import Button from '@ui/NewButton';
import Image from 'next/image';
import React, { useState } from 'react';
import Homenav from '@/components/Home/homenav';
import Sucessemail from '@/components/components/modal/auth/Sucessemail';
import { resetPassword } from '@/http/authapi';
import { useRouter } from 'next/navigation';

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
        <div className="lg:w-[60%] justify-center items-center lg:mx-auto lg:my-auto ">
          <div className="px-3 ">
            <div className="relative py-[80px] rounded-[16px] bg-white-100 shadow-lg px-3 md:shadow-none">
              <h1 className="text-center font-[600]  text-[28px]">Forgot Password</h1>
              <span className="block text-center font-[400] text-[14px] mt-2 ">Fill the field below</span>

              <form action="" className="flex flex-col mt-10" onSubmit={handleResetPassword}>
                <label htmlFor="Email" className="font-bold">
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
                  className="mt-1 mb-3 p-5 w-full text-black h-[60px] border text-md font-medium rounded-md"
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
