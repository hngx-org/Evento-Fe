import React from 'react';
import EventManagementLayout from '@/layout/EventManagementLayout';
import Image from 'next/image';

const social = [
  {
    img: '/event-management/facebook.svg',
    name: 'Facebook',
    description: 'Share your event to your Facebook page and community ',
    link: '#',
  },
  {
    img: '/event-management/instagram.svg',
    name: 'Instagram',
    description: 'Go Instagram LIVE by sharing your post on your Instagram account',
    link: '#',
  },
  {
    img: '/event-management/x.svg',
    name: 'X',
    description: 'Create and share to your audience on X with one single tap',
    link: '',
  },
];

export default function index() {
  return (
    <EventManagementLayout>
      <div className="mt-20 max-w-[809px] w-full mx-auto p-20 rounded-2xl border border-Grey-G30 shadow bg-white-N0">
        <h1 className="text-[32px] font-bold text-Grey-G500">Share event link</h1>
        <p className="mt-4 text-Grey-G100">Share your invite link across different social media account</p>

        <div className="mt-16">
          {social?.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 justify-between py-8 pe-[11px] first:pt-0 border-b border-Grey-G40"
            >
              <div className="flex items-center gap-4">
                <Image src={item.img} width={40} height={40} alt={item.name} />
                <div>
                  <h4 className="font-medium text-Grey-G600">{item.name}</h4>
                  <p className="mt-[2px] text-sm text-Grey-G100">{item.description}</p>
                </div>
              </div>

              <button title="Share Event" type="button" className="">
                <Image src={'/event-management/send-2.svg'} width={24} height={24} alt="Share Event" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </EventManagementLayout>
  );
}
