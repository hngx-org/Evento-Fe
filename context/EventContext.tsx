import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface EventContextProps {
  createEvent: (eventDetails: EventDetails) => void;
  registerEvent: (eventId: string, userId: string) => void;
  shareEventLink: (eventId: string) => string;
  navigateToEvent: (eventId: string) => void;
}

interface EventDetails {}

const EventContext = createContext<EventContextProps | undefined>(undefined);

interface EventProviderProps {
  children: ReactNode;
}

export const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
  const [events, setEvents] = useState<EventDetails[]>([]);
  const router = useRouter();

  const createEvent = (eventDetails: EventDetails) => {
    setEvents([...events, eventDetails]);
  };

  const registerEvent = async (eventId: string, userId: string) => {
    try {
      console.log(`Registration successful for Event ID: ${eventId} and User ID: ${userId}`);
    } catch (error) {
      console.error('Error registering for the event:', error);
    }
  };

  const shareEventLink = (eventId: string) => {
    const baseUrl = 'https://evento1.vercel.app/event/';
    // const baseUrl = 'http://localhost:3000/events/';
    const eventLink = baseUrl + eventId;

    return eventLink;
  };

  const navigateToEvent = (eventId: string) => {
    router.push(`/eventS/${eventId}`);
  };

  return (
    <EventContext.Provider value={{ createEvent, registerEvent, shareEventLink, navigateToEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEventContext must be used within an EventProvider');
  }
  return context;
};
