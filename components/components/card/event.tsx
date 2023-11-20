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
    <div className={`border border-Grey-G20 p-4 pb-6 rounded-lg`}>
      <div className="relative w-full aspect-[367/272] rounded-lg overflow-hidden mb-7">
        <Image src={imagePath} fill alt="Event Image" className="object-cover" />
        <div className="h-full w-full bg-black-main/50 absolute top-0 left-0 p-4">
          {tag_image && (
            <span className="flex items-center px-4 font-bold gap-2 tracking-[-0.5px] py-1 bg-black-main/40 w-fit rounded-full p-2 text-white-100">
              <Image src={tag_image} height={24} width={24} alt="Tag Icon" />
              <span className={nunito.className}>{tag}</span>
            </span>
          )}
        </div>
      </div>
      <span className={`${nunito.className} font-medium text-sm text-Grey-G90`}>{date}</span>
      <h2 className={`${montserrat.className} text-Grey-G800 text-xl font-bold pt-1 pb-3`}>{title}</h2>
      <p className={`${nunito.className} text-Grey-G500 flex items-center gap-0.5 mb-4`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 13.4299C13.7231 13.4299 15.12 12.0331 15.12 10.3099C15.12 8.58681 13.7231 7.18994 12 7.18994C10.2769 7.18994 8.88 8.58681 8.88 10.3099C8.88 12.0331 10.2769 13.4299 12 13.4299Z"
            stroke="#E0580C"
            strokeWidth="1.5"
          />
          <path
            d="M3.62 8.49C5.59 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39 20.54C5.63 17.88 2.47 13.57 3.62 8.49Z"
            stroke="#E0580C"
            strokeWidth="1.5"
          />
        </svg>
        <span className={`${nunito.className} font-medium text-gray-500`}></span>
        {location}
      </p>
      <div className={`${montserrat.className} flex items-center`}>
        <div className="flex items-center">
          {images.map((item, index) => {
            return (
              <div key={index} className="h-9 w-9 -ml-1.5 border-2 border-Grey-G40 rounded-full overflow-hidden">
                <Image src={item} height={36} width={36} alt="Attendant" className="object-top object-cover" />
              </div>
            );
          })}
          <div className="h-9 w-9 rounded-full grid place-content-center font-semibold -ml-1.5 text-sm bg-primary-100 text-white-100 border-2 border-Grey-G40">
            53+
          </div>
        </div>
        <span className="text-Grey-G800 text-xl font-bold ml-auto capitalize">
          {price !== 'free' && '$'}
          {price}
        </span>
      </div>
    </div>
  );
}

export default EventCard;
