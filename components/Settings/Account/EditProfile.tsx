import React from 'react';
import Image from 'next/image';
import profile from 'public/profileB.svg';
import Button from '../../ui/Button';
import Input from '../../UserProfile/Input';

function EditProfile() {
  return (
    <div className={`flex flex-col gap-9`}>
      <div className="space-y-2">
        <h3 className={`text-Grey-G700 text-xl font-medium`}>Edit Profile</h3>
        <p className="text-Grey-G100 text-sm">Customize your profile to your liking</p>
      </div>
      <div className="flex items-center gap-7 -mt-4">
        <Image src={profile} width={84} height={84} alt="user-profile" />
        <Button type="button" title="upload-button" styles="text-white-N0 font-bold text-sm">
          Upload Picture
        </Button>
        <Button
          type="button"
          title="remove-button"
          styles="bg-transparent border border-primary-100 text-primary-100 font-bold text-sm"
        >
          Remove
        </Button>
      </div>
      <form className="space-y-8">
        <Input label="Full Name" placeholder="John Doe" inputHeight="h-[3.5rem]" backgroundColor="bg-white-N0" />
        <Input
          label="Short bio "
          inputHeight="h-[9.5rem] lg:min-h-[104px]"
          backgroundColor="bg-white-N0"
          textArea={true}
          placeholder="Lorem ipsum dolor sit amet consectetur. Elit ultricies in fermentum enim cursus convallis etiam consectetur potenti."
        />
        <div className="flex justify-end">
          <Button type="button" title="profile-button" styles="text-white-N0 font-bold text-sm py-3 px-[1.12rem]">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
