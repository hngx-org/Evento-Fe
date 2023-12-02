import React from 'react';
import Input from '@/components/UserProfile/Input';
import Button from '@/components/ui/Button';

function Password() {
  return (
    <div className={`flex flex-col gap-9 mt-4`}>
      <div className="space-y-2">
        <h3 className={`text-Grey-G700 text-xl font-medium`}>Password</h3>
        <p className="text-Grey-G100 text-sm">
          Set a password or reset it if forgotten. You will receive a code via email to confirm the new password
        </p>
      </div>
      <form className="space-y-8">
        <Input label="New Password" type="password" inputHeight="h-[3.5rem]" backgroundColor="bg-white-N0" />
        <div className="flex justify-end">
          <Button type="button" title="password-button" styles="text-white-N0 font-bold text-sm py-3 px-[1.12rem]">
            Set New Password
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Password;
