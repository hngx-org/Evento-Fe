import React, { useState } from 'react';
import Settingslayout from '@/layout/Settingslayout';
import { Montserrat, Nunito } from 'next/font/google';
import lightTheme from 'public/assets/settings/light-theme.png';
import darkTheme from 'public/assets/settings/dark-theme.png';
import systemTheme from 'public/assets/settings/system-theme.png';
import Image from 'next/image';
import Select from '@/components/Settings/Select';
import Switch from '@/components/Settings/Switch';
import Input from '@/components/UserProfile/Input';
import Button from '@/components/ui/Button';

const themes = [
  {
    id: 1,
    name: 'Light Theme',
    src: lightTheme,
  },
  {
    id: 2,
    name: 'Dark Theme',
    src: darkTheme,
  },
  {
    id: 3,
    name: 'System Theme',
    src: systemTheme,
  },
];

const languages = [
  {
    name: 'English (UK)',
  },
  {
    name: 'English (US)',
  },
  {
    name: 'French',
  },
  {
    name: 'German',
  },
  {
    name: 'Italian',
  },
];

const locations = [
  {
    name: 'Nigeria - GMT + 1',
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

function Preferences() {
  const [selectedTheme, setSelectedTheme] = useState('');
  return (
    <Settingslayout>
      <h2 className={`${montserrat.className} text-Grey-G700 text-[2rem] font-semibold`}>Preferences</h2>
      <div className={`${nunito.className} flex flex-col gap-10`}>
        {/* Theme */}
        <div className="flex flex-col gap-9">
          <div className={`space-y-2`}>
            <h3 className="text-Grey-G700 text-xl font-medium">Theme</h3>
            <p className="text-Grey-G100 text-sm">
              Choose and personalize your interface theme or set to system to take its current theme
            </p>
          </div>
          <div className={`grid grid-cols-3 gap-6`}>
            {themes.map((theme) => (
              <div
                key={theme.id}
                className={`w-full h-48 rounded-lg border ${
                  selectedTheme === theme.name ? 'border-primary-100' : 'border-Grey-G60'
                } bg-Grey-G20 flex flex-col`}
              >
                <div className="mt-9 border-b border-b-[#CBCBCB] pb-2">
                  <Image src={theme.src} alt="theme" width={145} height={98} className="mx-auto" />
                </div>
                <div className="w-full h-full bg-white-100 rounded-lg flex items-center gap-2 px-4">
                  <div
                    className={`h-4 w-4 rounded-full border ${
                      selectedTheme === theme.name ? 'border-primary-100' : 'border-Grey-G50'
                    } bg-white-N0 cursor-pointer flex items-center justify-center`}
                    onClick={() => setSelectedTheme(theme.name === selectedTheme ? '' : theme.name)}
                  >
                    {theme.name === selectedTheme && <div className="w-2 h-2 bg-primary-100 rounded-full"></div>}
                  </div>
                  <p className="text-sm font-medium text-[#333]">{theme.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Language */}
        <div className="flex flex-col gap-9">
          <div className={`space-y-2`}>
            <h3 className="text-Grey-G700 text-xl font-medium">Language</h3>
            <p className="text-Grey-G100 text-sm">Select the language contents will be written in</p>
          </div>
          <div>
            <Select options={languages} color="light" />
          </div>
        </div>
        {/* Regional */}
        <div className="flex flex-col gap-9">
          <div className={`space-y-2`}>
            <h3 className="text-Grey-G700 text-xl font-medium">Regional</h3>
            <p className="text-Grey-G100 text-sm">
              Set Time and Date manually or turn on toggle to automatically sync them to your device location
            </p>
          </div>
          <div className="flex items-center justify-between border-b border-b-Grey-G40 pb-7">
            <p className="font-medium text-Grey-G600">Automatically sync with location</p>
            <Switch defaultValue />
          </div>
          <div className="flex flex-col gap-2 -mt-2">
            <p className="font-medium text-Grey-G600">Location - Time zone</p>
            <Select options={locations} color="dark" />
          </div>
          <div className="grid grid-cols-3 gap-5 mt-5">
            <div className="col-span-2">
              <Input label="Date" type="date" inputHeight="h-[3.5rem]" />
            </div>
            <div>
              <Input label="Time" type="time" inputHeight="h-[3.5rem]" />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <Button type="button" title="password-button" styles="text-white-N0 font-bold text-sm py-3 px-[1.12rem]">
            Update all changes
          </Button>
        </div>
      </div>
    </Settingslayout>
  );
}

export default Preferences;
