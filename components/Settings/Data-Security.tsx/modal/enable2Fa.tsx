import React, { useEffect, useState } from 'react';
import Modal from '../../Modal';
import { Montserrat, Nunito } from 'next/font/google';
import { Input } from '@/components/ui/NewInput';
import Button from '@/components/ui/NewButton';
import { enable2fa, getUserEmail } from '@/http/settingsapi';
import Code2Fa from './code2Fa';
import useDisclosure from '@/hooks/useDisclosure';

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

function Enable2Fa({
  isOpenB,
  onCloseB,
  success,
  setSuccess,
}: {
  isOpenB: boolean;
  onCloseB: () => void;
  success: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [loading, setLoading] = useState(false);
  const userEmail = getUserEmail();
  const [email, setEmail] = useState(userEmail ? userEmail : '');

  return (
    <Modal isOpen={isOpenB} closeModal={onCloseB} isCloseIconPresent={true} size="xl">
      <div className={`${nunito.className}`}>
        <div className="space-y-2">
          <h4 className={`${montserrat.className} text-lg font-semibold`}>Enable 2FA</h4>
          <p className="text-Grey-G100 text-sm">
            Enhance your security by enabling a verification code to verify your identity
          </p>
        </div>
        <div className="mt-5 space-y-2">
          <label htmlFor="email" className={`text-sm text-Grey-G600 font-medium`}>
            Email
          </label>
          <Input
            id="email"
            type="email"
            className="w-full border border-Grey-G60"
            placeHolder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button
          type="button"
          title="update"
          className="text-white-N0 bg-primary-100 rounded-lg font-bold text-sm py-3 w-full mt-7"
          isLoading={loading}
          onClick={() => enable2fa(email, setLoading, setSuccess)}
        >
          Continue
        </Button>
      </div>
    </Modal>
  );
}

export default Enable2Fa;
