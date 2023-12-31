'use client';

import SocialButton from './SocialButton';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

export default function GoogleButton() {
  return (
    <SocialButton
      className="px-12 py-4 rounded-lg border border-[#C7C7C7]  w-full flex items-center gap-[10px] justify-center"
      onClick={() => signIn('google')}
      leftIcon={<Image src="/google.svg" alt="Google icon" width={20} height={20} />}
    >
      <span className="text-center text-stone-900 text-[16px] font-medium leading-normal">Continue with Google</span>
    </SocialButton>
  );
}
