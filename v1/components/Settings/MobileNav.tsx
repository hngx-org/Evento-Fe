import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Line from 'public/assets/settings/line.svg';
import React, { useEffect, useState } from 'react';
import Select from './Select';
import { useRouter } from 'next/router';

const paths = [
  {
    path: '/settings',
  },
  {
    path: '/settings/data-and-security',
  },
  {
    path: '/settings/notifications',
  },
  {
    path: '/settings/preferences',
  },
  {
    path: '/settings/plans-and-billings',
  },
  {
    path: '/settings/help',
  },
  {
    path: '/settings/delete-account',
  },
];

const nav: { name: string; path?: string }[] = [
  {
    name: 'Account',
    path: '/settings',
  },
  {
    name: 'Data & Security',
    path: '/settings/data-and-security',
  },
  {
    name: 'Notifications',
    path: '/settings/notifications',
  },
  {
    name: 'Preferences',
    path: '/settings/preferences',
  },
  {
    name: 'Plans & Billing',
    path: '/settings/plans-and-billings',
  },
  {
    name: 'Help',
    path: '/settings/help',
  },
  {
    name: 'Delete Account',
    path: '/settings/delete-account',
  },
];

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

function MobileNav() {
  const [selected, setSelected] = useState(nav[0]);
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    if (pathname === '/settings') {
      setSelected(nav[0]);
    } else if (pathname === '/settings/data-and-security') {
      setSelected(nav[1]);
    } else if (pathname === '/settings/notifications') {
      setSelected(nav[2]);
    } else if (pathname === '/settings/preferences') {
      setSelected(nav[3]);
    } else if (pathname === '/settings/plans-and-billings') {
      setSelected(nav[4]);
    } else if (pathname === '/settings/delete-account') {
      setSelected(nav[6]);
    }
  }, [pathname]);

  function handleSelect(e: { name: string; path: string }) {
    setSelected(e);
    router.push(e.path);
  }

  return (
    <div className="lg:hidden space-y-2">
      <div className="flex items-center gap-2">
        <h1 className={`${montserrat.className} text-Grey-G700 text-[2rem] font-semibold`}>Settings</h1>
        <Image src={Line} alt="line" width={44} height={0} />
      </div>
      <Select
        options={nav}
        color="light"
        type="normal"
        selected={selected}
        setSelected={setSelected}
        handleSelect={handleSelect}
      />
    </div>
  );
}

export default MobileNav;
