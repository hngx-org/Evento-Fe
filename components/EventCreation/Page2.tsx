import React, { ChangeEvent, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

import { ArrowDown2, ArrowUp2, GalleryEdit } from 'iconsax-react';
import Image from 'next/image';
import { FaXmark } from 'react-icons/fa6';
import { EventDataProps } from '@/@types';
import $http from '@/http/axios';

interface Page2Props extends PropsWithChildren<any> {
  onNext: () => void;
  onPrevious: () => void;
  data: EventDataProps;
  setState: Dispatch<SetStateAction<EventDataProps>>;
}

interface EventType {
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
const baseUrl = 'https://evento-qo6d.onrender.com/v1/';
const Page2: React.FC<Page2Props> = (props) => {
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
  const [selectedTicketType, setSelectedTicketType] = useState('Free');
  const [isSecondDivVisible, setIsSecondDivVisible] = useState(false);

  const openImageModal = () => {
    setIsModalImageOpen(true);
  };

  const closeImageModal = () => {
    setIsModalImageOpen(false);
    setIsFileTypeModalOpen(false);
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    processFile(file);
  };

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result as string; // Remove "data:image/png;base64," prefix
      props.setState((prevState) => {
        return { ...prevState, imageURL: base64Image };
      });
    };

    reader.readAsDataURL(file);

    closeImageModal();
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
    props.setState((prevState) => {
      return { ...prevState, categoryName: eventType.label };
    });
    setIsDropdownOpen(false);
  };

  const handleCapacitySelect = (capacityType: CapacityType) => {
    props.setState((prevState) => {
      return { ...prevState, capacity: capacityType.label };
    });
    setIsDropdownCapacityOpen(false);
  };

  // const handleTicketTypeSelect = (ticketType: TicketType) => {
  //   setSelectedTicketType(ticketType.label);
  //   setIsDropdownTicketTypeOpen(false);
  // };

  const handleTicketTypeSelect = (selectedType: TicketType) => {
    setSelectedTicketType(selectedType.label);

    // Show the second div if the selected type is 'Premium'
    setIsSecondDivVisible(selectedType.label === 'Premium');

    // Close the dropdown
    setIsDropdownTicketTypeOpen(false);
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    props.setState((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  return (
    <>
      <section className="page-2 w-full lg:px-[0px] md:px-0 max-sm:px-0 pt-[49.5px] pb-6">
        <div className="w-full flex flex-col border-[1px] border-[#d7d7d7] rounded-3xl p-10 max-sm:p-0 max-sm:border-none shadow-xl max-sm:shadow-none">
          <div className="h1 w-full mb-12 max-sm:mb-6 ">
            <h1 className=" font-semibold text-3xl max-sm:text-xl leading-10 text-[#000000]">Hey Pal, Almost done!</h1>
          </div>
          <div className="relative w-full h-auto border-[1px] border-[#d7d7d7] rounded-3xl mb-12 max-sm:mb-6 ">
            {!selectedFile && (
              <Image
                className="w-full h-[278px] object-fill"
                src={props.data.imageURL}
                alt="event-image"
                width={1280}
                height={800}
                layout="responsive"
              />
            )}

            {/* {selectedFile && isValidFileType && (
              <div className="w-full h-full">
                <Image
                  src={selectedFile}
                  width={500}
                  height={278}
                  alt="Uploaded"
                  className="w-full rounded-3xl h-full object-cover"
                />
              </div>
            )} */}

            <GalleryEdit
              className="absolute bottom-[13px] right-4 cursor-pointer"
              size={24}
              color="#fefefe"
              onClick={openImageModal}
            />

            {/* Modal */}
            {isModalImageOpen && (
              <div className="fixed z-50 bg-[#080809] bg-opacity-90 inset-0 flex items-center justify-center">
                <div className="relative bg-[#fefefe] flex flex-col items-center justify-center content-center border-[1px] border-[#dedede] py-10 px-[110.5px] max-sm:px-[31.5px] text-center rounded-lg shadow-md">
                  <div className="absolute top-0 right-0 mt-4 mr-4">
                    <div
                      onClick={() => setIsModalImageOpen(false)}
                      className="flex items-center content-center justify-center w-6 h-6 rounded-full border-[1px] border-[#676767] cursor-pointer"
                    >
                      <FaXmark />
                    </div>
                  </div>
                  <div
                    className=" max-w-[327px] flex flex-col content-center items-center gap-6"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                  >
                    <div className="flex content-center items-center justify-center bg-[#ebebeb] w-16 h-16 rounded-full">
                      <Image src={'../../Create-Events/$icon-line-upload.svg'} width={32} height={32} alt="" />
                    </div>

                    <h2 className="text-xl font-bold text-[#020202]">Drag to upload</h2>
                    <p className=" text-center text-sm font-normal text-[#676767]">
                      Dazzle the world, no magic wand needed. Just drag and drop files right here. Formats accepted are
                      JPG, PNG, or SVG.
                    </p>
                    <label className="bg-[#e0580c] text-[#fefefe] px-5 py-4 rounded-lg cursor-pointer hover:bg-opacity-90 shadow-lg">
                      Browse to Upload
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept="image/jpeg,image/png,image/svg+xml"
                      />
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
                className="w-full rounded-lg border-[1px] border-[#d7d7d7] placeholder-[#b1b1b1] focus:outline-[#ddab8f] placeholder:font-semibold p-4 text-base font-bold cursor-pointer"
                placeholder="Choose Event type"
                type="text"
                readOnly
                value={props.data.categoryName}
                onClick={handleDropdownToggle}
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
                className="w-full rounded-lg border-[1px] border-[#d7d7d7] placeholder-[#b1b1b1] focus:outline-[#ddab8f] placeholder:font-semibold p-4 text-base font-bold cursor-pointer"
                placeholder="Choose capacity Limit"
                type="text"
                value={props.data.capacity}
                readOnly
                onClick={handleDropdownCapacityToggle}
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
                className="w-full rounded-lg border-[1px] border-[#d7d7d7] placeholder-[#b1b1b1] focus:outline-[#ddab8f] placeholder:font-semibold p-4 text-base font-bold cursor-pointer"
                placeholder="Select Ticket type"
                type="text"
                value={selectedTicketType}
                onClick={handleDropdownTicketToggle}
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
              <label htmlFor="entranceFee" className="font-semibold text-xl mb-2 leading-6 text-[#303030]">
                Price
              </label>
              <input
                id="entranceFee"
                className="w-full rounded-lg border-[1px] border-[#d7d7d7] placeholder-[#b1b1b1] focus:outline-[#ddab8f] placeholder:font-semibold p-4 text-base font-bold"
                placeholder=""
                type="text"
                onChange={handleChange}
                value={props.data.entranceFee}
              />
            </div>
          )}
          <button
            onClick={props.onNext}
            className=" w-full text-center text-[#fdfdfd] text-base leading-6 py-4 px-5 bg-[#e0580c] rounded-lg"
          >
            Create event
          </button>
          <button
            onClick={props.onPrevious}
            className="w-full text-center text-[#e0580c] text-base leading-6 py-4 px-5 bg-[#fdfdfd] border-[1px] border-[#e0580c] font-semibold mt-3 rounded-lg"
          >
            Go back
          </button>
        </div>
      </section>
    </>
  );
};

export default Page2;
