import { EventDataProps } from '@/@types';
import { ArrowDown2, ArrowUp2 } from 'iconsax-react';
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { staticSuggestions } from '../staticLocations';

interface Props {
  setState: Dispatch<SetStateAction<EventDataProps>>;
  data: EventDataProps;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function ItemDropDown({ data, setState, handleChange }: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

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

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLocationTypeSelect = (selectedType: { label: any; value: any }) => {
    setState((prevState) => {
      return { ...prevState, locationType: selectedType.label };
    });

    // Close the dropdown
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="event-location my-6 w-full flex flex-col content-center">
        <h2 className=" font-semibold leading-6 text-xl text-[#303030]">Add Location</h2>
        <div className="relative mt-2 inline-block w-full">
          <input
            className="w-full rounded-lg border-[1px] border-[#d7d7d7] placeholder-[#b1b1b1] focus:outline-[#ddab8f] text-base text-[#303030] font-medium p-4 cursor-pointer"
            placeholder="Choose event location"
            type="text"
            value={data.locationType}
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
          </div>
        </div>
      )}
    </>
  );
}

export default ItemDropDown;
