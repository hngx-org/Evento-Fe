import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import Link from 'next/link';
import { EventDataProps } from '@/@types';
import { Input } from '../ui/NewInput';
import 'react-quill/dist/quill.snow.css';
import 'react-day-picker/dist/style.css';
import DateDropDown from './dateDropDown/dateDropDown';
import TimeDropDown from './timeDropDown/timeDropDown';
import ItemDropDown from './itemDropDown/itemDropDown';
import dynamic from 'next/dynamic';
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

interface Page1Props {
  onNext: () => void;
  data: EventDataProps;
  setState: Dispatch<SetStateAction<EventDataProps>>;
  descriptionContent: string;
  setDescriptionContent: Dispatch<SetStateAction<string>>;
}

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { header: '3' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link'],
  ],
  clipboard: {
    matchVisual: false,
  },
};

// For demonstration purposes, let's use a static list of suggestions
const staticSuggestions = [
  'Lagos, Nigeria',
  'Abuja, Nigeria',
  'New York, USA',
  'Tokyo, Japan',
  'London, UK',
  'Paris, France',
  'Berlin, Germany',
  'Sydney, Australia',
  'Beijing, China',
  'Mumbai, India',
  'Cairo, Egypt',
  'Cape Town, South Africa',
  'Moscow, Russia',
  'Rio de Janeiro, Brazil',
  'Toronto, Canada',
  'Mexico City, Mexico',
  'Dubai, UAE',
  'Seoul, South Korea',
  'Hanoi, Vietnam',
  'Bangkok, Thailand',
  'Singapore',
  'Rome, Italy',
  'Barcelona, Spain',
  'Athens, Greece',
  'Istanbul, Turkey',
  'Nairobi, Kenya',
  'Buenos Aires, Argentina',
  'Lima, Peru',
  'Auckland, New Zealand',
  'Stockholm, Sweden',
  'Oslo, Norway',
  'Copenhagen, Denmark',
  'Helsinki, Finland',
  'Amsterdam, Netherlands',
  'Brussels, Belgium',
  'Vienna, Austria',
  'Zurich, Switzerland',
  'Dublin, Ireland',
  'Warsaw, Poland',
  'Prague, Czech Republic',
  'Budapest, Hungary',
  'Lisbon, Portugal',
  'Madrid, Spain',
  'Edinburgh, Scotland',
  'Cardiff, Wales',
  'Belfast, Northern Ireland',
  'Ankara, Turkey',
  'Jerusalem, Israel',
  'Copenhagen, Denmark',
  'Stockholm, Sweden',
  'Oslo, Norway',
  'Helsinki, Finland',
  'Amsterdam, Netherlands',
  'Brussels, Belgium',
  'Vienna, Austria',
  'Zurich, Switzerland',
  'Dublin, Ireland',
  'Warsaw, Poland',
  'Prague, Czech Republic',
  'Budapest, Hungary',
  'Lisbon, Portugal',
  'Madrid, Spain',
  'Edinburgh, Scotland',
  'Cardiff, Wales',
  'Belfast, Northern Ireland',
  'Ankara, Turkey',
  'Jerusalem, Israel',
  'Ado-Ekiti, Nigeria',
  // Add more as needed
];

const Page1: React.FC<Page1Props> = ({ onNext, data, setState, descriptionContent, setDescriptionContent }) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
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

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { value, id } = e.target;
    setState((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);

    // Filter suggestions based on input value
    const filteredSuggestions = staticSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(data.location.toLowerCase()),
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setState((prevState) => {
      return { ...prevState, location: suggestion };
    });
    setSuggestions([]);
  };

  const locationTypes = [
    { label: 'Physical', value: 'Physical' },
    { label: 'Virtual', value: 'Virtual' },
  ];

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
          <div className="event-description w-full my-6 h-64">
            <QuillNoSSRWrapper
              value={descriptionContent}
              onChange={setDescriptionContent}
              modules={modules}
              theme="snow"
              className="h-[190px]"
            />
          </div>
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

          <ItemDropDown value={data.locationType} setState={setState} locationTypes={locationTypes} />

          {/* If location type is virtual, render link input, else render location input */}
          {data.locationType === 'Virtual' ? (
            <div className="virtual-link mb-6 w-full flex-col content-center">
              <h2 className="font-semibold leading-6 text-xl text-[#303030]">Enter Link</h2>
              <div className="relative mt-2 inline-block w-full">
                <input
                  className="w-full rounded-lg border-[1px] border-[#d7d7d7] placeholder-[#b1b1b1] focus:outline-[#ddab8f] text-base text-[#303030] font-medium p-4"
                  placeholder="www.qwertyuiop[.url"
                  type="url"
                  id="virtualLocationLink"
                  value={data.virtualLocationLink}
                  onChange={handleChange}
                />
              </div>
            </div>
          ) : (
            <div className="enter-location mb-10 w-full flex flex-col content-center">
              <h2 className="font-semibold leading-6 text-xl text-[#303030]">Enter Location</h2>
              <div className="relative mt-2 inline-block w-full">
                <input
                  className="w-full rounded-lg border-[1px] border-[#d7d7d7] placeholder-[#b1b1b1] focus:outline-[#ddab8f] text-base text-[#303030] font-medium p-4"
                  placeholder="Lagos state, Nigeria"
                  type="text"
                  id="location"
                  value={data.location}
                  onChange={handleInput}
                />
                {suggestions.length > 0 && (
                  <div className="autocomplete-items absolute p-2 border-[1px] mt-2 border-[#d7d7d7] rounded-lg  w-full bg-[#fefefe] max-h-56 overflow-scroll">
                    {suggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        className="autocomplete-item p-2 text-sm cursor-pointer  hover:bg-[#dedede] rounded-lg"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion}
                      </div>
                    ))}
                  </div>
                )}
                {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer">
                      {isDropdownOpen ? <ArrowUp2 size={16} /> : <ArrowDown2 size={16} />}
                    </div> */}
              </div>
            </div>
          )}
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
