import React, { useState } from 'react';
import Settingslayout from '@/layout/Settingslayout';
import { Montserrat, Nunito } from 'next/font/google';
import Button from '@/components/ui/NewButton';
import Theme from '@/components/Settings/Preferences/Theme';
import Language, { languages } from '@/components/Settings/Preferences/Language';
import Regional from '@/components/Settings/Preferences/Regional';
import withAuth from '@/helpers/withAuth';
import { preferences, updateUserPreferences } from '@/http/settingsapi';

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
  const [loaidng, setLoading] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('Light');
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [regionalSettings, setRegionalSettings] = useState({
    location: 'Nigeria - GMT+1',
    syncEnabled: true,
  });

  function handleSubmit() {
    const data: preferences = {
      theme: selectedTheme,
      language: selectedLanguage.name,
      regionalSettings: regionalSettings.syncEnabled,
      timeZone: regionalSettings.location,
    };
    // console.log(data);
    updateUserPreferences(data, setLoading);
  }

  return (
    <Settingslayout>
      <h2 className={`${montserrat.className} text-Grey-G700 text-2xl lg:text-[2rem] font-semibold`}>Preferences</h2>
      <div className={`${nunito.className} flex flex-col gap-10`}>
        <Theme selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} />
        <Language selected={selectedLanguage} setSelected={setSelectedLanguage} />
        {/* <Regional location={regionalSettings.location} /> */}
        <div className="flex justify-end mt-5">
          <Button
            type="button"
            title="update"
            className="text-white-N0 bg-primary-100 rounded-lg font-bold text-sm py-3 px-[1.12rem]"
            isLoading={loaidng}
            onClick={handleSubmit}
          >
            Update all changes
          </Button>
        </div>
      </div>
    </Settingslayout>
  );
}

export default withAuth(Preferences);
