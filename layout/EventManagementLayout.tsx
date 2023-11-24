import React from 'react';
import AuthLayout from './Authlayout';
import EventManagementHeader from '@/components/event-management/EventManagementHeader';

export default function EventManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthLayout>
      <div className="max-w-[1062px] w-full mx-auto px-5 py-20">
        <EventManagementHeader />
        {children}
      </div>
    </AuthLayout>
  );
}
