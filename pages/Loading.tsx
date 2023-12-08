'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import Loading from '@/components/loading';

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const setAuthAndUserIdAndNavigate = () => {
      const authToken = Cookies.get('token');
      const userId = Cookies.get('userId');

      if (authToken && userId) {
        localStorage.setItem('authToken', authToken);
        localStorage.setItem('userId', userId);

        toast.success('Authentication successful!');

        // Redirect to the /event page after a delay
        setTimeout(() => {
          router.push('/event-dashboad');
        }, 3000);
      } else {
        // Handle the case where authToken or userId is missing
        console.error('Error: authToken or userId is missing');
        toast.error('authToken or userId is missing');
      }
    };

    setAuthAndUserIdAndNavigate();
  }, []);

  return (
    <div>
      <Loading />
    </div>
  );
};

export default Home;
