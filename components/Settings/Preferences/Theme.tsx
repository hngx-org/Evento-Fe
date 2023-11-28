import React, { useState } from 'react';
import lightTheme from 'public/assets/settings/light-theme.svg';
import darkTheme from 'public/assets/settings/dark-theme.svg';
import systemTheme from 'public/assets/settings/system-theme.svg';
import Image from 'next/image';

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

function Theme() {
  const [selectedTheme, setSelectedTheme] = useState('Light Theme');
  return (
    <div className="flex flex-col gap-9">
      <div className={`space-y-2`}>
        <h3 className="text-Grey-G700 text-xl font-medium">Theme</h3>
        <p className="text-Grey-G100 text-sm">
          Choose and personalize your interface theme or set to system to take its current theme
        </p>
      </div>
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-6`}>
        {themes.map((theme) => (
          <div
            key={theme.id}
            className={`w-full h-40 md:h-48 rounded-lg border ${
              selectedTheme === theme.name ? 'border-primary-100' : 'border-Grey-G60'
            } bg-Grey-G20 flex flex-col`}
            onClick={() => setSelectedTheme(theme.name === selectedTheme ? '' : theme.name)}
          >
            <div className="mt-5 md:mt-9 border-b border-b-[#CBCBCB] pb-2">
              <Image src={theme.src} alt="theme" width={145} height={98} className="mx-auto" />
            </div>
            <div className="w-full h-full bg-white-100 rounded-lg flex items-center gap-2 px-4">
              <div
                className={`h-4 w-4 rounded-full border ${
                  selectedTheme === theme.name ? 'border-primary-100' : 'border-Grey-G50'
                } bg-white-N0 cursor-pointer flex items-center justify-center`}
                // onClick={() => setSelectedTheme(theme.name === selectedTheme ? '' : theme.name)}
              >
                {theme.name === selectedTheme && <div className="w-2 h-2 bg-primary-100 rounded-full"></div>}
              </div>
              <p className="text-[0.73rem] md:text-sm font-medium text-[#333]">{theme.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Theme;
