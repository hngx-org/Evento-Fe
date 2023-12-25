'use client';

import { Input } from '@ui/NewInput';
import GoogleButton from '@ui/GoogleButton';
import Homenav from '@/components/Home/homenav';
import Button from '@ui/NewButton';
import PasswordPopover from '@ui/PasswordPopover';
import { signUpUser } from '@/http/authapi';
import { Eye, EyeSlash, Call } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import SucessModal from '@/components/components/modal/auth/SucessModal';
import { Montserrat, Nunito, Work_Sans } from 'next/font/google';

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

const SignUp = () => {
  const [defaultInpTypeNew, setDefaultInpTypeNew] = useState<'password' | 'text'>('password');

  const [modOpen, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const isClose = () => setOpen(false);
  const [loading, setLoading] = useState(false);
  const [defaultInpType, setDefaultInpType] = useState<'password' | 'text'>('password');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) =>
      type === 'checkbox' ? { ...prevFormData, [name]: checked } : { ...prevFormData, [name]: value },
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password, firstName, lastName } = formData;

    try {
      setLoading(true);
      await signUpUser({ email, password, firstName, lastName });
      setOpen(true);
    } catch (error) {
      console.error('Error during sign-up:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="md:w-[80%] md:mx-auto h-[100vh]">
        <Homenav />
        <div className="lg:w-[50%] justify-center items-center lg:mx-auto lg:my-[20px] pt-[20px] lg:shadow-lg">
          <div className="px-3">
            <div className="relative sm:pt-[30px] sm:pb-[24px] rounded-[16px] bg-white-100 lg:px-[40px]">
              <h1 className={`${montserrat.className} text-center font-[600]  text-[28px]`}>Welcome to Evento</h1>
              <span className={`${nunito.className} block text-center font-[400] text-[20px] mt-2 mb-6 text-dark-400 `}>
                Sign up to continue using Evento
              </span>

              <GoogleButton />
              <div className="seperator flex items-center space-x-2 my-4 ">
                <div className="seperate h-[1px] bg-[#C7C7C7] w-full"></div>
                <h4 className="text-gray/80"> Or</h4>
                <div className="seperate h-[1px] bg-[#C7C7C7] w-full"></div>
              </div>

              <form action="" className="flex flex-col mt-4 z-10" onSubmit={handleSubmit}>
                <label htmlFor="First Name" className={`${workSans.className} text-md text-black-main font-medium`}>
                  First Name
                </label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={`${workSans.className} mt-1 mb-3 p-[16px] w-full text-black h-[60px] border text-md font-medium rounded-md`}
                />

                <label htmlFor="lastname" className={`${workSans.className} text-md text-black-main font-medium`}>
                  Last Name:
                </label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className={`${workSans.className} mt-1 mb-3 p-[16px] w-full text-black h-[60px] border text-md font-medium rounded-md`}
                />

                <label htmlFor="email" className={`${workSans.className} text-md text-black-main font-medium`}>
                  Email
                </label>
                <Input
                  placeholder="Enter Email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`${workSans.className} mt-1 mb-3 p-[16px] w-full text-black h-[60px] border text-md font-medium rounded-md`}
                />

                <label htmlFor="Password" className={`${workSans.className} text-md text-black-main font-medium`}>
                  Password
                </label>
                <PasswordPopover password={formData.password}>
                  <Input
                    type={defaultInpType}
                    placeholder="Enter Password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    rightIcon={
                      defaultInpType === 'text' ? (
                        <Eye color="#777" onClick={() => setDefaultInpType('password')} />
                      ) : (
                        <EyeSlash color="#777" onClick={() => setDefaultInpType('text')} />
                      )
                    }
                    className={`${workSans.className} mt-1 mb-3 p-[16px] w-full text-black h-[60px] border text-md font-medium rounded-md`}
                  />
                </PasswordPopover>

                <div className="mb-3 mt-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                      className="mr-2   w-[20px] h-[20px] rounded-lg   accent-primary-100"
                    />
                    <span className="text-[16px] font-medium  text-gray-600">I agree to the terms and conditions</span>
                  </label>
                </div>

                <Button
                  className="w-full rounded-md my-3 text-[16px] bg-primary-100"
                  type="submit"
                  disabled={!isChecked}
                >
                  Sign up
                </Button>
              </form>
            </div>

            <span className=" text-white mb-8 mt-2 text-lg  relative block text-center md:text-black z-10">
              Aready have an account?
              <Link href="/auth/sign-in" className="ml-1 underline text-primary-100">
                Login
              </Link>
            </span>
          </div>
        </div>

        <SucessModal isOpen={modOpen} onClose={isClose} />
      </section>
    </>
  );
};

export default SignUp;
