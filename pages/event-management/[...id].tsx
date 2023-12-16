import { EventManagement } from '@/@types';
import HomeFooter from '@/components/Home/homefooter';
import Homenav from '@/components/Home/homenav';
import AuthenticatedHeader from '@/components/components/authenticatedheader';
import EditEventModal from '@/components/components/modal/EditEventModal';
import { eventDetails } from '@/http/events';
import { getStoredUserId } from '@/http/getToken';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useQuery } from 'react-query';

function Edit() {
  const router = useRouter();
  const id = router.query?.id![0];
  const userId = getStoredUserId();

  const { data, isLoading, error } = useQuery('get-event-details', () => {
    if (!router.query.id) return;
    return eventDetails(id);
  });

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
    <div className=" space-y-8">
      {userId ? <AuthenticatedHeader /> : <Homenav />}
      <EditEventModal eventDetails={event} />
    </div>
  );
}

export default Edit;
