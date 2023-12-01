import React, { PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';

import AuthenticatedHeader from '@/components/components/authenticatedheader';
import Page1 from '@/components/EventCreation/Page1';
import Page2 from '@/components/EventCreation/Page2';
import Page3 from '@/components/EventCreation/Page3';
import { EventDataProps } from '@/@types';

interface Props {}

interface CreateEventsProps extends PropsWithChildren<any> {
  onNext: () => void;
  onPrevious: () => void;
}

const CreateEvents: React.FC<CreateEventsProps> = (props) => {
  const [eventData, setEventData] = useState<EventDataProps>({
    title: '',
    description: '',
    imageURL: '/Create-Events/Event_Image.svg',
    startDate: '',
    endDate: '',
    time: '',
    location: '',
    capacity: '',
    entranceFee: 0,
    eventType: '',
    organizerID: '',
    categoryName: '',
    startTime: '',
    endTime: '',
    liveLink: '',
  });
  const [page, setPage] = useState(1);
  const [completedSteps, setCompletedSteps] = useState(0);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  function progress() {
    switch (page) {
      case 1:
        return 'w-1/2';
        break;
      case 2:
        return 'w-3/4';
        break;
      case 3:
        return 'w-full';
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <AuthenticatedHeader />
      <div className=" w-full content-center justify-center  lg:px-[350px] max-sm:px-5 md:px-5 py-10  flex  flex-col">
        <div className="progress-bar lg:px-[0px] md:px-0 max-sm:px-0 w-full flex flex-col">
          <div className="w-full">
            <p className="mb-3 font-medium">Progress</p>
            <div className="h-2 w-full rounded-lg bg-Grey-G30 overflow-hidden">
              <div className={`h-full bg-Success-S400 rounded-lg ${progress()}`} />
            </div>
          </div>
          {page === 1 && <Page1 onNext={nextPage} data={eventData} setState={setEventData} />}
          {page === 2 && <Page2 onNext={nextPage} onPrevious={prevPage} data={eventData} setState={setEventData} />}
          {page === 3 && <Page3 onNext={nextPage} onPrevious={prevPage} />}
        </div>
      </div>
    </div>
  );
};

export default CreateEvents;
