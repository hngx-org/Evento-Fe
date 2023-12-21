import { participantType } from '@/http/profileapi';
import { Location, Timer1 } from 'iconsax-react';
import { Montserrat, Nunito } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { getStoredUserId } from '@/http/getToken';
import Link from 'next/link';

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
  id: string;
  imagePath: string;
  date: string;
  title: string;
  location: string;
  price: number | string;
  participants?: participantType[];
  time?: string;
  organizerId?: string;
}

function EventCard({ id, imagePath, date, title, location, price, participants, time, organizerId }: Props) {
  const userId = getStoredUserId();
  function convertDate(inputDate: string) {
    const dateObj = new Date(inputDate);
    const monthNamesAbbrev = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const year = dateObj.getFullYear();
    const dayAbbrev = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
    const monthAbbrev = monthNamesAbbrev[dateObj.getMonth()];
    const dayOfMonth = dateObj.getDate();
    return `${dayAbbrev}. ${monthAbbrev} ${dayOfMonth}${year !== new Date().getFullYear() ? `, ${year}` : ''}`;
  }

  function convertTime(time: string) {
    // Create a new Date object from the input string
    const dateObj = new Date(time);

    // Get the time in hours and minutes (e.g., 12:00)
    return dateObj.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  }

  return (
    <Link
      href={organizerId === userId ? '/event-management/' + id : '/user-invite/' + id}
      className={`block border border-Grey-G80/50 card-shadow rounded-lg hover:scale-[1.01]`}
    >
      <div className="relative w-full h-[180px] rounded-t-lg overflow-hidden">
        <Image src={imagePath} fill alt="Event Image" className="object-cover" />
      </div>
      <div className="p-4">
        <div className={`${nunito.className} flex justify-between items-center mb-1`}>
          <span className={`font-bold text-sm text-orange`}>{convertDate(date)}</span>
          <span className="text-primary-100 bg-secondary-100 rounded block px-3 py-1 capitalize">
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
          <span className={`${nunito.className} text-sm font-medium text-Grey-G90`}>
            {time ? convertTime(time) : '3:00 PM WAT'}
          </span>
        </p>
        <div className={`${montserrat.className} flex items-center`}>
          {participants?.length !== 0 && (
            <div className="flex items-center">
              {participants?.map((item, index) => {
                if (index >= 3) return;
                return (
                  <div key={index} className="h-8 w-8 first:ml-0 -ml-1.5 rounded-full overflow-hidden">
                    <Image
                      src={item?.profileImage ?? '/assets/avatar.png'}
                      height={32}
                      width={32}
                      alt="Attendant"
                      className="object-top object-cover"
                    />
                  </div>
                );
              })}
              <span className={`${nunito.className} pl-3 text-sm font-medium`}>
                +{participants?.length} People registered
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
