import React, { SetStateAction, useEffect, useState } from 'react';

import { ArrowDown2, ArrowUp2, Copy, GalleryEdit } from 'iconsax-react';
import Image from 'next/image';
import { FaXmark } from 'react-icons/fa6';

import AuthenticatedHeader from '@/components/components/authenticatedheader';

interface EventType {
  label: string;
}

interface LocationType {
  label: string;
}

interface CapacityType {
  label: string;
}

interface TicketType {
  [x: string]: SetStateAction<string>;
  label: string;
}

interface Props {}

const CreateEvents = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [selectedLocationType, setSelectedLocationType] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventStartDate, setEventStartDate] = useState('');
  const [eventEndDate, setEventEndDate] = useState('');
  const [eventStartTime, setEventStartTime] = useState('');
  const [eventEndTime, setEventEndTime] = useState('');
  // const [progress, setProgress] = useState(50);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownCapacityOpen, setIsDropdownCapacityOpen] = useState(false);
  const [isDropdownTicketTypeOpen, setIsDropdownTicketTypeOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isModalTicketOpen, setIsModalTicketOpen] = useState(false);
  const [isModalImageOpen, setIsModalImageOpen] = useState(false);
  const [isFileTypeModalOpen, setIsFileTypeModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [isValidFileType, setIsValidFileType] = useState(true);
  // const [capacity, setCapacity] = useState('Unlimited');
  const [selectedEventType, setSelectedEventType] = useState('');
  const [selectedCapacity, setSelectedCapacity] = useState('');
  const [selectedTicketType, setSelectedTicketType] = useState('');
  const [isSecondDivVisible, setIsSecondDivVisible] = useState(false);
  const [ticketPrice, setTicketPrice] = useState('');
  const [isSecondContainerVisible, setIsSecondContainerVisible] = useState(false);
  const [isThirdDivVisible, setIsThirdDivVisible] = useState(true);

  const [inputValue, setInputValue] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const [isLinkContainerVisible, setLinkContainerVisible] = useState(false);

  const handleButtonClick = () => {
    setLinkContainerVisible(!isLinkContainerVisible);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // For demonstration purposes, let's use a static list of suggestions
    const staticSuggestions = [
      'Lagos, Nigeria',
      'New York, USA',
      'Tokyo, Japan',
      'London, UK',
      'Paris, France',
      'Berlin, Germany',
      'Sydney, Australia',
      'Beijing, China',
      'Mumbai, India',
      'Cairo, Egypt',
      'Cape Town, South Africa',
      'Moscow, Russia',
      'Rio de Janeiro, Brazil',
      'Toronto, Canada',
      'Mexico City, Mexico',
      'Dubai, UAE',
      'Seoul, South Korea',
      'Hanoi, Vietnam',
      'Bangkok, Thailand',
      'Singapore',
      'Rome, Italy',
      'Barcelona, Spain',
      'Athens, Greece',
      'Istanbul, Turkey',
      'Nairobi, Kenya',
      'Buenos Aires, Argentina',
      'Lima, Peru',
      'Auckland, New Zealand',
      'Stockholm, Sweden',
      'Oslo, Norway',
      'Copenhagen, Denmark',
      'Helsinki, Finland',
      'Amsterdam, Netherlands',
      'Brussels, Belgium',
      'Vienna, Austria',
      'Zurich, Switzerland',
      'Dublin, Ireland',
      'Warsaw, Poland',
      'Prague, Czech Republic',
      'Budapest, Hungary',
      'Lisbon, Portugal',
      'Madrid, Spain',
      'Edinburgh, Scotland',
      'Cardiff, Wales',
      'Belfast, Northern Ireland',
      'Ankara, Turkey',
      'Jerusalem, Israel',
      'Copenhagen, Denmark',
      'Stockholm, Sweden',
      'Oslo, Norway',
      'Helsinki, Finland',
      'Amsterdam, Netherlands',
      'Brussels, Belgium',
      'Vienna, Austria',
      'Zurich, Switzerland',
      'Dublin, Ireland',
      'Warsaw, Poland',
      'Prague, Czech Republic',
      'Budapest, Hungary',
      'Lisbon, Portugal',
      'Madrid, Spain',
      'Edinburgh, Scotland',
      'Cardiff, Wales',
      'Belfast, Northern Ireland',
      'Ankara, Turkey',
      'Jerusalem, Israel',
      // Add more as needed
    ];

    // Filter suggestions based on input value
    const filteredSuggestions = staticSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase()),
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  // const ticketPrice = "$100";

  const openImageModal = () => {
    setIsModalImageOpen(true);
  };

  const closeImageModal = () => {
    setIsModalImageOpen(false);
    setIsFileTypeModalOpen(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const allowedFileTypes = ['jpg', 'png', 'svg'];
      const fileType = file.name.split('.').pop()?.toLowerCase();

      if (fileType && allowedFileTypes.includes(fileType)) {
        // Valid file type
        setSelectedFile(URL.createObjectURL(file));
        closeImageModal();
      } else {
        // Invalid file type
        setIsValidFileType(false);
        setIsFileTypeModalOpen(true);
        // Clear the selectedFile state
        setSelectedFile(null);
      }
    }
  };

  const handleResetUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    setIsValidFileType(true);
    setIsFileTypeModalOpen(false);
    closeImageModal(); // Close the file upload modal
    // Clear the selectedFile state
    if (file) {
      const allowedFileTypes = ['jpg', 'png', 'svg'];
      const fileType = file.name.split('.').pop()?.toLowerCase();

      if (fileType && allowedFileTypes.includes(fileType)) {
        // Valid file type
        setSelectedFile(URL.createObjectURL(file));
        closeImageModal();
      } else {
        // Invalid file type
        setIsValidFileType(false);
        setIsFileTypeModalOpen(true);
        // Clear the selectedFile state
        setSelectedFile(null);
      }
    }
  };

  const eventTypes: EventType[] = [
    { label: 'Tech' },
    { label: 'Education' },
    { label: 'Arts' },
    { label: 'Business' },
    // Add more options with different labels and descriptions as needed
  ];

  const capacityTypes: CapacityType[] = [{ label: '50+' }, { label: '100+' }, { label: '200+' }, { label: '300+' }];

  const locationTypes = [
    { label: 'Physical', value: 'Physical' },
    { label: 'Virtual', value: 'Virtual' },
    // Add more location types as needed
  ];

  const ticketTypes: TicketType[] = [
    { label: 'Free', price: '0' },
    { label: 'Premium', price: '$100' },
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

  const handleLocationChange = (e: { target: { value: any } }) => {
    const newLocation = e.target.value;
    setSelectedLocationType(newLocation);
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

  const handleDropdownCapacityToggle = () => {
    setIsDropdownCapacityOpen(!isDropdownCapacityOpen);
  };

  const handleDropdownTicketToggle = () => {
    setIsDropdownTicketTypeOpen(!isDropdownTicketTypeOpen);
  };

  const handleEventTypeSelect = (eventType: EventType) => {
    setSelectedEventType(eventType.label);
    setIsDropdownOpen(false);
  };

  const handleCapacitySelect = (capacityType: CapacityType) => {
    setSelectedCapacity(capacityType.label);
    setIsDropdownCapacityOpen(false);
  };

  // const handleTicketTypeSelect = (ticketType: TicketType) => {
  //   setSelectedTicketType(ticketType.label);
  //   setIsDropdownTicketTypeOpen(false);
  // };

  const handleTicketTypeSelect = (selectedType: TicketType) => {
    setSelectedTicketType(selectedType.label);
    setTicketPrice(selectedType.price);

    // Show the second div if the selected type is 'Premium'
    setIsSecondDivVisible(selectedType.label === 'Premium');

    // Close the dropdown
    setIsDropdownTicketTypeOpen(false);
  };

  const handleLocationTypeSelect = (selectedType: { label: any; value: any }) => {
    setSelectedLocationType(selectedType.label);

    // Show/hide the second div based on the selected type
    setIsSecondContainerVisible(selectedType.value === 'Virtual');
    // Show/hide the third div based on the selected type
    setIsThirdDivVisible(selectedType.value !== 'Virtual');

    // Close the dropdown
    setIsDropdownOpen(false);
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  // const handleModalTicketToggle = () => {
  //   setIsModalTicketOpen(!isModalTicketOpen);
  // };

  const handleModalLocationToggle = () => {
    setIsModalLocationOpen(!setIsModalLocationOpen);
  };

  // const handleCapacityChange = (e: { target: { value: React.SetStateAction<string> } }) => {
  //   setCapacity(e.target.value);
  // };

  // const handleCapacityConfirm = () => {
  //   // Check if the "Remove Limit" button is clicked
  //   if (capacity.toLowerCase() === 'remove limit') {
  //     // Close the modal
  //     setIsModalOpen(false);
  //   } else {
  //     // Handle other confirmation logic
  //     // For example, you can update the state or perform any other action
  //     setIsModalOpen(false);
  //   }
  // };

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

  const locationOptions = [
    { value: '', label: 'Choose event location', disabled: true, hidden: true },
    { value: 'Physical', label: 'Physical' },
    { value: 'Virtual', label: 'Virtual' },
  ];

  return (
    <div>
      <AuthenticatedHeader />
      <div className=" w-full lg:px-[350px] max-sm:px-5 md:px-5 py-10  flex  flex-col">
        <div className="progress-bar lg:px-[0px] md:px-0 max-sm:px-0 w-full flex flex-col">
          <div className="w-full flex justify-between content-center">
            <h3>Progress</h3>
            <p>{progress.toFixed(0)}%</p>
          </div>
          <input className=" accent-[#0d804a]" min={0} max={100} value={progress} type="range" readOnly />
        </div>
        {currentPage === 1 && (
          <section className="page-1 event-dashboard w-full lg:px-[0px] md:px-0 max-sm:px-0 py-4 ">
            <div className="w-full flex flex-col border-[1px] border-[#d7d7d7] rounded-3xl p-10 max-sm:p-0 max-sm:border-none shadow-xl max-sm:shadow-none">
              <div className="event-name w-full ">
                <input
                  className="w-full border-[1px] py-[54px] max-sm:py-5 px-4 border-[#d7d7d7] rounded-lg font-semibold text-[32px] max-sm:text-xl leading-10 text-[#020202] placeholder-[#020202]"
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
                <div className="flex max-sm:flex-col lg:content-center lg:items-center justify-between gap-1">
                  <div className="w-[70px] text-xl font-semibold">Start</div>
                  <div className=" w-full flex flex-row gap-1">
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
                        className="border-[#d7d7d7] w-full text-sm px-2 py-3 border-[1px] rounded-lg"
                        placeholder="Wed, Oct, 08"
                        type="time"
                        value={eventStartTime}
                        onChange={handleStartTimeChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex max-sm:flex-col lg:content-center lg:items-center justify-between gap-1">
                  <div className="w-[70px] text-xl font-semibold">End</div>
                  <div className="w-full flex flex-row gap-1">
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
                        className="w-full border-[#d7d7d7] text-sm px-2 py-3 border-[1px] rounded-lg"
                        placeholder="Wed, Oct, 08"
                        type="time"
                        value={eventEndTime}
                        onChange={handleEndTimeChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="event-location my-6 w-full flex flex-col content-center">
                <h2 className=" font-semibold leading-6 text-xl text-[#303030]">Add Location</h2>
                <div className="relative mt-2 inline-block w-full">
                  <input
                    className="w-full rounded-lg border-[1px] border-[#d7d7d7] placeholder-[#b1b1b1] text-base text-[#303030] font-medium p-4"
                    placeholder="Choose event location"
                    type="text"
                    value={selectedLocationType}
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
                    <div className="absolute w-full top-full z-50 p-2 left-0 mt-2 bg-[#fefefe] border border-[#d7d7d7] rounded-lg overflow-hidden">
                      {locationTypes.map((locationType) => (
                        <div
                          key={locationType.label}
                          className="px-4 py-2 hover:bg-[#dedede] rounded-lg cursor-pointer"
                          onClick={() => handleLocationTypeSelect(locationType)}
                        >
                          <div className="mb-1 text-base font-bold text-[#020202]">{locationType.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Second Div - Displayed only when 'Virtual' is selected */}
              {isSecondContainerVisible && (
                <div className="virtual-link mb-6 w-full flex-col content-center">
                  <h2 className="font-semibold leading-6 text-xl text-[#303030]">Enter Link</h2>
                  <div className="relative mt-2 inline-block w-full">
                    <input
                      className="w-full rounded-lg border-[1px] border-[#d7d7d7] placeholder-[#b1b1b1] text-base text-[#303030] font-medium p-4"
                      placeholder="www.qwertyuiop[.url"
                      type="url"
                    />
                  </div>
                </div>
              )}

              {/* Third Div - Displayed by default, hidden when 'Virtual' is selected */}
              {isThirdDivVisible && (
                <div className="enter-location mb-10 w-full flex flex-col content-center">
                  <h2 className="font-semibold leading-6 text-xl text-[#303030]">Enter Location</h2>
                  <div className="relative mt-2 inline-block w-full">
                    <input
                      className="w-full rounded-lg border-[1px] border-[#d7d7d7] placeholder-[#b1b1b1] text-base text-[#303030] font-medium p-4"
                      placeholder="Lagos state, Nigeria"
                      type="text"
                      value={inputValue}
                      onChange={handleInput}
                    />
                    {suggestions.length > 0 && (
                      <div className="autocomplete-items absolute p-2 border-[1px] mt-2 border-[#d7d7d7] rounded-lg  w-full bg-[#fefefe]">
                        {suggestions.map((suggestion, index) => (
                          <div
                            key={index}
                            className="autocomplete-item p-2 text-sm cursor-pointer  hover:bg-[#dedede] rounded-lg"
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            {suggestion}
                          </div>
                        ))}
                      </div>
                    )}
                    {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer">
                      {isDropdownOpen ? <ArrowUp2 size={16} /> : <ArrowDown2 size={16} />}
                    </div> */}
                  </div>
                </div>
              )}
              <button
                onClick={handlePage1Next}
                className=" text-center text-[#fdfdfd] text-base leading-6 py-4 px-5 bg-[#e0580c] rounded-lg"
              >
                Next
              </button>
            </div>
          </section>
        )}
        {currentPage === 2 && (
          <section className="page-2 w-full lg:px-[0px] md:px-0 max-sm:px-0 pt-[49.5px] pb-6">
            <div className="w-full flex flex-col border-[1px] border-[#d7d7d7] rounded-3xl p-10 max-sm:p-0 max-sm:border-none shadow-xl max-sm:shadow-none">
              <div className="h1 w-full mb-12 max-sm:mb-6 ">
                <h1 className=" font-semibold text-3xl max-sm:text-xl leading-10 text-[#000000]">
                  Hey Pal, Almost done!
                </h1>
              </div>
              <div className="relative w-full h-[278px] border-[1px] border-[#d7d7d7] rounded-3xl mb-12 max-sm:mb-6 ">
                <GalleryEdit className="absolute bottom-4 right-4" size={24} color="#020202" onClick={openImageModal} />

                {/* Modal */}
                {isModalImageOpen && (
                  <div className="fixed z-50 bg-[#080809] bg-opacity-90 inset-0 flex items-center justify-center">
                    <div className="bg-[#fefefe] flex flex-col items-center justify-center content-center border-[1px] border-[#dedede] py-10 px-[110.5px] max-sm:px-[31.5px] text-center rounded-lg shadow-md">
                      <div className=" max-w-[327px] flex flex-col content-center items-center gap-6">
                        <div className="flex content-center items-center justify-center bg-[#ebebeb] w-16 h-16 rounded-full">
                          <Image src={'../../Create-Events/$icon-line-upload.svg'} width={32} height={32} alt="" />
                        </div>

                        <h2 className="text-xl font-bold text-[#020202]">Drag to upload</h2>
                        <p className=" text-center text-sm font-normal text-[#676767]">
                          Dazzle the world, no magic wand needed. Just drag and drop files right here. Formats accepted
                          are JPG, PNG, or SVG.
                        </p>
                        <label className="bg-[#e0580c] text-[#fefefe] px-5 py-4 rounded-lg cursor-pointer hover:bg-opacity-90 shadow-lg">
                          Browse to Upload
                          <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Modal - Invalid File Type */}
                {isFileTypeModalOpen && (
                  <div className="fixed z-50 bg-[#080809] bg-opacity-20 inset-0 flex items-center justify-center ">
                    <div className="bg-[#feeceb] flex flex-col items-center justify-center content-center border-[2px] border-[#f04438] py-[60px] w-[548px] max-sm:w-[390px]  text-center rounded-lg shadow-md">
                      <div className=" max-w-[327px] flex flex-col content-center items-center gap-6">
                        <div className="flex content-center items-center justify-center bg-[#f04438] w-16 h-16 rounded-full">
                          <FaXmark color="#fefefe" size={32} />
                        </div>

                        <h2 className="text-xl font-bold text-[#020202]">Wrong Format</h2>
                        <p className=" text-center text-sm font-normal text-[#676767]">
                          Formats accepted are JPG, PNG, or SVG.
                        </p>
                        <label className="bg-[#e0580c] text-[#fefefe] px-5 py-4 rounded-lg cursor-pointer hover:bg-opacity-90 shadow-lg">
                          Reset Upload
                          <input type="file" className="hidden" onChange={handleResetUpload} accept="image/*" />
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Display the uploaded image */}
                {selectedFile && isValidFileType && (
                  <div className="w-full h-full">
                    <Image
                      src={selectedFile}
                      width={500}
                      height={278}
                      alt="Uploaded"
                      className="w-full rounded-3xl h-full object-cover"
                    />
                  </div>
                )}
              </div>
              <div className="w-full flex flex-col content-center mb-6 ">
                <h2 className=" font-semibold text-xl mb-2 leading-6 text-[#303030]">Select event Category</h2>
                <div className="relative inline-block w-full">
                  <input
                    className="w-full rounded-lg border-[1px] border-[#d7d7d7] placeholder-[#b1b1b1] placeholder:font-semibold p-4 text-base font-bold"
                    placeholder="Choose Event type"
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
                    <div className="absolute w-full top-full p-2 z-50 left-0 mt-2 bg-[#fefefe] border border-[#d7d7d7]  rounded-lg overflow-hidden">
                      {eventTypes.map((eventType) => (
                        <div
                          key={eventType.label}
                          className=" px-4 py-2 hover:bg-[#dedede] rounded-lg  cursor-pointer"
                          onClick={() => handleEventTypeSelect(eventType)}
                        >
                          <div className="mb-1 font-bold text-base text-[#020202]">{eventType.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full relative z-10 flex flex-col mb-6 content-center">
                <h2 className=" font-semibold text-xl mb-2 leading-6 text-[#303030]">Input capacity Level</h2>
                <div className="relative inline-block w-full">
                  <input
                    className="w-full rounded-lg border-[1px] border-[#d7d7d7] placeholder-[#b1b1b1] placeholder:font-semibold p-4 text-base font-bold"
                    placeholder="Choose capacity Limit"
                    type="text"
                    value={selectedCapacity}
                    readOnly
                  />
                  <div
                    className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                    onClick={handleDropdownCapacityToggle}
                  >
                    {/* Toggle between the down and up arrow based on the isDropdownOpen state */}
                    {isDropdownCapacityOpen ? <ArrowUp2 size={16} /> : <ArrowDown2 size={16} />}
                  </div>

                  {/* Dropdown Modal */}
                  {isDropdownCapacityOpen && (
                    <div className="absolute w-full top-full z-50 p-2 left-0 mt-2 bg-[#fefefe] border border-[#d7d7d7]  rounded-lg overflow-hidden">
                      {capacityTypes.map((capacityType) => (
                        <div
                          key={capacityType.label}
                          className=" px-4 py-2 hover:bg-[#dedede] rounded-lg cursor-pointer"
                          onClick={() => handleCapacitySelect(capacityType)}
                        >
                          <div className="mb-1 font-bold text-base text-[#020202]">{capacityType.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full relative flex flex-col mb-6 content-center">
                <h2 className=" font-semibold text-xl mb-2 leading-6 text-[#303030]">Ticket type</h2>
                <div className="relative inline-block w-full">
                  <input
                    className="w-full rounded-lg border-[1px] border-[#d7d7d7] placeholder-[#b1b1b1] placeholder:font-semibold p-4 text-base font-bold"
                    placeholder="Select Ticket type"
                    type="text"
                    value={selectedTicketType}
                    readOnly
                  />
                  <div
                    className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                    onClick={handleDropdownTicketToggle}
                  >
                    {/* Toggle between the down and up arrow based on the isDropdownOpen state */}
                    {isDropdownTicketTypeOpen ? <ArrowUp2 size={16} /> : <ArrowDown2 size={16} />}
                  </div>

                  {/* Dropdown Modal */}
                  {isDropdownTicketTypeOpen && (
                    <div className="absolute w-full top-full z-50 p-2 left-0 mt-2 bg-[#fefefe] border border-[#d7d7d7]  rounded-lg overflow-hidden">
                      {ticketTypes.map((ticketType) => (
                        <div
                          key={ticketType.label}
                          className=" px-4 py-2 hover:bg-[#dedede] rounded-lg cursor-pointer"
                          onClick={() => handleTicketTypeSelect(ticketType)}
                        >
                          <div className="mb-1 font-bold text-base text-[#020202]">{ticketType.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {/* Second Div - Displayed only when 'Premium' is selected */}
              {isSecondDivVisible && (
                <div className="w-full relative flex flex-col mb-10 content-center">
                  <h2 className="font-semibold text-xl mb-2 leading-6 text-[#303030]">Price</h2>
                  <input
                    className="w-full rounded-lg border-[1px] border-[#d7d7d7] placeholder-[#b1b1b1] placeholder:font-semibold p-4 text-base font-bold"
                    placeholder=""
                    type="text"
                    value={ticketPrice}
                    readOnly
                  />
                </div>
              )}
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
          <section className="page-3 w-full lg:px-[0px] md:px-0 max-sm:px-0 pt-[64.66px] max-sm:pt-10 pb-6">
            <div className="w-full flex flex-col border-[1px] border-[#d7d7d7] rounded-3xl p-10 max-sm:p-0 max-sm:border-none shadow-xl max-sm:shadow-none">
              <div className="w-full mb-12 text-center">
                <h1 className=" font-semibold text-3xl max-sm:text-xl leading-10">Event Created Successfully!</h1>
              </div>
              <div className="w-full mb-10">
                <Image src={'/Create-Events/17924 1.png'} height={500} width={1280} layout="responsive" alt="" />
              </div>
              <div className="w-full flex flex-col content-center items-center justify-center">
                <button className=" w-[144px] max-sm:w-full text-center font-semibold text-[#fdfdfd] text-base leading-6 mb-3 py-4 px-5 bg-[#e0580c] rounded-lg">
                  See all events
                </button>
                <button
                  onClick={handleButtonClick}
                  className=" w-[144px] text-center max-sm:w-full font-semibold text-base leading-6 py-4 px-1 mb-6 max-sm:mb-0 bg-[#fefefe] border-[1px] border-[#e0580c] text-[#e0580c] rounded-lg"
                >
                  Copy event link
                </button>
              </div>
            </div>
          </section>
        )}
        <div
          className={`${
            isLinkContainerVisible ? 'block' : 'hidden'
          } bg-[#e7f8f0] w-[255px] content-center flex items-center rounded-lg gap-2 border-[1px] border-[#0b7041] pl-6 py-3 font-bold text-base text-[#0b7041]`}
        >
          Link Copied Successfully
          <Copy size={24} />
        </div>
      </div>
    </div>
  );
};

export default CreateEvents;
function setIsModalLocationOpen(arg0: boolean) {
  throw new Error('Function not implemented.');
}
