import { toast } from 'react-toastify';
import AuthInstance from './AuthInstance';
import { EventsProps } from '@/@types';
import { getStoredAuthToken, getStoredUserId } from './getToken';

const BaseUrl = 'https://evento-qo6d.onrender.com/api/v1';

const $AuthHttp = AuthInstance(BaseUrl);

export const getUpcomingEvents = async (
  setData: React.Dispatch<React.SetStateAction<{ isLoading: boolean; data: EventsProps[] }>>,
) => {
  try {
    const getEvents = await $AuthHttp.get('/events');
    setData({ data: getEvents?.data.data, isLoading: false });

    return getEvents;
  } catch (e: any) {
    toast.error('An error occured while fetching events');
    console.log(e?.message);
    throw e?.response?.data || { message: e.message };
  } finally {
    setData((prevState) => {
      return { ...prevState, isLoading: false };
    });
  }
};

export const eventDetails = async (id: string) => {
  try {
    const getEvent = await $AuthHttp.get('/events/' + id);

    return getEvent;
  } catch (error: any) {
    toast.error('An error occured while fetching events');
    console.log(error?.message);
    throw error?.response?.data || { message: error?.message };
  }
};

export const registerEvent = async (eventId: string) => {
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
    const payload = {
      eventId,
      userId,
    };
    await $AuthHttp.post('/events/registration', payload, config);
    toast.success('Registration Successful!');
  } catch (error) {
    console.error('Error Registering event:', error);
    toast.error('Error Registering for event. Please try again.');
    throw error;
  }
};
