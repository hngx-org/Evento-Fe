import React, { useEffect, useState } from 'react';

import { ArrowDown2, ArrowUp2, Global, PenAdd, PenRemove } from 'iconsax-react';
import Image from 'next/image';

import ExploreNav from '@/components/Explore/Explorenav';

interface EventType {
  label: string;
  description: string;
}

interface Props {}

const CreateEvents = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [selectedCountry, setSelectedCountry] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventStartDate, setEventStartDate] = useState('');
  const [eventEndDate, setEventEndDate] = useState('');
  const [eventStartTime, setEventStartTime] = useState('');
  const [eventEndTime, setEventEndTime] = useState('');
  // const [progress, setProgress] = useState(50);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalTicketOpen, setIsModalTicketOpen] = useState(false);
  const [capacity, setCapacity] = useState('Unlimited');
  const [selectedEventType, setSelectedEventType] = useState('');
  const eventTypes: EventType[] = [
    { label: 'Public', description: 'Shown on your calendar and eligible to be featured.' },
    { label: 'Private', description: 'Unlisted. Only people with the link can register.' },
    // Add more options with different labels and descriptions as needed
  ];

  // Page completion status
  const [page1Complete, setPage1Complete] = useState(false);
  const [page2Complete, setPage2Complete] = useState(false);
  const [page3Complete, setPage3Complete] = useState(false);

  const [progress, setProgress] = useState(0);

  const handlePageTransition = (targetPage: React.SetStateAction<number>) => {
    setCurrentPage(targetPage);
  };

  const handlePage1Next = () => {
    // Add any validation logic here if needed
    handlePageTransition(2);
  };

  const handlePage2CreateEvent = () => {
    // Add any validation logic here if needed
    handlePageTransition(3);
  };

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time: Date) => {
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  const gmtTime = formatTime(currentTime);

  const handleCountryChange = (e: { target: { value: any } }) => {
    const newCountry = e.target.value;
    setSelectedCountry(newCountry);
    setPage1Complete(true);
    updateProgress();
  };

  const handleEventNameChange = (e: { target: { value: any } }) => {
    const newName = e.target.value;
    setEventName(newName);
    setPage1Complete(true);
    updateProgress();
  };

  const handleEventDescriptionChange = (e: { target: { value: any } }) => {
    const newDescription = e.target.value;
    setEventDescription(newDescription);
    setPage1Complete(true);
    updateProgress();
  };

  const handleStartDateChange = (e: { target: { value: any } }) => {
    const newStartDate = e.target.value;
    setEventStartDate(newStartDate);
    setPage1Complete(true);
    updateProgress();
  };

  const handleEndDateChange = (e: { target: { value: any } }) => {
    const newEndDate = e.target.value;
    setEventEndDate(newEndDate);
    setPage1Complete(true);
    updateProgress();
  };

  const handleStartTimeChange = (e: { target: { value: any } }) => {
    const newStartTime = e.target.value;
    setEventStartTime(newStartTime);
    setPage1Complete(true);
    updateProgress();
  };

  const handleEndTimeChange = (e: { target: { value: any } }) => {
    const newEndTime = e.target.value;
    setEventEndTime(newEndTime);
    setPage1Complete(true);
    updateProgress();
  };

  const handlePage2Actions = () => {
    // Perform actions related to page 2
    setPage2Complete(true);
    updateProgress();
  };

  const handlePage3Actions = () => {
    // Perform actions related to page 3
    setPage3Complete(true);
    updateProgress();
  };

  const updateProgress = () => {
    // Calculate progress based on completion of different sections
    const sectionsCompleted = [
      page1Complete ? 1 : 0, // Page 1 completion
      page2Complete ? 1 : 0, // Page 2 completion
      page3Complete ? 1 : 0, // Page 3 completion
    ];

    const totalSections = sectionsCompleted.length;
    const totalProgress = sectionsCompleted.reduce((acc, section) => acc + section, 0);
    const calculatedProgress = (totalProgress / totalSections) * 100;

    setProgress(calculatedProgress);
  };

  // const handleRangeChange = (e: { target: { value: any } }) => {
  //   const value = e.target.value;
  //   setProgress(value);
  // };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleEventTypeSelect = (eventType: EventType) => {
    setSelectedEventType(eventType.label);
    setIsDropdownOpen(false);
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModalTicketToggle = () => {
    setIsModalTicketOpen(!isModalTicketOpen);
  };

  const handleCapacityChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setCapacity(e.target.value);
  };

  const handleCapacityConfirm = () => {
    // Check if the "Remove Limit" button is clicked
    if (capacity.toLowerCase() === 'remove limit') {
      // Close the modal
      setIsModalOpen(false);
    } else {
      // Handle other confirmation logic
      // For example, you can update the state or perform any other action
      setIsModalOpen(false);
    }
  };

  const handleMultipleClicks = () => {
    const handlePage2Actions = () => {
      // Perform actions related to page 2
      setPage2Complete(true);
      updateProgress();
    };

    const handlePage3Actions = () => {
      // Perform actions related to page 3
      setPage3Complete(true);
      updateProgress();
    };
  };

  const countryOptions = [
    { value: '', label: 'Choose event location', disabled: true, hidden: true },
    { value: 'afghanistan', label: 'Afghanistan' },
    { value: 'albania', label: 'Albania' },
    { value: 'algeria', label: 'Algeria' },
  ];

  return (
    <div>
      <ExploreNav />
      <div className=" w-full px-[137px] flex  flex-col">
        <div className="progress-bar px-[287px] w-full flex flex-col">
          <div className="w-full flex justify-between content-center">
            <h3>Progress</h3>
            <p>{progress.toFixed(0)}%</p>
          </div>
          <input className=" accent-[#0d804a]" min={0} max={100} value={progress} type="range" readOnly />
        </div>
        {currentPage === 1 && (
          <section className="page-1 event-dashboard w-full px-[287px] py-4 ">
            <div className="w-full flex flex-col border-[1px] border-[#d7d7d7] rounded-3xl p-10">
              <div className="event-name w-full ">
                <input
                  className="w-full border-[1px] py-[54px] px-4 border-[#d7d7d7] rounded-lg font-semibold text-[32px] leading-10 text-[#020202] placeholder-[#020202]"
                  placeholder="Event Name"
                  type="text"
                  value={eventName}
                  onChange={handleEventNameChange}
                />
              </div>
              <div className="event-description w-full my-6">
                <input
                  className="w-full border-[1px] py-[32px] px-4 border-[#d7d7d7] rounded-lg font-semibold text-xl leading-7 text-[#020202] placeholder-[#020202]"
                  placeholder="Description"
                  type="text"
                  value={eventDescription}
                  onChange={handleEventDescriptionChange}
                />
              </div>
              <div className="event-date w-full flex flex-col gap-2 border-[1px] p-4 border-[#d7d7d7] rounded-lg">
                <div className="flex content-center items-center justify-between gap-2">
                  <div className=" text-xl font-semibold">Start</div>
                  <div className="w-full">
                    <input
                      className="w-full text-sm border-[#d7d7d7] px-2 py-3 rounded-lg border-[1px]"
                      placeholder="Wed, Oct, 08"
                      type="date"
                      value={eventStartDate}
                      onChange={handleStartDateChange}
                    />
                  </div>
                  <div className="w-full">
                    <input
                      className="border-[#d7d7d7] text-sm px-2 py-3 border-[1px] rounded-lg"
                      placeholder="Wed, Oct, 08"
                      type="time"
                      value={eventStartTime}
                      onChange={handleStartTimeChange}
                    />
                  </div>
                </div>
                <div className="flex content-center items-center justify-between gap-2">
                  <div className=" text-xl font-semibold">End</div>
                  <div className="w-full">
                    <input
                      className="w-full text-sm border-[#d7d7d7] px-2 py-3 rounded-lg border-[1px]"
                      placeholder="Wed, Oct, 08"
                      type="date"
                      value={eventEndDate}
                      onChange={handleEndDateChange}
                    />
                  </div>
                  <div className="w-full">
                    <input
                      className="border-[#d7d7d7] text-sm px-2 py-3 border-[1px] rounded-lg"
                      placeholder="Wed, Oct, 08"
                      type="time"
                      value={eventEndTime}
                      onChange={handleEndTimeChange}
                    />
                  </div>
                </div>
                <div className="gmt mt-4">
                  <div className="flex items-center">
                    {/* World Icon (You can use an SVG or an icon library here) */}
                    <Global size={16} className=" mr-2" />

                    {/* GMT +0.1 Lagos */}
                    <div className="flex content-center items-center gap-1 text-xs font-semibold">
                      <p>GMT {gmtTime}</p>
                      <p>{userTimeZone}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="event-location mt-6 mb-10 w-full flex flex-col content-center">
                <h2 className=" font-semibold leading-6 text-xl text-[#303030]">Add Location</h2>
                <div className="relative mt-2">
                  <select
                    className="w-full border-[#d7d7d7] text-base p-4 border-[1px] rounded-lg text-[#959595]"
                    title="Choose event location"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                  >
                    {countryOptions.map((option) => (
                      <option key={option.value} disabled={option.disabled} hidden={option.hidden} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                onClick={handlePage1Next}
                className=" w-full text-center text-[#fdfdfd] text-base leading-6 py-4 px-5 bg-[#e0580c] rounded-lg"
              >
                Next
              </button>
            </div>
          </section>
        )}

        {currentPage === 2 && (
          <section className="page-2 w-full px-[287px] pt-[49.5px] pb-[153.5px]">
            <div className="w-full flex flex-col border-[1px] border-[#d7d7d7] rounded-3xl p-10">
              <div className="h1 w-full mb-12">
                <h1 className=" font-semibold text-3xl leading-10 text-[#000000]">Hey Pal, Almost done!</h1>
              </div>
              <div className="w-full flex flex-col content-center mb-6 ">
                <h2 className=" font-semibold text-xl mb-2 leading-6 text-[#303030]">Select event type</h2>
                <div className="relative inline-block w-full">
                  <input
                    className="w-full rounded-lg border-[1px] border-[#d7d7d7] placeholder-[#b1b1b1] p-4"
                    placeholder="Choose event type"
                    type="text"
                    value={selectedEventType}
                    readOnly
                  />
                  <div
                    className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                    onClick={handleDropdownToggle}
                  >
                    {/* Toggle between the down and up arrow based on the isDropdownOpen state */}
                    {isDropdownOpen ? <ArrowUp2 size={16} /> : <ArrowDown2 size={16} />}
                  </div>

                  {/* Dropdown Modal */}
                  {isDropdownOpen && (
                    <div className="absolute top-full z-50 left-0 mt-2 bg-black-fot border border-[#d7d7d7] rounded-lg overflow-hidden">
                      {eventTypes.map((eventType) => (
                        <div
                          key={eventType.label}
                          className="px-4 py-2 hover:bg-gray-200  cursor-pointer"
                          onClick={() => handleEventTypeSelect(eventType)}
                        >
                          <div className="mb-1 font-medium text-white-100">{eventType.label}</div>
                          <p className="text-sm font-semibold text-gray-300">{eventType.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full relative z-10 flex flex-col mb-6 content-center">
                <h2 className=" font-semibold text-xl mb-2 leading-6 text-[#303030]">Capacity</h2>
                <div className="relative inline-block w-full">
                  <input
                    className="w-full rounded-lg border-[1px] border-[#d7d7d7] placeholder-[#b1b1b1] p-4"
                    placeholder="Unlimited"
                    type="text"
                    value={capacity}
                    readOnly
                  />
                  <div
                    className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                    onClick={handleModalToggle}
                  >
                    {/* Toggle between the down and up arrow based on the isDropdownOpen state */}
                    {isDropdownOpen ? <PenAdd size={16} /> : <PenRemove size={16} />}
                  </div>

                  {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#080809] bg-opacity-90">
                      <div className="w-[340px] p-5 bg-[#272327] rounded-2xl shadow-lg">
                        <h2 className="text-xl text-[#f5f5f5] font-semibold mb-4">Max Capacity</h2>
                        <p className="text-[#a4a5a6] mb-4 font-semibold">
                          Auto-close registration when the capacity is reached. Only approved guests count toward the
                          cap.
                        </p>
                        <h3 className=" text-[#b2b2b3] font-semibold text-base font mb-2">Capacity</h3>
                        <input
                          placeholder=""
                          className="w-full rounded-lg border-[1px] text-white-100 border-[#d7d7d7] bg-[#131517] placeholder-[#b1b1b1] p-2 mb-5"
                          type="number"
                          value={capacity}
                          onChange={handleCapacityChange}
                        />
                        <div className="w-full flex content-center items-center justify-between gap-2">
                          <button
                            className="bg-[#ffffff] w-full text-[#131517] font-semibold rounded-lg px-4 py-2"
                            onClick={handleCapacityConfirm}
                          >
                            Set Limit
                          </button>
                          <button
                            className="bg-[#ffffff] text-[#131517] font-semibold rounded-lg w-full px-4 py-2"
                            onClick={handleCapacityConfirm}
                          >
                            Remove Limit
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full relative flex flex-col mb-10 content-center">
                <h2 className=" font-semibold text-xl mb-2 leading-6 text-[#303030]">Ticket type</h2>
                <div className="relative inline-block w-full">
                  <input
                    className="w-full rounded-lg border-[1px] border-[#d7d7d7] placeholder-[#b1b1b1] p-4"
                    placeholder="Free"
                    type="text"
                    readOnly
                  />
                  <div
                    className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                    onClick={handleModalTicketToggle}
                  >
                    {/* Toggle between the down and up arrow based on the isDropdownOpen state */}
                    {isDropdownOpen ? <PenAdd size={16} /> : <PenRemove size={16} />}
                  </div>

                  {isModalTicketOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#080809] bg-opacity-90">
                      <div className="w-[340px] p-5 bg-[#272327] rounded-2xl shadow-lg">
                        <h2 className="text-xl text-[#f5f5f5] font-semibold mb-4">Accept Payments</h2>
                        <p className="text-[#a4a5a6] mb-4 font-semibold">
                          Your account is not yet set up to accept payments.
                        </p>
                        <p className="text-[#a4a5a6] mb-4 font-semibold">
                          We use <span className=" text-red-306 font-bold">Paystack</span> as our payment processor.
                          Connect or set up a Stripe account to start accepting payments. It usually takes less than 5
                          minutes.
                        </p>
                        <div className="w-full flex content-center items-center justify-between gap-2">
                          <button className="bg-[#ffffff] hover:bg-opacity-80 w-full text-[#131517] font-semibold rounded-lg px-4 py-2">
                            Connect Paystack
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <button
                onClick={handlePage2CreateEvent}
                className=" w-full text-center text-[#fdfdfd] text-base leading-6 py-4 px-5 bg-[#e0580c] rounded-lg"
              >
                Create event
              </button>
            </div>
          </section>
        )}

        {currentPage === 3 && (
          <section className="page-3 w-full px-[287px] pt-[64.66px] pb-[168.66px]">
            <div className="w-full flex flex-col border-[1px] border-[#d7d7d7] rounded-3xl p-10">
              <div className="w-full text-center mb-12">
                <h1 className=" font-semibold text-3xl leading-10">Successfully completed!</h1>
              </div>
              <div className="w-full mb-10">
                <Image src={'/Create-Events/17924 1.png'} height={500} width={1280} layout="responsive" alt="" />
              </div>
              <button className=" w-full text-center text-[#fdfdfd] text-base leading-6 py-4 px-5 bg-[#e0580c] rounded-lg">
                See Events
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default CreateEvents;
