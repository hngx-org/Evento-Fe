import { ArrowDown2, ArrowUp2 } from 'iconsax-react';
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { CategoryProps, EventDataProps, UploadResponse } from '@/@types';

interface TicketType {
  [x: string]: SetStateAction<string>;
  label: 'Free' | 'Premium';
}

interface Props {
  data: EventDataProps;
  setState: Dispatch<SetStateAction<EventDataProps>>;
}

function TicketTypeDropDown({ data, setState }: Props) {
  const [isDropdownTicketTypeOpen, setIsDropdownTicketTypeOpen] = useState(false);
  const handleDropdownTicketToggle = () => {
    setIsDropdownTicketTypeOpen(!isDropdownTicketTypeOpen);
  };

  const handleTicketTypeSelect = (ticket: 'Free' | 'Premium') => {
    setState((prevState) => {
      return { ...prevState, ticketType: ticket };
    });

    // Close the dropdown
    setIsDropdownTicketTypeOpen(false);
  };

  const ticketTypes: TicketType[] = [
    { label: 'Free', price: '0' },
    { label: 'Premium', price: '$100' },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  return (
    <>
      <div className="w-full relative flex flex-col mb-6 content-center">
        <h2 className=" font-semibold text-xl mb-2 leading-6 text-[#303030]">Ticket type</h2>
        <div className="relative inline-block w-full">
          <input
            className="w-full rounded-lg border-[1px] border-[#d7d7d7] placeholder-[#b1b1b1] focus:outline-[#ddab8f] placeholder:font-semibold p-4 text-base font-bold cursor-pointer"
            placeholder="Select Ticket type"
            type="text"
            value={data.ticketType}
            onClick={handleDropdownTicketToggle}
            readOnly
          />
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
            onClick={handleDropdownTicketToggle}
          >
            {/* Toggle between the down and up arrow based on the isDropdownOpen state */}
            {isDropdownTicketTypeOpen ? <ArrowUp2 size={16} /> : <ArrowDown2 size={16} />}
          </div>

          {/* Dropdown Modal */}
          {isDropdownTicketTypeOpen && (
            <div className="absolute w-full top-full z-50 p-2 left-0 mt-2 bg-[#fefefe] border border-[#d7d7d7]  rounded-lg overflow-hidden">
              {ticketTypes.map((ticketType) => (
                <div
                  key={ticketType.label}
                  className=" px-4 py-2 hover:bg-[#dedede] rounded-lg cursor-pointer"
                  onClick={() => handleTicketTypeSelect(ticketType.label)}
                >
                  <div className="mb-1 font-bold text-base text-[#020202]">{ticketType.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Second Div - Displayed only when 'Premium' is selected */}
      {data.ticketType === 'Premium' && (
        <div className="w-full relative flex flex-col mb-10 content-center">
          <label htmlFor="entranceFee" className="font-semibold text-xl mb-2 leading-6 text-[#303030]">
            Price
          </label>
          <input
            id="entranceFee"
            className="w-full rounded-lg border-[1px] border-[#d7d7d7] placeholder-[#b1b1b1] focus:outline-[#ddab8f] placeholder:font-semibold p-4 text-base font-bold"
            placeholder=""
            type="text"
            onChange={handleChange}
            value={data.entranceFee}
          />
        </div>
      )}
    </>
  );
}

export default TicketTypeDropDown;
