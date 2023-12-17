import { useState, useEffect } from 'react';
import Modal from '@ui/Modal';
import { CloudAdd, CloseCircle } from 'iconsax-react';
import Button from '@ui/NewButton';

function SampleModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [timer, setTimer] = useState(120);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  return (
    <Modal closeOnOverlayClick isOpen={isOpen} closeModal={onClose} size="sm" isCloseIconPresent={false}>
      <div className="p-4">
        <Button onClick={onClose} className="absolute top-[20px] right-9">
          <CloseCircle size="30" color="#000000" />
        </Button>
        <div className="flex flex-col items-center justify-center text-center">
          <CloudAdd size="200" color="#37d67a" className="mb-4" />
          <h2 className="text-2xl font-bold text-green-2 mb-2">Sign Up Successful</h2>
          <p className="text-lg text-black-main font-normal">A link has been sent to your mail</p>
          <span className="text-md text-black-main font-normal mt-2">
            Check your email to verify your account. The link expires in {formatTime(timer)}.
          </span>
        </div>
      </div>
    </Modal>
  );
}
export default SampleModal;
