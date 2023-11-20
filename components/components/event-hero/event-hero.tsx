import ExploreNav from '@/components/Explore/Explorenav';
import { Montserrat, Nunito } from 'next/font/google';
import React from 'react';

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

function EventHero({ banner, label, title }: { banner: string; label: string; title: string }) {
  return (
    <div style={{ backgroundImage: `url('/assets/${banner}')` }}>
      <ExploreNav />
      <div className="font-bold text-white-100 text-center flex flex-col items-center pt-12 pb-20">
        <span
          className={`${nunito.className} text-lg mb-5 tracking-[-0.5px] block px-4 py-1 bg-black-main/40 rounded-full w-fit`}
        >
          {label}
        </span>
        <h3 className={`${montserrat.className} text-5xl`}>{title}</h3>
      </div>
    </div>
  );
}

export default EventHero;
