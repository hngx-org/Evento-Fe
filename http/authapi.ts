import AuthInstance from './AuthInstance';
import { toast } from 'react-toastify';

const BaseUrl = 'https://evento-qo6d.onrender.com/api/v1';

const $AuthHttp = AuthInstance(BaseUrl);

export const signUpUser = async (props: { firstName: string; lastName: string; email: string; password: string }) => {
  try {
    const res = await $AuthHttp.post('/register', props);
    if (res?.status === 201) {
      toast.success('Registration successful!');
    }
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
        toast.error('User already exist. Please signin to continue.');
      }
    } else if (e?.response?.status === 409) {
      toast.error('Invalid Inputs');
    } else {
      toast.error('An error occurred during registration. Please try again later.');
    }
    throw e?.response?.data || { message: e.message };
  }
};

export const loginUser = async (props: { email: string; password: string }) => {
  try {
    const loginResponse = await $AuthHttp.post('/login', props);

    if (loginResponse.status === 200) {
      console.log('Login successful');
      toast.success('Login successful');
      const token = await fetchAuthToken();

      if (token) {
        console.log('Token:', token);
        localStorage.setItem('authToken', token);
      } else {
        console.error('Error fetching token after login.');
        toast.error('An error occurred while fetching the token.');
      }
    }

    console.log('Login response', loginResponse);
    return loginResponse?.data;
  } catch (e: any) {
    console.log('Login call error from API call', e);
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

const fetchAuthToken = async () => {
  try {
    const authResponse = await $AuthHttp.get('/authorize');

    if (authResponse.status === 200) {
      console.log('Authorization successful');
      return authResponse.data.token;
    } else if (authResponse.status === 401) {
      console.error('User not logged in.');
      toast.error('User not logged in.');
    }

    console.log('Authorization response', authResponse);
    return null;
  } catch (e: any) {
    console.log('Authorization call error from API call', e);
    throw e?.response?.data || { message: e.message };
  }
};

export const signUpWithGoogle = () => {
  return $AuthHttp.get('/google');
};

export const revalidateAuth = async (props: { token: string }) => {
  try {
    const res = await $AuthHttp.get(`/authorize/${props.token}`);
    return res?.data;
  } catch (e: any) {
    throw e?.response?.data || { message: e.message };
  }
};

export const logoutUser = async () => {
  try {
    const res = await $AuthHttp.get('/logout');

    if (res.status === 302) {
      console.log('Logout successful');
      toast.success('Logout successful');
    }

    console.log('Logout response', res);
    return res?.data;
  } catch (e: any) {
    console.log('Logout call error from API call', e);
    if (e?.response?.status === 401) {
      toast.error('Unauthorized. Please log in.');
    } else {
      toast.error('An error occurred during logout. Please try again later.');
    }
    throw e?.response?.data || { message: e.message };
  }
};
