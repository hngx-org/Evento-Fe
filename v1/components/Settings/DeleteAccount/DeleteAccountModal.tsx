import Input from '@/components/UserProfile/Input';
import Modal from '../Modal';
import { Montserrat, Nunito } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import ButtonB from '@/components/ui/NewButton';
import { deleteUserAccount } from '@/http/settingsapi';
import logoutUser from '@/hooks/logout';
import { useRouter } from 'next/router';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

function DeleteAccountModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  function handleDelete() {
    deleteUserAccount(setLoading, setSuccess);
  }

  useEffect(() => {
    if (success) {
      logoutUser();
      router.push('/');
    }
  }, [success, router]);

  return (
    <Modal isOpen={isOpen} closeModal={onClose} isCloseIconPresent={true} size="xl">
      <div className={`${nunito.className}`}>
        <div className="space-y-2">
          <h4 className={`${montserrat.className} text-Errors-E300 text-[2rem] font-semibold`}>Delete Account</h4>
          <p className="text-Grey-G100">
            This action will permanently delete your account from our server and all saved data will be erased
          </p>
        </div>
        <div className="mt-7">
          <Input label="Reason (optional)" textArea inputHeight="h-[6.5rem]" backgroundColor="bg-white-N0" />
          <p className="text-Grey-G100 mt-1">If there is any crucial reason for this please let us know</p>
        </div>
        <div className="mt-16 flex items-center justify-end gap-4">
          <ButtonB
            type="button"
            title="cancel"
            className="bg-transparent border border-primary-100 text-primary-100 font-bold text-sm w-[150px] py-3 rounded-lg"
            onClick={onClose}
          >
            Cancel
          </ButtonB>
          <ButtonB
            type="button"
            title="delete"
            className="text-white-N0 bg-primary-100 rounded-lg font-bold text-sm px-4 py-3"
            isLoading={loading}
            onClick={handleDelete}
          >
            Delete Account
          </ButtonB>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteAccountModal;
