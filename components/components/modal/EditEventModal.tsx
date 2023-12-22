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
import Link from 'next/link';
import { Router, useRouter } from 'next/router';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

function EditEventModal({ eventDetails }: { eventDetails: EventManagement }) {
  console.log(eventDetails);
  const initialState: EventDataProps = {
    title: eventDetails?.title,
    description: eventDetails?.description,
    imageURL: eventDetails?.imageURL,
    startDate: new Date(eventDetails?.startDate),
    endDate: new Date(eventDetails?.endDate),
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
  const [descriptionContent, setDescriptionContent] = useState<string>(eventDetails?.description);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | undefined>(new Date(eventDetails?.startDate));
  const [selectedEndDate, setSelectedEndDate] = useState<Date | undefined>(new Date(eventDetails?.endDate));
  const router = useRouter();

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
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
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
        ticketID: eventDetails.tickets[0].ticketID,
      },
      setIsUpdating,
      eventDetails?.eventID,
    );
    router.push('/event-management/' + eventDetails?.eventID);
  };

  return (
    <div>
      <div className="mx-auto max-w-2xl w-full">
        <div className="w-full flex flex-col border-[1px] border-[#d7d7d7] rounded-3xl p-10 max-sm:p-0 max-sm:border-none shadow-xl max-sm:shadow-none">
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
                    startDate={data.startDate}
                    fromDate={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())}
                    id="startDate"
                    setState={setState}
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
                    startDate={data.endDate}
                    fromDate={
                      new Date(new Date(data.startDate).getFullYear(), new Date().getMonth(), new Date().getDate())
                    }
                    id="endDate"
                    setState={setState}
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
            <Button
              onClick={handleSubmit}
              className=" bg-primary-100 w-full rounded-lg font-medium disabled:opacity-50"
              disabled={!isEdited}
            >
              {isUpdating ? <div className="loader" /> : 'Save Changes'}
            </Button>
            <Link href={'/event-management/' + eventDetails?.eventID} className="block">
              <Button className=" border border-primary-100 w-full rounded-lg text-primary-100 font-medium">
                Cancel
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditEventModal;
