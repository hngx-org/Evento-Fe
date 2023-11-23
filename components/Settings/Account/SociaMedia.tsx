import React from 'react';
import Button from '../../ui/Button';
import Input from '../../UserProfile/Input';

function SociaMedia() {
  return (
    <div className={`flex flex-col gap-9`}>
      <div className="space-y-2">
        <h3 className={`text-Grey-G700 text-xl font-medium`}>Social media links</h3>
        <p className="text-Grey-G100 text-sm">Attach your social media for more visibilty</p>
      </div>
      <form className="space-y-8">
        <Input
          label="Website URL"
          placeholder="www.johndoe.com"
          inputHeight="h-[3.5rem]"
          backgroundColor="bg-white-N0"
        />
        <Input label="Twitter" placeholder="@johndoe" inputHeight="h-[3.5rem]" backgroundColor="bg-white-N0" />
        <Input label="Facebook" placeholder="John Doe" inputHeight="h-[3.5rem]" backgroundColor="bg-white-N0" />
        <Input label="Instagram" placeholder="@johndoe" inputHeight="h-[3.5rem]" backgroundColor="bg-white-N0" />
        <div className="flex justify-end">
          <Button type="button" title="contact-button" styles="text-white-N0 font-bold text-sm py-3 px-[1.12rem]">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SociaMedia;
