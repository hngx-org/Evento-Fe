import { EventDataProps } from '@/@types';
import Button from '@/components/ui/NewButton';
import { ArrowDown2 } from 'iconsax-react';
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { DayPicker, SelectSingleEventHandler } from 'react-day-picker';
import { FaAngleDown } from 'react-icons/fa6';

interface Props {
  fromDate: Date;
  startDate: Date | undefined;
  id: string;
  setState: Dispatch<SetStateAction<EventDataProps>>;
}

function DateDropDown({ startDate, fromDate, id, setState }: Props) {
  const [showDate, setShowDate] = useState<boolean>(false);
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (!wrapper.current?.contains(e.target)) {
        setShowDate(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => removeEventListener('click', handleClick);
  }, []);

  console.log;

  function convertDate() {
    return startDate?.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  }

  const dateSelector = (date: any) => {
    if (!date) return;
    setState((prevState) => {
      return { ...prevState, [id]: date };
    });
    setShowDate(false);
  };

  return (
    <div className="relative" ref={wrapper}>
      <button
        onClick={() => setShowDate((prevState) => !prevState)}
        className="border border-Grey-G40 rounded-lg p-3 text-Grey-G600 font-medium w-full flex justify-between"
      >
        <span className="mr-auto">{convertDate()}</span>
        <ArrowDown2 className="ml-auto" />
      </button>
      {showDate && (
        <div className="absolute bg-white-100 z-50 shadow-md">
          <DayPicker
            showOutsideDays
            mode="single"
            selected={startDate}
            onSelect={dateSelector}
            fromDate={fromDate}
            toDate={new Date(new Date().getFullYear() + 2, new Date().getMonth(), new Date().getDate())}
          />
        </div>
      )}
    </div>
  );
}

export default DateDropDown;
