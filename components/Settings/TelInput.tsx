import React from 'react';
import Select from './Select';

const tel = [
  {
    name: '(+234)',
  },
  {
    name: '(+49)',
  },
  {
    name: '(+81)',
  },
  {
    name: '(+86)',
  },
];

function TelInput() {
  return (
    <div className="space-y-1">
      <p className="text-Grey-G600 font-medium">Phone Number</p>
      <div className="w-full h-14 flex items-center">
        <div className="w-[18%] shrink-0">
          <Select type="tel" color="light" options={tel} />
        </div>
        <div className="w-full mt-1">
          <input
            type="text"
            className="rounded-r-lg w-full h-14 bg-white-N0 outline-none border-y border-y-Grey-G60 border-r border-r-Grey-G60 px-3 font-medium text-base text-gray-500 placeholder:text-Grey-G50"
            placeholder="812 3456 879"
          />
        </div>
      </div>
    </div>
  );
}

export default TelInput;
