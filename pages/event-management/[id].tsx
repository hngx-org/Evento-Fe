import { Work_Sans, Nunito } from 'next/font/google';
import { EventManagement } from '@/@types';
import HomeFooter from '@/components/Home/homefooter';
import Homenav from '@/components/Home/homenav';
import AuthenticatedHeader from '@/components/components/authenticatedheader';
import Button from '@/components/ui/NewButton';
import { eventDetails } from '@/http/events';
import { getStoredUserId } from '@/http/getToken';
import { Calendar, Edit2, Location } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useQuery } from 'react-query';
import Frame1 from '../../public/assets/eventnphone.svg';
import App3 from '../../public/assets/app2.svg';
import LocPointer from '../../public/assets/locpointer.svg';
import EditEventModal from '@/components/components/modal/EditEventModal';
import TextEditor from '@/components/textEditor/textEditor';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

function Index() {
  const router = useRouter();
  const { data, isLoading, error } = useQuery('get-event-details', () => {
    if (!router.query.id) return;
    const id = typeof router.query.id == 'string' ? router.query.id : router.query.id[0];
    return eventDetails(id);
  });

  const userId = getStoredUserId();

  function formatDate(dateISO: string) {
    const date = new Date(dateISO);
    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.getFullYear();

    // Combine components and return formatted string
    return `${day}, ${month} ${date.getDate()}, ${year}`;
  }

  function formatTime(eventDate: string) {
    const date = new Date(eventDate);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  if (isLoading) {
    return (
      <div className="flex flex-col h-screen">
        {userId ? <AuthenticatedHeader /> : <Homenav />}
        <div className="flex-1 grid place-content-center">
          <div className="h-14 w-14 rounded-full border-4 border-gray-700 border-t-primary-100 animate-spin" />
        </div>
        {!userId && <HomeFooter />}
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex flex-col h-screen">
        {userId ? <AuthenticatedHeader /> : <Homenav />}
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <h4 className="text-2xl font-medium text-center">Event Not Found</h4>
          <Link
            href="/explore"
            className="flex items-center mx-auto gap-2 py-1.5 px-6 bg-primary-100 w-fit text-white-100 rounded border border-primary-100 hover:bg-transparent hover:text-primary-100 transition-all"
          >
            <IoArrowBack /> Explore Events
          </Link>
        </div>
        {!userId && <HomeFooter />}
      </div>
    );
  }

  const event: EventManagement = data?.data?.data;

  return (
    <div>
      {userId ? <AuthenticatedHeader /> : <Homenav />}
      <div>
        <div className="flex flex-col md:flex-row gap-8 md:space-between items-center max-w-[1240px] mx-auto p-4 pt-8 ">
          <div>
            <Image src={event.imageURL} width={528} height={541} alt="Event" />
            <div className="flex items-center pt-3 gap-4">
              <Image
                src={event.organizer.profileImage ? event.organizer.profileImage : App3}
                width={2.5 * 16}
                height={2.5 * 16}
                alt="Host"
                className="rounded-full"
              />
              <p className="text-[20px] font-[500] text-[#1e1e1e] ">
                {event.organizer.firstName} {event.organizer.lastName}
              </p>
            </div>
          </div>
          <div className="md:pb-[40px]">
            <p className="text-[#1e1e1e] pb-4 font-mono text-[30px] sm:text-[40px] font-[600] leading-[52px] ">
              {event?.title}
            </p>
            <div className="flex gap-6 pb-6 ">
              <div className="w-[56px] h-[56px] py-[3px] px-[4px] flex justify-center items-center gap-[10px] rounded-[8px] border border-[#a4a4a4] ">
                <Calendar size="50" color="#000000" />
              </div>
              <div className="flex flex-col gap-1 text-[#1e1e1e]">
                <p className="text-[14px] sm:text-[20px] font-Worksans font-[500] leading-[28px] ">
                  {formatDate(event?.startDate)} {event.startDate !== event.endDate && `- ${formatDate(event.endDate)}`}
                </p>
                <p className="text-[12px] sm:text-[16px] font-[400] leading-[24px] ">
                  {formatTime(event.startDate)} to {formatTime(event.endDate)}
                </p>
              </div>
            </div>
            <div className="flex gap-6 pb-4 ">
              <div className="w-[56px] h-[56px] py-[3px] px-[4px] flex justify-center items-center gap-[10px] rounded-[8px] border border-[#a4a4a4] ">
                <Location size="50" color="#000000" />
              </div>
              <div className="flex flex-col text-[#1e1e1e]">
                <p className="text-[14px] sm:text-[20px] font-Worksans font-[500] leading-[28px] ">
                  Location
                  <Image src={LocPointer} alt="Location Pointer" className="inline" />
                </p>
                <p className="text-[12px] sm:text-[16px] font-[400] leading-[24px] ">{event?.location}</p>
              </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-4 py-8">
              <div className="flex flex-col gap-2 w-[194px] p-[16px] border border-[#360789] border-t-1 border-r-[3px] border-b-[3px] border-l-[1px] items-start flex-shrink-0 rounded-[8px] ">
                <p>Event Category</p>
                <p>{event.Category.name}</p>
              </div>
              <div className="flex flex-col gap-2 w-[193px] p-[16px] border border-[#e0580c] border-t-1 border-r-[3px] border-b-[3px] border-l-[1px] items-start flex-shrink-0 rounded-[8px] ">
                <p>Event Capacity</p>
                <p>{event?.capacity}</p>
              </div>
              <div className="flex flex-col gap-2 w-[194px] p-[16px] border border-[#12b76a] border-t-1 border-r-[3px] border-b-[3px] border-l-[1px] items-start flex-shrink-0 rounded-[8px] ">
                <p>Ticket type</p>
                <p>{event.tickets[0]?.ticketType}</p>
              </div>
            </div>

            <EditEventModal eventDetails={event} />
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-4 pt-3">
          <p className="text-[18px] pt-4 pb-4 sm:text-[24px] font-[500] leading-[32px] text-[#000] ">
            About this event
          </p>
          <div className="text-[16px] sm:text-[20px] font-[400] leading-7 text-[#585858] ">
            <div dangerouslySetInnerHTML={{ __html: event.description }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
