import React from 'react';
import Switch from '../Switch';
import { Calendar, ArrowDown2 } from 'iconsax-react';

function Regional() {
  return (
    <div className="flex flex-col gap-9">
      <div className={`space-y-2`}>
        <h3 className="text-Grey-G700 text-xl font-medium">Regional</h3>
        <p className="text-Grey-G100 text-sm">
          Set Time and Date manually or turn on toggle to automatically sync them to your device location
        </p>
      </div>
      <div className="flex items-center justify-between border-b border-b-Grey-G40 pb-7">
        <p className="font-medium text-Grey-G600">Automatically sync with location</p>
        <Switch defaultValue />
      </div>
      <div className="flex flex-col gap-2 -mt-2">
        <p className="font-medium text-Grey-G600">Location - Time zone</p>
        <div className="w-full h-[3.5rem] flex items-center justify-between px-4 rounded-lg border border-Grey-G60 bg-Grey-G20">
          <div>Nigeria - GMT+1</div>
          <ArrowDown2 size={20} color="#868686" />
        </div>
      </div>
      <div className="mt-5">
        <div className="flex flex-col gap-2">
          <p className="text-Grey-600 font-medium">Date</p>
          <div className="w-full h-[3.5rem] flex items-center justify-between px-4 rounded-lg border border-Grey-G60 bg-Grey-G20">
            <div>19-11-2023</div>
            <Calendar size={24} color="#3C3C3C" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Regional;
