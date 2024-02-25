import { PreferencesProps } from '@/@types';
import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa6';

function Checkbox({ handleClick, enabled, slug }: { handleClick: Function; enabled: boolean; slug: string }) {
  return (
    <div
      className={`w-6 h-6 rounded-md ${slug ? 'cursor-pointer' : 'pointer-events-none bg-Grey-G20'} ${
        enabled ? 'bg-primary-100 border border-primary-100' : 'border border-Grey-G50'
      } flex items-center justify-center`}
      onClick={() => handleClick()}
    >
      {enabled && <FaCheck size={15} color="white" />}
    </div>
  );
}

export default Checkbox;
