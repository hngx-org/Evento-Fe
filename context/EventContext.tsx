import React, { createContext, useState, useContext, ReactNode } from 'react';

interface EventContextProps {
  createEvent: (eventDetails: EventDetails) => void;
  registerEvent: (eventId: string, userId: string) => void;
  shareEventLink: (eventId: string) => string;
}

interface EventDetails {}

const EventContext = createContext<EventContextProps | undefined>(undefined);

interface EventProviderProps {
  children: ReactNode;
}

export const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
  const [events, setEvents] = useState<EventDetails[]>([]);

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
    // const baseUrl = 'https://evento1.vercel.app/event-details/';
    const baseUrl = 'http://localhost:3000/event-details/';
    const eventLink = baseUrl + eventId;
    // console.log('Event link shared:', eventLink);

    return eventLink;
  };

  return (
    <EventContext.Provider value={{ createEvent, registerEvent, shareEventLink }}>{children}</EventContext.Provider>
  );
};

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEventContext must be used within an EventProvider');
  }
  return context;
};
