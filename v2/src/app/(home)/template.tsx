import React from 'react';
import HomeFooter from '@/components/home/Footer';
import NavBar from '@/components/home/NavBar';
import NavBarAuthenticated from '@/components/Header/NavBarAuthenticated';
import { cookies } from 'next/headers';

export default function GeneralTemplate({ children }: { children: React.ReactNode }) {
  const isLoggedin = cookies().has('access_token');
  console.log('LOGGED IN?: ', isLoggedin);
  return (
    <>
      {isLoggedin ? <NavBarAuthenticated /> : <NavBar />}
      {children}
      {!isLoggedin && <HomeFooter />}
    </>
  );
}
