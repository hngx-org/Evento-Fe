import React, { useState } from 'react';
import AuthTitle from '@/components/components/authTitle';
import Image from 'next/image';
import Button from '@ui/NewButton';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSignIn = () => {
    console.log('Sign In logic here');
  };

  return (
    <form>
      <AuthTitle heading="Welcome to Evento" subHeading="Sign up to Continue using Evento" />
      <Button className="px-12 py-4 rounded-lg border border-neutral-900 w-full flex items-center gap-[10px] justify-center mt-12">
        <Image src="/google.svg" alt="Google icon" width={20} height={20} />
        <span className="text-center text-stone-900 text-base font-normal leading-normal">Sign in with Google</span>
      </Button>
      <div className="flex items-center gap-[10px] my-6">
        <div className="w-full h-[0px] bg-neutral-500 border-b border-b-neutral-500" />
        <div className="text-center text-neutral-500 text-sm font-normal leading-tight">OR</div>
        <div className="w-full h-[0px] bg-neutral-500 border-b border-b-neutral-500" />
      </div>
      <div>
        <label htmlFor="full-name">Full name</label>
        <input
          type="text"
          id="full-name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="p-4 bg-white rounded-lg border block w-full border-zinc-400 text-base font-medium leading-normal mt-2"
          placeholder="Enter Full Name"
        />
      </div>
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
          className="p-4 bg-white rounded-lg border block w-full border-zinc-400  text-base font-medium leading-normal mt-2"
          placeholder="Password"
        />
      </div>
      <Button
        onClick={handleSignIn}
        className="px-5 py-4 bg-orange-600 rounded-lg shadow text-base font-normal w-full mt-12 leading-normal text-white-100 mb-2"
      >
        Continue
      </Button>
      <div className="gap-[6px] mt-4 justify-center flex items-center">
        <input type="checkbox" name="remember-me" id="remember-me" className=" accent-orange-600" />I accept the terms
        and conditions
      </div>
    </form>
  );
}

export default SignUpForm;
