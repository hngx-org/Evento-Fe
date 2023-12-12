import NoEvent from '@/components/UserProfile/NoEvent';
import withAuth from '@/helpers/withAuth';
import withoutAuth from '@/helpers/withoutAuth';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import calendarImage from '@/public/assets/profile/calendarForDashboard.svg';
import upcoming from '@/public/assets/eventDashboard3/upcoming.svg';
import created from '@/public/assets/eventDashboard3/created.svg';
import past from '@/public/assets/eventDashboard3/past.svg';
import { Montserrat, Nunito } from 'next/font/google';
import AuthLayout from '@/layout/Authlayout';
import { getUserEvents } from '@/http/dashBoard3api';
import { UserProfile, eventType, getUserProfile } from '@/http/profileapi';
// import { UserProfile } from '@/http/settingsapi';
import { useRouter } from 'next/router';
import CreateEvents from '../create-events';
import GridEventCard from '@/components/UserProfile/GridEventCard';
import ProfieEvent from '@/components/UserProfile/ProfieEvent';
import Button from '@/components/ui/Button';
import { Add, Discover } from 'iconsax-react';
import EventCalender from '@/components/ui/Calender';
import EventCalender3 from '@/components/EventDashBoard3/EventCalendar2';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const Dashboard3: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    userID: '',
    email: '',
    bio: '',

    profileImage: '',
    displayName: '',
    firstName: '',
    lastName: '',
    slug: '',
    role: '',
    location: '',
  });

  const [pastEvents, setPastEvents] = useState<eventType[]>([]);
  const [createdEvents, setCreatedEvent] = useState<eventType[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<eventType[]>([]);
  const combinedEvents = [...createdEvents, ...upcomingEvents];
  const [combinedViewMore, setCombinedViewMore] = useState(false);
  const [pastViewMore, setPastViewMore] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedUserProfile = localStorage.getItem('userProfile');
    if (storedUserProfile) {
      const parsedUserProfile = JSON.parse(storedUserProfile);
      setUserProfile(parsedUserProfile);
    } else {
      getUserProfile(setUserProfile);
    }

    getUserEvents(setPastEvents, setCreatedEvent, setUpcomingEvents);
  }, []);

  const renderedPastEvents = pastViewMore ? pastEvents : pastEvents.slice(0, 2);
  const renderedCombinedEvents = combinedViewMore ? combinedEvents : combinedEvents.slice(0, 2);

  return (
    <AuthLayout>
      {/* desktop and tab */}
      <div className={`lg:px-20 md:pl-6 px-[15px] mt-10   ${nunito.className} max-h-[100vh]`}>
        <section className="mb-14 ">
          <div className={`text-2xl font-medium mb-10 ${montserrat.className} `}>Welcome {userProfile.firstName},</div>
          <div className="upcomingRest flex flex-wrap lg:justify-between gap-8 md:gap-10 w-full ">
            <div className="w-[163px]  md:w-[360px] md:max-w-[calc(50%-40px)]  lg:max-w-none flex flex-shrink-0 justify-between p-6 rounded-lg whitespace-nowrap shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.10)]">
              <div className="flex flex-col gap-3 justify-between">
                <span className={` text-2xl md:text-[32px] md:leading-[40px] font-bold ${montserrat.className} `}>
                  {' '}
                  {upcomingEvents.length + createdEvents.length}
                </span>
                <span className="text-base md:text-xl "> Upcoming events</span>
              </div>

              <Image src={upcoming} alt={''} className="hidden md:flex" />
            </div>
            <div className="w-[163px]  md:w-[360px] md:max-w-[calc(50%-40px)]  lg:max-w-none flex flex-shrink-0 justify-between p-6 rounded-lg whitespace-nowrap shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.10)]">
              <div className="flex flex-col gap-3 justify-between">
                <span className={`text-2xl md:text-[32px] md:leading-[40px]  font-bold ${montserrat.className} `}>
                  {' '}
                  {createdEvents.length}
                </span>
                <span className="text-base md:text-xl"> Created events</span>
              </div>

              <Image src={created} alt={''} className="hidden md:flex" />
            </div>

            <div className="w-[163px]  md:w-[360px] md:max-w-[calc(50%-40px)]  lg:max-w-none flex flex-shrink-0 justify-between p-6 rounded-lg whitespace-nowrap shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.10)]">
              <div className="flex flex-col gap-3 justify-between">
                <span className={`text-2xl md:text-[32px] md:leading-[40px]  font-bold ${montserrat.className} `}>
                  {' '}
                  {pastEvents.length}
                </span>
                <span className="text-base md:text-xl"> Past events</span>
              </div>

              <Image src={past} alt={''} className="hidden md:flex" />
            </div>
          </div>
        </section>
        <section className="buttonsMobile flex text-[#FEFEFE] gap-x-6 text-base font-bold justify-center mb-10 md:hidden">
          <Button
            styles={'flex py-4 whitespace-nowrap justify-center gap-x-2 w-[167px]'}
            title={''}
            handleClick={() => router.push('/create-events')}
          >
            Create event <Add />
          </Button>
          <Button
            styles={
              'text-primary-100 flex py-4 whitespace-nowrap justify-center !bg-[#FEFEFE] border border-primary-100 gap-x-2 w-[167px]'
            }
            title={''}
            handleClick={() => router.push('/explore')}
          >
            Explore events <Discover />
          </Button>
        </section>
        <section className="flex justify-between flex-col lg:flex-row md:pr-10 lg:pr-0">
          {/* max-h-[calc(100vh-300px)] */}
          <div
            className="md:w-full md:min-w-[] lg:w-[850px] flex-shrink-0 no-scrollbar overflow-y-auto 
        
          flex flex-col px-[17px] md:px-0"
          >
            {pastEvents.length === 0 && createdEvents.length === 0 && upcomingEvents.length === 0 ? (
              <NoEvent type={''} />
            ) : (
              <div className="w-full flex flex-col  gap-12 items-center">
                <div className="upcoming flex flex-col gap-4">
                  {' '}
                  <div className="upcomingtitle flex justify-between items-baseline ">
                    <span className="text-[#1E1E1E] text-xl font-semibold tracking-[-0.2px] ">Upcoming Events</span>{' '}
                    <span
                      className="text-sm underline  font-bold text-[#767676] hover:scale-105 hover:text-primary-100 cursor-pointer"
                      onClick={() => {
                        setCombinedViewMore((prev) => !prev);
                      }}
                    >
                      {combinedViewMore ? 'View less' : 'View all'}
                    </span>
                  </div>
                  {upcomingEvents.length > 0 || createdEvents.length > 0 ? (
                    <div className=" grid-cols-1 md:grid-cols-2 grid gap-10 transition w-fit px-[10px] sm:px-[17px] md:px-0 ">
                      {renderedCombinedEvents.map((event) => (
                        <GridEventCard key={0} event={event} />
                      ))}
                    </div>
                  ) : (
                    <div className="flex gap-y-1 flex-col h-[250px] justify-center items-center w-full">
                      <h4
                        className={` ${montserrat.className} text-2xl w-[196px] md:w-fit  font-semibold  text-center text-[#303030]`}
                      >
                        There’s nothing to show here.
                      </h4>

                      <p className="text-base text-[#767676] max-w-[220px] md:max-w-none w-[196px] md:w-fit text-center">
                        <span
                          className="font-bold text-primary-100 cursor-pointer"
                          onClick={() => router.push('/create-events')}
                        >
                          create event
                        </span>{' '}
                        or{' '}
                        <span
                          className="font-bold text-primary-100 cursor-pointer"
                          onClick={() => router.push('/explore')}
                        >
                          explore event
                        </span>
                      </p>
                    </div>
                  )}
                </div>

                <div className="past flex flex-col  gap-4 items-center">
                  {pastEvents.length < 0 && createdEvents.length < 0 && upcomingEvents.length < 0 ? (
                    <NoEvent type={''} />
                  ) : (
                    <div className="w-fit flex flex-col  gap-4 ">
                      <div className="pasttitle flex justify-between items-baseline w-full">
                        <span className="text-[#1E1E1E] text-xl font-semibold tracking-[-0.2px] ">Past Events</span>{' '}
                        <span
                          className="text-sm underline  font-bold text-[#767676] hover:scale-105 hover:text-primary-100 cursor-pointer"
                          onClick={() => {
                            console.log('clicked view all');
                            setPastViewMore((prev) => !prev);
                          }}
                        >
                          {pastViewMore ? 'View less' : 'View all'}
                        </span>
                      </div>

                      {pastEvents.length > 0 ? (
                        <div className=" grid-cols-1 md:grid-cols-2 grid gap-10 transition w-fit ">
                          {renderedPastEvents.map((event) => (
                            <GridEventCard key={0} event={event} />
                          ))}
                        </div>
                      ) : (
                        <div className="flex gap-y-1 flex-col h-[250px] justify-center items-center w-full">
                          <h4
                            className={` ${montserrat.className} text-2xl w-[196px] md:w-fit  font-semibold  text-center text-[#303030]`}
                          >
                            There’s nothing to show here.
                          </h4>

                          <p className="text-base text-[#767676] max-w-[220px] md:max-w-none w-[196px] md:w-fit text-center">
                            <span
                              className="font-bold text-primary-100 cursor-pointer"
                              onClick={() => router.push('/create-events')}
                            >
                              create event
                            </span>{' '}
                            or{' '}
                            <span
                              className="font-bold text-primary-100 cursor-pointer"
                              onClick={() => router.push('/explore')}
                            >
                              explore event
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="calendarPart hidden md:flex lg:flex-col md:flex-row gap-8 md:pt-16 lg:pt-0 mx-auto">
            <EventCalender3 events={[...combinedEvents, ...pastEvents]} />

            <div className=" flex flex-col text-[#FEFEFE] gap-y-6 text-base font-bold   ">
              <Button
                styles={'flex py-4 justify-center lg:w-full md:w-[295px] gap-x-2 whitespace-nowrap'}
                title={''}
                handleClick={() => router.push('/create-events')}
              >
                Create event <Add />
              </Button>
              <Button
                styles={
                  'text-primary-100 flex py-4 justify-center lg:w-full md:w-[295px] !bg-[#FEFEFE] border border-primary-100 gap-x-2 whitespace-nowrap '
                }
                title={''}
                handleClick={() => router.push('/explore')}
              >
                Explore events <Discover />
              </Button>
            </div>
          </div>
        </section>
      </div>
      {/* */}

      {/* mobile  */}

      {/*  */}
    </AuthLayout>
  );
};

export default withoutAuth(Dashboard3);
