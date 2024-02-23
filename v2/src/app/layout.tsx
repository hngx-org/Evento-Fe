import type { Metadata } from 'next';
import '../styles/globals.scss';
import { nunito, montserrat, workSans, chelsea } from '../fonts';
import { AuthContextProvider } from '@/context/AuthContext';
import ThemeProvider from '@/context/ThemeCtx';
import Theme from '@/components/ThemeButton';
import StateCtxProvider from '@/context/StateCtx';
import { SessionProvider } from 'next-auth/react';
import UserContextProvider from '@/context/UserCtx';

export const metadata: Metadata = {
  title: 'Evento',
  description: 'Event Managemnt Application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} ${montserrat.variable} ${workSans.variable} ${chelsea.variable} dark:bg-dark-one snap-mandatory `}
      >
        <ThemeProvider>
          <SessionProvider>
            <UserContextProvider>
              <StateCtxProvider>
                <AuthContextProvider>
                  {children}
                  <Theme />
                </AuthContextProvider>
              </StateCtxProvider>
            </UserContextProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
