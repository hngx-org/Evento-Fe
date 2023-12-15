import Page3 from '@/components/EventCreation/Page3';
import AuthenticatedHeader from '@/components/components/authenticatedheader';
import { useRouter } from 'next/router';
import React from 'react';

function EventSuccess() {
  const router = useRouter();
  const eventId = router.query.id;
  return (
    <div>
      <AuthenticatedHeader />
      <div className=" w-full content-center justify-center  max-sm:px-5 md:px-5 py-10  flex  flex-col">
        <div className="mx-auto max-w-2xl w-full">
          <div className="progress-bar lg:px-[0px] md:px-0 max-sm:px-0 w-full flex flex-col">
            <div className="w-full">
              <p className="mb-3 font-medium">Progress</p>
              <div className="h-2 w-full rounded-lg bg-Grey-G30 overflow-hidden">
                <div className={`h-full bg-Success-S400 rounded-lg w-full`} />
              </div>
            </div>
            <Page3 eventId={eventId || ''} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventSuccess;
