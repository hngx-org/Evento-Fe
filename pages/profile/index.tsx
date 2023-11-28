import React, { useState } from 'react';
import Head from 'next/head';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Montserrat, Nunito } from 'next/font/google';

import withAuth from '@/helpers/withAuth';
import AuthLayout from '@/layout/Authlayout';
import { Edit } from 'iconsax-react';
import ProfieEvent from '@/components/UserProfile/ProfieEvent';
import EditProfileModal from '@/components/UserProfile/EditProfileModal';
import { FacebookIcon, InstagramIcon, TwitterIcon } from '@/public/assets/profile/icons';
import { useRouter } from 'next/router';
import withoutAuth from '@/helpers/withoutAuth';

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
// add a userlayout later
const UserProfile: React.FC = () => {
  const [profilePicURL, setProfilePicURL] = useState('');

  const router = useRouter();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files && event.target.files[0];

    if (selectedImage) {
      // Log the name of the selected image file
      console.log('Selected image:', selectedImage.name);
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

  return (
    <AuthLayout>
      {/* <EditProfileModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
      <div className={` ${nunito.className} flex w-[100vw] overflow-hidden justify-center bg-[#F5F5F5]  `}>
        <section className="w-full h-[240px] bg-secondary-100 absolute">
          <Button
            handleClick={() => {}}
            styles={'  !rounded-[50%] border border-[#ED9E72] relative right-20 top-6 float-right'}
            type={'button'}
            title={'edit profile card'}
            disabled={true}
          >
            <Edit color="#FCEEE7" fontSize={20} className="" />
          </Button>
        </section>

        <section className="w-[358px] md:w-[634px] lg:w-[906px] relative top-[120px] flex flex-col gap-y-[92px] mb-[40vh]">
          <div className="w-full flex flex-col gap-y-6  bg-white-100 rounded-[12px] p-6">
            <div
              id="profilePicContainer"
              className=" rounded-[50%] w-[120px] h-[120px] bg-[#A4A4A4]  flex  justify-center items-center overflow-hidden "
            >
              <Edit onClick={() => {}} />
              <input
                type="file"
                accept="image/*"
                onChange={(event) => {
                  handleImageChange(event);
                }}
                className=" absolute w-6 h-6 opacity-0"
              />
            </div>

            <div className="info flex flex-col gap-4">
              <div className="flex justify-between">
                <h6 className={`${montserrat.className} text-xl md:text-2xl font-bold whitespace-nowrap1 `}>
                  Brooklyn Simeons
                </h6>
                <Button
                  handleClick={() => {
                    router.push('/profile/edit');
                    console.log('open Modal');
                  }}
                  styles={`${nunito.className} !font-bold !bg-white-100 flex items-center whitespace-nowrap gap-2 text-primary-100 border border-primary-100 py-2 px-3 lg:text-[14px] text-[12px]`}
                  type={'button'}
                  title={'edit profile'}
                  disabled={false}
                >
                  <Edit className="h-4 w-4" />
                  Edit Profile
                </Button>
              </div>
              <p className=" text-xs md:text-base line-clamp-3">
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
    </AuthLayout>
  );
};

export default withoutAuth(UserProfile);
