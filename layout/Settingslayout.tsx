import Sidebar from '@/components/Settings/Sidebar';
import AuthenticatedHeader from '@/components/components/authenticatedheader';
import Image from 'next/image';
import React from 'react';
import help from 'public/assets/settings/help.svg';

function Settingslayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AuthenticatedHeader />
      <main className="bg-[#F5F5F5]">
        <div style={{ paddingTop: '96px', paddingBottom: '96px' }} className="flex gap-16 max-w-[1240px] mx-auto">
          <Sidebar />
          <div
            style={{
              boxShadow: '0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)',
              padding: '40px 4rem 80px 4rem',
              borderRadius: '0.625rem',
              width: '784px',
            }}
            className="h-full bg-white-100 border border-Grey-G60 flex flex-col gap-8"
          >
            {children}
          </div>
          <div className="flex items-end cursor-pointer">
            <Image src={help} alt="help" width={64} height={64} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Settingslayout;
