import { Montserrat, Nunito } from 'next/font/google';
import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const city: string[] = ['Lagos', 'Porthacourt', 'Abuja', 'Uyo', 'Enugu', 'Warri'];
const category: string[] = ['Tech', 'Career', 'Art', 'Concert', 'Business', 'Sports', 'Movies', 'Charity', 'Learning'];

function EventFilter() {
  const [filter, setFilter] = useState<string>('Filter Options');
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className={`${montserrat.className} text-white-100 bg-primary-100 rounded-lg py-2 px-3 text-xl font-medium flex items-center gap-1`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M5.3999 2.09998H18.5999C19.6999 2.09998 20.5999 2.99998 20.5999 4.09998V6.29998C20.5999 7.09998 20.0999 8.09998 19.5999 8.59998L15.2999 12.4C14.6999 12.9 14.2999 13.9 14.2999 14.7V19C14.2999 19.6 13.8999 20.4 13.3999 20.7L11.9999 21.6C10.6999 22.4 8.8999 21.5 8.8999 19.9V14.6C8.8999 13.9 8.4999 13 8.0999 12.5L4.2999 8.49998C3.7999 7.99998 3.3999 7.09998 3.3999 6.49998V4.19998C3.3999 2.99998 4.2999 2.09998 5.3999 2.09998Z"
            stroke="#FEFEFE"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.93 2.09998L6 9.99998"
            stroke="#FEFEFE"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Filter
      </button>
      {showModal && (
        <div className="h-screen w-full fixed top-0 left-0 z-[999999]">
          <div onClick={() => setShowModal(false)} className="absolute top-0 left-0 h-full w-full bg-[#121212]/20" />
          <div className="absolute top-1/2 left-1/2 py-20 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-3xl bg-white-100">
            <div className="w-full max-w-[324px] mx-auto">
              <button
                className={`${nunito.className} bg-[#FEFEFE] text-Grey-G50 font-medium w-full mb-0.5 rounded-lg border border-Grey-G60 p-4 flex items-center justify-between`}
              >
                {filter}
                <FaAngleDown />
              </button>
              <div className={`${montserrat.className} flex flex-col mb-6 max-h-60 overflow-y-scroll`}>
                {filter === 'Filter Options' && (
                  <>
                    <button onClick={() => setFilter('Event Category')} className="filter-btn">
                      Event Category
                    </button>
                    <button onClick={() => setFilter('City')} className="filter-btn">
                      City
                    </button>
                  </>
                )}
                {filter === 'City' && (
                  <>
                    {city.map((item, index) => {
                      return (
                        <button className="filter-btn" key={index}>
                          {item}
                        </button>
                      );
                    })}
                  </>
                )}
                {filter === 'Event Category' && (
                  <>
                    {category.map((item, index) => {
                      return (
                        <button className="filter-btn" key={index}>
                          {item}
                        </button>
                      );
                    })}
                  </>
                )}
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-4 rounded-lg bg-primary-100 text-Grey-G0 w-full font-medium"
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventFilter;
