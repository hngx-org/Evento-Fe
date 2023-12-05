import React, { useState, useRef } from 'react';
import Modal from '../../Modal';
import { montserrat, nunito } from './enable2Fa';
import { Input } from '@/components/ui/NewInput';
import Button from '@/components/ui/NewButton';
import { InputRef } from '@/@types';
import Logic2FA from '../logic2FA';

function Code2Fa({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { digits, loading, inputRefs, handleDigitChange, handleKeyDown, handlePaste } = Logic2FA();

  return (
    <Modal isOpen={isOpen} closeModal={onClose} isCloseIconPresent={true} size="xl">
      <div className={`${nunito.className}`}>
        <div className="space-y-2">
          <h4 className={`${montserrat.className} text-lg font-semibold`}>Verify Code</h4>
          <p className="text-Grey-G100 text-sm">A code has been sent to your mail</p>
        </div>
        <form className="mt-5 space-y-2">
          <label htmlFor="code" className={`text-sm text-Grey-G600 font-medium`}>
            Enter 6 digit code
          </label>
          <div className="grid grid-cols-6 gap-2">
            {digits.map((digit, index) => (
              <Input
                key={index}
                id={index.toString()}
                name={index.toString()}
                type="tel"
                maxLength={1}
                pattern="\d"
                value={digit}
                className="w-12 h-14 border border-Grey-G60 focus:border-primary-100 text-center"
                placeHolder=""
                onChange={(e) => handleDigitChange(index, e)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={(e) => handlePaste(e, index)}
                ref={inputRefs[index]}
                aria-label={`Digit ${index + 1}`}
                required
              />
            ))}
          </div>
        </form>
        <Button
          type="button"
          title="update"
          className="text-white-N0 bg-primary-100 rounded-lg font-bold text-sm py-3 w-full mt-7"
          isLoading={loading}
          //   onClick={() => enable2fa(email, setLoading, setSuccess)}
        >
          Continue
        </Button>
      </div>
    </Modal>
  );
}

export default Code2Fa;
