'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { EventProps } from '@/types';
import { useUserCtx } from '@/context/UserCtx';
import { Location, Timer1 } from 'iconsax-react';
import { convertUTCtoLocalTime } from '@/utils';
import { useExploreCtx } from '@/context/ExploreCtx';

const ExploreCard = ({
  imageURL,
  eventID,
  startDate,
  organizerID,
  tickets,
  participants,
  location,
  title,
}: EventProps) => {
  const [weekday, monthDay] = convertUTCtoLocalTime(startDate!);
  const [, , , time] = convertUTCtoLocalTime(startDate!);
  const { eventsSearchTerm } = useExploreCtx();
  const { user } = useUserCtx();

  return (
    <>
      <Link
        href={organizerID === user.userID ? `/event-management/?eventid=${eventID}` : `/event/?eventid=${eventID}`}
        className="block border border-Grey-G80/50 dark:border-dark-two card-shadow rounded-lg hover:scale-[1.01]"
      >
        <div className="relative w-full h-[180px] rounded-t-lg overflow-hidden">
          <Image src={imageURL!} fill alt="Event Image" className="object-cover" />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-1 font-nunito">
            <span className="font-bold text-sm text-primary-100 dark:text-dark-two ">
              {weekday}, {monthDay}
            </span>
            {tickets?.map((ticket) => (
              <div key={ticket.ticketID}>
                <span className="text-primary-100 bg-secondary-100 dark:bg-dark-two dark:text-dark-one rounded block px-3 py-1 capitalize">
                  {ticket.ticketType === 'Free' ? 'Free' : `$${ticket.ticketPrice}`}
                </span>
              </div>
            ))}
          </div>
          <h2 className="text-Grey-G800 dark:text-dark-two text-lg whitespace-nowrap overflow-hidden text-ellipsis sm:text-xl font-bold pt-1 pb-2 font-montserrat">
            {/* {title!} */}
            <strong>
              <span
                dangerouslySetInnerHTML={{
                  __html: title!.replace(
                    new RegExp(`(${eventsSearchTerm})`, 'gi'),
                    (match, group) =>
                      `<span style="color: black; background-color: ${
                        group.toLowerCase() === eventsSearchTerm.toLowerCase() ? 'yellow' : 'inherit'
                      }">${match}</span>`,
                  ),
                }}
              />
            </strong>
          </h2>
          <p className="text-Grey-G500 dark:text-dark-two text-sm flex items-center gap-0.5 mb-1 font-nunito">
            <Location size={16} />
            <span className="font-medium">{location!}</span>
          </p>
          <p className="text-Grey-G500 dark:text-dark-two flex items-center gap-0.5 mb-2 font-nunito">
            <Timer1 size={16} />
            <span className="font-medium">{time}</span>
          </p>
          <div className="flex items-center font-montserrat">
            {participants?.length !== 0 && (
              <div className="flex items-center">
                {participants?.map((item, index) => {
                  if (index >= 3) return;
                  return (
                    <div key={index} className="h-8 w-8 first:ml-0 -ml-1.5 rounded-full overflow-hidden">
                      <Image
                        src={item?.profileImage ?? '/assets/avatar.png'}
                        height={32}
                        width={32}
                        alt="Attendant"
                        className="object-top object-cover"
                      />
                    </div>
                  );
                })}
                {participants && participants?.length > 3 && (
                  <span className="pl-3 text-sm font-medium font-nunito">
                    +{participants?.length - 3} People registered
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default ExploreCard;
