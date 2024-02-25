import React, { useEffect, useState } from 'react';
import Switch from '../Switch';
import useDisclosure from '@/hooks/useDisclosure';
import Enable2Fa from './modal/enable2Fa';
import Code2Fa from './modal/code2Fa';

function TwoFA() {
  const [enabled, setEnabled] = useState(false);
  const [success, setSuccess] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { isOpen: codeIsOpen, onClose: codeOnClose, onOpen: codeOnOpen } = useDisclosure();

  useEffect(() => {
    if (success) {
      codeOnOpen();
      onClose();
    }
  }, [success]);

  function handleSwitch() {
    setEnabled(enabled ? false : true);
  }

  useEffect(() => {
    if (enabled) {
      onOpen();
    }
  }, [enabled]);

  return (
    <div className={`flex flex-col gap-9`}>
      <div className="space-y-2">
        <h3 className={`text-Grey-G700 text-xl font-medium`}>2 Factor Authentication</h3>
        <p className="text-Grey-G100 text-sm w-[98%]">
          This provides an extra layer of security for your account. In addition to your password, we will send a code
          to your email each time you sign in
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-Grey-G600">2 Factor Authentication (code)</p>
        <Switch defaultValue={false} enabled={enabled} setEnabled={setEnabled} handleClick={handleSwitch} />
      </div>
      <Enable2Fa isOpenB={isOpen} onCloseB={onClose} success={success} setSuccess={setSuccess} />
      <Code2Fa isOpen={codeIsOpen} onClose={codeOnClose} />
    </div>
  );
}

export default TwoFA;
