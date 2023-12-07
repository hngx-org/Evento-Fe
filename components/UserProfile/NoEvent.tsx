import { CalendarIcon } from '@/public/assets/profile/icons';
import React from 'react';
import Button from '../ui/Button';
import { Montserrat, Nunito } from 'next/font/google';
import { useRouter } from 'next/router';

interface NoEventProps {
  type: string;
}
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

const NoEvent: React.FC<NoEventProps> = ({ type }) => {
  const router = useRouter();

  return (
    <div
      className={` ${nunito.className} event bg-white-100 flex flex-col justify-center items-center w-full h-fit p-[64px] gap-y-4 rounded-[12px]`}
    >
      <div className="rounded-[50%] w-[160px] h-[160px] bg-secondary-100 flex justify-center items-center">
        <CalendarIcon />
      </div>
      <h4
        className={` ${montserrat.className} text-base lg:text-2xl max-w-[230px] md:max-w-none font-semibold  text-center`}
      >
        Hey there! 👋 It seems like this corner is a bit quiet
      </h4>
      {type === '' ? (
        <p className="text-sm lg:text-base text-[#767676] max-w-[220px] md:max-w-none text-center">
          Click the{' '}
          <span className="font-bold text-primary-100 cursor-pointer" onClick={() => router.push('/create-events')}>
            create event
          </span>{' '}
          or explore{' '}
          <span className="font-bold text-primary-100 cursor-pointer" onClick={() => router.push('/explore')}>
            event button
          </span>{' '}
          to get started
        </p>
      ) : (
        <>
          {' '}
          <p className="text-sm lg:text-base text-[#767676] max-w-[220px] md:max-w-none text-center">
            {type === 'create' ? (
              <span>Click the create event button to start creating events</span>
            ) : (
              <span>Click the explore button to see want kinds of events you can attend</span>
            )}
          </p>
          <Button
            handleClick={() => {
              if (type === 'create') {
                router.push('/create-events');
              } else {
                router.push('/explore');
              }
            }}
            styles={'text-white-100 py-2 px-3'}
            type={'button'}
            title={'event button'}
            disabled={false}
          >
            {type === 'create' ? <span>Create Event</span> : <span>Explore</span>}
          </Button>
        </>
      )}
    </div>
  );
};

export default NoEvent;
