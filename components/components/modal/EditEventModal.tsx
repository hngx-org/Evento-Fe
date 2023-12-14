import React, { useState } from 'react';
import Modal from '@ui/Modal';

function EditEventModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <div>
      <Modal closeOnOverlayClick isOpen={isOpen} closeModal={onClose} isCloseIconPresent={false} size="sm"></Modal>
    </div>
  );
}

export default EditEventModal;
