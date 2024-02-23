'use client';
import React, { useEffect, useState } from 'react';
import Button from '@/components/ui/NewButton';
import Link from 'next/link';
import Homenav from '@/components/Home/homenav';
import { Input } from '@ui/NewInput';
import { loginUser } from '@/http/authapi';
import { useRouter } from 'next/navigation';
import { Eye, EyeSlash } from 'iconsax-react';
import Cookies from 'js-cookie';
import GoogleButton from '@ui/GoogleButton';
import { Montserrat, Nunito, Work_Sans } from 'next/font/google';
import { useSession } from '@/context/sessionProvider';
import { useAuth } from '@/context/AuthContext';

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

const SignIn = () => {
  const router = useRouter();
  const { userCameFrom } = useAuth();
  const [loading, setLoading] = useState(false);
  const [defaultInpType, setDefaultInpType] = useState<'password' | 'text'>('password');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { login } = useSession();

  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

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
        router.push(userCameFrom || '/dashboard');
        const token = response.data.data.token;
        const userId = response.data.data.userId;
        login(token, userId);
        if (rememberMe) {
          Cookies.set('rememberedToken', token, { expires: 365 });
          Cookies.set('rememberedUserId', userId, { expires: 365 });
        }
      } else {
        console.error('Unexpected response:', response);
      }
    } catch (error) {
      console.error('Error during login:', error);
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
              <h1 className={`${montserrat.className} text-center font-[600]  text-[28px]`}> Welcome back !</h1>
              <span className={`${nunito.className} block text-center font-[400] text-[20px] mt-2 mb-6 text-dark-400 `}>
                Login to continue using Evento
              </span>

              <GoogleButton />
              <div className="seperator flex items-center space-x-2 my-4 ">
                <div className="seperate h-[1px] bg-[#C7C7C7] w-full"></div>
                <h4 className="text-dark-400"> Or</h4>
                <div className="seperate h-[1px] bg-[#C7C7C7] w-full"></div>
              </div>

              <form action="" className="flex flex-col  z-10" onSubmit={handleSubmit}>
                <label htmlFor="Business Email" className={`${workSans.className} text-md text-black-main font-medium`}>
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
                  className={`${workSans.className} mt-1 mb-3 p-[16px] w-full text-black h-[60px] border text-md font-medium rounded-md`}
                />

                <label htmlFor="Password" className={`${workSans.className} text-md text-black-main font-medium`}>
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
                  className={`${workSans.className} mt-1 p-[16px] w-full text-black h-[60px] border text-md font-medium rounded-md`}
                />
                <div className="pt-1 flex items-center justify-between">
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={handleRememberMeChange}
                        className="mr-1  w-[20px] h-[20px] rounded-lg accent-primary-100"
                      />
                      <span className="text-[16px] font-medium text-gray-600">Remember Me</span>
                    </label>
                  </div>

                  <Button
                    className="text-primary-100 text-[16px]  hover:underline font-normal"
                    href="/auth/forgetpassword"
                  >
                    Forgot password?
                  </Button>
                </div>

                <Button className="w-full rounded-lg mt-4 bg-primary-100" type="submit" isLoading={loading}>
                  Log in
                </Button>
              </form>
            </div>

            <span className="text-lg relative block text-center mt-5 md:text-black z-10">
              Don&apos;t have an account?
              <Link href="/auth/sign-up" className="ml-1 underline text-primary-100 font-montserrat">
                Sign up
              </Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
