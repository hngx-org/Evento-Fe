import React from 'react';
import { ArrowRight2 } from 'iconsax-react';

const devices = [
  {
    id: 1,
    name: 'Android - Samsung z5',
  },
  {
    id: 2,
    name: 'Apple - Ipad 5th Gen',
  },
  {
    id: 3,
    name: 'Windows - Hp G5',
  },
];

function ManageDevices() {
  return (
    <div className={`flex flex-col gap-9 mt-4`}>
      <div className="space-y-2">
        <h3 className={`text-Grey-G700 text-xl font-medium`}>Manage Devices</h3>
        <p className="text-Grey-G100 text-sm w-[98%]">
          This displays a list of all devices currently signed in to your Evento Space. You can manage and control
          access by reviewing and logging out from any unfamiliar or unauthorized devices.
        </p>
      </div>
      <div className="space-y-8">
        {devices.map((device) => (
          <div key={device.id} className="flex items-center justify-between">
            <p className="text-Grey-G600">{device.name}</p>
            <div className="cursor-pointer">
              <ArrowRight2 size={24} color="#292D32" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageDevices;
