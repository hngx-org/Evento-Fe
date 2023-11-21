import React from 'react';
import EventCard from '../card/event';

function EventGrids({ events }: { events: any[] }) {
  return (
    <div className="max-w-[1240px] mx-auto">
      <div className="grid grid-cols-3 gap-x-7 gap-y-8 mb-32">
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
      <ul className="flex items-center text-sm w-fit ml-auto font-medium text-Grey-G300">
        <li className="">
          <button className="py-2 px-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.7073 12.2933C11.0982 12.6842 11.0982 13.3162 10.7073 13.7072C10.3163 14.0982 9.68425 14.0982 9.29325 13.7072L4.29325 8.70725C3.90225 8.31625 3.90225 7.68425 4.29325 7.29325L9.29325 2.29325C9.68425 1.90225 10.3163 1.90225 10.7073 2.29325C11.0982 2.68425 11.0982 3.31625 10.7073 3.70725L6.41425 8.00025L10.7073 12.2933Z"
                fill="#1E1E1E"
              />
            </svg>
          </button>
        </li>
        <li>
          <button className="rounded bg-Warnings-W300 text-white-100 py-2 px-3">1</button>
        </li>
        <li>
          <button className="py-2 px-3">2</button>
        </li>
        <li>
          <button className="py-2 px-3">3</button>
        </li>
        <li>
          <button className="py-2 px-3">...</button>
        </li>
        <li>
          <button className="py-2 px-3">10</button>
        </li>
        <li>
          <button className="py-2 px-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.29324 12.2933C3.90224 12.6842 3.90224 13.3162 4.29324 13.7072C4.68424 14.0982 5.31624 14.0982 5.70724 13.7072L10.7072 8.70725C11.0982 8.31625 11.0982 7.68425 10.7072 7.29325L5.70724 2.29325C5.31624 1.90225 4.68424 1.90225 4.29324 2.29325C3.90224 2.68425 3.90224 3.31625 4.29324 3.70725L8.58624 8.00025L4.29324 12.2933Z"
                fill="#1E1E1E"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default EventGrids;
