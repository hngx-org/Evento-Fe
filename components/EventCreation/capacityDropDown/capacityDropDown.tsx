import { EventDataProps } from '@/@types';
import { ArrowDown2, ArrowUp2 } from 'iconsax-react';
import React, { Dispatch, SetStateAction, useState } from 'react';

interface CapacityType {
  label: string;
}

interface Props {
  data: EventDataProps;
  setState: Dispatch<SetStateAction<EventDataProps>>;
}

function CapacityDropDown({ data, setState }: Props) {
  const [isDropdownCapacityOpen, setIsDropdownCapacityOpen] = useState(false);
  const capacityTypes: CapacityType[] = [{ label: '50+' }, { label: '100+' }, { label: '200+' }, { label: '300+' }];

  const handleDropdownCapacityToggle = () => {
    setIsDropdownCapacityOpen(!isDropdownCapacityOpen);
  };

  const handleCapacitySelect = (capacityType: CapacityType) => {
    setState((prevState) => {
      return { ...prevState, capacity: capacityType.label };
    });
    setIsDropdownCapacityOpen(false);
  };

  return (
    <div className="w-full relative z-10 flex flex-col mb-6 content-center">
      <h2 className=" font-semibold text-xl mb-2 leading-6 text-[#303030]">Input capacity Level</h2>
      <div className="relative inline-block w-full">
        <input
          className="w-full rounded-lg border-[1px] border-[#d7d7d7] placeholder-[#b1b1b1] focus:outline-[#ddab8f] placeholder:font-semibold p-4 text-base font-bold cursor-pointer"
          placeholder="Choose capacity Limit"
          type="text"
          value={data.capacity}
          readOnly
          onClick={handleDropdownCapacityToggle}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer">
          {/* Toggle between the down and up arrow based on the isDropdownOpen state */}
          {isDropdownCapacityOpen ? <ArrowUp2 size={16} /> : <ArrowDown2 size={16} />}
        </div>

        {/* Dropdown Modal */}
        {isDropdownCapacityOpen && (
          <div className="absolute w-full top-full z-50 p-2 left-0 mt-2 bg-[#fefefe] border border-[#d7d7d7]  rounded-lg overflow-hidden">
            {capacityTypes.map((capacityType) => (
              <div
                key={capacityType.label}
                className=" px-4 py-2 hover:bg-[#dedede] rounded-lg cursor-pointer"
                onClick={() => handleCapacitySelect(capacityType)}
              >
                <div className="mb-1 font-bold text-base text-[#020202]">{capacityType.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CapacityDropDown;
