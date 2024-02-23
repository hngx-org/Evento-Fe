'use client';

import { SessionProvider } from 'next-auth/react';
import { NextAuthProviderProps } from '@/@types';

const NextAuthProvider: React.FC<NextAuthProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;
