import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa6';

function Checkbox() {
  const [enabled, setEnabled] = useState(false);
  return (
    <div
      className={`w-6 h-6 rounded-md cursor-pointer ${
        enabled ? 'bg-primary-100 border border-primary-100' : 'border border-Grey-G50'
      } flex items-center justify-center`}
      onClick={() => setEnabled(enabled ? false : true)}
    >
      {enabled && <FaCheck size={15} color="white" />}
    </div>
  );
}

export default Checkbox;
