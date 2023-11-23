import React from 'react';
import Checkbox from '../Checkbox';

const notifications = [
  {
    id: 'personal',
    name: 'Personal',
    items: [
      {
        id: 1,
        name: 'Subscribe to your calendar',
        group: 'personal',
      },
      {
        id: 2,
        name: 'Register for your event',
        group: 'personal',
      },
      {
        id: 3,
        name: 'Invited to an event',
        group: 'personal',
      },
      {
        id: 4,
        name: 'Event turn-up performance',
        group: 'personal',
      },
      {
        id: 5,
        name: 'Alters an event registered for',
        group: 'personal',
      },
      {
        id: 6,
        name: 'Eclips Newsletter & Other Updates',
        group: 'personal',
      },
    ],
  },
  {
    id: 'subscription',
    name: 'Subscribed To',
    items: [
      {
        id: 1,
        name: 'Post event',
        group: 'subscription',
      },
      {
        id: 2,
        name: 'Register for an event',
        group: 'subscription',
      },
      {
        id: 3,
        name: 'Subscribes to a calendar',
        group: 'subscription',
      },
      {
        id: 4,
        name: 'Alters an event registered for',
        group: 'subscription',
      },
    ],
  },
  {
    id: 'recommend',
    name: 'Recommend',
    items: [
      {
        id: 1,
        name: 'Events we think you will like',
        group: 'recommend',
      },
      {
        id: 2,
        name: 'Events near your location',
        group: 'recommend',
      },
      {
        id: 3,
        name: 'New events from people with whom you have previously attended their events',
        group: 'recommend',
      },
      {
        id: 4,
        name: 'New events in niches you have registered for previously',
        group: 'recommend',
      },
    ],
  },
];

function Notification() {
  return (
    <div className="mt-8 flex flex-col gap-20">
      {notifications.map((notification) => (
        <div key={notification.name} className="flex flex-col gap-10">
          <div className={`flex justify-between items-center`}>
            <h3 className="text-[#222] text-xl font-medium">{notification.name}</h3>
            <div className="flex items-center gap-[3.31rem]">
              <p className="text-Grey-G700 w-[3.2rem]">In-app</p>
              <p className="text-Grey-G700 w-[2.7rem]">Email</p>
              <p className="text-Grey-G700 w-[2.4rem]">Push</p>
            </div>
          </div>
          {notification.items.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <h4 className="w-[55%]">{item.name}</h4>
              {/* checkboxes */}
              <div className="flex gap-[3.31rem]">
                {/* in-app */}
                <div className="w-[3.2rem] flex justify-center">
                  <Checkbox />
                </div>
                {/* email */}
                <div className="w-[2.7rem] flex justify-center">
                  <Checkbox />
                </div>
                {/* push */}
                <div className="w-[2.4rem] flex justify-center">
                  <Checkbox />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Notification;
