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

// Import necessary dependencies
import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import isAuthenticated from './isAuthenticated';
import AuthInstance from '@/http/AuthInstance';

// Set the base URL
const BaseUrl = 'https://evento-qo6d.onrender.com/api/v1';

const $AuthHttp = AuthInstance(BaseUrl);

const hasAuthToken = () => {
  return !!localStorage.getItem('authToken');
};

const authorizeAndStoreToken = async () => {
  try {
    // Make a POST request to obtain a new token
    const response = await $AuthHttp.get('/authorize');

    if (response.status === 200) {
      const { userId, token } = response.data;

      localStorage.setItem('authToken', token);
      localStorage.setItem('userId', userId);

      console.log('Token obtained successfully');
    } else {
      console.error('Error obtaining token:', response.statusText);
    }
  } catch (error) {
    console.error('Error obtaining token:', (error as Error).message);
  }
};

const withAuth = <P extends {}>(WrappedComponent: React.ComponentType<P>) => {
  const Wrapper: React.FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      // Check if a token exists in localStorage
      if (!hasAuthToken()) {
        // If no token, make a POST request to obtain a new token
        authorizeAndStoreToken();
      } else {
        // If a token exists, check if the user is authenticated
        const token = localStorage.getItem('authToken');
        const isLoggedIn = isAuthenticated(token as string);

        // If not authenticated, redirect to the access-denied page
        if (!isLoggedIn) {
          router.push('/access-denied');
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Return the wrapped component
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
