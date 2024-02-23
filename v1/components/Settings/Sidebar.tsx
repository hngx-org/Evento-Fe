import { Montserrat, Nunito } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const nav = [
  {
    id: 1,
    name: 'Account',
    path: '/settings',
  },
  {
    id: 2,
    name: 'Data & Security',
    path: '/settings/data-and-security',
  },
  {
    id: 3,
    name: 'Notifications',
    path: '/settings/notifications',
  },
  {
    id: 4,
    name: 'Preferences',
    path: '/settings/preferences',
  },
  {
    id: 5,
    name: 'Plans & Billing',
    path: '/settings/plans-and-billings',
  },
  // {
  //   id: 6,
  //   name: 'Integrations',
  //   path: '/settings/integrations',
  // },
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

function Sidebar({ onOpen }: { onOpen: () => void }) {
  const router = useRouter();
  const activeLink = (path: string) => (router.pathname === path ? 'bg-secondary-100 rounded-lg' : '');
  return (
    <div className="hidden lg:flex flex-col">
      <div className="flex items-center gap-2">
        <h1 className={`${montserrat.className} text-Grey-G700 text-5xl font-semibold`}>Settings</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="63" height="2" viewBox="0 0 63 2" fill="none">
          <path d="M1 1H62" stroke="#3C3C3C" strokeLinecap="round" />
        </svg>
      </div>
      <div className={`mt-16 flex flex-col gap-3 ${nunito.className}`}>
        {nav.map((item) => (
          <Link
            href={item.path}
            key={item.id}
            className={`${activeLink(`${item.path}`)} py-[0.875rem] px-5 text-xl font-normal -tracking-[0.0125rem] ${
              item.name === 'Delete Account' ? 'text-Errors-E300' : 'text-Grey-G700'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div
        className={`${nunito.className} py-[0.875rem] px-5 text-xl font-normal -tracking-[0.0125rem] text-Errors-E300 mt-3 cursor-pointer`}
        onClick={onOpen}
      >
        Delete Account
      </div>
    </div>
  );
}

export default Sidebar;
