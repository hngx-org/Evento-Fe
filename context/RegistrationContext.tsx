// context/RegistrationContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { getStoredUserId } from '@/http/getToken';
import { useRouter } from 'next/router';

interface RegistrationContextProps {
  registerEvent: () => void;
  getEventId: () => string | null;
  getUserId: () => string | null;
}

const RegistrationContext = createContext<RegistrationContextProps | undefined>(undefined);

interface RegistrationProviderProps {
  children: React.ReactNode;
}

export const RegistrationProvider: React.FC<RegistrationProviderProps> = ({ children }) => {
  //   const [eventId, setEventId] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // const queryEventId = getQueryParameter('id');
    // console.log(queryEventId);

    // Retrieve the user ID from local storage
    const storedUserId = getStoredUserId();
    // console.log(storedUserId);
    setUserId(storedUserId);
  }, []);

  const registerEvent = () => {
    const eventId = getEventId();

    if (eventId && userId) {
      //   console.log(`Registration successful for Event ID: ${eventId} and User ID: ${userId}`);
    } else {
      console.error('Event ID or User ID is missing');
    }
  };

  const getEventId = () => {
    // Extract the event ID from the URL
    const pathParts = router.asPath.split('/');
    return pathParts[pathParts.length - 1] || null;
  };
  //   console.log(getEventId)

  const getUserId = () => {
    return userId;
  };

  //   const getQueryParameter = (name: string) => {
  //     // Helper function to get query parameters from the URL
  //     const urlSearchParams = new URLSearchParams(window.location.search);
  //     return urlSearchParams.get(name);
  //   };

  return (
    <RegistrationContext.Provider value={{ registerEvent, getEventId, getUserId }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistrationContext = () => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error('useRegistrationContext must be used within a RegistrationProvider');
  }
  return context;
};
