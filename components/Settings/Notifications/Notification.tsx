import React, { useEffect, useState } from 'react';
import Checkbox from '../Checkbox';
import Button from '@/components/ui/Button';
import { getNotificationsPreferences, updateNotificationsPreferences } from '@/http/settingsapi';
import { useRouter } from 'next/router';

const notifications = [
  {
    id: 'personal',
    name: 'Personal',
    items: [
      {
        id: 1,
        slug: 'event_registration',
        name: 'Register for your event',
        group: 'personal',
      },
      {
        id: 2,
        slug: 'event_invite',
        name: 'Invited to an event',
        group: 'personal',
      },
      {
        id: 3,
        slug: '',
        name: 'Event turn-up performance',
        group: 'personal',
      },
      {
        id: 4,
        slug: 'event_change',
        name: 'Alters an event registered for',
        group: 'personal',
      },
      {
        id: 5,
        slug: 'newsletter',
        name: 'Evento Newsletter & Other Updates',
        group: 'personal',
      },
    ],
  },
  // {
  //   id: 'subscription',
  //   name: 'Subscribed To',
  //   items: [
  //     {
  //       id: 1,
  //       name: 'Post event',
  //       group: 'subscription',
  //     },
  //     {
  //       id: 2,
  //       name: 'Register for an event',
  //       group: 'subscription',
  //     },
  //     {
  //       id: 3,
  //       name: 'Subscribes to a calendar',
  //       group: 'subscription',
  //     },
  //     {
  //       id: 4,
  //       name: 'Alters an event registered for',
  //       group: 'subscription',
  //     },
  //   ],
  // },
  {
    id: 'recommend',
    name: 'Recommend',
    items: [
      {
        id: 1,
        name: 'Events we think you will like',
        slug: '',
        group: 'recommend',
      },
      {
        id: 2,
        name: 'Events near your location',
        slug: '',
        group: 'recommend',
      },
      {
        id: 3,
        name: 'New events from people with whom you have previously attended their events',
        slug: '',
        group: 'recommend',
      },
      {
        id: 4,
        name: 'New events in niches you have registered for previously',
        slug: '',
        group: 'recommend',
      },
    ],
  },
];

function Notification() {
  const [preferences, setPreferences] = useState({
    newsletter: {
      inApp: false,
      email: false,
      push: false,
    },
    event_registration: {
      inApp: false,
      email: false,
      push: false,
    },
    event_invite: {
      inApp: false,
      email: false,
      push: false,
    },
    join_event: {
      inApp: false,
      email: false,
      push: false,
    },
    event_change: {
      inApp: false,
      email: false,
      push: false,
    },
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getNotificationsPreferences(setPreferences);
  }, []);

  const router = useRouter();

  // useEffect(() => {
  //   const handleBeforePopState = () => {
  //     console.log('running');
  //     updateNotificationsPreferences(preferences, setLoading);
  //     return true;
  //   };

  //   router.beforePopState(handleBeforePopState);

  //   return () => {

  //   };
  // }, []);

  return (
    <div className="mt-1 lg:mt-8 flex flex-col gap-14 md:gap-20">
      {notifications.map((notification) => (
        <div key={notification.name} className="flex flex-col gap-6 md:gap-10">
          <div className={`flex justify-between items-center`}>
            <h3 className="text-[#222] text-xl font-medium">{notification.name}</h3>
            <div className="hidden md:flex items-center gap-[3.31rem]">
              <p className="text-Grey-G700 w-[3.2rem]">In-app</p>
              <p className="text-Grey-G700 w-[2.7rem]">Email</p>
              <p className="text-Grey-G700 w-[2.4rem]">Push</p>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            {notification.items.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row gap-6 justify-between md:items-center">
                <h4 className="md:w-[55%] text-Grey-G600">{item.name}</h4>
                {/* checkboxes */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-[3.31rem]">
                  {/* in-app */}
                  <div className="flex items-center gap-4">
                    <div className="md:hidden text-base font-normal text-Grey-G700 w-[3.2rem]">In-app</div>
                    <div className="w-fit md:w-[3.2rem] flex justify-center">
                      <Checkbox
                        handleClick={() =>
                          setPreferences((prev) => {
                            if (item.slug) {
                              return {
                                ...prev,
                                [item.slug]: {
                                  ...prev[item.slug as keyof typeof preferences],
                                  inApp: prev[item.slug as keyof typeof preferences].inApp ? false : true,
                                },
                              };
                            } else {
                              return prev;
                            }
                          })
                        }
                        enabled={preferences[item?.slug as keyof typeof preferences]?.inApp}
                        slug={item.slug}
                      />
                    </div>
                  </div>
                  {/* email */}
                  <div className="flex items-center gap-4">
                    <div className="md:hidden text-base font-normal text-Grey-G700 w-[3.2rem]">Email</div>
                    <div className="w-fit md:w-[2.7rem] flex justify-center">
                      <Checkbox
                        handleClick={() =>
                          setPreferences((prev) => {
                            if (item.slug) {
                              return {
                                ...prev,
                                [item.slug]: {
                                  ...prev[item.slug as keyof typeof preferences],
                                  email: prev[item.slug as keyof typeof preferences].email ? false : true,
                                },
                              };
                            } else {
                              return prev;
                            }
                          })
                        }
                        enabled={preferences[item?.slug as keyof typeof preferences]?.email}
                        slug={item.slug}
                      />
                    </div>
                  </div>
                  {/* push */}
                  <div className="flex items-center gap-4">
                    <div className="md:hidden text-base font-normal text-Grey-G700 w-[3.2rem]">Push</div>
                    <div className="w-fit md:w-[2.4rem] flex justify-center">
                      <Checkbox
                        handleClick={() =>
                          setPreferences((prev) => {
                            if (item.slug) {
                              return {
                                ...prev,
                                [item.slug]: {
                                  ...prev[item.slug as keyof typeof preferences],
                                  push: prev[item.slug as keyof typeof preferences].push ? false : true,
                                },
                              };
                            } else {
                              return prev;
                            }
                          })
                        }
                        enabled={preferences[item?.slug as keyof typeof preferences]?.push}
                        slug={item.slug}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="flex justify-end -mt-4">
        <Button type="button" title="profile-button" styles="text-white-N0 font-bold text-sm py-3 px-[1.12rem]">
          Turn off all
        </Button>
      </div>
    </div>
  );
}

export default Notification;
