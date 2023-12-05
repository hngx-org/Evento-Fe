import React, { useEffect, useState } from 'react';
import Button from '../../ui/Button';
import ButtonB from '@/components/ui/NewButton';
import Input from '../../UserProfile/Input';
import { UserSocials, editUserSocials, getUserSocials } from '@/http/settingsapi';

function SociaMedia() {
  const [formData, setFormData] = useState<UserSocials>({
    websiteURL: '',
    twitterURL: '',
    facebookURL: '',
    instagramURL: '',
  });
  // console.log(formData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUserSocials(setFormData);
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
    editUserSocials(formData, setLoading);
    setTimeout(() => {
      getUserSocials(setFormData);
    }, 3000);
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
