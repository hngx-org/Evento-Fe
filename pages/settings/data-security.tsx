import React, { useState } from 'react';
import Settingslayout from '@/layout/Settingslayout';
import { Montserrat, Nunito } from 'next/font/google';
import Input from '@/components/UserProfile/Input';
import Button from '@/components/ui/Button';
import { ArrowRight2 } from 'iconsax-react';

const devices = [
  {
    id: 1,
    name: 'Android - Samsung z5',
  },
  {
    id: 2,
    name: 'Apple - Ipad 5th Gen',
  },
  {
    id: 3,
    name: 'Windows - Hp G5',
  },
];

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

function DataSecurity() {
  const [twoFactor, setTwoFactor] = useState(false);
  return (
    <Settingslayout>
      <h2 className={`${montserrat.className} text-Grey-G700 text-[2rem] font-semibold`}>Data & Security</h2>
      {/* password */}
      <div className={`${nunito.className} flex flex-col gap-9 mt-4`}>
        <div className="space-y-2">
          <h3 className={`text-Grey-G700 text-xl font-medium`}>Password</h3>
          <p className="text-Grey-G100 text-sm">
            Set a password or reset it if forgotten. You will receive a code via email to confirm the new password
          </p>
        </div>
        <form className="space-y-8">
          <Input label="New Password" type="password" inputHeight="h-[3.5rem]" />
          <div className="flex justify-end">
            <Button type="button" title="password-button" styles="text-white-N0 font-bold text-sm py-3 px-[1.12rem]">
              Set New Password
            </Button>
          </div>
        </form>
      </div>
      {/* 2fa */}
      <div className={`${nunito.className} flex flex-col gap-9`}>
        <div className="space-y-2">
          <h3 className={`text-Grey-G700 text-xl font-medium`}>2 Factor Authentication</h3>
          <p className="text-Grey-G100 text-sm w-[98%]">
            This provides an extra layer of security for your account. In addition to your password, we will send a code
            to your email each time you sign in
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-Grey-G600">2 Factor Authentication (code)</p>
          <div
            className="w-[2.44rem] h-6 bg-Grey-G50 rounded-xl flex items-center cursor-pointer"
            onClick={() => setTwoFactor(twoFactor ? false : true)}
          >
            <div className={`${twoFactor ? 'bg-Grey-G50' : 'bg-white-N0'} w-5 h-5 rounded-full`}></div>
            <div className={`${twoFactor ? 'bg-primary-100' : 'bg-Grey-G50'} w-5 h-5 rounded-full`}></div>
          </div>
        </div>
      </div>
      {/* manage devices */}
      <div className={`${nunito.className} flex flex-col gap-9 mt-4`}>
        <div className="space-y-2">
          <h3 className={`text-Grey-G700 text-xl font-medium`}>Manage Devices</h3>
          <p className="text-Grey-G100 text-sm w-[98%]">
            This displays a list of all devices currently signed in to your Evento Space. You can manage and control
            access by reviewing and logging out from any unfamiliar or unauthorized devices.
          </p>
        </div>
        <div className="space-y-8">
          {devices.map((device) => (
            <div key={device.id} className="flex items-center justify-between">
              <p className="text-Grey-G600">{device.name}</p>
              <div className="cursor-pointer">
                <ArrowRight2 size={24} color="#292D32" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* export data */}
      <div className={`${nunito.className} flex flex-col gap-9 mt-5`}>
        <h3 className={`text-Grey-G700 text-xl font-medium`}>Export Data</h3>
        <div className="flex items-center justify-between">
          <p className="text-Grey-G100 text-sm w-[58%]">
            Request your event data from us and receive an email detailing your activity
          </p>
          <Button type="button" title="password-button" styles="text-white-N0 font-bold text-sm py-3 px-[1.12rem]">
            Export Data
          </Button>
        </div>
      </div>
      {/* clear data */}
      <div className={`${nunito.className} flex flex-col gap-9 mt-5`}>
        <h3 className={`text-Grey-G700 text-xl font-medium`}>Clear Data</h3>
        <div className="flex items-center justify-between">
          <p className="text-Grey-G100 text-sm w-[58%]">
            Clear your cache and account data without deleting your Eclips account. This option lets you refresh your
            app experience by removing temporary files and stored information
          </p>
          <Button type="button" title="password-button" styles="text-white-N0 font-bold text-sm py-3 px-[1.12rem]">
            Clear all data
          </Button>
        </div>
      </div>
    </Settingslayout>
  );
}

export default DataSecurity;
