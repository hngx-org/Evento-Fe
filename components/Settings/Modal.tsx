import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ModalProps } from '../../@types';
import { CloseCircle } from 'iconsax-react';

const sizes: Record<'xxl' | 'xl' | 'lg' | 'md' | 'sm', string> = {
  xxl: 'max-w-[980px]',
  xl: 'max-w-[700px]',
  lg: 'max-w-xl',
  md: 'max-w-lg',
  sm: 'max-w-[480px]',
};
function Modal({
  isOpen,
  closeModal,
  closeOnOverlayClick = false,
  children,
  title,
  size = 'sm',
  isCloseIconPresent = true,
  closeBtnClass,
}: ModalProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeOnOverlayClick ? closeModal : () => null}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-Grey-G700 opacity-20" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto flex justify-center items-center">
            <div className="flex">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  style={{ boxShadow: '0px 8px 24px 12px rgba(0, 0, 0, 0.08)' }}
                  className={`relative w-full ${sizes[size]} bg-white-N0 transform overflow-hidden rounded-2xl transition-all pt-6 pb-11 px-8`}
                >
                  {/* Close button */}
                  {isCloseIconPresent ? (
                    <div className="flex justify-end">
                      <div className={`cursor-pointer ${closeBtnClass}`} onClick={closeModal}>
                        <CloseCircle size={24} color="#292D32" />
                      </div>
                    </div>
                  ) : null}
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
export default Modal;
