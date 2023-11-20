import React from 'react';

import { Edit } from 'iconsax-react';
import { Work_Sans } from 'next/font/google';

import Button from '@/components/ui/Button';
import Input from '@/components/UserProfile/Input';

interface EditProfileModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

const EditProfileModal: React.FC<EditProfileModalProps> = ({ isModalOpen, setIsModalOpen }) => {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <form
      className={` ${workSans.className}  ${
        isModalOpen ? '' : '!hidden'
      } flex justify-center w-full  bg-[#F5F5F5]  py-[107px] flex-col items-center gap-y-[32px] absolute z-50`}
    >
      <section className=" w-[842px] bg-white-100 relative  p-[64px] flex flex-col gap-y-[24px] ">
        <div className="ppcontainer rounded-[50%] w-[120px] h-[120px] bg-[#A4A4A4]  flex  justify-center items-center mb-2">
          <Edit />
        </div>

        <div className="info flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h6 className="text-xl font-bold">Edit Profile</h6>
            <p className="text-base line-clamp-3">Make changes to your profile</p>
          </div>
          <div className="personalInfo flex flex-col gap-y-5 ">
            <div className="flex justify-between ">
              <div className="w-[341px] ">
                {' '}
                <Input label="First Name " placeholder="Enter Firstname"></Input>
              </div>
              <div className="w-[341px] ">
                {' '}
                <Input label="Surname" placeholder="Enter Surname"></Input>
              </div>
            </div>
            <div className="w-[380px] ">
              {' '}
              <Input label="Display Name" type="text" placeholder="Enter a unique username"></Input>
            </div>
            <div placeholder="Enter Firstname">
              {' '}
              <Input
                label="Short bio "
                inputHeight="min-h-[104px]"
                textArea={true}
                placeholder="Enter a short bio"
              ></Input>
            </div>
          </div>
        </div>

        <div className="info flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h6 className="text-xl font-bold">Social Links</h6>
            <p className="text-base line-clamp-3">Add existing social links to build a stronger reputation</p>
          </div>
          <div className="socialInfo flex flex-col gap-y-5 ">
            <div className="flex justify-between ">
              <div className="w-[341px] ">
                {' '}
                <Input label="Website URL" placeholder="Enter your website URL"></Input>
              </div>
              <div className="w-[341px] ">
                {' '}
                <Input label="Twitter" placeholder="Enter your twitter handle"></Input>
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="w-[341px] ">
                {' '}
                <Input label="Facebook" placeholder="Enter your facebook handle"></Input>
              </div>
              <div className="w-[341px] ">
                {' '}
                <Input label="Instagram" placeholder="Enter your instagram handle"></Input>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="button flex gap-[32px]">
        <Button
          handleClick={() => {
            closeModal();
            console.log('close modal');
          }}
          styles={'!bg-white-100 gap-2 text-primary-100 border border-primary-100 w-[187px] py-4 '}
          type={'button'}
          title={'edit profile'}
          disabled={false}
        >
          Cancel
        </Button>
        <Button
          handleClick={() => {}}
          styles={' text-white-100 w-[187px] py-4 '}
          type={'submit'}
          title={'save profile'}
          disabled={true}
        >
          Save profile
        </Button>
      </div>

      {/* <section className="events w-[906px] relative "></section> */}
    </form>
  );
};

export default EditProfileModal;
