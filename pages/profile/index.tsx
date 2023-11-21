import React, { useState } from 'react';
import Head from 'next/head';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Work_Sans } from 'next/font/google';

import { Edit } from 'iconsax-react';
import withoutAuth from '@/helpers/withoutAuth';

import NoEvent from '@/components/UserProfile/NoEvent';
import ProfieEvent from '@/components/UserProfile/ProfieEvent';
import EditProfileModal from '@/components/UserProfile/EditProfileModal';
import { FacebookIcon, InstagramIcon, TwitterIcon } from '@/public/assets/profile/icons';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});
// add a userlayout later
const UserProfile: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={` ${workSans.className} flex justify-center bg-[#F5F5F5]  `}>
      <EditProfileModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <section className="w-full h-[240px] bg-secondary-100 absolute">
        <Button
          handleClick={() => {}}
          styles={'!rounded-[50%] border border-[#ED9E72] relative right-20 top-6 float-right'}
          type={'button'}
          title={'edit profile card'}
          disabled={true}
        >
          <Edit color="#FCEEE7" fontSize={20} />
        </Button>
      </section>

      <section className=" w-[906px] relative top-[120px] flex flex-col gap-y-[92px] mb-[40vh]">
        <div className="w-full flex flex-col gap-y-6  bg-white-100 rounded-[12px] p-6">
          <div className="ppcontainer rounded-[50%] w-[120px] h-[120px] bg-[#A4A4A4]  flex  justify-center items-center">
            <Edit />
          </div>

          <div className="info flex flex-col gap-4">
            <div className="flex justify-between">
              <h6 className="text-2xl font-bold">Brooklyn Simeons</h6>
              <Button
                handleClick={() => {
                  openModal();
                  console.log('open Modal');
                }}
                styles={'!bg-white-100 flex gap-2 text-primary-100 border border-primary-100 py-2 px-3'}
                type={'button'}
                title={'edit profile'}
                disabled={false}
              >
                <Edit />
                Edit Profile
              </Button>
            </div>
            <p className="text-base line-clamp-3">
              Lorem ipsum dolor sit amet consectetur. Dis non diam neque at ac fringilla in consequat. Facilisis velit
              in cum lorem feugiat. Libero elementum donec at nulla. Sed auctor nunc phasellus tristique porttitor
              tortor fames natoque.
            </p>
            <div className="socials flex gap-x-[20px] items-center">
              <InstagramIcon />

              <FacebookIcon />

              <TwitterIcon />
            </div>
          </div>
        </div>

        <ProfieEvent />
      </section>

      {/* <section className="events w-[906px] relative "></section> */}
    </div>
  );
};

export default withoutAuth(UserProfile);
