import React from 'react';
import AuthenticatedHeader from '@/components/components/authenticatedheader';
import { Work_Sans, Nunito, Montserrat } from 'next/font/google';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`${workSans.variable} ${nunito.variable} ${montserrat.variable}`}>
      <AuthenticatedHeader />
      {children}
    </main>
  );
}
