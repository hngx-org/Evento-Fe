import { toast } from 'react-toastify';
import AuthInstance from './AuthInstance';
import { EventsProps } from '@/@types';

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
