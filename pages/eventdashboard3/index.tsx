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
import Modal from '@/components/ui/Modal';
import ListEventCard from '@/components/UserProfile/ListEventCard';
import { GridIcon } from '@/public/assets/profile/icons';
import { RowVertical } from 'iconsax-react';

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

  const [combinedListView, setCombinedListView] = useState(true);
  const [pastListView, setPastListView] = useState(true);
  // const []

  useEffect(() => {
    getUserProfile(setUserProfile);

    getUserEvents(setPastEvents, setCreatedEvent, setUpcomingEvents);
  }, []);

  // const renderedPastEvents = pastViewMore ? pastEvents : pastEvents.slice(0, 2);
  // const renderedCombinedEvents = combinedViewMore ? combinedEvents : combinedEvents.slice(0, 2);

  return (
    <AuthLayout>
      {/* modals */}
      {/* current modals */}
      <Modal
        isOpen={combinedViewMore}
        closeModal={function (): void {
          setCombinedViewMore(false);
        }}
        closeOnOverlayClick={true}
        size="xxl"
        isCloseIconPresent={false}
      >
        <div className="modalContent">
          {/* modal scroll div */}
          <div className="max-h-[500px] overflow-clip overflow-y-scroll  no-scrollbar ">
            <div className="">
              {' '}
              {/* view type */}
              <div className=" hidden md:flex w-full relative z-[100] justify-end md:px-[40px] lg:px-[85px] ">
                <div
                  className={`w-[40px] h-[40px]  flex justify-center items-center rounded-[4px] ${
                    combinedListView ? 'bg-secondary-100' : ''
                  } transition duration-1000`}
                  onClick={() => {
                    setCombinedListView(true);
                  }}
                >
                  <RowVertical color="#e0580c" />
                </div>
                <div
                  className={`w-[40px] h-[40px]  flex justify-center items-center rounded-[4px] ${
                    !combinedListView ? 'bg-secondary-100' : ''
                  } transition `}
                  onClick={() => {
                    setCombinedListView(false);
                  }}
                >
                  <GridIcon />
                </div>
              </div>
              <div className="hidden md:block">
                {' '}
                {combinedListView ? (
                  // list cards
                  <div className="listView flex flex-col gap-8  md:px-[40px] lg:px-[85px]">
                    {combinedEvents.map((event, index) => (
                      <ListEventCard key={index} event={event} past={false} />
                    ))}
                  </div>
                ) : (
                  // grid cards
                  <div className=" relative w-fit grid grid-cols-1 sm:grid-cols-2 gap-6 max-h-full md:px-[40px] lg:px-[85px] py-10 overflow-y-scroll no-scrollbar mx-auto">
                    {combinedEvents.map((event, index) => (
                      <GridEventCard key={index} event={event} past={false} />
                    ))}
                  </div>
                )}
              </div>
              <div className=" relative w-fit grid grid-cols-1 sm:grid-cols-2 gap-6 max-h-full md:hidden py-10 overflow-y-scroll no-scrollbar mx-auto">
                {combinedEvents.map((event, index) => (
                  <GridEventCard key={index} event={event} past={false} />
                  // <ListEventCard key={index} event={event} past={false} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {/* past modals */}
      <Modal
        isOpen={pastViewMore}
        closeModal={function (): void {
          setPastViewMore(false);
        }}
        closeOnOverlayClick={true}
        size="xxl"
        isCloseIconPresent={false}
      >
        <div className="modalContent">
          {/* modal scroll div */}
          <div className="max-h-[500px] overflow-clip overflow-y-scroll  no-scrollbar ">
            <div className="">
              {' '}
              {/* view type */}
              <div className=" hidden md:flex w-full relative z-[100] justify-end md:px-[40px] lg:px-[85px] ">
                <div
                  className={`w-[40px] h-[40px]  flex justify-center items-center rounded-[4px] ${
                    pastListView ? 'bg-secondary-100' : ''
                  } transition duration-1000`}
                  onClick={() => {
                    setPastListView(true);
                  }}
                >
                  <RowVertical color="#e0580c" />
                </div>
                <div
                  className={`w-[40px] h-[40px]  flex justify-center items-center rounded-[4px] ${
                    !pastListView ? 'bg-secondary-100' : ''
                  } transition `}
                  onClick={() => {
                    setPastListView(false);
                  }}
                >
                  <GridIcon />
                </div>
              </div>
              <div className="hidden md:block">
                {' '}
                {pastListView ? (
                  // list cards
                  <div className="listView flex flex-col gap-8 py-10  md:px-[40px] lg:px-[85px]">
                    {pastEvents.map((event, index) => (
                      <ListEventCard key={index} event={event} past={true} />
                    ))}
                  </div>
                ) : (
                  // grid cards
                  <div className=" relative w-fit grid grid-cols-1 sm:grid-cols-2 gap-6 max-h-full md:px-[40px] lg:px-[85px] py-10 overflow-y-scroll no-scrollbar mx-auto">
                    {pastEvents.map((event, index) => (
                      <GridEventCard key={index} event={event} past={true} />
                    ))}
                  </div>
                )}
              </div>
              <div className=" relative w-fit grid grid-cols-1 sm:grid-cols-2 gap-6 max-h-full md:hidden py-10 overflow-y-scroll no-scrollbar mx-auto">
                {pastEvents.map((event, index) => (
                  <GridEventCard key={index} event={event} past={true} />
                  // <ListEventCard key={index} event={event} past={true} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>
      ;
      <div className={`lg:px-20 md:pl-6 px-[15px] my-10   ${nunito.className} `}>
        <section className="mb-14 ">
          <div className={`text-2xl font-medium mb-10 ${montserrat.className} `}>Welcome {userProfile.firstName},</div>
          <div className="upcomingRest flex flex-wrap lg:justify-between gap-8 md:gap-10 w-full ">
            <div className="w-[163px] max-w-[calc(50%-16px)]  md:w-[360px] md:max-w-[calc(50%-40px)]  lg:max-w-none flex flex-shrink-0 justify-between p-6 rounded-lg whitespace-nowrap shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.10)]">
              <div className="flex flex-col gap-3 justify-between">
                <span className={` text-2xl md:text-[32px] md:leading-[40px] font-bold ${montserrat.className} `}>
                  {' '}
                  {upcomingEvents.length + createdEvents.length}
                </span>
                <span className="text-base md:text-xl "> Upcoming events</span>
              </div>

              <Image src={upcoming} alt={''} className="hidden md:flex" />
            </div>
            <div className="w-[163px] max-w-[calc(50%-16px)]  md:w-[360px] md:max-w-[calc(50%-40px)]  lg:max-w-none flex flex-shrink-0 justify-between p-6 rounded-lg whitespace-nowrap shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.10)]">
              <div className="flex flex-col gap-3 justify-between">
                <span className={`text-2xl md:text-[32px] md:leading-[40px]  font-bold ${montserrat.className} `}>
                  {' '}
                  {createdEvents.length}
                </span>
                <span className="text-base md:text-xl"> Created events</span>
              </div>

              <Image src={created} alt={''} className="hidden md:flex" />
            </div>

            <div className="w-[163px] max-w-[calc(50%-16px)]  md:w-[360px] md:max-w-[calc(50%-40px)]  lg:max-w-none flex flex-shrink-0 justify-between p-6 rounded-lg whitespace-nowrap shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.10)]">
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
            className="md:w-full  flex-shrink-0 no-scrollbar overflow-y-auto 
        
          flex flex-col px-[17px] md:px-0"
          >
            {pastEvents.length === 0 && createdEvents.length === 0 && upcomingEvents.length === 0 ? (
              <NoEvent type={''} />
            ) : (
              <div className="w-full flex flex-col  gap-12 items-center">
                <div className="upcoming flex flex-col gap-4 w-fit">
                  {' '}
                  <div className="upcomingtitle flex justify-between items-baseline w-full">
                    <span className="text-[#1E1E1E] text-xl font-semibold tracking-[-0.2px] ">Upcoming Events</span>{' '}
                    <span
                      className="text-sm underline  font-bold text-[#767676] hover:scale-105 hover:text-primary-100 cursor-pointer"
                      onClick={() => {
                        setCombinedViewMore(true);
                      }}
                    >
                      {/* {combinedViewMore ? 'View less' : 'View all'} */}
                      View all
                    </span>
                  </div>
                  {upcomingEvents.length > 0 || createdEvents.length > 0 ? (
                    // desktop and tab
                    <div className="max-h-[378px] overflow-hidden">
                      <div className=" grid grid-cols-1 sm:grid-cols-2 sm: lg:grid-cols-3 gap-10 transition w-fit px-[10px] sm:px-[17px] md:px-0 ">
                        {combinedEvents.slice(0, 3).map((event, index) => (
                          <GridEventCard key={index} event={event} past={false} />
                        ))}
                      </div>
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
                  <div className="w-fit flex flex-col  gap-4 ">
                    <div className="pasttitle flex justify-between items-baseline w-full">
                      <span className="text-[#1E1E1E] text-xl font-semibold tracking-[-0.2px] ">Past Events</span>{' '}
                      <span
                        className="text-sm underline  font-bold text-[#767676] hover:scale-105 hover:text-primary-100 cursor-pointer"
                        onClick={() => {
                          setPastViewMore(true);
                        }}
                      >
                        {/* {pastViewMore ? 'View less' : 'View all'}
                         */}
                        View all
                      </span>
                    </div>

                    {pastEvents.length > 0 ? (
                      <>
                        <div className="max-h-[378px] overflow-hidden">
                          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 transition w-fit px-[10px] sm:px-[17px] md:px-0 ">
                            {pastEvents.slice(0, 3).map((event, index) => (
                              <GridEventCard key={index} event={event} past={true} />
                            ))}
                          </div>
                        </div>
                      </>
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
                </div>
              </div>
            )}
          </div>
          {/* <div className="calendarPart hidden md:flex lg:flex-col md:flex-row gap-8 md:pt-16 lg:pt-0 mx-auto">
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
          </div> */}
        </section>
      </div>
      {/* */}
      {/* mobile  */}
      {/*  */}
    </AuthLayout>
  );
};

export default withoutAuth(Dashboard3);
