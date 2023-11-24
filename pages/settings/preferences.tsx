import React, { useState } from 'react';
import Settingslayout from '@/layout/Settingslayout';
import { Montserrat, Nunito } from 'next/font/google';
import Button from '@/components/ui/Button';
import Theme from '@/components/Settings/Preferences/Theme';
import Language from '@/components/Settings/Preferences/Language';
import Regional from '@/components/Settings/Preferences/Regional';
import withAuth from '@/helpers/withAuth';

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

function Preferences() {
  return (
    <Settingslayout>
      <h2 className={`${montserrat.className} text-Grey-G700 text-[2rem] font-semibold`}>Preferences</h2>
      <div className={`${nunito.className} flex flex-col gap-10`}>
        <Theme />
        <Language />
        <Regional />
        <div className="flex justify-end mt-5">
          <Button type="button" title="password-button" styles="text-white-N0 font-bold text-sm py-3 px-[1.12rem]">
            Update all changes
          </Button>
        </div>
      </div>
    </Settingslayout>
  );
}

export default withAuth(Preferences);
