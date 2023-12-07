import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import profile from 'public/profileB.svg';
// import Button from '../../ui/Button';
import Input from '@/components/UserProfile/Input';
import ButtonB from '@/components/ui/Button';
import Button from '@/components/ui/NewButton';
import TelInput from '../TelInput';
import { editUserProfile } from '@/http/profileapi';
import { UserProfile, deleteUploadedImage, editUserAccount, getUserProfile, uploadUserImage } from '@/http/settingsapi';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

function EditProfile() {
  const [formData, setFormData] = useState<UserProfile>({
    firstName: '',
    lastName: '',
    email: '',
    bio: '',
    profileImage: '',
  });
  // const [profileImage, setProfileImage] = useState<string | StaticImport>('');
  const [loading, setLoading] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [removeLoading, setRemoveLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const image = URL.createObjectURL(file);
      // setProfileImage(image);
      setFormData((prev) => ({
        ...prev,
        profileImage: image,
      }));
      uploadUserImage(file, setUploadLoading);
    }
  };

  const handleImageUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  useEffect(() => {
    getUserProfile(setFormData);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // console.log('clicked');
    editUserAccount(formData, setLoading);
    setTimeout(() => {
      getUserProfile(setFormData);
    }, 3000);
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
            src={formData.profileImage ? formData.profileImage : profile}
            width={84}
            height={84}
            alt="user-profile"
            className={`w-full h-full object-cover rounded-full ${
              formData.profileImage ? 'border-2 border-primary-100' : ''
            }`}
          />
        </div>
        <input
          ref={fileInputRef}
          style={{ display: 'none' }}
          type="file"
          onChange={(event) => handleImageChange(event)}
        />
        <Button
          type="button"
          title="upload"
          className="text-white-N0 font-bold text-sm bg-primary-100 rounded-lg px-2 h-9"
          onClick={handleImageUpload}
          isLoading={uploadLoading}
        >
          Upload Picture
        </Button>
        <Button
          type="button"
          title="remove"
          className="bg-transparent border border-primary-100 text-primary-100 font-bold text-sm rounded-lg h-9"
          isLoading={removeLoading}
          onClick={() => deleteUploadedImage(setRemoveLoading)}
        >
          Remove
        </Button>
      </div>
      <form className="space-y-8" onSubmit={(e) => (e.preventDefault(), handleSubmit())}>
        <Input
          label="First Name"
          name="firstName"
          placeholder="John"
          inputHeight="h-[3.5rem]"
          backgroundColor="bg-white-N0"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <Input
          label="Last Name"
          name="lastName"
          placeholder="Doe"
          inputHeight="h-[3.5rem]"
          backgroundColor="bg-white-N0"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <Input
          label="Email Address"
          placeholder="johndoe@gmail.com"
          name="email"
          type="email"
          inputHeight="h-[3.5rem]"
          backgroundColor="bg-white-N0"
          value={formData.email}
          onChange={handleInputChange}
        />
        {/* <TelInput /> */}
        <Input
          label="Short bio "
          inputHeight="h-[9.5rem] lg:min-h-[104px]"
          backgroundColor="bg-white-N0"
          name="bio"
          textArea={true}
          placeholder="Lorem ipsum dolor sit amet consectetur. Elit ultricies in fermentum enim cursus convallis etiam consectetur potenti."
          value={formData.bio}
          onChange={handleInputChange}
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            title="profile-button"
            className="text-white-N0 font-bold text-sm py-3 px-[1.12rem] bg-primary-100 rounded-lg"
            isLoading={loading}
            // handleClick={() => handleSubmit()}
          >
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
