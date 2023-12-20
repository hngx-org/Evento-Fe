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

function SignIn() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [defaultInpType, setDefaultInpType] = useState<'password' | 'text'>('password');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

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
            Sign In to  continue using Evento
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
          <form onSubmit={handleSubmit} className="rounded-xl flex-col gap-6 flex">
            <label className="gilroy text-[14px] font-[600] leading-[20.3px] text-[#303030] ">Email</label>
            <Input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter Email Address"
              // className="outline-none rounded-[8px] p-[8px] px-[12px] flex items-center focus:border-[#ff5c00] border border-[#b1b1b1] bg-[#fefefe] text-[#c0c0c0] text-[14px] leading-[20.3px] font-[400] mt-[-22px] "

              className="p-2 w-full border text-black-main font-medium rounded-md"
            />

            <label className="gilroy text-[14px] font-[600] leading-[20.3px] text-[#303030] ">Password</label>

            <Input
              type={defaultInpType}
              //   className="outline-none text-[#c0c0c0] //text-[14px] leading-[20.3px] font-[400] "
              id="password"
              className="p-2 w-full font-medium text-black-main border rounded-md"
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
              placeholder="Password"
              required
            />

            <div className="flex justify-between mt-[-22px]">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChanged}
                  className="mr-2   accent-primary-100"
                />

                <p className="text-[16px] leading-6 font-[400] ">Remember me</p>
              </div>
              <Link href="" className="text-[16px] font-[400] text-[#e0580c] leading-[24px] ">
                Forgot password?
              </Link>
            </div>
            <Button
              style={{
                boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
              }}
              className="bg-[#e0580c] my-3 text-[#fefefe] rounded-[8px] flex justify-center items-center px-[20px] py-[16px] w-full text-[16px] font-[400] "
              type="submit"
              isLoading={loading}
              disabled={!isChecked}
            >
              Continue
            </Button>
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
}

export default SignIn;
