import { Edit } from 'iconsax-react';

import Button from '@/components/ui/Button';
import ButtonB from '@/components/ui/NewButton';
import Input from '@/components/UserProfile/Input';
import AuthLayout from '@/layout/Authlayout';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Montserrat, Nunito } from 'next/font/google';
import {
  UserProfile2,
  editProfile,
  editSocialLinks,
  editUserProfile,
  postProfilePicture,
  socialLinks,
} from '@/http/profileapi';
import Image from 'next/image';
import { UserSocials, UserProfile, getUserSocials, getUserProfile } from '@/http/settingsapi';

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
  const [formData, setFormData] = useState<UserProfile>({
    firstName: '',
    lastName: '',
    email: '',
    bio: '',
  });
  // console.log(formData);
  const [socialLinks, setSocialLinks] = useState<UserSocials>({
    websiteURL: 'https://',
    twitterURL: 'https://twitter.com/',
    facebookURL: 'https://facebook.com/',
    instagramURL: 'https://instagram.com/',
  });
  const [reRoute, setReRoute] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUserProfile(setFormData);
    getUserSocials(setSocialLinks, setSuccess);
  }, []);

  useEffect(() => {
    if (success) {
      const updatedFormData = { ...socialLinks };
      for (const key in socialLinks) {
        if (socialLinks[key as keyof typeof socialLinks] === '') {
          switch (key) {
            case 'websiteURL':
              updatedFormData.websiteURL = 'https://';
              break;
            case 'twitterURL':
              updatedFormData.twitterURL = 'https://twitter.com/';
              break;
            case 'facebookURL':
              updatedFormData.facebookURL = 'https://facebook.com/';
              break;
            case 'instagramURL':
              updatedFormData.instagramURL = 'https://instagram.com/';
              break;
            default:
              break;
          }
        }
      }
      setSocialLinks(updatedFormData);
    }
  }, [success]);

  useEffect(() => {
    if (reRoute) {
      router.push('/profile');
    }
  }, [reRoute, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSocialLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let updatedValue = value;
    if (name === 'websiteURL' && !value.startsWith('https://')) {
      updatedValue = 'https://' + value.substring(8);
    } else if (name === 'twitterURL' && !value.startsWith('https://twitter.com/')) {
      updatedValue = 'https://twitter.com/' + value.substring(20);
    } else if (name === 'facebookURL' && !value.startsWith('https://facebook.com/')) {
      updatedValue = 'https://facebook.com/' + value.substring(21);
    } else if (name === 'instagramURL' && !value.startsWith('https://instagram.com/')) {
      updatedValue = 'https://instagram.com/' + value.substring(21);
    }

    setSocialLinks((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const [profilePicURL, setProfilePicURL] = useState('');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files && event.target.files[0];

    if (selectedImage) {
      setProfilePicURL(URL.createObjectURL(selectedImage));
      postProfilePicture(selectedImage);
    }
  };

  useEffect(() => {
    // Fetch user profile data from local storage
    const storedUserProfile = localStorage.getItem('userProfile');
    if (storedUserProfile) {
      const parsedUserProfile = JSON.parse(storedUserProfile);
      setProfilePicURL(parsedUserProfile.profileImage);
      // setFormData(parsedUserProfile);
    }
    // const storedSocialLinks = localStorage.getItem('socialLinks');
    // if (storedSocialLinks) {
    //   const parsedSocialLinks = JSON.parse(storedSocialLinks);
    //   setSocialLinks(parsedSocialLinks);
    // }
  }, []);

  const submitForm = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    const filteredFormData = Object.fromEntries(Object.entries(formData).filter(([key, value]) => value.trim() !== ''));

    const socialFieldsWithValues = Object.fromEntries(
      Object.entries(socialLinks).filter(([key, value]) => {
        switch (key) {
          case 'websiteURL':
            return value.startsWith('https://') && value.length > 'https://'.length;
          case 'twitterURL':
            return value.startsWith('https://twitter.com/') && value.length > 'https://twitter.com/'.length;
          case 'facebookURL':
            return value.startsWith('https://facebook.com/') && value.length > 'https://facebook.com/'.length;
          case 'instagramURL':
            return value.startsWith('https://instagram.com/') && value.length > 'https://instagram.com/'.length;
          default:
            return true;
        }
      }),
    );

    editProfile(setLoading, filteredFormData, socialFieldsWithValues, () => {
      setReRoute(true);
    });

    // editUserProfile(formData, () => {
    //   setReRoute(true);
    // });

    // editSocialLinks(socialLinks);
  };
  return (
    <AuthLayout>
      <form
        className={` ${nunito.className} flex justify-center w-full h-fit min-h-screen bg-[#F5F5F5] pt-[40px] pb-[55px] md:pt-[64px]   md:pb-[219px] lg:pt-[107px]  lg:pb-[377px] flex-col items-center gap-y-[32px]  overflow-hidden `}
        onSubmit={(e) => {
          e.preventDefault();
          submitForm(e);
        }}
      >
        <section className=" w-[358px] md:w-[634px] lg:w-[842px] bg-white-100 relative p-6 lg:p-[64px] flex flex-col gap-y-[24px]  rounded-2xl">
          <div
            id="profilePicContainer"
            className=" rounded-[50%] w-[120px] h-[120px] bg-[#A4A4A4]  flex  justify-center items-center overflow-clip z-[1] relative  "
          >
            {' '}
            <Edit
              onClick={() => {
                const input = document.querySelector<HTMLInputElement>('#imageInput');

                if (input) {
                  input.click();
                }
              }}
              className="absolute cursor-pointer z-10"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(event) => {
                handleImageChange(event);
              }}
              id="imageInput"
              className=" absolute  z-0 rounded-[50%] w-[120px] h-[120px] border opacity-0"
            />
            {profilePicURL && <Image className="w-full h-full" src={profilePicURL} alt="" height={120} width={120} />}
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
                    label="First name"
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
                    label="WebsiteURL"
                    placeholder="Enter your website URL"
                    name="websiteURL"
                    value={socialLinks.websiteURL}
                    onChange={(event) => {
                      handleSocialLinkChange(event);
                    }}
                  ></Input>
                </div>
                <div className=" md:w-[277px] lg:w-[341px] ">
                  {' '}
                  <Input
                    label="Twitter"
                    placeholder="Enter your twitter handle"
                    name="twitterURL"
                    value={socialLinks.twitterURL}
                    onChange={(event) => {
                      handleSocialLinkChange(event);
                    }}
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-y-8 justify-between ">
                <div className=" md:w-[277px] lg:w-[341px] ">
                  {' '}
                  <Input
                    label="Facebook"
                    placeholder="Enter your facebook handle"
                    name="facebookURL"
                    value={socialLinks.facebookURL}
                    onChange={(event) => {
                      handleSocialLinkChange(event);
                    }}
                  ></Input>
                </div>
                <div className=" md:w-[277px] lg:w-[341px] ">
                  {' '}
                  <Input
                    label="Instagram"
                    placeholder="Enter your instagram handle"
                    name="instagramURL"
                    value={socialLinks.instagramURL}
                    onChange={(event) => {
                      handleSocialLinkChange(event);
                    }}
                  ></Input>
                </div>
              </div>
            </div>
          </div>
          <div className="button flex flex-col md:flex-row gap-[32px]  md:self-center">
            <ButtonB
              onClick={() => {
                // closeModal();
                // route back to peofile page
                router.push('/profile');
              }}
              className={
                '!bg-white-100 gap-2 text-primary-100 border border-primary-100 rounded-lg w-full md:w-[187px] h-14'
              }
              type={'button'}
              title={'edit profile'}
              disabled={false}
            >
              Cancel
            </ButtonB>
            <ButtonB
              className={'text-white-100 bg-primary-100 rounded-lg w-full md:w-[187px] h-14'}
              type={'submit'}
              title={'save profile'}
              disabled={false}
              isLoading={loading}
            >
              Save profile
            </ButtonB>
          </div>
        </section>

        {/* <section className="events w-[906px] relative "></section> */}
      </form>
    </AuthLayout>
  );
};

export default EditProfilePage;
