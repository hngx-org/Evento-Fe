import React, { useRef, useState } from 'react';
import Image from 'next/image';
import profile from 'public/profileB.svg';
import Button from '../../ui/Button';
import Input from '../../UserProfile/Input';
import TelInput from '../TelInput';

function EditProfile() {
  const [profileImage, setProfileImage] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedImage = event.target.files[0];
      setProfileImage(URL.createObjectURL(selectedImage));
    }
  };

  const handleImageUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={`flex flex-col gap-9`}>
      <div className="space-y-2">
        <h3 className={`text-Grey-G700 text-xl font-medium`}>Edit Profile</h3>
        <p className="text-Grey-G100 text-sm">Customize your profile to your liking</p>
      </div>
      <div className="flex items-center gap-7 -mt-4">
        <div className={`w-[84px] h-[84px] rounded-full`}>
          <Image
            src={profileImage ? profileImage : profile}
            width={84}
            height={84}
            alt="user-profile"
            className={`w-full h-full object-cover rounded-full ${profileImage ? 'border-2 border-primary-100' : ''}`}
          />
        </div>
        <input
          ref={fileInputRef}
          style={{ display: 'none' }}
          type="file"
          onChange={(event) => handleImageChange(event)}
        />
        <Button type="button" title="upload" styles="text-white-N0 font-bold text-sm" handleClick={handleImageUpload}>
          Upload Picture
        </Button>
        <Button
          type="button"
          title="remove"
          styles="bg-transparent border border-primary-100 text-primary-100 font-bold text-sm"
          handleClick={() => setProfileImage('')}
        >
          Remove
        </Button>
      </div>
      <form className="space-y-8">
        <Input label="First Name" placeholder="John" inputHeight="h-[3.5rem]" backgroundColor="bg-white-N0" />
        <Input label="Last Name" placeholder="Doe" inputHeight="h-[3.5rem]" backgroundColor="bg-white-N0" />
        <Input
          label="Email Address"
          placeholder="johndoe@gmail.com"
          type="email"
          inputHeight="h-[3.5rem]"
          backgroundColor="bg-white-N0"
        />
        <TelInput />
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
