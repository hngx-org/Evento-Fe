import React from 'react';

import { Edit } from 'iconsax-react';
import { Work_Sans } from 'next/font/google';

import Button from '@/components/ui/Button';
import Input from '@/components/UserProfile/Input';
import { useRouter } from 'next/router';

interface EditProfileModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

const EditProfileModal: React.FC = () => {
  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };

  const router = useRouter();

  return (
    <form
      className={` ${workSans.className} flex justify-center w-full h-fit min-h-screen bg-[#F5F5F5] pt-[40px] pb-[55px] md:pt-[64px]   md:pb-[219px] lg:pt-[107px]  lg:pb-[377px] flex-col items-center gap-y-[32px]  overflow-hidden `}
    >
      <section className=" w-[358px] md:w-[634px] lg:w-[842px] bg-white-100 relative p-6 lg:p-[64px] flex flex-col gap-y-[24px]  rounded-2xl">
        <div className="ppcontainer rounded-[50%] w-[120px] h-[120px] bg-[#A4A4A4]  flex  justify-center items-center mb-2">
          <Edit />
        </div>

        <div className="info flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h6 className="text-xl font-bold">Edit Profile</h6>
            <p className="text-base line-clamp-3">Make changes to your profile</p>
          </div>
          <div className="personalInfo flex flex-col gap-y-5 ">
            <div className="flex flex-col md:flex-row gap-y-8 justify-between ">
              <div className=" md:w-[277px] lg:w-[341px] ">
                {' '}
                <Input label="First name " placeholder="Enter Firstname"></Input>
              </div>
              <div className=" md:w-[277px] lg:w-[341px] ">
                {' '}
                <Input label="Last name" placeholder="Enter Last name"></Input>
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
            <div className="flex flex-col md:flex-row gap-y-8 justify-between ">
              <div className=" md:w-[277px] lg:w-[341px] ">
                {' '}
                <Input label="Website URL" placeholder="Enter your website URL"></Input>
              </div>
              <div className=" md:w-[277px] lg:w-[341px] ">
                {' '}
                <Input label="Twitter" placeholder="Enter your twitter handle"></Input>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-y-8 justify-between ">
              <div className=" md:w-[277px] lg:w-[341px] ">
                {' '}
                <Input label="Facebook" placeholder="Enter your facebook handle"></Input>
              </div>
              <div className=" md:w-[277px] lg:w-[341px] ">
                {' '}
                <Input label="Instagram" placeholder="Enter your instagram handle"></Input>
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
            handleClick={() => {}}
            styles={' text-white-100  w-full md:w-[187px] py-4 '}
            type={'submit'}
            title={'save profile'}
            disabled={true}
          >
            Save profile
          </Button>
        </div>
      </section>

      {/* <section className="events w-[906px] relative "></section> */}
    </form>
  );
};

export default EditProfileModal;
