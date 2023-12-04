import React, { useState } from 'react';
import Settingslayout from '@/layout/Settingslayout';
import { Montserrat, Nunito } from 'next/font/google';
import GoogleMeetLogo from 'public/assets/settings/logos_google-meet.svg';
import GoogleCalenderLogo from 'public/assets/settings/logos_google-calendar.svg';
import ZoomLogo from 'public/assets/settings/logos_zoom-icon.svg';
import Paypal from 'public/assets/settings/logos_paypal.svg';
import Image from 'next/image';
import Switch from '@/components/Settings/Switch';

const apps = [
  {
    id: 1,
    name: 'Google meet',
    description: 'Create google meeting links for your events without leaving the evento space ',
    icon: GoogleMeetLogo,
    alt: 'google-meet-logo',
    width: 36,
    height: 30,
  },
  {
    id: 2,
    name: 'Google calendar',
    description: 'Keep your google calendar schedule up to date automatically',
    icon: GoogleCalenderLogo,
    alt: 'google-calendar-logo',
    width: 36,
    height: 36,
  },
  {
    id: 3,
    name: 'Zoom',
    description: 'Create and schedule zoom meeting events with one single tap',
    icon: ZoomLogo,
    alt: 'zoom-icon',
    width: 36,
    height: 36,
  },
  {
    id: 4,
    name: 'Paypal',
    description: 'For easy and secure ticket payment transactions',
    icon: Paypal,
    alt: 'paypal-logo',
    width: 36,
    height: 42,
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

function Integrations() {
  const [enabled, setEnabled] = useState(false);
  return (
    <Settingslayout>
      <div className="space-y-3">
        <h2 className={`${montserrat.className} text-Grey-G700 text-[2rem] font-semibold`}>Integrations</h2>
        <p className="text-Grey-G100 text-base">
          Link third-party apps with your evento space for seamless event management
        </p>
      </div>
      <div className={`${nunito.className} flex flex-col gap-10 mt-10`}>
        {apps.map((app) => (
          <div
            key={app.id}
            className={`flex items-center justify-between ${
              app.id !== apps.length ? 'border-b border-b-Grey-G40 pb-10' : ''
            }`}
          >
            <div className="flex items-center gap-2">
              <Image src={app.icon} alt={app.alt} width={app.width} height={app.height} />
              <div>
                <p className="font-medium text-Grey-G600">{app.name}</p>
                <p className="text-Grey-G100 text-[0.625rem]">{app.description}</p>
              </div>
            </div>
            <div>
              <Switch
                defaultValue={false}
                enabled={enabled}
                setEnabled={setEnabled}
                handleClick={() => setEnabled(enabled ? false : true)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-10 text-primary-100 font-bold text-base cursor-pointer">
        Suggest apps to integrate
      </div>
    </Settingslayout>
  );
}

export default Integrations;
