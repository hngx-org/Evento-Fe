import React, { useState, useEffect } from 'react';
import AuthenticatedHeader from '@/components/components/authenticatedheader';
import Homenav from '@/components/Home/homenav';
import Homefooter from '@/components/Home/homefooter';
import LocPointer from '../../public/assets/locpointer.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { eventDetails } from '@/http/events';
import { IoArrowBack } from 'react-icons/io5';
import { Calendar, Location, Ticket } from 'iconsax-react';
import Link from 'next/link';
import { getStoredUserId, getStoredAuthToken } from '@/http/getToken';
import Button from '@ui/NewButton';
import { Register, Registration_EndPoint } from '@/http/eventregistration';
import { useRegistrationContext } from '@/context/RegistrationContext';
import { toast } from 'react-toastify';
import useDisclosure from '@/hooks/useDisclosure';
import SignIn from '@/components/components/modal/auth/SignIn';
import { FaShareAlt } from 'react-icons/fa';
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
import { useEventContext } from '@/context/EventContext';
import { Montserrat, Nunito } from 'next/font/google';

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

interface Participant {
  userID: string;
  email: string;
  profileImage: string | null;
  firstName: string;
  lastName: string;
}

const Index = () => {
  const router = useRouter();
  const { shareEventLink } = useEventContext();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const { getEventId, getUserId } = useRegistrationContext();
  const [eventID2, setEventID] = useState<string | null>(null);
  const [userID, setUserID] = useState<string | null>(null);
  const { data, isLoading, error } = useQuery(['get-event-details', router.query.id], () => {
    if (!router.query.id) {
      throw new Error('Event ID not provided');
    }
    const id = router.query.id as string;
    return eventDetails(id);
  });

  const eventId =
    typeof router.query.id === 'string'
      ? router.query.id
      : Array.isArray(router.query.id)
        ? router.query.id[0]
        : undefined;

  if (eventId) {
    // console.log(eventId);
  } else {
    console.error('Event ID is undefined');
  }

  useEffect(() => {
    const eventId = getEventId();
    setEventID(eventId);
    const userId = getUserId();
    setUserID(userId);
  }, []);

  const userId = getStoredUserId();

  function formatDate(dateISO: string) {
    const date = new Date(dateISO);
    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.getFullYear();

    // Combine components and return formatted string
    return `${day}, ${month} ${date.getDate()}, ${year}`;
  }

  if (isLoading) {
    return (
      <>
        {userId ? <AuthenticatedHeader /> : <Homenav />}
        <div className="flex flex-col h-screen">
          <div className="flex-1 grid place-content-center">
            <div className="h-14 w-14 rounded-full border-4 border-gray-700 border-t-primary-100 animate-spin" />
          </div>
          {!userId && <Homefooter />}
        </div>
      </>
    );
  }

  if (error || !data) {
    return (
      <>
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
        </div>
        {!userId && <Homefooter />}
      </>
    );
  }

  const {
    eventID,
    title,
    imageURL,
    organizer,
    startDate,
    endDate,
    location,
    Category,
    capacity,
    tickets,
    description,
    organizerID,
    participants,
  } = data?.data?.data;

  const handleRegistration = async () => {
    const authToken = getStoredAuthToken();
    if (!authToken) {
      console.error('Authentication token not found');
      return;
    }

    const endpoint = '/registration';
    const url = `${Registration_EndPoint}${endpoint}`;

    const requestBody = {
      eventID,
      userID: userId,
    };

    try {
      setLoading(true);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(requestBody),
      });

      const responseData = await response.json();

      if (response.ok) {
        toast.success('User registered for the event successfully');
        router.push('/explore');
        console.log(responseData);
      } else if (response.status === 404) {
        toast.error('Event not found');
        console.error('Event not found:', responseData.message);
      } else if (response.status === 409) {
        toast.error('Conflict - User already registered for the event');
        console.error('Conflict:', responseData.message);
      } else if (response.status === 401) {
        toast.error('Unauthorized Error - Not authorized to access this resource');
        console.error('Unauthorized Error:', responseData.message);
      } else {
        toast.error('An unexpected error occurred');
        console.error('Unexpected error:', responseData.message);
      }
    } catch (error) {
      toast.error('Error during registration');
      console.error('Error during registration:', error);
    } finally {
      setLoading(false);
    }
  };

  const eventLink = shareEventLink(eventID);

  const handleButtonClick = async () => {
    try {
      await navigator.clipboard.writeText(eventLink);
      toast.success('Link copied to clipboard!');
    } catch (error) {
      console.error('Unable to copy to clipboard', error);
    }
  };

  const isPassed = () => {
    // endDate < currentTime
    const currentTime = new Date();
    const eventEndDate = new Date(endDate);
    return eventEndDate < currentTime;
  };

  const isRegistered = (): boolean => {
    return participants.some((item: Participant) => item.userID === userId);
  };

  const doNothing = () => {};

  if (userId === organizerID) {
    router.push('/event-management/' + eventID);
    return (
      <>
        {userId ? <AuthenticatedHeader /> : <Homenav />}
        <div className="flex flex-col h-screen">
          <div className="flex-1 grid place-content-center">
            <div className="h-14 w-14 rounded-full border-4 border-gray-700 border-t-primary-100 animate-spin" />
          </div>
          {!userId && <Homefooter />}
        </div>
      </>
    );
  }

  return (
    <>
      {userId ? <AuthenticatedHeader /> : <Homenav />}
      <div>
        <div
          className={`${nunito.className} flex flex-col md:flex-row gap-8 md:space-between items-center max-w-[1240px] mx-auto p-4 pt-8 `}
        >
          <div className="w-full md:w-2/5 shrink-0">
            <div className="aspect-[528/541] relative rounded-lg overflow-hidden">
              <Image
                src={imageURL === 'https://example.com/image.jpg' ? '/assets/event2.png' : imageURL}
                fill
                alt="Event"
                className="object-cover blur-xl opacity-60"
              />
              <Image
                src={imageURL === 'https://example.com/image.jpg' ? '/assets/event2.png' : imageURL}
                fill
                alt="Event"
                className="object-contain"
              />
            </div>
            <div className="flex items-center pt-3 gap-4">
              <div className="h-10 w-10 border rounded-full overflow-hidden">
                <Image
                  src={organizer.profileImage ?? '/assets/avatar.png'}
                  height={40}
                  width={40}
                  alt="Host"
                  className="object-cover"
                />
              </div>
              <p className="sm:text-[20px] font-[500] text-[#1e1e1e] ">
                Hosted by {organizer.firstName} {organizer.lastName}
              </p>
            </div>
          </div>
          <div className="md:pb-[40px]">
            <p
              className={`${montserrat.className} text-[#1e1e1e] pb-4  text-[30px] sm:text-[40px] font-[600] leading-[52px]`}
            >
              {title}
            </p>
            <div className="flex gap-6 pb-6 ">
              <div className="w-[56px] h-[56px] py-[3px] px-[4px] flex justify-center items-center gap-[10px] rounded-[8px] border border-[#a4a4a4] ">
                <Calendar size="35" color="#000000" />
              </div>
              <div className="flex flex-col gap-1 text-[#1e1e1e]">
                <p className="text-[14px] sm:text-[20px] font-Worksans font-[500] leading-[28px] ">
                  {formatDate(startDate)}
                </p>
                <p className="text-[12px] sm:text-[16px] font-[400] leading-[24px] ">1:00 PM to 2:00 PM</p>
              </div>
            </div>
            <div className="flex gap-6 pb-4 ">
              <div className="w-[56px] h-[56px] py-[3px] px-[4px] flex justify-center items-center gap-[10px] rounded-[8px] border border-[#a4a4a4] ">
                <Location size="34" color="#000000" />
              </div>
              <div className="flex flex-col text-[#1e1e1e]">
                <p className="text-[14px] sm:text-[20px] font-Worksans font-[500] leading-[28px] ">
                  Location
                  <Image src={LocPointer} alt="Location Pointer" className="inline" />
                </p>
                <p className="text-[12px] sm:text-[16px] font-[400] leading-[24px] ">{location}</p>
              </div>
            </div>
            <div className="flex flex-wrap   gap-4 py-8">
              <div className="flex flex-col gap-2 w-[194px] p-[16px] border border-[#360789] border-t-1 border-r-[3px] border-b-[3px] border-l-[1px] items-start flex-shrink-0 rounded-[8px] ">
                <p>Event Category</p>
                <p>{Category?.name}</p>
              </div>
              <div className="flex flex-col gap-2 w-[193px] p-[16px] border border-[#e0580c] border-t-1 border-r-[3px] border-b-[3px] border-l-[1px] items-start flex-shrink-0 rounded-[8px] ">
                <p>Event Capacity</p>
                <p>{capacity} persons</p>
              </div>
              <div className="flex flex-col gap-2 w-[194px] p-[16px] border border-[#12b76a] border-t-1 border-r-[3px] border-b-[3px] border-l-[1px] items-start flex-shrink-0 rounded-[8px] ">
                <p>Ticket Price</p>
                <p>{tickets[0]?.ticketType === 'Free' ? 'Free' : `$${tickets[0]?.ticketPrice}`}</p>
              </div>
            </div>
            <div className="rounded-[12px] border-[0.5px] border-[#c0c0c0] flex flex-col p-[16px] items-start gap-[24px] ">
              <p className="text-[16px] sm:text-[20px] font-[400] leading-[28px] text-[#1e1e1e]  ">
                {isRegistered()
                  ? 'You have already registered for this event'
                  : 'Hello! To join the event, please register below.'}
              </p>
              {userId ? (
                <>
                  {!isRegistered() && (
                    <Button
                      style={{
                        boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                      }}
                      isLoading={loading}
                      spinnerColor="#fff"
                      onClick={!isPassed() ? handleRegistration : doNothing}
                      className={`text-[16px] text-[#fefefe] font-[500] leading-[24px] w-[100%] rounded-[8px] py-[16px] px-[20px] flex items-center justify-center ${
                        isPassed() ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#e0580c]'
                      } border ${isPassed() ? 'bg-gray-300' : 'border-[#e0580c]'}`}
                    >
                      Click to Register
                    </Button>
                  )}
                </>
              ) : (
                <Button
                  style={{
                    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                  }}
                  href="/auth/sign-in"
                  className="text-[16px] text-[#fefefe] font-[500] leading-[24px] w-[100%] rounded-[8px] py-[16px] px-[20px] flex items-center justify-center bg-[#e0580c] border border-[#e0580c] "
                >
                  Sign In to Register
                </Button>
              )}
            </div>
            {isRegistered() && (
              <div className="pt-2">
                <Button
                  style={{
                    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                  }}
                  className="text-[16px] text-[#fefefe] font-[500] leading-[24px] w-[100%] rounded-[8px] py-[16px] px-[20px] flex items-center justify-center bg-[#e0580c] border border-[#e0580c] "
                >
                  <Ticket />
                  View Ticket
                </Button>
                <div className="w-full rounded-md p-4 mt-2 flex justify-between items-center border border-[#e0580c]">
                  {/* React Share icons */}

                  <FacebookShareButton
                    url={eventLink}
                    className="text-[#e0580c] hover:text-[#FF8A65] cursor-pointer ml-4 animate-bounce"
                  >
                    <FacebookIcon size={40} round={true} />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={eventLink}
                    className="text-[#e0580c] hover:text-[#FF8A65] cursor-pointer ml-4 animate-bounce"
                  >
                    <XIcon size={40} round={true} />
                  </TwitterShareButton>
                  <LinkedinShareButton
                    url={eventLink}
                    className="text-[#e0580c] hover:text-[#FF8A65] cursor-pointer ml-4 animate-bounce"
                  >
                    <LinkedinIcon size={40} round={true} />
                  </LinkedinShareButton>
                  <WhatsappShareButton
                    url={eventLink}
                    className="text-[#e0580c] hover:text-[#FF8A65] cursor-pointer ml-4 animate-bounce"
                  >
                    <WhatsappIcon size={40} round={true} />
                  </WhatsappShareButton>

                  <button
                    className="transition-all ease-in-out duration-500 animate-bounce"
                    title="Copy event link"
                    onClick={handleButtonClick}
                  >
                    <FaShareAlt color="#FF8A65" size={24} />
                  </button>

                  {/* You can add more social icons as needed */}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-4 pt-3">
          <h4 className="text-[18px] pt-4 pb-4 sm:text-[24px] font-[500] leading-[32px] text-[#000] ">
            About this event
          </h4>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
      {!userId && <Homefooter />}
      <SignIn isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Index;
