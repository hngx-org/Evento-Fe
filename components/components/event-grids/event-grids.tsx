import React, { useState } from 'react';
import EventCard from '../card/event';
import Button from '@/components/ui/NewButton';
import { EventsProps } from '@/@types';

function EventGrids({ events, title, isLoading }: { title?: string; events: EventsProps[]; isLoading: boolean }) {
  const [limit, setLimit] = useState<number>(5);

  events.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getDate());

  return (
    <div className="max-w-[1240px] mx-auto mb-10 lg:mb-24">
      <span className="text-Grey-G80">Discover</span>
      <h2 className="text-3xl font-bold mb-6 mt-2 text-Grey-G700">{title}</h2>
      {isLoading || events.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 lg:gap-x-7 lg:gap-y-8 mb-8 sm:mb-12">
          {!isLoading ? (
            <>
              {events
                .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
                .map((item, index) => {
                  if (index > limit) return;
                  return (
                    <EventCard
                      key={item.eventID}
                      id={item.eventID}
                      imagePath={
                        item.imageURL === 'https://example.com/image.jpg' ? '/assets/default-banner.jpg' : item.imageURL
                      }
                      date={item.startDate}
                      title={item.title}
                      location={item.location}
                      price={item?.entranceFee ?? 'free'}
                      participants={item.participants}
                      time={item.time}
                      organizerId={item?.organizerID}
                    />
                  );
                })}
            </>
          ) : (
            <div className="grid place-content-center sm:col-span-2 lg:col-span-3 py-10 w-full">
              <div className="h-14 w-14 rounded-full border-4 border-gray-700 border-t-primary-100 animate-spin" />
            </div>
          )}
        </div>
      ) : (
        <div className="py-16">
          <p className="text-center text-3xl font-bold">No event found for this tag</p>
        </div>
      )}
      {limit < events.length && (
        <Button
          intent={'secondary'}
          size={'lg'}
          className={`text-sm shrink-0 border-primary-100 border grid place-content-center font-bold text-primary-100 rounded-lg mx-auto`}
          onClick={() => setLimit((prevState) => prevState + 6)}
        >
          View More
        </Button>
      )}
    </div>
  );
}

export default EventGrids;
