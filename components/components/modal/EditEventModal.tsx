import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Modal from '@ui/Modal';
import Button from '@/components/ui/NewButton';
import { CloseSquare, Edit2, GalleryEdit } from 'iconsax-react';
import { Nunito } from 'next/font/google';
import Image from 'next/image';
import banner from '../../../public/assets/default-banner.jpg';
import { Input } from '@/components/ui/NewInput';
import TextEditor from '@/components/textEditor/textEditor';
import DateDropDown from '@/components/EventCreation/dateDropDown/dateDropDown';
import TimeDropDown from '@/components/EventCreation/timeDropDown/timeDropDown';
import ItemDropDown from '@/components/EventCreation/itemDropDown/itemDropDown';
import { EventDataProps, EventManagement, UploadResponse } from '@/@types';
import CategoryDropDown from '@/components/EventCreation/categoryDropDown/categoryDropDown';
import CapacityDropDown from '@/components/EventCreation/capacityDropDown/capacityDropDown';
import TicketTypeDropDown from '@/components/EventCreation/ticketTypeDropDown/ticketTypeDropDown';
import { updateEvent, uploadImage } from '@/http/createeventapi';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

function EditEventModal({ eventDetails }: { eventDetails: EventManagement }) {
  const initialState: EventDataProps = {
    title: eventDetails?.title,
    description: eventDetails?.description,
    imageURL: eventDetails?.imageURL,
    startDate: eventDetails?.startDate,
    endDate: eventDetails?.endDate,
    time: '',
    location: eventDetails?.location,
    capacity: eventDetails?.capacity.toString(),
    entranceFee: eventDetails?.tickets[0].ticketPrice.toString(),
    eventType: eventDetails?.locationType,
    organizerID: eventDetails?.organizerID,
    categoryName: eventDetails?.Category.name,
    startTime: '12:30',
    endTime: '12:30',
    virtualLocationLink: eventDetails?.virtualLocationLink,
    locationType: eventDetails?.locationType,
    ticketType: eventDetails?.tickets[0].ticketType,
  };
  const [isUpdating, setIsUpdating] = useState(false);
  const [data, setState] = useState<EventDataProps>(initialState);
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const [otherCategory, setOtherCategory] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [descriptionContent, setDescriptionContent] = useState<string>(eventDetails?.description);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | undefined>(new Date(eventDetails?.startDate));
  const [selectedEndDate, setSelectedEndDate] = useState<Date | undefined>(new Date(eventDetails?.endDate));

  useEffect(() => {
    setIsEdited(compareObjects(data, initialState));
  }, [data, initialState]);

  function compareObjects<T extends Record<string, any>>(obj1: T, obj2: T): boolean {
    const keys1 = Object.keys(obj1) as Array<keyof T>;
    const keys2 = Object.keys(obj2) as Array<keyof T>;

    if (keys1.length !== keys2.length) {
      return true; // Objects have different number of keys
    }

    for (const key of keys1) {
      if (!obj2.hasOwnProperty(key)) {
        return true; // Properties don't match
      }

      if (obj1[key] !== obj2[key]) {
        return true; // Values don't match
      }
    }

    return false; // Objects are identical
  }

  const onClose = () => setIsOpen(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, id } = e.target;
    setState((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      await uploadFile(file);
    }
  };

  const uploadFile = async (file: File) => {
    setIsUpdating(true);
    try {
      const response: UploadResponse = await uploadImage({ file });

      setState((prevState) => {
        return { ...prevState, imageURL: response.data.imageURL };
      });
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const {
      title,
      imageURL,
      startDate,
      endDate,
      startTime,
      location,
      capacity,
      entranceFee,
      eventType,
      categoryName,
      locationType,
      ticketType,
      organizerID,
    } = data;
    await updateEvent(
      {
        title,
        description: descriptionContent,
        imageURL,
        startDate,
        endDate,
        locationType,
        time: startTime,
        location,
        virtualLocationLink: data?.virtualLocationLink,
        capacity: parseInt(capacity),
        eventType,
        organizerID,
        categoryName: categoryName === 'other' ? otherCategory : categoryName,
        ticketType,
        ticketPrice: parseInt(entranceFee),
      },
      setIsUpdating,
      eventDetails?.eventID,
    );
    onClose();
  };

  return (
    <div>
      <Button
        style={{
          boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        }}
        className="text-[16px] text-[#e0580c] font-[500] leading-[24px] w-[100%]  rounded-[8px] py-[16px] px-[20px] flex justify-center items-center gap-4 bg-transparent border border-[#e0580c] "
        onClick={() => setIsOpen(true)}
      >
        <Edit2 size="32" color="#FF8A65" />
        <span className={nunito.className}>Edit Event</span>
      </Button>
      <Modal closeOnOverlayClick isOpen={isOpen} closeModal={onClose} isCloseIconPresent={false} size="sm">
        <form onSubmit={handleSubmit} className="max-h-[500px] overflow-y-scroll">
          <Button type="button" onClick={onClose} className="ml-auto text-[#303030] px-0">
            <CloseSquare />
          </Button>
          <div className="aspect-[512/278] relative rounded-lg overflow-hidden">
            <Image src={data.imageURL} fill alt="Baner" />
            <div>
              <label
                htmlFor="edit-image"
                className="cursor-pointer text-white-100 h-12 w-12 rounded-full grid place-content-center bg-[#1E1E1E]/60 absolute right-2 bottom-2"
              >
                <GalleryEdit />
              </label>
              <input
                type="file"
                id="edit-image"
                name="edit-image"
                accept="image/jpeg,image/png,image/svg+xml"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="event-name w-full mt-6">
            <Input
              className="w-full focus:outline-1 font-medium rounded-lg focus:border-primary-100 active:outline-primary-100 border text-dark-100"
              placeholder="Event Name"
              type="text"
              id="title"
              value={data.title}
              onChange={handleChange}
              maxLength={50}
            />
          </div>

          <TextEditor descriptionContent={descriptionContent} setDescriptionContent={setDescriptionContent} />
          <div className="event-date w-full flex z-20 flex-col gap-2 border-[1px] p-4 border-[#d7d7d7] rounded-lg">
            <div className="flex max-sm:flex-col lg:content-center lg:items-center justify-between gap-1 z-[9999] md:items-center">
              <div className="w-[70px] text-xl font-semibold">Start</div>
              <div className=" w-full flex flex-row gap-1">
                <div className="w-full z-[9999]">
                  <DateDropDown
                    startDate={selectedStartDate}
                    setStartDate={setSelectedStartDate}
                    fromDate={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())}
                  />
                </div>
                <div className="w-full">
                  <TimeDropDown stateData={data} setStateData={setState} type="startTime" />
                </div>
              </div>
            </div>
            <div className="flex max-sm:flex-col lg:content-center lg:items-center justify-between gap-1 md:items-center">
              <div className="w-[70px] text-xl font-semibold">End</div>
              <div className="w-full flex flex-row gap-1">
                <div className="w-full">
                  <DateDropDown
                    startDate={selectedEndDate}
                    setStartDate={setSelectedEndDate}
                    fromDate={
                      selectedStartDate
                        ? new Date(
                            new Date(selectedStartDate).getFullYear(),
                            new Date().getMonth(),
                            new Date().getDate(),
                          )
                        : new Date()
                    }
                  />
                </div>
                <div className="w-full">
                  <TimeDropDown stateData={data} setStateData={setState} type="endTime" />
                </div>
              </div>
            </div>
          </div>

          <ItemDropDown data={data} setState={setState} handleChange={handleChange} />

          <CategoryDropDown
            data={data}
            setState={setState}
            otherCategory={otherCategory}
            setOtherCategory={setOtherCategory}
          />

          <CapacityDropDown data={data} setState={setState} />

          <TicketTypeDropDown data={data} setState={setState} />
          <div className=" space-y-4">
            <Button className=" bg-primary-100 w-full rounded-lg font-medium disabled:opacity-50" disabled={!isEdited}>
              {isUpdating ? <div className="loader" /> : 'Save Changes'}
            </Button>
            <Button
              type="button"
              onClick={onClose}
              className=" border border-primary-100 w-full rounded-lg text-primary-100 font-medium"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default EditEventModal;
