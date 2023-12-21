'use clinet';

import Modal from '@ui/Modal';
import Button from '@ui/NewButton';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Sms } from 'iconsax-react';

function SampleModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [timer, setTimer] = useState(120);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <Modal closeOnOverlayClick isOpen={isOpen} closeModal={onClose} isCloseIconPresent={false} size="sm">
      {/* <Image
        src="/email.svg"
        alt="email_verification_modal"
        width={200}
        height={200}
        className="relative block mx-auto w-[200px] h-[200px] md:w-[150px] md:h-[150px] mt-10"
      /> */}
      <div className="justify-center items-center mx-auto flex">
        <Sms size="132" color="#E0580C" />
      </div>
      <div className="text-center mx-auto">
        <h2 className="text-xl text-[#000000] font-bold mt-5 mb-1 md:text-3xl md:mb-3">Successful !</h2>
        <p className="w-70 mx-auto mb-4 md:w-60 text-lg font-medium">
          {' '}
          Check your email to verify your account. The link expires in {formatTime(timer)}.
        </p>
      </div>
    </Modal>
  );
}
export default SampleModal;
