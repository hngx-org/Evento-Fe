import React, { useState } from 'react';
import { GridIcon } from '@/public/assets/profile/icons';
import { ArrowDown2, RowVertical } from 'iconsax-react';
import Image from 'next/image';
import ListEventCard from './ListEventCard';
import GridEventCard from './GridEventCard';

interface EventProps {
  type: string;
}

const Events: React.FC<EventProps> = ({ type }) => {
  const [listView, setListView] = useState(true);

  return (
    <div className="w-full h-fit p-[32px] flex flex-col bg-white-100 gap-y-[48px]">
      <div className="flex justify-between ">
        <div className="flex gap-2 text-xl font-semibold items-center">
          Filter By <ArrowDown2 size="16" color="#292d32" />{' '}
        </div>
        <div className="flex">
          <div
            className={`w-[40px] h-[40px]  flex justify-center items-center ${
              listView ? 'bg-secondary-100' : ''
            } transition duration-1000`}
            onClick={() => {
              setListView(true);
            }}
          >
            <RowVertical color="#e0580c" />
          </div>
          <div
            className={`w-[40px] h-[40px]  flex justify-center items-center ${
              !listView ? 'bg-secondary-100' : ''
            } transition `}
            onClick={() => {
              setListView(false);
            }}
          >
            <GridIcon />
          </div>
        </div>
      </div>

      <div className="transition duration-1000">
        {listView ? (
          <div className="listView flex flex-col gap-6 transition duration-1000">
            <ListEventCard />
            <ListEventCard /> <ListEventCard /> <ListEventCard /> <ListEventCard /> <ListEventCard />
          </div>
        ) : (
          <div className="gridView w-full h-full grid grid-cols-2 gap-6 transition duration-1000">
            <GridEventCard /> <GridEventCard /> <GridEventCard /> <GridEventCard /> <GridEventCard /> <GridEventCard />{' '}
            <GridEventCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
