import React, { PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';

import AuthenticatedHeader from '@/components/components/authenticatedheader';
import Page1 from '@/components/EventCreation/Page1';
import Page2 from '@/components/EventCreation/Page2';
import Page3 from '@/components/EventCreation/Page3';
import { EventDataProps } from '@/@types';
import { createEvent } from '@/http/createeventapi';
import { getStoredUserId } from '@/http/getToken';

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
    entranceFee: '0',
    eventType: '',
    organizerID: '',
    categoryName: '',
    startTime: '12:30',
    endTime: '12:30',
    virtualLocationLink: '',
    locationType: 'Physical',
    ticketType: 'Free',
  });
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [otherCategory, setOtherCategory] = useState<string>('');
  const [descriptionContent, setDescriptionContent] = useState<string>('');
  const userId = getStoredUserId();

  const nextPage = async () => {
    if (page === 2) {
      const {
        title,
        description,
        imageURL,
        startDate,
        endDate,
        startTime,
        location,
        capacity,
        entranceFee,
        eventType,
        categoryName,
        locationType,
        ticketType,
      } = eventData;

      await createEvent(
        {
          title,
          description: descriptionContent,
          imageURL,
          startDate,
          endDate,
          locationType,
          time: startTime,
          location,
          virtualLocationLink: eventData?.virtualLocationLink,
          capacity: parseInt(capacity),
          eventType,
          organizerID: userId ?? '',
          categoryName: categoryName === 'other' ? otherCategory : categoryName,
          ticketType,
          ticketPrice: parseInt(entranceFee),
        },
        setIsLoading,
      );
      setPage(3);
      return;
    }
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  function progress() {
    switch (page) {
      case 1:
        return 'w-0';
        break;
      case 2:
        return 'w-1/2';
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
      <div className=" w-full content-center justify-center  max-sm:px-5 md:px-5 py-10  flex  flex-col">
        <div className="mx-auto max-w-2xl w-full">
          <div className="progress-bar lg:px-[0px] md:px-0 max-sm:px-0 w-full flex flex-col">
            <div className="w-full">
              <p className="mb-3 font-medium">Progress</p>
              <div className="h-2 w-full rounded-lg bg-Grey-G30 overflow-hidden">
                <div className={`h-full bg-Success-S400 rounded-lg ${progress()}`} />
              </div>
            </div>
            {page === 1 && (
              <Page1
                onNext={nextPage}
                data={eventData}
                setState={setEventData}
                descriptionContent={descriptionContent}
                setDescriptionContent={setDescriptionContent}
              />
            )}
            {page === 2 && (
              <Page2
                onNext={nextPage}
                onPrevious={prevPage}
                loadState={isLoading}
                data={eventData}
                setState={setEventData}
                otherCategory={otherCategory}
                setOtherCategory={setOtherCategory}
              />
            )}
            {page === 3 && <Page3 onNext={nextPage} onPrevious={prevPage} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvents;
