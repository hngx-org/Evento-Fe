import { EventDataProps } from '@/@types';
import Button from '@/components/ui/NewButton';
import { ArrowDown2 } from 'iconsax-react';
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

interface Props {
  stateData: EventDataProps;
  setStateData: Dispatch<SetStateAction<EventDataProps>>;
  type: 'startTime' | 'endTime';
}

function TimeDropDown({ stateData, setStateData, type }: Props) {
  const [showTime, setShowTime] = useState<boolean>(false);
  const timeList: string[] = [
    '1:00',
    '1:30',
    '2:00',
    '2:30',
    '3:00',
    '3:30',
    '4:00',
    '4:30',
    '5:00',
    '5:30',
    '6:00',
    '6:30',
    '7:00',
    '7:30',
    '8:00',
    '8:30',
    '9:00',
    '9:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
    '22:30',
    '23:00',
    '23:30',
  ];
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (!wrapper.current?.contains(e.target)) {
        setShowTime(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => removeEventListener('click', handleClick);
  }, []);

  const selectTime = (time: string) => {
    setStateData((prevItem) => {
      return { ...prevItem, [type]: time };
    });
    setShowTime(false);
  };

  const formatTime = () => {
    const hours = parseInt(stateData[type].substring(0, 2), 10);
    const isPM = hours >= 12;
    const ampm = isPM ? 'PM' : 'AM';
    return `${hours % 12 || 12}:${stateData[type].substring(2)} ${ampm}`;
  };
  return (
    <div ref={wrapper} className="relative">
      <button
        onClick={() => setShowTime((prevState) => !prevState)}
        className="border border-Grey-G40 rounded-lg p-3 text-Grey-G600 font-medium w-full flex justify-between"
      >
        <span className="mr-auto">{formatTime().replace('::', ':')}</span>
        <ArrowDown2 className="ml-auto" />
      </button>
      {showTime && (
        <div className="absolute shadow-md">
          <ul className="max-h-[200px] overflow-scroll bg-white-100 z-[9999]">
            {timeList.map((item, index) => {
              return (
                <li key={index} className={`text-center block font-bold `}>
                  <Button
                    className={
                      stateData[type] === item ? ' bg-primary-100 text-white-100 rounded-lg' : 'text-Grey-G900'
                    }
                    onClick={() => selectTime(item)}
                  >
                    {item}
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TimeDropDown;
