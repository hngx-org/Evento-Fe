import React, { useEffect, useState } from 'react';
import { GridIcon } from '@/public/assets/profile/icons';
import { ArrowDown2, ArrowUp2, RowVertical } from 'iconsax-react';
import Image from 'next/image';
import ListEventCard from './ListEventCard';
import GridEventCard from './GridEventCard';
import FilterModal from './FilterModal';

interface EventProps {
  type: string;
}
interface FilterItem {
  key: string;
  label: string;
  state: boolean;
}
type FilterObject = FilterItem[];

const Filt: React.FC<EventProps> = ({}) => {
  return <div className="text-primary-100 bg-secondary-100 ">{'Past Event'}</div>;
};

const Events: React.FC<EventProps> = ({ type }) => {
  const [listView, setListView] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterObject, setFilterObject] = useState<FilterObject>([]);

  const closeModal = (event: Event) => {
    const target = event.target as HTMLElement;
    // console.log(target);

    if (isModalOpen) {
      if (target.id === 'filterModal' || target.nodeName === 'INPUT' || target.nodeName === 'LABEL') {
        console.log('filter clicked');
      } else {
        console.log('close');
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
      console.log('openModal');
      setIsModalOpen(true);
    }
  };

  return (
    <div className="w-full h-fit p-4 lg:p-[32px] flex flex-col bg-white-100 gap-y-[48px]" id="events">
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
            filterObject={[
              { key: 'upcomingEvents', state: false, label: 'Upcoming events' },
              { key: 'pastEvents', state: false, label: 'Past events' },
              { key: 'privateEvents', state: false, label: 'Private events' },
              { key: 'publicEvents', state: false, label: 'Public events' },
            ]}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
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
          <div className="listView flex flex-col gap-8 transition duration-1000">
            <ListEventCard />
            <ListEventCard /> <ListEventCard /> <ListEventCard /> <ListEventCard /> <ListEventCard />
          </div>
        ) : (
          <div className="gridView w-full h-full grid md:grid-cols-2 gap-6 transition duration-1000">
            <GridEventCard /> <GridEventCard /> <GridEventCard /> <GridEventCard /> <GridEventCard /> <GridEventCard />{' '}
            <GridEventCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
