import AuthInstance from './AuthInstance';
import { toast } from 'react-toastify';
import axios, { AxiosResponse } from 'axios';
import { getStoredAuthToken, getStoredUserId } from './getToken';
import { UploadParams, UploadResponse, EventPayload, CategoryProps } from '@/@types';
import { NextApiRequest, NextApiResponse } from 'next';
import { Dispatch, SetStateAction } from 'react';

const BaseUrl = 'https://evento-qo6d.onrender.com/api/v1';

const $AuthHttp = AuthInstance(BaseUrl);

export const uploadImage = async ({ file }: UploadParams): Promise<UploadResponse> => {
  const authToken = getStoredAuthToken();
  const userId = getStoredUserId();

  if (!authToken || !userId) {
    toast.error('Authentication data not available.');
    throw new Error('Authentication data not available.');
  }

  const formData = new FormData();
  formData.append('event-image', file, 'filename.jpg');

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      accept: 'application/json',
      Authorization: `Bearer ${authToken}`,
      'User-Id': userId,
    },
  };

  try {
    const response: AxiosResponse<UploadResponse> = await $AuthHttp.post('/events/image', formData, config);

    toast.success('Image uploaded successfully!');
    return response.data;
  } catch (error) {
    console.error('Error uploading image:', error);
    toast.error('Error uploading image. Please try again.');
    throw error;
  }
};

export const createEvent = async (
  payload: EventPayload,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
): Promise<void> => {
  const authToken = getStoredAuthToken();
  const userId = getStoredUserId();

  if (!authToken || !userId) {
    toast.error('Authentication data not available.');
    throw new Error('Authentication data not available.');
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
      Authorization: `Bearer ${authToken}`,
      'User-Id': userId,
    },
  };

  try {
    setIsLoading(true);
    const result = await $AuthHttp.post('/events', payload, config);
    toast.success('Event created successfully!');
    console.log(result);
    return result.data.data.eventID;
  } catch (error) {
    console.error('Error creating event:', error);
    toast.error('Error creating event. Please try again.');
    throw error;
  } finally {
    setIsLoading(false);
  }
};

export const getCategories = async (setCategories: Dispatch<SetStateAction<CategoryProps[]>>) => {
  try {
    const categories = await $AuthHttp.get('/categories');
    setCategories(categories?.data?.data);
    return categories?.data?.data;
  } catch (error) {
    toast.error('An error occur while fetching categories');
  }
};

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { title, description, imageURL, startDate, endDate, time, location, capacity, entranceFee, eventType, organizerID, categoryName } = req.body;

//     const eventPayload: EventPayload = {
//       title,
//       description,
//       imageURL,
//       startDate,
//       endDate,
//       time,
//       location,
//       capacity,
//       entranceFee,
//       eventType,
//       organizerID,
//       categoryName,
//     };

//     try {
//       await createEvent(eventPayload);
//       res.status(200).json({ success: true, message: 'Event created successfully.' });
//     } catch (error) {
//       res.status(500).json({ success: false, message: 'Error creating event.' });
//     }
//   } else {
//     res.status(405).json({ success: false, message: 'Method Not Allowed' });
//   }
// }
