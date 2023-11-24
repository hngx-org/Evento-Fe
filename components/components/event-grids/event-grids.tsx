import React from 'react';
import EventCard from '../card/event';
import Button from '@/components/ui/NewButton';

function EventGrids({ events, title }: { title?: string; events: any[] }) {
  return (
    <div className="max-w-[1240px] mx-auto mb-10 lg:mb-24">
      <span className="text-Grey-G80">Discover</span>
      <h2 className="text-3xl font-bold mb-6 mt-2 text-Grey-G700">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 lg:gap-x-7 lg:gap-y-8 mb-8 sm:mb-12">
        {events.map((item) => {
          return (
            <EventCard
              key={item.id}
              imagePath={item.banner}
              date={item.date}
              title={item.title}
              location={item.location}
              price={item.price}
              tag={item?.tag}
              tag_image={item?.tag_image}
            />
          );
        })}
      </div>
      <Button
        intent={'secondary'}
        size={'lg'}
        className={`text-sm shrink-0 border-primary-100 border font-bold text-primary-100 rounded-lg block mx-auto`}
      >
        View More
      </Button>
    </div>
  );
}

export default EventGrids;
