import Settingslayout from '@/layout/Settingslayout';
import { Montserrat, Nunito } from 'next/font/google';
import { useState } from 'react';
import withAuth from '@/helpers/withAuth';

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

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

function Notifications() {
  const [checkboxes, setCheckboxes] = useState<string[]>([]);

  function handleClick(id: string) {
    if (checkboxes.includes(id)) {
      const index = checkboxes.indexOf(id);
      checkboxes.splice(index, 1);
      setCheckboxes([...checkboxes]);
    } else {
      setCheckboxes((prev) => [...prev, id]);
    }
  }

  return (
    <Settingslayout>
      <div className="space-y-3">
        <h2 className={`${montserrat.className} text-Grey-G700 text-[2rem] font-semibold`}>Notifications</h2>
        <p className="text-Grey-G100 text-xl">Customize your notifications to suit your alerts</p>
      </div>
      <div className={`${nunito.className} space-y-6`}>
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
                      <div
                        className={`w-6 h-6 rounded-md cursor-pointer ${
                          checkboxes.includes(`${item.group}&${item.id}&inApp`)
                            ? 'bg-primary-100 border border-primary-100'
                            : 'border border-Grey-G50'
                        } flex items-center justify-center`}
                        onClick={() => handleClick(`${item.group}&${item.id}&inApp`)}
                      >
                        {checkboxes.includes(`${item.group}&${item.id}&inApp`) && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path
                              d="M14.5994 4.7998L6.89941 12.4998L3.39941 8.9998"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    {/* email */}
                    <div className="w-[2.7rem] flex justify-center">
                      <div
                        className={`w-6 h-6 rounded-md cursor-pointer ${
                          checkboxes.includes(`${item.group}&${item.id}&email`)
                            ? 'bg-primary-100 border border-primary-100'
                            : 'border border-Grey-G50'
                        } flex items-center justify-center`}
                        onClick={() => handleClick(`${item.group}&${item.id}&email`)}
                      >
                        {checkboxes.includes(`${item.group}&${item.id}&email`) && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path
                              d="M14.5994 4.7998L6.89941 12.4998L3.39941 8.9998"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    {/* push */}
                    <div className="w-[2.4rem] flex justify-center">
                      <div
                        className={`w-6 h-6 rounded-md cursor-pointer ${
                          checkboxes.includes(`${item.group}&${item.id}&push`)
                            ? 'bg-primary-100 border border-primary-100'
                            : 'border border-Grey-G50'
                        } flex items-center justify-center`}
                        onClick={() => handleClick(`${item.group}&${item.id}&push`)}
                      >
                        {checkboxes.includes(`${item.group}&${item.id}&push`) && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path
                              d="M14.5994 4.7998L6.89941 12.4998L3.39941 8.9998"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Settingslayout>
  );
}

export default withAuth(Notifications);
