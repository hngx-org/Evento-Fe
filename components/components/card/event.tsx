import { Location, Timer, Timer1 } from 'iconsax-react';
import { Montserrat, Nunito } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react';

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

interface Props {
  imagePath: string;
  date: string;
  title: string;
  location: string;
  price: number | string;
  tag?: string;
  tag_image?: string;
}

function EventCard({ imagePath, date, title, location, price, tag, tag_image }: Props) {
  const [images] = useState(['/assets/attend3.jpg', '/assets/attend1.jpg', '/assets/attend2.jpg']);
  return (
    <div className={`border border-Grey-G80/50 card-shadow rounded-lg`}>
      <div className="relative w-full h-[180px] rounded-t-lg overflow-hidden">
        <Image src={imagePath} fill alt="Event Image" className="object-cover" />
      </div>
      <div className="p-4">
        <div className={`${nunito.className} flex justify-between items-center mb-1`}>
          <span className={`font-bold text-sm text-orange`}>Mon. Oct 30</span>
          <span className="text-primary-100 bg-secondary-100 rounded block px-3 py-1">
            {price !== 'free' && '$'}
            {price}
          </span>
        </div>
        <h2
          className={`${montserrat.className} text-Grey-G800 text-lg whitespace-nowrap overflow-hidden text-ellipsis sm:text-xl font-bold pt-1 pb-2`}
        >
          {title}
        </h2>
        <p className={`${nunito.className} text-Grey-G500 text-sm flex items-center gap-0.5 mb-1`}>
          <Location color="#303030" size={16} />
          <span className={`${nunito.className} font-medium text-Grey-G90`}>{location}</span>
        </p>
        <p className={`${nunito.className} text-Grey-G500 flex items-center gap-0.5 mb-2`}>
          <Timer1 size={16} color="#303030" />
          <span className={`${nunito.className} text-sm font-medium text-Grey-G90`}>3:00PM WAT</span>
        </p>
        <div className={`${montserrat.className} flex items-center`}>
          <div className="flex items-center">
            {images.map((item, index) => {
              return (
                <div key={index} className="h-8 w-8 first:ml-0 -ml-1.5 rounded-full overflow-hidden">
                  <Image src={item} height={32} width={32} alt="Attendant" className="object-top object-cover" />
                </div>
              );
            })}
            <span className={`${nunito.className} pl-3 text-sm font-medium`}>+32 People registered</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
