'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SessionContextProps } from '../@types';

const SessionContext = createContext<SessionContextProps | undefined>(undefined);

interface SessionProviderProps {
  children: ReactNode;
}

export const SessionProvider: React.FC<SessionProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const login = (newToken: string, newUserId: string) => {
    setToken(newToken);
    setUserId(newUserId);
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
  };

  const contextValue: SessionContextProps = {
    token,
    userId,
    login,
    logout,
  };

  return <SessionContext.Provider value={contextValue}>{children}</SessionContext.Provider>;
};

export const useSession = (): SessionContextProps => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};
