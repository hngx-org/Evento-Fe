import { Edit } from 'iconsax-react';

import Button from '@/components/ui/Button';
import Input from '@/components/UserProfile/Input';
import AuthLayout from '@/layout/Authlayout';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Montserrat, Nunito } from 'next/font/google';
import { UserProfile, UserProfile2, editUserProfile } from '@/http/profileapi';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const EditProfilePage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<UserProfile2>({});
  const [reRoute, setReRoute] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
    imageBlob?: Blob,
  ) => {
    const { name, value } = e.target;

    if (name === 'twitter' || name === 'facebook' || name === 'instagram') {
      setFormData((prevData) => ({
        ...prevData,
        socialLinks: {
          ...prevData?.socialLinks,
          [name]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const [profilePicURL, setProfilePicURL] = useState('');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files && event.target.files[0];

    if (selectedImage) {
      // Log the name of the selected image file
      const imageBlob = new Blob([selectedImage], { type: selectedImage.type });

      setFormData((prevData) => ({ ...prevData, profileImage: selectedImage }));

      const imageUrl = URL.createObjectURL(selectedImage);
      setProfilePicURL(imageUrl);

      const tempProfilPic = `<Image src=${imageUrl} alt={''} className="relative w-full h-full" />`;

      const profilePicContainer = document.getElementById('profilePicContainer');

      if (profilePicContainer) {
        profilePicContainer.innerHTML = tempProfilPic;
      }
    }

    // handle the posting here
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    console.log(formData);
    editUserProfile(formData, setReRoute);

    setTimeout(() => {
      if (reRoute) {
        router.push('/profile');
      }
    }, 3000);
  };
  return (
    <AuthLayout>
      <form
        className={` ${nunito.className} flex justify-center w-full h-fit min-h-screen bg-[#F5F5F5] pt-[40px] pb-[55px] md:pt-[64px]   md:pb-[219px] lg:pt-[107px]  lg:pb-[377px] flex-col items-center gap-y-[32px]  overflow-hidden `}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
          submitForm(e);
        }}
      >
        <section className=" w-[358px] md:w-[634px] lg:w-[842px] bg-white-100 relative p-6 lg:p-[64px] flex flex-col gap-y-[24px]  rounded-2xl">
          <div
            id="profilePicContainer"
            className=" rounded-[50%] w-[120px] h-[120px] bg-[#A4A4A4]  flex  justify-center items-center overflow-hidden z-[1] "
          >
            <Edit onClick={() => {}} />
            <input
              type="file"
              accept="image/*"
              onChange={(event) => {
                handleImageChange(event);
              }}
              className=" absolute w-6 h-6 opacity-0 z-0 cursor-pointer"
            />
          </div>

          <div className="info flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h6 className={` ${montserrat.className}  text-xl font-bold`}>Edit Profile</h6>
              <p className="text-base line-clamp-3 text-[#959595]">Make changes to your profile</p>
            </div>
            <div className="personalInfo flex flex-col gap-y-5 ">
              <div className="flex flex-col md:flex-row gap-y-8 justify-between ">
                <div className=" md:w-[277px] lg:w-[341px] ">
                  {' '}
                  <Input
                    label="First name "
                    placeholder="Enter Firstname"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  ></Input>
                </div>
                <div className=" md:w-[277px] lg:w-[341px] ">
                  {' '}
                  <Input
                    label="Last name"
                    placeholder="Enter Last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  ></Input>
                </div>
              </div>
              {/* <div className="w-[380px] ">
              {' '}
              <Input label="Display Name" type="text" placeholder="Enter a unique username"></Input>
            </div> */}
              <div placeholder="Enter Firstname">
                {' '}
                <Input
                  label="Short bio "
                  inputHeight="min-h-[104px]"
                  textArea={true}
                  placeholder="Enter a short bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                ></Input>
              </div>
            </div>
          </div>

          <div className="info flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h6 className={` ${montserrat.className} text-xl font-bold`}>Social Links</h6>
              <p className="text-base line-clamp-3 text-[#959595]">
                Add existing social links to build a stronger reputation
              </p>
            </div>
            <div className="socialInfo flex flex-col gap-y-5 ">
              <div className="flex flex-col md:flex-row gap-y-8 justify-between ">
                <div className=" md:w-[277px] lg:w-[341px] ">
                  {' '}
                  <Input
                    label="Website URL"
                    placeholder="Enter your website URL"
                    name="website"
                    value={formData?.socialLinks?.website}
                    onChange={handleInputChange}
                  ></Input>
                </div>
                <div className=" md:w-[277px] lg:w-[341px] ">
                  {' '}
                  <Input
                    label="Twitter"
                    placeholder="Enter your twitter handle"
                    name="twitter"
                    value={formData?.socialLinks?.twitter}
                    onChange={handleInputChange}
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-y-8 justify-between ">
                <div className=" md:w-[277px] lg:w-[341px] ">
                  {' '}
                  <Input
                    label="Facebook"
                    placeholder="Enter your facebook handle"
                    name="facebook"
                    value={formData?.socialLinks?.facebook}
                    onChange={handleInputChange}
                  ></Input>
                </div>
                <div className=" md:w-[277px] lg:w-[341px] ">
                  {' '}
                  <Input
                    label="Instagram"
                    placeholder="Enter your instagram handle"
                    name="instagram"
                    value={formData?.socialLinks?.instagram}
                    onChange={handleInputChange}
                  ></Input>
                </div>
              </div>
            </div>
          </div>
          <div className="button flex flex-col md:flex-row gap-[32px]  lg:self-center">
            <Button
              handleClick={() => {
                // closeModal();
                // route back to peofile page
                console.log('close modal');
                router.push('/profile');
              }}
              styles={
                '!bg-white-100 gap-2 text-primary-100 border border-primary-100 w-full md:w-[285px] lg:w-[187px] py-4  '
              }
              type={'button'}
              title={'edit profile'}
              disabled={false}
            >
              Cancel
            </Button>
            <Button
              styles={' text-white-100  w-full md:w-[187px] py-4 '}
              type={'submit'}
              title={'save profile'}
              disabled={false}
            >
              Save profile
            </Button>
          </div>
        </section>

        {/* <section className="events w-[906px] relative "></section> */}
      </form>
    </AuthLayout>
  );
};

export default EditProfilePage;
