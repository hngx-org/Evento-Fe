'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SessionContextProps } from '../@types';

const SessionContext = createContext<SessionContextProps | undefined>(undefined);

interface SessionProviderProps {
        children: ReactNode;
}

export const SessionProvider: React.FC<SessionProviderProps> = ({ children }) => {
        const [token, setToken] = useState<string | null>(null);
        const [accountId, setAccountId] = useState<string | null>(null);
        const [roleId, setRoleId] = useState<string | null>(null);
        const [email, setEmail] = useState<string | null>(null);

        const login = (newToken: string, newAccountId: string, newRoleId: string, newEmail: string) => {
                setToken(newToken);
                setAccountId(newAccountId);
                setRoleId(newRoleId);
                setEmail(newEmail);
        };

        const logout = () => {
                setToken(null);
                setAccountId(null);
                setRoleId(null);
                setEmail(null);
        };

        const contextValue: SessionContextProps = {
                token,
                accountId,
                roleId,
                email,
                login,
                logout
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