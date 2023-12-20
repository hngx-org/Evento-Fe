import React, { useEffect, useState } from 'react';
import { GridIcon } from '@/public/assets/profile/icons';
import {
  ArrowDown2,
  ArrowRight,
  ArrowUp2,
  Camera,
  Location,
  Profile2User,
  RowVertical,
  Sagittarius,
  Zoom,
} from 'iconsax-react';
import Image from 'next/image';
import ListEventCard from './ListEventCard';
import GridEventCard from './GridEventCard';
import FilterModal from './FilterModal';
import { eventType, getUserId } from '@/http/profileapi';
import FilterTray from './FilterTray';
import Button from '../ui/NewButton';
import sample from '@/public/assets/profile/sample.svg';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  const userId = getUserId();

  const isSmallScreen = window.innerWidth < 768;

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
  // console.log(events);

  const handleNavigate = (eventId: string) => {
    if (userId === eventId) {
      router.push('/event-management');
    } else {
      router.push('/user-invite');
    }
  };

  return (
    <div className="px-4 py-8 w-full bg-white-100 rounded-lg">
      <div className={`flex flex-col gap-8`}>
        {events?.map((event, index) =>
          isSmallScreen ? (
            <GridEventCard event={event} key={index} past={past} />
          ) : (
            <ListEventCard event={event} key={index} past={past} />
          ),
        )}
      </div>
      {/* <div className="timeline" id="events">
        <div className="py-4 flex flex-col gap-8">
          {events?.map((event, index) => (
            <div
              key={index}
              className="bg-white-N0 shadow-sm w-[80%] h-fit px-4 py-2 rounded-lg flex justify-between container"
            >
              <div className="absolute -left-[102px]">
                <p>{new Date(event.startDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}</p>
                <p className="text-Grey-G200 text-sm">
                  {new Date(event.startDate).toLocaleDateString('en-US', { weekday: 'long' })}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-Grey-G200">
                  {new Date(event.startDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
                <h3 className="text-Grey-G700 font-bold text-lg">{event.title}</h3>
                <div className="flex items-center gap-2">
                  <Location size="16" color="#303030" />
                  <p className="text-Grey-G200">{event.location}</p>
                </div>
                {event.locationType === 'Physical' ? (
                  <div className="flex items-center gap-2">
                    <Profile2User size="16" color="#303030" />
                    <p className="text-Grey-G200">{event.participants ? event?.participants?.length : 0} Guests</p>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Camera size="16" color="#303030" />
                    <p className="text-Grey-G200">Zoom</p>
                  </div>
                )}

                <Button
                  className="bg-Grey-G600 text-Grey-G20 rounded-md h-10 px-3 text-sm font-bold mt-2"
                  onClick={() => handleNavigate(event.organizerID)}
                >
                  {userId === event.organizerID ? 'Manage Event' : 'Register'}{' '}
                  <span>
                    <ArrowRight size={16} color="#f5f5f5" />
                  </span>
                </Button>
              </div>
              <div className="shrink-0 w-[150px] h-[120px] rounded-lg">
                <Image src={sample} width={100} height={100} alt="" className="rounded-lg w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

{
  /* <div className="filterTop flex flex-col">
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
</div> */
}

{
  /* <div className="transition duration-1000">
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
</div> */
}

export default Events;
