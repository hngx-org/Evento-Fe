import React from 'react';
import Input from '../../UserProfile/Input';
import Button from '../../ui/Button';
import TelInput from '../TelInput';

function Contact() {
  return (
    <div className={`flex flex-col gap-9`}>
      <div className="space-y-2">
        <h3 className={`text-Grey-G700 text-xl font-medium`}>Contact Information</h3>
        <p className="text-Grey-G100 text-sm w-[96%]">
          Update your reachable contacts used for notifications. Upon updating you will receive a code to verify your
          details. These information are not visible to the public
        </p>
      </div>
      <form className="space-y-8">
        <Input
          label="Email Address"
          placeholder="johndoe@gmail.com"
          type="email"
          inputHeight="h-[3.5rem]"
          backgroundColor="bg-white-N0"
        />
        <TelInput />
        {/* <Input label="Phone Number" placeholder="+234 812 3456 879" type="tel" inputHeight="h-[3.5rem]" /> */}
        <div className="flex justify-end">
          <Button type="button" title="contact-button" styles="text-white-N0 font-bold text-sm py-3 px-[1.12rem]">
            Update Phone Number
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
