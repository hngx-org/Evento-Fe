import React, { useState } from 'react';
import Button from '../ui/NewButton';
import { CloseCircle } from 'iconsax-react';

interface Props {
  filterObject: string[];
  setFilterObject: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterTray: React.FC<Props> = ({ filterObject, setFilterObject }) => {
  const removeFilter = (indexToRemove: number) => {
    const updatedFilters = filterObject.filter((_, index) => index !== indexToRemove);
    setFilterObject(updatedFilters);
  };

  return (
    <div className="mt-6  w-full  flex items-center flex-row gap-x-4 gap-y-4 text-[#E0580C] text-[14px] font-semibold flex-wrap ">
      {filterObject.map((filt, index) => (
        <div
          key={index}
          className="text-[#E0580C] bg-secondary-100 text-[14px] max-h-10 h-10 items-center flex gap-x-2 rounded-lg px-3 whitespace-nowrap flex-nowrap"
        >
          {filt}{' '}
          <CloseCircle
            size="24"
            color="#E0580C"
            className="hover:scale-105 cursor-pointer"
            onClick={() => removeFilter(index)}
          />
        </div>
      ))}
      {filterObject.length > 0 && (
        <span className="hover:scale-105 cursor-pointer" onClick={() => setFilterObject([])}>
          Clear All
        </span>
      )}
    </div>
  );
};

export default FilterTray;
