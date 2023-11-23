import React from 'react';
import Select from '../Select';

const languages = [
  {
    name: 'English (UK)',
  },
  {
    name: 'English (US)',
  },
  {
    name: 'French',
  },
  {
    name: 'German',
  },
  {
    name: 'Italian',
  },
];

function Language() {
  return (
    <div className="flex flex-col gap-9">
      <div className={`space-y-2`}>
        <h3 className="text-Grey-G700 text-xl font-medium">Language</h3>
        <p className="text-Grey-G100 text-sm">Select the language contents will be written in</p>
      </div>
      <div>
        <Select options={languages} color="light" type="normal" />
      </div>
    </div>
  );
}

export default Language;
