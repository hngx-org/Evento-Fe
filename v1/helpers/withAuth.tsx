'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import isAuthenticated from './isAuthenticated';
import AuthInstance from '@/http/AuthInstance';
import Cookies from 'js-cookie';

import { useAuth } from '@/context/AuthContext';
import useIsAuthenticated from '@/hooks/useisAuthenticated';
import React from 'react';

const BaseUrl = 'https://evento-qo6d.onrender.com/api/v1';

const $AuthHttp = AuthInstance(BaseUrl);

const hasAuthToken = () => {
  return !!localStorage.getItem('authToken');
};

const authorizeAndStoreToken = async () => {
  try {
    const token = Cookies.get('token');
    const userId = Cookies.get('userId');

    if (token && userId) {
      localStorage.setItem('authToken', token);
      localStorage.setItem('userId', userId);

      console.log('Token obtained successfully');
    } else {
      console.error('Error obtaining token:', 400);
    }
  } catch (error) {
    console.error('Error obtaining token:', (error as Error).message);
  }
};

const withAuth = <P extends {}>(WrappedComponent: React.ComponentType<P>) => {
  const Wrapper: React.FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const setAuthAndUserIdAndNavigate = async () => {
        // Delay execution for 10 seconds
        await new Promise((resolve) => setTimeout(resolve, 10000));

        const token = localStorage.getItem('authToken');

        if (hasAuthToken()) {
          const isLoggedIn = isAuthenticated(token as string);

          if (!isLoggedIn) {
            router.push('/auth/sign-in');
          }
        } else {
          authorizeAndStoreToken().then(() => {
            const updatedToken = localStorage.getItem('authToken');
            const isLoggedIn = isAuthenticated(updatedToken as string);

            // If not authenticated, redirect to the access-denied page
            if (!isLoggedIn) {
              router.push('/auth/sign-in');
            }
          });
        }
      };
      setAuthAndUserIdAndNavigate();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Return the wrapped component
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;

export const withUserAuth = <P extends { children: React.ReactNode }>(WrappedComponent: React.ComponentType<P>) => {
  const Wrapper: React.FC<P> = (props) => {
    const [isPageLoading, setIsPageLoading] = useState(true);
    const router = useRouter();
    const { auth } = useAuth();

    const { authenticatedState } = useIsAuthenticated();

    useEffect(() => {
      if (authenticatedState === false) {
        router.replace('/');
        console.log(authenticatedState, 'authenticated state');
        return;
      }

      if (!auth) return;

      setIsPageLoading(false);
    }, [auth, router, authenticatedState]);

    if (isPageLoading) {
      return <div className="flex items-center justify-center h-screen"></div>;
    }

    const wrappedComponent = React.createElement(WrappedComponent, props);
    return wrappedComponent;
  };

  return Wrapper;
};
