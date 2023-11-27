import { CalendarIcon } from '@/public/assets/profile/icons';
import React from 'react';
import Button from '../ui/Button';

interface NoEventProps {
  type: string;
}

const NoEvent: React.FC<NoEventProps> = ({ type }) => {
  return (
    <div className="event bg-white-100 flex flex-col justify-center items-center w-full h-fit p-[64px] gap-y-4 ">
      <div className="rounded-[50%] w-[160px] h-[160px] bg-secondary-100 flex justify-center items-center">
        <CalendarIcon />
      </div>
      <h4 className=" text-base lg:text-2xl max-w-[230px] md:max-w-none font-semibold  text-center">
        Hey there! 👋 It seems like this corner is a bit quiet
      </h4>
      <p className="text-sm lg:text-base max-w-[220px] md:max-w-none text-center">
        Click the create event button to start creating events
      </p>
      <Button
        handleClick={() => {}}
        styles={'text-white-100 py-2 px-3'}
        type={'button'}
        title={'event button'}
        disabled={true}
      >
        {type === 'create' ? <span>Create Event</span> : <span>Explore</span>}
      </Button>
    </div>
  );
};

export default NoEvent;
