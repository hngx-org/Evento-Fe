import React, { useEffect, useState } from 'react';
import Checkbox from '../Checkbox';
import Button from '@/components/ui/NewButton';
import { getNotificationsPreferences, updateNotificationsPreferences } from '@/http/settingsapi';

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
        slug: 'event_change',
        name: 'Alters an event registered for',
        group: 'personal',
      },
      {
        id: 4,
        slug: 'newsletter',
        name: 'Evento Newsletter & Other Updates',
        group: 'personal',
      },
      {
        id: 5,
        slug: '',
        name: 'Event turn-up performance',
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
  const [loading, setLoading] = useState({
    save: false,
    off: false,
  });

  useEffect(() => {
    getNotificationsPreferences(setPreferences);
  }, []);

  const handleCheckboxChange = (
    category: keyof typeof preferences,
    notificationType: keyof (typeof preferences)[typeof category],
  ) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [category]: {
        ...prevPreferences[category],
        [notificationType]: !prevPreferences[category][notificationType],
      },
    }));
  };

  function handleUpdate() {
    updateNotificationsPreferences(preferences, setLoading, 'save');
  }

  function handleOff() {
    const data = {
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
    };
    setPreferences(data);
    updateNotificationsPreferences(data, setLoading, 'off');
  }

  // useEffect(() => {
  //   const delay = 5000;
  //   let timeoutId: NodeJS.Timeout;

  //   const savePreferences = () => {
  //     console.log('Preferences saved:', preferences);
  //   };

  //   const debounceSave = () => {
  //     clearTimeout(timeoutId);
  //     timeoutId = setTimeout(savePreferences, delay);
  //     console.log('saved');
  //   };

  //   debounceSave();

  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, [preferences]);

  return (
    <div className="mt-1 lg:mt-6 flex flex-col gap-14 md:gap-16">
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
                        handleClick={() => handleCheckboxChange(item.slug as keyof typeof preferences, 'inApp')}
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
                        handleClick={() => handleCheckboxChange(item.slug as keyof typeof preferences, 'email')}
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
                        handleClick={() => handleCheckboxChange(item.slug as keyof typeof preferences, 'push')}
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
      <div className="flex gap-5 justify-end -mt-8">
        <Button
          type="button"
          title="turn-off-all"
          className="text-primary-100 border border-primary-100 font-bold text-sm h-10 px-5 rounded-lg"
          isLoading={loading.off}
          onClick={handleOff}
        >
          Turn off all
        </Button>
        <Button
          type="button"
          title="save"
          className="text-white-N0 bg-primary-100 font-bold text-sm h-10 px-10 rounded-lg"
          isLoading={loading.save}
          onClick={handleUpdate}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default Notification;
