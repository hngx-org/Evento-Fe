import AuthInstance from './AuthInstance';
import { toast } from 'react-toastify';

import { getStoredAuthToken } from './getToken';

const BaseUrl = 'https://evento-qo6d.onrender.com/api/v1/events';

const $RegisterHttp = AuthInstance(BaseUrl);

const token = getStoredAuthToken();

export const Register = async (props: { eventID: string; userID: String }) => {
  try {
    const res = await $RegisterHttp.post('/registration', props, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
    });
    if (res?.status === 200) {
      toast.success('Registration successful!');
    }
  } catch (e: any) {
    if (e?.res?.status === 404) {
      toast.error('User already Registered');
    } else if (e?.res?.status === 409) {
      toast.error('User already Registereds');
    } else {
      toast.error('An error occurred during registration. Please try again later.');
    }

    throw e?.response?.data || { message: e.message };
  }
};

export const Registration_EndPoint = 'https://evento-qo6d.onrender.com/api/v1/events';
