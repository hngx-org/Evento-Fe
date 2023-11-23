import React, { useState } from 'react';
import AuthTitle from '@/components/components/authTitle';
import Image from 'next/image';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleSignIn = () => {
    console.log('Sign In logic here');
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password logic here');
  };

  return (
    <form>
      {!forgotPassword ? (
        <>
          <AuthTitle heading="Welcome to Evento" subHeading="Sign in to Continue using Evento" />
          <button className="px-12 py-4 rounded-lg border border-neutral-900 w-full flex items-center gap-[10px] justify-center mt-12">
            <Image src="/google.svg" alt="Google icon" width={20} height={20} />
            <span className="text-center text-stone-900 text-base font-normal leading-normal">Sign in with Google</span>
          </button>
          <div className="pt-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-4 bg-white rounded-lg border block w-full border-zinc-400  text-base font-medium leading-normal mt-2"
              placeholder="Enter email address"
            />
          </div>
          <div className="pt-6">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-4 bg-white rounded-lg border block w-full border-zinc-400 text-base font-medium leading-normal mt-2"
              placeholder="Password"
            />
          </div>
          <button
            onClick={handleSignIn}
            className="px-5 py-4 bg-orange-600 rounded-lg shadow text-base font-normal w-full mt-12 leading-normal text-white-100 mb-2"
          >
            Continue
          </button>
          <div className="flex justify-between items-center">
            <div className="gap-[6px] flex items-center">
              <input type="checkbox" name="remember-me" id="remember-me" />
              Remember me
            </div>
            <button
              className="text-orange-600 text-base  hover:underline font-normal leading-normal"
              onClick={() => setForgotPassword(true)}
            >
              Forgot password?
            </button>
          </div>
        </>
      ) : (
        <>
          <AuthTitle
            heading="Forgot your Password?"
            subHeading="Enter your registered Email address to receive reset instructions."
          />
          <div className="pt-10">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-4 bg-white rounded-lg border block w-full border-zinc-400 text-base font-medium leading-normal mt-2"
              placeholder="Enter email address"
            />
          </div>
          <button
            onClick={handleForgotPassword}
            className=" text-white-100 px-5 py-4 bg-orange-600 rounded-lg shadow text-base font-normal w-full mt-12 leading-normal"
          >
            Send recovery instructions
          </button>
        </>
      )}
    </form>
  );
};

export default SignInForm;
