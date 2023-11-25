import AuthInstance from './AuthInstance';
import { toast } from 'react-toastify';

const BaseUrl = 'https://evento-qo6d.onrender.com/api/v1';

const $AuthHttp = AuthInstance(BaseUrl);

export const signUpUser = async (props: { firstName: string; lastName: string; email: string; password: string }) => {
  try {
    const res = await $AuthHttp.post('/register', props);
    return res?.data;
  } catch (e: any) {
    console.log('signup call error from api call', e);
    if (e?.response?.status === 400) {
      if (e?.response?.data?.message === 'Validation failed') {
        const validationErrors = e?.response?.data?.errors;
        for (const errorKey in validationErrors) {
          toast.error(validationErrors[errorKey]);
        }
      } else {
        toast.error('Invalid input. Please check your details and try again.');
      }
    } else if (e?.response?.status === 409) {
      toast.error('Email is already registered. Please use a different email.');
    } else {
      toast.error('An error occurred during registration. Please try again later.');
    }
    throw e?.response?.data || { message: e.message };
  }
};

export const loginUser = async (props: { email: string; password: string }) => {
  try {
    const res = await $AuthHttp.post('/login', props);
    console.log('Login response', res);
    return res?.data;
  } catch (e: any) {
    console.log('login call error from api call', e);
    if (e?.response?.status === 401) {
      toast.error('Invalid credentials. Please check your email and password.');
    } else if (!e?.response) {
      toast.error('Network error. Please check your internet connection.');
    } else {
      toast.error('An error occurred during login. Please try again later.');
    }
    throw e?.response?.data || { message: e.message };
  }
};

export const signUpWithGoogle = async (): Promise<void> => {
  try {
    const res = await $AuthHttp.get('/google');
    const { authenticationUrl } = res.data;
    window.location.href = authenticationUrl;
  } catch (e: any) {
    console.log('Error redirecting to Google sign-in:', e);
    toast.error('Failed to redirect to Google. Please try again later.');
    throw e;
  }
};

export const revalidateAuth = async (props: { token: string }) => {
  try {
    const res = await $AuthHttp.get(`/authorize/${props.token}`);
    return res?.data;
  } catch (e: any) {
    throw e?.response?.data || { message: e.message };
  }
};
