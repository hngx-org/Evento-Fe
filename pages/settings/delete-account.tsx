import React from 'react';
import Input from '@/components/UserProfile/Input';
import { Montserrat, Nunito } from 'next/font/google';
import Button from '@/components/ui/Button';
import Settingslayout from '@/layout/Settingslayout';

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

function DeleteAccount() {
  return (
    <Settingslayout>
      <div className={`${nunito.className}`}>
        <div className="space-y-2">
          <h4 className={`${montserrat.className} text-Errors-E300 text-2xl font-semibold`}>Delete Account</h4>
          <p className="text-Grey-G100">
            This action will permanently delete your account from our server and all saved data will be erased
          </p>
        </div>
        <div className="mt-7">
          <Input label="Reason (optional)" textArea inputHeight="h-[6.5rem]" backgroundColor="bg-white-N0" />
          <p className="text-Grey-G100 mt-1">If there is any crucial reason for this please let us know</p>
        </div>
        <div className="mt-10 flex items-center justify-end gap-4">
          <Button type="button" title="delete" styles="text-white-N0 font-bold text-sm px-4 py-3">
            Delete Account
          </Button>
        </div>
      </div>
    </Settingslayout>
  );
}

export default DeleteAccount;
