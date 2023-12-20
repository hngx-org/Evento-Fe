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

  const handleLinkClick = () => {
    window.location.href = 'https://evento-qo6d.onrender.com/api/v1/google';
    // signUpWithGoogle();
  };

  return (
    <>
      <section className="md:w-[80%] md:mx-auto h-[100vh] bg-white-100">
        <Homenav />
        <div className="lg:w-[60%] justify-center items-center lg:mx-auto lg:my-auto ">
          <div className="px-3 ">
            <div className="relative py-[80px] rounded-[16px] bg-white-100 shadow-lg px-3 md:shadow-none">
              <h1 className="text-center font-[600]  text-[28px]"> Welcome back !</h1>
              <span className="block text-center font-[400] text-[20px] mt-2 ">
                Great to have you back with us again
              </span>

              <form action="" className="flex flex-col mt-4 z-10" onSubmit={handleSubmit}>
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
                  rightIcon={<MdOutlineMail color="#777" />}
                  required
                  className="mt-1 mb-3 p-2 w-full text-black h-[60px] border text-md font-medium rounded-md"
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
                  className="mt-1 p-2 w-full text-black h-[60px] border text-md font-medium rounded-md"
                />

                <span className="mb-4 mt-1 text-lg text-right text-[#e0580c]">
                  <Link href="">forgot password?</Link>
                </span>

                <Button
                  className="w-full rounded-md my-3 bg-primary-100"
                  type="submit"
                  isLoading={loading}
                  disabled={!isChecked}
                >
                  Log in
                </Button>
              </form>

              <div className="seperator flex items-center space-x-2 my-2">
                <div className="seperate h-[1px] bg-[#C7C7C7] w-full"></div>
                <h4 className="text-gray/80"> Or</h4>
                <div className="seperate h-[1px] bg-[#C7C7C7] w-full"></div>
              </div>

              <Link href="">
                <Button
                  className=" text-black w-full my-3 border-[#C7C7C7] 
								border rounded-md bg-[#fff] py-1"
                  leftIcon={<Image src="/google.svg" alt="google_logo_icon" width={20} height={20} className="mb-1" />}
                >
                  Continue with Google
                </Button>
              </Link>
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
