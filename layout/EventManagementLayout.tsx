import React from 'react';
import AuthLayout from './Authlayout';
import EventManagementHeader from '@/components/event-management/EventManagementHeader';

export default function EventManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthLayout>
      <div className="container mx-auto py-20">
        <EventManagementHeader />
        {children}
      </div>
    </AuthLayout>
  );
}
