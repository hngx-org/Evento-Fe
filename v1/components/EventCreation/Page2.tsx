import React, { Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

import { GalleryEdit } from 'iconsax-react';
import Image from 'next/image';
import { FaXmark } from 'react-icons/fa6';
import { EventDataProps, UploadResponse } from '@/@types';
import { uploadImage } from '@/http/createeventapi';
import CategoryDropDown from './categoryDropDown/categoryDropDown';
import CapacityDropDown from './capacityDropDown/capacityDropDown';
import TicketTypeDropDown from './ticketTypeDropDown/ticketTypeDropDown';

interface Page2Props extends PropsWithChildren<any> {
  onNext: () => void;
  onPrevious: () => void;
  data: EventDataProps;
  setState: Dispatch<SetStateAction<EventDataProps>>;
  loadState: boolean;
  otherCategory: string;
  setOtherCategory: Dispatch<SetStateAction<string>>;
}

interface Props {}
const Page2: React.FC<Page2Props> = (props) => {
  const [isFileUploading, setIsFileUploading] = useState<boolean>(false);
  const [isModalImageOpen, setIsModalImageOpen] = useState(false);
  const [isFileTypeModalOpen, setIsFileTypeModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [isValidFileType, setIsValidFileType] = useState(true);
  const isAllInputFilled = props.data.capacity === '' || props.data.imageURL === '';

  const closeImageModal = () => {
    setIsModalImageOpen(false);
    setIsFileTypeModalOpen(false);
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      await uploadFile(file);
    }
  };

  const uploadFile = async (file: File) => {
    setIsFileUploading(true);
    try {
      const response: UploadResponse = await uploadImage({ file });

      props.setState((prevState) => {
        return { ...prevState, imageURL: response.data.imageURL };
      });

      closeImageModal();
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setIsFileUploading(false);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const acceptedMimeType = ['image/jpeg', 'image/png', 'image/svg+xml', 'image/jpg'];
    if (acceptedMimeType.includes(file.type)) {
      uploadFile(file);
    } else {
      setIsFileTypeModalOpen(true);
    }
  };

  return (
    <>
      <section className="page-2 w-full lg:px-[0px] md:px-0 max-sm:px-0 pt-[49.5px] pb-6">
        <div className="w-full flex flex-col border-[1px] border-[#d7d7d7] rounded-3xl p-10 max-sm:p-0 max-sm:border-none shadow-xl max-sm:shadow-none">
          <div className="relative w-full h-auto border-[1px] border-[#d7d7d7] rounded-3xl mb-12 max-sm:mb-6 overflow-hidden">
            <Image
              className="w-full h-[278px] object-fill"
              src={props.data.imageURL === '' ? '/assets/placeholder-image.webp' : props.data.imageURL}
              alt="event-image"
              width={1280}
              height={800}
              layout="responsive"
            />

            <button
              onClick={() => setIsModalImageOpen(true)}
              className="h-10 w-10 grid place-content-center rounded-full absolute bottom-[13px] right-4 cursor-pointer bg-black-main/20"
            >
              <GalleryEdit className="" size={24} color="#fefefe" />
            </button>

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
                    <label className="bg-[#e0580c] text-[#fefefe] px-5 py-4 rounded-lg min-w-[165px] cursor-pointer hover:bg-opacity-90 shadow-lg">
                      {isFileUploading ? <div className="loader" /> : 'Browse to Upload'}
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
                <div
                  className="bg-[#feeceb]  flex flex-col items-center justify-center content-center border-[2px] border-[#f04438] py-[60px] w-[548px] max-sm:w-[390px]  text-center rounded-lg shadow-md"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
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

            {/* Display the uploaded image */}
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
          </div>

          <CategoryDropDown
            data={props.data}
            setState={props.setState}
            otherCategory={props.otherCategory}
            setOtherCategory={props.setOtherCategory}
          />

          <CapacityDropDown data={props.data} setState={props.setState} />

          <TicketTypeDropDown data={props.data} setState={props.setState} />

          <button
            onClick={props.onNext}
            className=" w-full text-center text-[#fdfdfd] text-base leading-6 py-4 px-5 bg-[#e0580c] rounded-lg disabled:bg-gray-alt  disabled:cursor-not-allowed"
            disabled={isAllInputFilled}
          >
            {props.loadState ? <div className="loader" /> : 'Create event'}
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
