import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ArrowDown2 } from 'iconsax-react';
import { MdCheck } from 'react-icons/md';
import { Select } from '@/@types';

function Select({ options, color, type = 'normal', selected, setSelected, handleSelect }: Select) {
  return (
    <div className={`w-full h-14`}>
      <Listbox value={selected} onChange={(e) => handleSelect(e)}>
        <div className="relative mt-1">
          <Listbox.Button
            className={`w-full h-14 cursor-default ${type === 'normal' ? 'rounded-lg' : 'rounded-l-lg'} ${
              color === 'light' ? 'bg-white-N0' : 'bg-Grey-G20'
            } border border-Grey-G60 pl-4 text-left`}
          >
            <span className={`${type === 'normal' ? 'text-Grey-G50' : 'text-Grey-G600'} font-medium text-base`}>
              {selected?.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <ArrowDown2 color="#868686" size={type === 'normal' ? 20 : 24} aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white-N0 py-1 text-base shadow-lg border border-Grey-G60 focus:outline-none sm:text-sm z-20">
              {options.map((option, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-secondary-100 text-[#333]' : 'text-gray-900'
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {option.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-100">
                          <MdCheck size={20} aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default Select;
