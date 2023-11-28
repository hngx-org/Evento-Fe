import Modal from '@ui/Modal';
import Button from '@ui/NewButton';
import { Input } from '@ui/NewInput';
import Image from 'next/image';
import { Work_Sans, Nunito, Montserrat } from 'next/font/google';

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

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

function ForgetPassword({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal closeOnOverlayClick isOpen={isOpen} closeModal={onClose} size="sm">
      <div className="p-6">
        <div className="p-4">
          <button onClick={onClose} className="absolute top-[46px] right-12">
            <Image src="/close-circle.svg" alt="Close icon" width={20} height={20} />
          </button>
        </div>
        <h1 className={`${montserrat.className} text-black-main text-2xl font-semibold`}>Forgot your Password?</h1>
        <p className={`${nunito.className} mt-2 w-[370px;] text-sm font-medium`}>
          Enter your registered Email address to receive reset instructions.
        </p>
        <form>
          <div className="pt-4">
            <label htmlFor="email" className={`${nunito.className} mt-2 w-[370px;] text-md font-medium`}>
              Email:
            </label>
            <Input
              type="email"
              id="email"
              className="p-4 border w-full border-zinc-400 text-black-main font-medium leading-normal mt-2"
              placeholder="Enter email address"
            />
          </div>
          <Button className=" text-white-100 px-5 py-4 bg-primary-100 rounded-lg shadow text-base font-normal w-full mt-5 leading-normal">
            Send recovery instructions
          </Button>
        </form>
      </div>
    </Modal>
  );
}
export default ForgetPassword;
