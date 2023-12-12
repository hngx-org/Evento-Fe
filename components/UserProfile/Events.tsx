import React, { useEffect, useState } from 'react';
import { GridIcon } from '@/public/assets/profile/icons';
import { ArrowDown2, ArrowUp2, RowVertical } from 'iconsax-react';
import Image from 'next/image';
import ListEventCard from './ListEventCard';
import GridEventCard from './GridEventCard';
import FilterModal from './FilterModal';
import { eventType } from '@/http/profileapi';
import FilterTray from './FilterTray';

interface EventProps {
  past: boolean;
  events: eventType[];
}
interface FilterItem {
  key: string;
  label: string;
  state: boolean;
}
type FilterObject = FilterItem[];

const Events: React.FC<EventProps> = ({ past, events }) => {
  const [listView, setListView] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterList, setFilterList] = useState<string[]>([]);

  const closeModal = (event: Event) => {
    const target = event.target as HTMLElement;
    // console.log(target);

    if (isModalOpen) {
      if (target.id === 'filterModal' || target.nodeName === 'INPUT' || target.nodeName === 'LABEL') {
        // console.log('filter clicked');
      } else {
        // console.log('close');
        setIsModalOpen(false);
      }
    }
  };

  useEffect(() => {
    const eventsDiv = document.querySelector('#events');

    if (eventsDiv) {
      // console.log('events');
      eventsDiv.addEventListener('click', closeModal);

      return () => {
        eventsDiv.removeEventListener('click', closeModal);
      };
    }
  }, [isModalOpen]);

  const openModal = () => {
    if (!isModalOpen) {
      // console.log('openModal');
      setIsModalOpen(true);
    }
  };
  console.log(events);

  return (
    <div
      className="w-full h-fit  md:p-4 lg:p-[32px] flex flex-col bg-white-100 gap-y-[32px] rounded-[12px]"
      id="events"
    >
      <div className="filterTop flex flex-col">
        <div className="flex justify-between ">
          <div className="flex font-bold gap-2 text-xl  items-center relative">
            Filter By
            <ArrowUp2
              size="16"
              color="#292d32"
              onClick={() => closeModal}
              className={`transition duration-[2000] ease-in-out transform hover:scale-110 hidden ${
                isModalOpen ? '!flex' : ''
              }`}
            />
            <ArrowDown2
              size="16"
              color="#292d32"
              onClick={openModal}
              className={`transition duration-[2000] ease-in-out transform hover:scale-110 hidden ${
                !isModalOpen ? '!flex' : ''
              }`}
            />
            <FilterModal
              originalFilterList={['Upcoming events', 'Past events', 'Private events', 'Public events']}
              filterObject={filterList}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              setFilterObject={setFilterList}
            />
          </div>

          <div className="flex">
            <div
              className={`w-[40px] h-[40px]  flex justify-center items-center rounded-[4px] ${
                listView ? 'bg-secondary-100' : ''
              } transition duration-1000`}
              onClick={() => {
                setListView(true);
              }}
            >
              <RowVertical color="#e0580c" />
            </div>
            <div
              className={`w-[40px] h-[40px]  flex justify-center items-center rounded-[4px] ${
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
        <FilterTray filterObject={filterList} setFilterObject={setFilterList} />
      </div>

      <div className="transition duration-1000">
        {listView ? (
          <div className="listView flex flex-col gap-8 transition duration-1000">
            {events.map((event, index) => (
              <ListEventCard key={index} event={event} past={past} />
            ))}
          </div>
        ) : (
          <div className="gridView w-full h-full grid md:grid-cols-2 gap-6 transition duration-1000">
            {' '}
            {events.map((event, index) => (
              <GridEventCard key={index} event={event} past={past} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
