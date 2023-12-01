// import { useEffect } from 'react';
// import Router, { useRouter } from 'next/router';
// import isAuthenticated from './isAuthenticated';
// import AuthInstance from '@/http/AuthInstance';

// const BaseUrl = 'https://evento-qo6d.onrender.com/api/v1';

// const $AuthHttp = AuthInstance(BaseUrl);

// // this would change later on once backend has the authentication
// // working.
// const withAuth = <P extends {}>(WrappedComponent: React.ComponentType<P>) => {
//   const Wrapper: React.FC<P> = (props) => {
//     const router = useRouter();

//     useEffect(() => {
//       const token = localStorage.getItem('authToken');
//       const isLoggedIn = isAuthenticated(token as string);
//       if (!isLoggedIn) {
//         router.push('/access-denied');
//       }
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

//     return <WrappedComponent {...props} />;
//   };

//   return Wrapper;
// };

// export default withAuth;

'use client';

// Import necessary dependencies
import { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import isAuthenticated from './isAuthenticated';
import AuthInstance from '@/http/AuthInstance';
import { AxiosError } from 'axios';

import { useAuth } from '@/context/AuthContext';
import useIsAuthenticated from '@/hooks/useisAuthenticated';
import React from 'react';

// Set the base URL
const BaseUrl = 'https://evento-qo6d.onrender.com/api/v1';

const $AuthHttp = AuthInstance(BaseUrl);

const hasAuthToken = () => {
  return !!localStorage.getItem('authToken');
};

const authorizeAndStoreToken = async () => {
  try {
    const response = await $AuthHttp.post('/authorize');

    // Extract user ID and token from the response data
    const { userId, token } = response.data.data;

    // Store the obtained token and user ID in localStorage
    localStorage.setItem('authToken', token);
    localStorage.setItem('userId', userId);

    console.log('Token and user ID saved to local storage');
  } catch (error: any) {
    // Use type assertion to specify the type of 'error'
    console.error('Error during login:', (error as AxiosError).message);
    // Handle errors if necessary
  }
};
//   try {
//     // Make a POST request to obtain a new token
//     const response = await $AuthHttp.post('/authorize');

//     console.log(response);

//     if (response.status === 200) {
//       const { userId, token } = response.data;

//       localStorage.setItem('authToken', token);
//       localStorage.setItem('userId', userId);

//       console.log('Token obtained successfully');
//     } else {
//       console.error('Error obtaining token:', response.statusText);
//     }
//   } catch (error) {
//     console.error('Error obtaining token:', (error as Error).message);
//   }
// };

const withAuth = <P extends {}>(WrappedComponent: React.ComponentType<P>) => {
  const Wrapper: React.FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      // Check if a token exists in localStorage
      const token = localStorage.getItem('authToken');

      if (hasAuthToken()) {
        // Token exists, check if the user is authenticated
        const isLoggedIn = isAuthenticated(token as string);

        // If not authenticated, redirect to the access-denied page
        if (!isLoggedIn) {
          router.push('/access-denied');
        }
      } else {
        // If no token, make a POST request to obtain a new token
        authorizeAndStoreToken().then(() => {
          // Check again for the token after the POST request
          const updatedToken = localStorage.getItem('authToken');
          const isLoggedIn = isAuthenticated(updatedToken as string);

          // If not authenticated, redirect to the access-denied page
          if (!isLoggedIn) {
            router.push('/access-denied');
          }
        });
      }

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

    // isAuthorized({ token: token as string });

    useEffect(() => {
      // there is no token found in the localstorage

      if (authenticatedState === false) {
        router.replace('/auth/login');
        console.log(authenticatedState, 'authenticated state');
        return;
      }

      // auth is undefined means user just landed on page
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
