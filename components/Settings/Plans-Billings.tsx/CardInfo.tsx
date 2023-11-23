import React from 'react';
import Switch from '../Switch';
import Input from '@/components/UserProfile/Input';
import Button from '@/components/ui/Button';

function CardInfo() {
  return (
    <div className="mt-5 flex flex-col gap-9">
      <div className={`space-y-2`}>
        <h3 className="text-Grey-G700 text-xl font-medium">Card Information</h3>
        <p className="text-Grey-G100 text-sm">
          Add cards here to use them for automatically renewing your preferred plan.
        </p>
      </div>
      <div className="flex items-center justify-between border-b border-b-Grey-G40 pb-7">
        <p className="font-medium text-Grey-G600">Automatically renew plan with card</p>
        <Switch defaultValue />
      </div>
      <div className="-mt-2">
        <Input label="Card Number" placeholder="5790-2456-9013" inputHeight="h-[3.5rem]" />
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        <div className="col-span-2">
          <Input label="Expiration Date" type="date" inputHeight="h-[3.5rem]" />
        </div>
        <div>
          <Input label="CVV" placeholder="352" inputHeight="h-[3.5rem]" />
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <Button type="button" title="password-button" styles="text-white-N0 font-bold text-sm py-3 px-[1.12rem]">
          Add Card
        </Button>
      </div>
    </div>
  );
}

export default CardInfo;
