import React from 'react';
import Image from 'next/image';
import sampleImage from '@/public/assets/profile/imageCard.svg';

import { Global, Location, Timer1 } from 'iconsax-react';
import avatars from '@/public/assets/profile/avatars.svg';
import { Montserrat } from 'next/font/google';
import { eventType, getUserId } from '@/http/profileapi';
import { useRouter } from 'next/router';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});
export type EventCardProps = {
  event: eventType;

  past: boolean;
};

export function convertDateFormat(inputDateTime: string, part: 'date' | 'time') {
  const originalDateTime = new Date(inputDateTime);

  if (part === 'date') {
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    return originalDateTime.toLocaleDateString('en-US', options);
  } else if (part === 'time') {
    const options: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZone: 'Africa/Lagos',
    };
    return originalDateTime.toLocaleTimeString('en-US', options);
  }

  return '';
}

export const eventPaticipants = (event: eventType) => {
  if (event.participants) {
    let eventPart = '';
    if (event.participants.length > 0) {
      eventPart = '+' + event.participants.length + ' People registered';
      return eventPart;
    } else {
      eventPart = 'Nobody has registered';
      return eventPart;
    }
  }
};

const ListEventCard: React.FC<EventCardProps> = ({ event, past }) => {
  const router = useRouter();
  // console.log(past, event);
  const handleCardClick = () => {
    const userId = getUserId();
    if (event.organizerID === userId) {
      router.push(`event-management`);
    } else router.push(`/user-invite`);
  };
  return (
    <div
      className="w-full h-[140px] md:h-[196px] rounded-l-lg lg:rounded-2xl overflow-hidden flex bg-[#FEFEFE]  shadow-md cursor-pointer hover:scale-[1.01] "
      onClick={() => {
        handleCardClick();
      }}
    >
      <Image
        src={sampleImage}
        alt={''}
        className={` w-[180px] md:w-[285px] lg:w-[300px]  object-cover ${past ? 'grayscale' : ''}`}
      />

      <div className="w-full p-2 md:p-4 flex flex-col gap-y-4">
        {past}
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center justify-between text-primary-100 text-sm lg:text-base font-normal  ">
            <span className="font-medium">{event.startDate && convertDateFormat(event.startDate, 'date')}</span>
            <span className="px-3 py-1 bg-secondary-100 rounded-[4px]">
              {event.entranceFee ? `$` + event.entranceFee : 'Free'}
            </span>
          </div>

          <h6 className={` ${montserrat.className} text-base md:text-xl lg:text-2xl font-bold whitespace-nowrap `}>
            {event.title}{' '}
          </h6>

          <div className="font-medium text-sm text-[#868686] flex flex-col gap-y-2">
            <div className="flex gap-x-2 items-center">
              <Location size="16" color="#303030" />

              <span className="">{event.location}</span>
            </div>
            <div className="flex gap-x-2 items-center">
              <Timer1 size="16" color="#303030" />

              <span className="">{event.startDate && convertDateFormat(event.startDate, 'time')}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="hidden gap-x-2 text-[#3C3C3C] text-xs font-medium items-center w-fit md:flex">
            {event.participants && event.participants?.length > 0 ? <Image src={avatars} alt={''} /> : ''}
            <span className="md:flex hidden text-[10px] lg:text-base"> {eventPaticipants(event)}</span>
          </div>

          {/* <div className="hidden lg:flex gap-x-1 items-center text-xs text-[#868686] font-medium">
            <Global size="12" color="#303030" /> Public
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ListEventCard;
