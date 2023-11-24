import { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import Image from 'next/image';

interface AuthModalProps {
  visible: boolean;
  type: 'signin' | 'signup';
  onCancel: () => void;
}

export default function AuthModal({ visible, type, onCancel }: AuthModalProps) {
  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[1000]">
      <div className="absolute top-0 left-0 h-full w-full bg-[#121212]/20" />
      <div className="relative m-auto w-11/12 max-w-xl bg-white-100 rounded-2xl shadow sm:p-24 pt-16 pb-[33px] px-4 overflow-y-auto max-h-screen">
        <button onClick={onCancel} className="absolute top-[46px] right-12">
          <Image src="/close-circle.svg" alt="Close icon" width={20} height={20} />
        </button>
        {type === 'signin' && <SignInForm />}
        {type === 'signup' && <SignUpForm />}
      </div>
    </div>
  );
}
