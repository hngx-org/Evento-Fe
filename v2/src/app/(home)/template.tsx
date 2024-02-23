'use client';

import React from 'react';
import HomeFooter from '@/components/home/Footer';
import NavBar from '@/components/home/NavBar';
import NavBarAuthenticated from '@/components/Header/NavBarAuthenticated';
import { CheckAuthFromLocalStorage } from '@/helpers/auth';

export default function GeneralTemplate({ children }: { children: React.ReactNode }) {
  const Authenticated = CheckAuthFromLocalStorage();
  return (
    <>
      {Authenticated ? <NavBarAuthenticated /> : <NavBar />}
      {children}
      {!Authenticated && <HomeFooter />}
    </>
  );
}
