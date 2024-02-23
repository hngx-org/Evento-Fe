'use server';

import Calls from './calls';
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { ForgetPasswordSchema, LoginSchema, SignupSchema } from '@/schemas';
import * as z from 'zod';
import { UserDetails } from '@/types';

const cookie = cookies();
const BaseUrl = process.env.BASEURL ?? 'https://evento-qo6d.onrender.com/api/v1';

const $http = Calls(BaseUrl);

export const register = async (values: z.infer<typeof SignupSchema>) => {
  const validatedFields = SignupSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: 'Validation failed. Please check your input.',
    };
  }
  try {
    const res = await $http.post('/register', values);

    if (res?.status === 201) {
      return {
        success: 'Account created successfully, check your email!',
      };
    }
  } catch (e: any) {
    console.log('signup call error from api call', e);
    if (e?.response?.status === 400) {
      return {
        error: 'user already exists',
      };
    } else {
      return {
        error: 'An error occurred. Please try again later.',
      };
    }
  }
};

export const login = async (values: z.infer<typeof LoginSchema>) => {
  console.log(values);
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: 'Validation failed. Please check your input.',
    };
  }
  try {
    const res = await $http.post('/login', values);
    if (res?.status === 200) {
      const token = res?.data.data.token;
      const userId = res?.data.data.userId;
      cookie.set('access_token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        httpOnly: true,
        path: '/',
        priority: 'high',
      });
      cookie.set('userId', userId, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        httpOnly: true,
        path: '/',
        priority: 'high',
      });

      return {
        success: 'Login successfull!',
      };
    }
  } catch (e: any) {
    console.log('signup call error from api call', e);
    if (e?.response?.status === 400) {
      return {
        error: 'user already exists',
      };
    } else if (e?.response?.status === 401) {
      return {
        error: 'Invalid credentials. Please check your email and password.',
      };
    } else {
      return {
        error: 'An error occurred. Please try again later.',
      };
    }
  }
};

export const ForgetPassword = async (values: z.infer<typeof ForgetPasswordSchema>) => {
  const validatedFields = ForgetPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: 'Validation failed. Please check your input.',
    };
  }

  try {
    const res = await $http.post('/reset-password', values);

    if (res?.status === 200) {
      return {
        success: 'Token sent to email',
      };
    }
  } catch (e: any) {
    console.log('Activate call error from API call', e);
    if (e?.response?.status === 404) {
      return { error: 'User does not exist!' };
    } else if (e?.response?.status === 500) {
      return { error: 'Internal server error' };
    } else {
      return {
        error: e?.response?.data ?? 'Unknown error occurred. Please try again later.',
      };
    }
  }
};

export const CheckAuth = () => {
  const authToken = cookies()?.get('access_token')?.value;

  if (!authToken) {
    return {
      status: 401, // Change status to 401 for unauthorized
      error: 'Unauthorized. Missing access token.',
    };
  }

  return {
    status: 200,
    succes: 'authorized',
  };
};
