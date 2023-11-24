import Modal from '@ui/Modal';

function SampleModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal
      closeOnOverlayClick
      isOpen={isOpen}
      closeModal={onClose}
      isCloseIconPresent={false}
      size="sm"
      title="Plutor wants to kill me"
    >
      <p>PLutor is a hardworking and rich lady</p>
    </Modal>
  );
}
export default SampleModal;
