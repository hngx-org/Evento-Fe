import React, { useState, useEffect } from 'react';
import Button from '@ui/NewButton';
import Modal from '@/components/ui/Modal';
import AuthTitle from '@/components/components/authTitle';
import Image from 'next/image';
import { signUpWithGoogle } from '@/http/authapi';
import SignupWithEmail from './SignupWithEmail';

function SignUp({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [modOpen, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const isClose = () => setOpen(false);

  const [isloading, setIsLoading] = useState(false);

  const handleLinkClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = 'https://evento-qo6d.onrender.com/api/v1/google';
    }, 5000);
  };

  return (
    <Modal closeOnOverlayClick isOpen={isOpen} closeModal={onClose} size="sm" isCloseIconPresent={false}>
      <button onClick={onClose} className="absolute top-[46px] right-12">
        <Image src="/close-circle.svg" alt="Close icon" width={20} height={20} />
      </button>
      <div className="p-4 ">
        <AuthTitle heading="Welcome to Evento" subHeading="Sign up to Continue using Evento" />
        <Button
          isLoading={isloading}
          spinnerColor="#000"
          className="px-12 py-4 rounded-lg border border-neutral-900 w-full flex items-center gap-[10px] justify-center mt-12"
          onClick={handleLinkClick}
        >
          <Image src="/google.svg" alt="Google icon" width={20} height={20} />
          <span className="text-center text-stone-900 text-base font-medium leading-normal">Sign up with Google</span>
        </Button>
        <div className="flex items-center gap-[10px] my-6">
          <div className="w-full h-[0px] bg-neutral-500 border-b border-b-neutral-500" />
          <div className="text-center text-neutral-500 text-sm font-normal leading-tight">OR</div>
          <div className="w-full h-[0px] bg-neutral-500 border-b border-b-neutral-500" />
        </div>
        <Button
          onClick={onOpen}
          className="px-12 py-4 rounded-lg bg-primary-100 w-full flex items-center gap-[10px] justify-center"
        >
          <p className="text-center text-white-100 text-base font-medium leading-normal">Sign up with Email</p>
        </Button>
      </div>
      <SignupWithEmail isOpen={modOpen} onClose={isClose} />
    </Modal>
  );
}

export default SignUp;
