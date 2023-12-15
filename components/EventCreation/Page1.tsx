import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import Link from 'next/link';
import { EventDataProps } from '@/@types';
import { Input } from '../ui/NewInput';
import DateDropDown from './dateDropDown/dateDropDown';
import TimeDropDown from './timeDropDown/timeDropDown';
import ItemDropDown from './itemDropDown/itemDropDown';
import TextEditor from '../textEditor/textEditor';
import { staticSuggestions } from './staticLocations';

interface Page1Props {
  onNext: () => void;
  data: EventDataProps;
  setState: Dispatch<SetStateAction<EventDataProps>>;
  descriptionContent: string;
  setDescriptionContent: Dispatch<SetStateAction<string>>;
}

const Page1: React.FC<Page1Props> = ({ onNext, data, setState, descriptionContent, setDescriptionContent }) => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | undefined>(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState<Date | undefined>(new Date());
  const isAllInputFilled =
    data.title === '' ||
    descriptionContent === '' ||
    data.startDate === '' ||
    data.startTime === '' ||
    data.endTime === '' ||
    data.endDate === '' ||
    (data.eventType === 'Physical' && data.location === '') ||
    (data.eventType === 'Virtual' && data.virtualLocationLink === '');

  useEffect(() => {
    if (!selectedStartDate) return;
    setState((prevState) => {
      return { ...prevState, startDate: new Date(selectedStartDate).toISOString() };
    });
  }, [selectedStartDate]);

  useEffect(() => {
    if (!selectedEndDate) return;
    setState((prevState) => {
      return { ...prevState, endDate: new Date(selectedEndDate).toISOString() };
    });
  }, [selectedEndDate]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, id } = e.target;
    setState((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  return (
    <>
      <section className="page-1 event-dashboard w-full lg:px-[0px] md:px-0 max-sm:px-0 py-4 ">
        <div className="w-full flex flex-col border-[1px] border-[#d7d7d7] rounded-3xl p-10 max-sm:p-0 max-sm:border-none shadow-xl max-sm:shadow-none">
          <div className="event-name w-full ">
            <Input
              className="w-full focus:outline-1 font-medium rounded-lg focus:border-primary-100 active:outline-primary-100 border text-dark-100"
              placeholder="Event Name"
              type="text"
              id="title"
              value={data.title}
              onChange={handleChange}
              maxLength={50}
            />
          </div>
          <TextEditor descriptionContent={descriptionContent} setDescriptionContent={setDescriptionContent} />
          <div className="event-date w-full flex z-20 flex-col gap-2 border-[1px] p-4 border-[#d7d7d7] rounded-lg">
            <div className="flex max-sm:flex-col lg:content-center lg:items-center justify-between gap-1 z-[9999] md:items-center">
              <div className="w-[70px] text-xl font-semibold">Start</div>
              <div className=" w-full flex flex-row gap-1">
                <div className="w-full z-[9999]">
                  <DateDropDown
                    startDate={selectedStartDate}
                    setStartDate={setSelectedStartDate}
                    fromDate={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())}
                  />
                </div>
                <div className="w-full">
                  <TimeDropDown stateData={data} setStateData={setState} type="startTime" />
                </div>
              </div>
            </div>
            <div className="flex max-sm:flex-col lg:content-center lg:items-center justify-between gap-1 md:items-center">
              <div className="w-[70px] text-xl font-semibold">End</div>
              <div className="w-full flex flex-row gap-1">
                <div className="w-full">
                  <DateDropDown
                    startDate={selectedEndDate}
                    setStartDate={setSelectedEndDate}
                    fromDate={
                      selectedStartDate
                        ? new Date(
                            new Date(selectedStartDate).getFullYear(),
                            new Date().getMonth(),
                            new Date().getDate(),
                          )
                        : new Date()
                    }
                  />
                </div>
                <div className="w-full">
                  <TimeDropDown stateData={data} setStateData={setState} type="endTime" />
                </div>
              </div>
            </div>
          </div>

          <ItemDropDown data={data} setState={setState} handleChange={handleChange} />

          <button
            onClick={onNext}
            className="text-center text-[#fdfdfd] text-base leading-6 py-4 px-5 bg-[#e0580c] rounded-lg font-semibold disabled:bg-gray-alt disabled:cursor-not-allowed"
            disabled={isAllInputFilled}
          >
            Next
          </button>
          <Link href={'/event-dashboard'}>
            <button className="w-full text-center text-[#e0580c] text-base leading-6 py-4 px-5 bg-[#fdfdfd] border-[1px] border-[#e0580c] font-semibold mt-3 rounded-lg">
              Go back
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Page1;
