import Sidebar from '@/components/Settings/Sidebar';
import AuthenticatedHeader from '@/components/components/authenticatedheader';
import Image from 'next/image';
import React from 'react';
import help from 'public/assets/settings/help.svg';
import DeleteAccountModal from '@/components/Settings/DeleteAccount/DeleteAccountModal';
import useDisclosure from '@/hooks/useDisclosure';

function Settingslayout({ children }: { children: React.ReactNode }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div>
      <AuthenticatedHeader />
      <main className="bg-white-N0 min-h-screen">
        <div style={{ padding: '96px 10px 96px 10px' }} className="flex gap-16 max-w-[1240px] mx-auto">
          <Sidebar onOpen={onOpen} />
          <div
            style={{
              boxShadow: '0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)',
              padding: '40px 4rem 60px 4rem',
              borderRadius: '0.625rem',
              width: '784px',
            }}
            className="h-full bg-white-N0 border border-Grey-G60 flex flex-col gap-8"
          >
            {children}
          </div>
          <div className="flex items-end cursor-pointer">
            <Image src={help} alt="help" width={64} height={64} />
          </div>
        </div>
      </main>
      <DeleteAccountModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default Settingslayout;
