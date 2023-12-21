import React, { useEffect, useState } from 'react';
import Button from '../../ui/Button';
import ButtonB from '@/components/ui/NewButton';
import Input from '../../UserProfile/Input';
import { UserSocials, editUserSocials, getUserSocials } from '@/http/settingsapi';

function SociaMedia() {
  const [formData, setFormData] = useState<UserSocials>({
    websiteURL: 'https://',
    twitterURL: 'https://twitter.com/',
    facebookURL: 'https://facebook.com/',
    instagramURL: 'https://instagram.com/',
  });
  // console.log(formData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getUserSocials(setFormData, setSuccess);
  }, []);

  useEffect(() => {
    if (success) {
      const updatedFormData = { ...formData };
      for (const key in formData) {
        if (formData[key as keyof typeof formData] === '') {
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
      setFormData(updatedFormData);
    }
  }, [success]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
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

    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = () => {
    const fieldsWithValues = Object.fromEntries(
      Object.entries(formData).filter(([key, value]) => {
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

    editUserSocials(fieldsWithValues, setLoading);
    // setTimeout(() => {
    //   getUserSocials(setFormData);
    // }, 3000);
  };

  return (
    <div className={`flex flex-col gap-9`}>
      <div className="space-y-2">
        <h3 className={`text-Grey-G700 text-xl font-medium`}>Social media links</h3>
        <p className="text-Grey-G100 text-sm">Attach your social media for more visibilty</p>
      </div>
      <form className="space-y-8" onSubmit={(e) => (e.preventDefault(), handleSubmit())}>
        <Input
          label="Website URL"
          name="websiteURL"
          placeholder="www.johndoe.com"
          inputHeight="h-[3.5rem]"
          backgroundColor="bg-white-N0"
          value={formData.websiteURL}
          onChange={handleInputChange}
        />
        <Input
          label="Twitter"
          name="twitterURL"
          placeholder="@johndoe"
          inputHeight="h-[3.5rem]"
          backgroundColor="bg-white-N0"
          value={formData.twitterURL}
          onChange={handleInputChange}
        />
        <Input
          label="Facebook"
          name="facebookURL"
          placeholder="John Doe"
          inputHeight="h-[3.5rem]"
          backgroundColor="bg-white-N0"
          value={formData.facebookURL}
          onChange={handleInputChange}
        />
        <Input
          label="Instagram"
          name="instagramURL"
          placeholder="@johndoe"
          inputHeight="h-[3.5rem]"
          backgroundColor="bg-white-N0"
          value={formData.instagramURL}
          onChange={handleInputChange}
        />
        <div className="flex justify-end">
          <ButtonB
            type="submit"
            title="contact-button"
            className="text-white-N0 font-bold text-sm py-3 px-[1.12rem] bg-primary-100 rounded-lg"
            isLoading={loading}
          >
            Save Changes
          </ButtonB>
        </div>
      </form>
    </div>
  );
}

export default SociaMedia;
