import React, { useState, useEffect } from 'react';
import Button from '@ui/NewButton';
import Modal from '@/components/ui/Modal';
import AuthTitle from '@/components/components/authTitle';
import Image from 'next/image';
import { signUpWithGoogle } from '@/http/authapi';

function VerifyEmail({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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
    // <Modal closeOnOverlayClick isOpen={isOpen} closeModal={onClose} size="sm">
    <div>
      <div className="relative flex flex-col items-center justify-center m-auto bg-[#fff] w-[auto] sm:w-[700px] rounded-[16px]">
        <button onClick={onClose} className="absolute top-[46px] right-12">
          <Image src="/close-circle.svg" alt="Close icon" width={20} height={20} />
        </button>
        <div className="p-4 pt-20">
          <p className="text-[#000] text-[36px] font-[600] ">Enter Code</p>
          <p className="text-[#000] text-[20px] pt-6 pb-2 font-[400] ">Please enter the 6 digit code we sent to</p>
          <p className="text-[#000] text-[20px] pb-2 font-[400] ">Youremail@gmail.com.</p>
          <div className="flex gap-4 sm:gap-8 my-4">
            <input
              //   type="number"
              className="border outline-none text-center text-[20px] border-[#111] rounded-[12px] w-[40px] h-[40px] sm:w-[56px] sm:h-[56px]"
            />
            <input
              //   type="number"
              className="border outline-none text-center text-[20px] border-[#111] rounded-[12px] w-[40px] h-[40px] sm:w-[56px] sm:h-[56px]"
            />
            <input
              //   type="number"
              className="border outline-none text-center text-[20px] border-[#111] rounded-[12px] w-[40px] h-[40px] sm:w-[56px] sm:h-[56px]"
            />
            <input
              //   type="number"
              className="border outline-none text-center text-[20px] border-[#111] rounded-[12px] w-[40px] h-[40px] sm:w-[56px] sm:h-[56px]"
            />
            <input
              //   type="number"
              className="border outline-none text-center text-[20px] border-[#111] rounded-[12px] w-[40px] h-[40px] sm:w-[56px] sm:h-[56px]"
            />
            <input
              //   type="number"
              className="border outline-none text-center text-[20px] border-[#111] rounded-[12px] w-[40px] h-[40px] sm:w-[56px] sm:h-[56px]"
            />
          </div>
          <Button
            onClick={onOpen}
            className="px-12 py-4 bg-[#0F0F0F] rounded-lg border border-neutral-900 w-full flex items-center gap-[10px] justify-center"
          >
            <p className="text-center text-[#fff] text-base font-medium leading-normal">Log in</p>
          </Button>
          <p className="pt-4 text-[16px] font-[400] text-[#111]">
            Did not receive Code? <span className="font-[600] text-[#000]"> Resend Code</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
