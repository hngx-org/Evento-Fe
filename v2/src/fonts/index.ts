import { Nunito, Montserrat, Chelsea_Market, Work_Sans } from 'next/font/google';

export const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const chelsea = Chelsea_Market({
  subsets: ['latin'],
  variable: '--font-chelsea_market',
  weight: ['400'],
});

export const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});
