'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/NewButton';
import Link from 'next/link';
import Homenav from '@/components/Home/homenav';
import { Input } from '@ui/NewInput';
import { loginUser } from '@/http/authapi';
import { useRouter } from 'next/navigation';
import { Eye, EyeSlash } from 'iconsax-react';
import { MdOutlineMail } from 'react-icons/md';
import GoogleButton from '@ui/GoogleButton';

const SignIn = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [defaultInpType, setDefaultInpType] = useState<'password' | 'text'>('password');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
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

    const { email, password } = formData;

    try {
      setLoading(true);
      const response = await loginUser({ email, password });
      if (response && response.status === 200) {
        router.push('/event-dashboard');
      } else {
        console.error('Unexpected response:', response);
      }
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
        <div className="lg:w-[60%] justify-center items-center lg:mx-auto lg:my-auto ">
          <div className="px-3 ">
            <div className="relative py-[80px] rounded-[16px] bg-white-100 shadow-lg px-3 md:shadow-none">
              <h1 className="text-center font-[600]  text-[28px]"> Welcome back !</h1>
              <span className="block text-center font-[400] text-[20px] mt-2 mb-6 ">
                Great to have you back with us again
              </span>

              <GoogleButton />
              <div className="seperator flex items-center space-x-2 my-4 ">
                <div className="seperate h-[1px] bg-[#C7C7C7] w-full"></div>
                <h4 className="text-gray/80"> Or</h4>
                <div className="seperate h-[1px] bg-[#C7C7C7] w-full"></div>
              </div>

              <form action="" className="flex flex-col  z-10" onSubmit={handleSubmit}>
                <label htmlFor="Business Email" className="font-bold">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter Email Address"
                  required
                  className="mt-1 mb-3 p-5 w-full text-black h-[60px] border text-md font-medium rounded-md"
                />

                <label htmlFor="Password" className="font-bold mt-4 ">
                  Password
                </label>

                <Input
                  type={defaultInpType}
                  required
                  placeholder="Password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  rightIcon={
                    defaultInpType === 'text' ? (
                      <Eye color="#777" onClick={() => setDefaultInpType('password')} />
                    ) : (
                      <EyeSlash color="#777" onClick={() => setDefaultInpType('text')} />
                    )
                  }
                  className="mt-1 p-5 w-full text-black h-[60px] border text-md font-medium rounded-md"
                />
                <div className="my-3 flex justify-between ">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="mr-2   accent-primary-100"
                    />
                    <span className="text-md font-medium text-gray-600">Remember Me</span>
                  </label>

                  <Button
                    className="text-orange-600 text-base  hover:underline font-normal leading-normal"
                    href="/auth/forgetpassword"
                  >
                    Forgot password?
                  </Button>
                </div>

                <Button
                  className="w-full rounded-md my-3 bg-primary-100"
                  type="submit"
                  isLoading={loading}
                  disabled={!isChecked}
                >
                  Log in
                </Button>
              </form>
            </div>

            <span className=" text-white pb-5 text-lg  relative block text-center md:text-black z-10">
              Don&apos;t have an account?
              <Link href="/auth/sign-up" className="ml-1 underline">
                Sign up
              </Link>
            </span>
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
      </section>
    </>
  );
};

export default SignIn;
