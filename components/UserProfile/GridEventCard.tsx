import Image from 'next/image';
import sampleImage from '@/public/assets/profile/imageCard.svg';
import React from 'react';
import { Global, Location, Timer1, ArrowRight } from 'iconsax-react';
import avatars from '@/public/assets/profile/avatars.svg';
import { Montserrat } from 'next/font/google';
import { EventCardProps, convertDateFormat, eventPaticipants } from './ListEventCard';
import { useRouter } from 'next/router';
import { getUserId } from '@/http/profileapi';
import { getStoredUserId } from '@/http/getToken';
import Button from '@ui/NewButton';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const GridEventCard: React.FC<EventCardProps> = ({ event, past }) => {
  const router = useRouter();
  const handleCardClick = () => {
    const userId = getUserId();
    if (event.organizerID === userId) {
      router.push(`event-management/${event.eventID}`);
      // router.push(`/event-management/participants/${event.eventID}`);
    } else {
      router.push(`/user-invite/${event.eventID}`);

      // router.push(`/event-management/participants/${event.eventID}`);
    }
  };

  const userId = getStoredUserId();

  const handleNavigate = (eventId: string) => {
    const userId = getUserId();
    if (userId === eventId) {
      router.push(`/event-management/${event.eventID}`);
    } else {
      router.push(`/user-invite/${event.eventID}`);
    }
  };

  const buttonClass = `rounded-md h-10 px-3 text-sm px-4 font-bold mt-2 ${
    userId === event.organizerID ? 'bg-Grey-G600' : 'bg-Success-S400'
  }`;

  const buttonText = userId === event.organizerID ? 'Manage Event' : 'Registered';

  const iconClasses = `${userId === event.organizerID ? 'block' : 'hidden'}`;

  return (
    <div
      className="w-[326px]  max-w-[100%] md:w-[296px] md:max-w-none lg:w-[370px] 2xl:w-[405px] rounded-2xl bg-[#FEFEFE] overflow-hidden  shadow-md cursor-pointer hover:scale-[1.01] flex flex-col flex-shrink-0"
      onClick={() => {
        handleCardClick();
      }}
    >
      {
        <Image
          src={event.imageURL ? event.imageURL : sampleImage}
          alt={''}
          width={100}
          height={100}
          className={`w-full h-[180px] object-cover ${past ? 'grayscale' : ''} `}
        />
      }

      {/* item.imageURL === 'https://example.com/image.jpg' ? '/assets/default-banner.jpg' : item.imageURL */}

      <div className="w-full p-4 flex flex-col gap-y-4 ">
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center justify-between text-primary-100 text-sm lg:text-base font-normal ">
            <span className="">{event.startDate && convertDateFormat(event.startDate, 'date')}</span>
            <span className="px-3 py-1 bg-secondary-100"> {event.entranceFee ? `$` + event.entranceFee : 'Free'}</span>
          </div>

          <h6 className={` ${montserrat.className}  text-xl lg:text-2xl font-semibold line-clamp-2 md:line-clamp-1 `}>
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
          {/* <div className="flex gap-x-2 text-[#3C3C3C] text-xs font-medium items-center w-fit min-h-[32px]">
            {event.participants && event.participants?.length > 0 ? <Image src={avatars} alt={''} /> : ''}
            <span className="md:flex hidden text-[10px] lg:text-base"> {eventPaticipants(event)}</span>
          </div> */}

          <Button className={buttonClass} onClick={() => handleNavigate(event.organizerID)}>
            {buttonText}{' '}
            <span className={iconClasses}>
              <ArrowRight size={16} color="#f5f5f5" />
            </span>
          </Button>

          {/* <div className="hidden lg:flex gap-x-1 items-center text-xs text-[#868686] font-medium">
            <Global size="12" color="#303030" /> Public
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default GridEventCard;
