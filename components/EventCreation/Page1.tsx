import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

import { ArrowDown2, ArrowUp2 } from 'iconsax-react';
import Link from 'next/link';
import { EventDataProps } from '@/@types';

interface Page1Props {
  onNext: () => void;
  data: EventDataProps;
  setState: Dispatch<SetStateAction<EventDataProps>>;
}

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
  // Add more as needed
];

const Page1: React.FC<Page1Props> = ({ onNext, data, setState }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSecondContainerVisible, setIsSecondContainerVisible] = useState(false);
  const [isThirdDivVisible, setIsThirdDivVisible] = useState(true);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    setState((prevState) => {
      // if((id === "title" && data.title.length > 30) || (id === "description" && data.description.length > 100)){}
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
    // Add more location types as needed
  ];

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLocationTypeSelect = (selectedType: { label: any; value: any }) => {
    setState((prevState) => {
      return { ...prevState, eventType: selectedType.label };
    });
    // Show/hide the second div based on the selected type
    setIsSecondContainerVisible(selectedType.value === 'Virtual');
    // Show/hide the third div based on the selected type
    setIsThirdDivVisible(selectedType.value !== 'Virtual');

    // Close the dropdown
    setIsDropdownOpen(false);
  };

  const nextPage = () => {};

  return (
    <>
      <section className="page-1 event-dashboard w-full lg:px-[0px] md:px-0 max-sm:px-0 py-4 ">
        <div className="w-full flex flex-col border-[1px] border-[#d7d7d7] rounded-3xl p-10 max-sm:p-0 max-sm:border-none shadow-xl max-sm:shadow-none">
          <div className="event-name w-full ">
            <input
              className="w-full border-[1px] py-[54px] max-sm:py-5 px-4 border-[#d7d7d7] rounded-lg font-semibold text-[32px] max-sm:text-xl leading-10 text-[#020202] placeholder-[#848383] focus:outline-[#ddab8f] focus:placeholder-transparent"
              placeholder="Event Name"
              type="text"
              id="title"
              value={data.title}
              onChange={handleChange}
              maxLength={30}
            />
          </div>
          <div className="event-description w-full my-6">
            <input
              className="w-full border-[1px] py-[32px] px-4 border-[#d7d7d7] rounded-lg font-semibold text-xl leading-7 text-[#020202] placeholder-[#848383] focus:outline-[#ddab8f] focus:placeholder-transparent"
              placeholder="Description"
              type="text"
              id="description"
              value={data.description}
              onChange={handleChange}
              maxLength={100}
            />
          </div>
          <div className="event-date w-full flex flex-col gap-2 border-[1px] p-4 border-[#d7d7d7] rounded-lg">
            <div className="flex max-sm:flex-col lg:content-center lg:items-center justify-between gap-1">
              <div className="w-[70px] text-xl font-semibold">Start</div>
              <div className=" w-full flex flex-row gap-1">
                <div className="w-full">
                  <input
                    className="w-full text-sm border-[#d7d7d7] px-2 py-3 rounded-lg border-[1px] placeholder-[#848383] focus:outline-[#ddab8f] "
                    placeholder="Wed, Oct, 08"
                    type="date"
                    id="startDate"
                    value={data.startDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <input
                    className="border-[#d7d7d7] w-full text-sm px-2 py-3 border-[1px] rounded-lg placeholder-[#848383] focus:outline-[#ddab8f]"
                    placeholder="Wed, Oct, 08"
                    type="time"
                    id="startTime"
                    value={data.startTime}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex max-sm:flex-col lg:content-center lg:items-center justify-between gap-1">
              <div className="w-[70px] text-xl font-semibold">End</div>
              <div className="w-full flex flex-row gap-1">
                <div className="w-full">
                  <input
                    className="w-full text-sm border-[#d7d7d7] px-2 py-3 rounded-lg border-[1px] placeholder-[#848383] focus:outline-[#ddab8f]"
                    placeholder="Wed, Oct, 08"
                    type="date"
                    id="endDate"
                    value={data.endDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <input
                    className="w-full border-[#d7d7d7] text-sm px-2 py-3 border-[1px] rounded-lg placeholder-[#848383] focus:outline-[#ddab8f]"
                    placeholder="Wed, Oct, 08"
                    type="time"
                    value={data.endTime}
                    id="endTime"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="event-location my-6 w-full flex flex-col content-center">
            <h2 className=" font-semibold leading-6 text-xl text-[#303030]">Add Location</h2>
            <div className="relative mt-2 inline-block w-full">
              <input
                className="w-full rounded-lg border-[1px] border-[#d7d7d7] placeholder-[#b1b1b1] focus:outline-[#ddab8f] text-base text-[#303030] font-medium p-4 cursor-pointer"
                placeholder="Choose event location"
                type="text"
                value={data.eventType}
                readOnly
                onClick={handleDropdownToggle}
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                onClick={handleDropdownToggle}
              >
                {/* Toggle between the down and up arrow based on the isDropdownOpen state */}
                {isDropdownOpen ? <ArrowUp2 size={16} /> : <ArrowDown2 size={16} />}
              </div>

              {/* Dropdown Modal */}
              {isDropdownOpen && (
                <div className="absolute w-full top-full z-50 p-2 left-0 mt-2 bg-[#fefefe] border border-[#d7d7d7] rounded-lg overflow-hidden">
                  {locationTypes.map((locationType) => (
                    <div
                      key={locationType.label}
                      className="px-4 py-2 hover:bg-[#dedede] rounded-lg cursor-pointer"
                      onClick={() => handleLocationTypeSelect(locationType)}
                    >
                      <div className="mb-1 text-base font-bold text-[#020202]">{locationType.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Second Div - Displayed only when 'Virtual' is selected */}
          {isSecondContainerVisible && (
            <div className="virtual-link mb-6 w-full flex-col content-center">
              <h2 className="font-semibold leading-6 text-xl text-[#303030]">Enter Link</h2>
              <div className="relative mt-2 inline-block w-full">
                <input
                  className="w-full rounded-lg border-[1px] border-[#d7d7d7] placeholder-[#b1b1b1] focus:outline-[#ddab8f] text-base text-[#303030] font-medium p-4"
                  placeholder="www.qwertyuiop[.url"
                  type="url"
                  id="liveLink"
                  value={data.liveLink}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          {/* Third Div - Displayed by default, hidden when 'Virtual' is selected */}
          {isThirdDivVisible && (
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
                  <div className="autocomplete-items absolute p-2 border-[1px] mt-2 border-[#d7d7d7] rounded-lg  w-full bg-[#fefefe]">
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
            className=" text-center text-[#fdfdfd] text-base leading-6 py-4 px-5 bg-[#e0580c] rounded-lg font-semibold"
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
