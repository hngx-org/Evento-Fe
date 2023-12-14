// // // pages/index.tsx
// // 'use client';
// // import React from 'react';
// // import Image from 'next/image';
// // import { useSpring, animated } from 'react-spring';
// // import Head from 'next/head';
// // import Link from 'next/link';

// // const IndexPage: React.FC = () => {
// //   const animationProps = useSpring({
// //     opacity: 1,
// //     from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
// //     reset: true,
// //   });

// //   return (
// //     <>
// //       <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
// //         <Head>
// //           <title>Coming Soon</title>
// //           <meta name="viewport" content="initial-scale=1.0, width=device-width" />
// //         </Head>
// //         <animated.div style={animationProps}>
// //           <div className="text-center">
// //             <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
// //             <p className="text-lg mb-8">We&apos;re working hard to bring you something amazing!</p>
// //             <Image src="/next.svg" alt="Under Construction" width={150} height={150} className="w-48 mx-auto mb-8" />
// //             <p className="text-sm">&copy; 2023 Your Website. All rights reserved.</p>
// //           </div>
// //         </animated.div>
// //       </div>
// //     </>
// //   );
// // };

// // export default IndexPage;

// // 'use client';

// // Import necessary dependencies
// import AuthInstance from '@/http/AuthInstance';
// import { AxiosError } from 'axios';

// // Set the base URL
// const BaseUrl = 'https://evento-qo6d.onrender.com/api/v1';

// const $AuthHttp = AuthInstance(BaseUrl);

// // const hasAuthToken = () => {
// //   return !!localStorage.getItem('authToken');
// // };

// const authorizeAndStoreToken = async () => {
//   try {
//     const response = await $AuthHttp.post('/authorize');

//     // Extract user ID and token from the response data
//     const { userId, token } = response.data.data;

//     // Store the obtained token and user ID in localStorage
//     localStorage.setItem('authToken', token);
//     localStorage.setItem('userId', userId);

//     console.log('Token and user ID saved to local storage');
//   } catch (error: any) {
//     // Use type assertion to specify the type of 'error'
//     console.error('Error during login:', (error as AxiosError).message);
//     // Handle errors if necessary
//   }
// };

// import React from 'react';

// const MyButtonComponent: React.FC = () => {
//   const handleClick = () => {
//     authorizeAndStoreToken();
//   };

//   return <button onClick={handleClick}>Authorize and Store Token</button>;
// };

// export default MyButtonComponent;

import ListeventCard from '@/components/UserProfile/ListEventCard';
import GridEventCard from '@/components/UserProfile/GridEventCard';
import Test from '@/public/Create-Events/17924 1.png';

import React from 'react';

const test = () => {
  return (
    <div className="flex flex-col h-screen pt-4 bg-black-main items-center justify-center space-y-8">
      <ListeventCard
        event={{
          eventID: 'undefined',
          title: 'Testing',
          description: 'description jkjgaabiubviubh khasbiuvbhkjbubaibvikjkajfvbiubvkhfbafhkvbfjjobi',
          imageURL: '',
          startDate: 'Wensday 2023',
          endDate: '13-12-2004',
          time: '22:00Pm WAT',
          location: 'Lagos',
          locationType: 'virtual',
          capacity: 100,
          entranceFee: 300,
          eventType: 'nonne',
          organizerID: 'Phoenix',
          categoryCategoryID: undefined,
          participants: undefined,
        }}
        past={false}
      />

      <GridEventCard
        event={{
          eventID: 'undefined',
          title: 'Testing',
          description: 'description jkjgaabiubviubh khasbiuvbhkjbubaibvikjkajfvbiubvkhfbafhkvbfjjobi',
          imageURL: '',
          startDate: 'Wensday 2023',
          endDate: '13-12-2004',
          time: '22:00Pm WAT',
          location: 'Lagos',
          locationType: 'virtual',
          capacity: 100,
          entranceFee: 300,
          eventType: 'nonne',
          organizerID: 'Phoenix',
          categoryCategoryID: undefined,
          participants: undefined,
        }}
        past={false}
      />
    </div>
  );
};

export default test;
