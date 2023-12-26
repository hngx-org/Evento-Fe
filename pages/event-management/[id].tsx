'use client';
import { Work_Sans, Nunito, Montserrat } from 'next/font/google';
import { EventManagement } from '@/@types';
import HomeFooter from '@/components/Home/homefooter';
import Homenav from '@/components/Home/homenav';
import AuthenticatedHeader from '@/components/components/authenticatedheader';
import { eventDetails } from '@/http/events';
import { getStoredUserId } from '@/http/getToken';
import { Calendar, Edit2, Location, Profile2User } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useQuery } from 'react-query';
import { useEventContext } from '@/context/EventContext';
import App3 from '../../public/assets/app2.svg';
import LocPointer from '../../public/assets/locpointer.svg';
import { FaShareAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import {
  TwitterShareButton,
  XIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';

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

function Index() {
  const { shareEventLink } = useEventContext();
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const router = useRouter();
  const { data, isLoading, error } = useQuery(['get-event-details', router.query.id], () => {
    if (!router.query.id) {
      throw new Error('Event ID not provided');
    }
    const id = router.query.id as string;
    return eventDetails(id);
  });

  // const Id = typeof eventId === 'string' ? eventId : eventId[0];
  const Id = router.query.id as string;

  // console.log(Id);
  const eventLink = shareEventLink(Id);
  // console.log(eventLink);

  const handleButtonClick = async () => {
    try {
      await navigator.clipboard.writeText(eventLink);
      setIsLinkCopied(true);
      toast.success('Link copied to clipboard!');
    } catch (error) {
      console.error('Unable to copy to clipboard', error);
    }
  };

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
        <div
          className={` ${nunito.className} flex flex-col lg:flex-row gap-6 md:gap-8  md:space-between  w-full px-4 md:px-20 pt-8 pb-4 `}
        >
          <div>
            <p
              className={`${montserrat.className} text-[#1e1e1e] pb-4  text-[30px] sm:text-[40px] font-[600] leading-[52px] md:hidden block`}
            >
              {event?.title}
            </p>
            <Image
              src={event.imageURL}
              width={528}
              height={541}
              alt="Event"
              className="lg:h-[541px] lg:w-[528px] md:w-full aspect-[528/541]"
            />
            <div className="flex items-center pt-3 gap-[10px] md:gap-4">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                {' '}
                <Image
                  src={event.organizer.profileImage ? event.organizer.profileImage : App3}
                  width={40}
                  height={40}
                  alt="Host"
                  className="h-8 w-8 md:w-10 md:h-10"
                />
              </div>

              <p className="text-[16px] md:text-[20px] font-[500] text-[#1e1e1e] ">
                {'Hosted by ' + event.organizer.firstName}
              </p>
            </div>
            <div className=" pt-3 block md:hidden">
              <p className="pt-4 pb-2 text-[24px] font-[600] leading-[32px] text-[#000] ">About this event</p>
              <div className="leading-7 text-[#585858] ">
                <div dangerouslySetInnerHTML={{ __html: event.description }} />
                {/* <div className="text-xl font-normal text-[#585858]">{event.description}</div> */}
              </div>
            </div>
          </div>
          <div className="md:pb-[40px] flex flex-col">
            <p
              className={`${montserrat.className} text-[#1e1e1e] pb-4  text-[30px] sm:text-[40px] font-[600] leading-[52px] hidden md:block `}
            >
              {event?.title}
            </p>
            <div className={`  flex gap-6 pb-6 `}>
              <div className="w-[56px] h-[56px] py-[3px] px-[4px] flex justify-center items-center gap-[10px] rounded-[8px] border border-[#A4A4A4] flex-shrink-0 ">
                <Calendar size="24" color="#000000" />
              </div>
              <div className="flex flex-col gap-1 text-[#1E1E1E">
                <p className="text-[16px] sm:text-[20px]  font-[500] leading-[28px] line-clamp-1 ">
                  {formatDate(event?.startDate)} {event.startDate !== event.endDate && `- ${formatDate(event.endDate)}`}
                </p>
                <p className="text-[14px] sm:text-[16px] font-[400] leading-[24px] ">
                  {formatTime(event.startDate)} to {formatTime(event.endDate)}
                </p>
              </div>
            </div>
            <div className="flex gap-6 pb-4 ">
              <div className="w-[56px] h-[56px] py-[3px] px-[4px] flex justify-center items-center gap-[10px] rounded-[8px] border border-[#A4A4A4] ">
                <Location size="24" color="#000000" />
              </div>
              <div className="flex flex-col text-[#1E1E1E">
                <p className="text-[16px] sm:text-[20px]  font-[500] leading-[28px] ">
                  Location
                  <Image src={LocPointer} alt="Location Pointer" className="inline" />
                </p>
                <p className="text-[14px] sm:text-[16px] font-[400] leading-[24px] ">
                  {event?.locationType === 'Physical' ? event?.location : event?.virtualLocationLink}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap lg:gap- gap-6  lg:w-fit md:w-full justify-between  py-8">
              <div className="flex flex-col gap-2 w-full md:w-[194px] p-[16px] border border-[#360789] border-t-1 border-r-[3px] border-b-[3px] border-l-[1px] items-start flex-shrink-0 rounded-[8px] ">
                <p className="text-[20px]  font-[500] leading-[28px]">Event Category</p>
                <p>{event.Category.name}</p>
              </div>
              <div className="flex flex-col gap-2 w-full md:w-[194px] p-[16px] border border-[#e0580c] border-t-1 border-r-[3px] border-b-[3px] border-l-[1px] items-start flex-shrink-0 rounded-[8px] ">
                <p className="text-[20px]  font-[500] leading-[28px]">Event Capacity</p>
                <p>{event?.capacity}</p>
              </div>
              <div className="flex flex-col gap-2 w-full md:w-[194px] p-[16px] border border-[#12b76a] border-t-1 border-r-[3px] border-b-[3px] border-l-[1px] items-start flex-shrink-0 rounded-[8px] ">
                <p className="text-[20px]  font-[500] leading-[28px]">Ticket type</p>
                <p>{event.tickets[0]?.ticketType}</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6 mx-auto">
                {' '}
                <Link
                  href={'/event-management/' + event.eventID + '/edit'}
                  style={{
                    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                  }}
                  className="text-[16px] text-[#e0580c] font-[500] leading-[24px] w-[313px]  rounded-[8px] py-[16px] px-[20px] flex justify-center items-center gap-4 bg-transparent border border-[#e0580c] "
                >
                  <Edit2 size="20" color="#E0580C" />
                  <span className={nunito.className}>Edit Event</span>
                </Link>
                <Link
                  href={`/event-management/participants/${event.eventID}`}
                  style={{
                    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                  }}
                  className="text-[16px] text-[#e0580c] font-[500] leading-[24px] w-[313px]  rounded-[8px] py-[16px] px-[20px] flex justify-center items-center gap-4 bg-transparent border border-[#e0580c] "
                >
                  <Profile2User size="20" color="#E0580C" />
                  <span className={nunito.className}>View Participants</span>
                </Link>
              </div>
              <div className="w-full rounded-md px-4 py-2 flex justify-between items-center ">
                {/* React Share icons */}

                <FacebookShareButton
                  url={eventLink}
                  className="text-[#e0580c] hover:text-[#FF8A65] cursor-pointer ml-4 "
                >
                  <FacebookIcon size={40} round={true} />
                </FacebookShareButton>
                <TwitterShareButton
                  url={eventLink}
                  className="text-[#e0580c] hover:text-[#FF8A65] cursor-pointer ml-4 "
                >
                  <XIcon size={40} round={true} />
                </TwitterShareButton>
                <LinkedinShareButton
                  url={eventLink}
                  className="text-[#e0580c] hover:text-[#FF8A65] cursor-pointer ml-4 "
                >
                  <LinkedinIcon size={40} round={true} />
                </LinkedinShareButton>
                <WhatsappShareButton
                  url={eventLink}
                  className="text-[#e0580c] hover:text-[#FF8A65] cursor-pointer ml-4 "
                >
                  <WhatsappIcon size={40} round={true} />
                </WhatsappShareButton>

                <button
                  className="transition-all ease-in-out duration-500 "
                  title="Copy event link"
                  onClick={handleButtonClick}
                >
                  <FaShareAlt color="#FF8A65" size={24} />
                </button>

                {/* You can add more social icons as needed */}
              </div>
            </div>
          </div>
        </div>
        <div className=" pt-3 px-20 hidden md:block">
          <p className="text-[18px] pt-4 pb-2 sm:text-[24px] font-[500] leading-[32px] text-[#000] ">
            About this event
          </p>
          <div className="leading-7 text-[#585858] ">
            <div dangerouslySetInnerHTML={{ __html: event.description }} />
            {/* <div className="text-xl font-normal text-[#585858]">{event.description}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
