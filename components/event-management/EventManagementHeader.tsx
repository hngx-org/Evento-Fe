import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const links = [
  {
    name: 'Event Overview',
    href: '/event-management/event-overview',
  },
  {
    name: 'Attendees',
    href: '/event-management/attendees',
  },
  {
    name: 'Share Invites',
    href: '/event-management/share-invites',
  },
];

export default function EventManagementHeader() {
  const pathname = usePathname();

  return (
    <div className="max-w-[1062px] w-full flex justify-between gap-1">
      {links?.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={`${
            pathname.toLowerCase() === item.href.toLowerCase()
              ? 'border-primary-100 text-Grey-G700'
              : 'text-Grey-G50 border-Grey-G50'
          } w-1/3 flex justify-center items-center text-center py-2 sm:py-4 sm:px-2 border-b-[3px] sm:text-lg font-semibold sm:font-bold`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
