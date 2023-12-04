import React, { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import { Montserrat, Nunito } from 'next/font/google';
import withAuth from '@/helpers/withAuth';
import AuthLayout from '@/layout/Authlayout';
import { Edit, Facebook, Instagram } from 'iconsax-react';
import ProfieEvent from '@/components/UserProfile/ProfieEvent';
import { FacebookIcon, InstagramIcon, TwitterIcon } from '@/public/assets/profile/icons';
import { useRouter } from 'next/router';
import { UserProfile, UserProfile2, getSocialLinks, getUserProfile, socialLinks } from '@/http/profileapi';
import Image from 'next/image';
import SkeletonElement from '@/components/UserProfile/SkeletonElement';
import Typewriter from 'typewriter-effect';
import { FaFacebookF, FaTwitter } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

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

const UserProfile: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    userID: '',
    email: '',
    bio: '',

    profileImage: '',
    displayName: '',
    firstName: '',
    lastName: '',
    slug: '',
    role: '',
    location: '',
  });
  const [socialLinks, setSocialLinks] = useState<socialLinks>({
    facebookURL: '',
    instagramURL: '',
    twitterURL: '',
    websiteURL: '',
  });

  useEffect(() => {
    // remove time out to see skeleton
    getUserProfile(setUserProfile);
    getSocialLinks(setSocialLinks);
  }, []);

  useEffect(() => {
    //  send to local storage
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    localStorage.setItem('socialLinks', JSON.stringify(socialLinks));
  }, [userProfile]);

  const [profilePicURL, setProfilePicURL] = useState('');

  const router = useRouter();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files && event.target.files[0];

    if (selectedImage) {
      // Log the name of the selected image file
      const imageBlob = new Blob([selectedImage], { type: selectedImage.type });
      // post
      // postProfilePicture(imageBlob);
      // ?post

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
      <div className={` ${nunito.className} flex w-[100vw] h-fit overflow-hidden justify-center bg-[#F5F5F5]  `}>
        <section className="w-full h-[128px] md:h-[240px] bg-secondary-100 absolute ">
          <Button
            handleClick={() => {
              console.log(socialLinks, socialLinks?.facebookURL);
            }}
            styles={
              '  !rounded-[50%] border border-[#ED9E72] relative lg:right-20 md:right-[64px] right-[17px] top-4 md:top-6  float-right'
            }
            type={'button'}
            title={'edit profile card'}
            disabled={false}
          >
            <Edit color="#FCEEE7" fontSize={20} className="" />
          </Button>
        </section>

        <section className="w-[358px] md:w-[634px] lg:w-[906px] relative top-[120px] flex flex-col gap-y-[92px] mb-[40vh]">
          <div className="w-full flex flex-col gap-y-6  bg-white-100 rounded-[12px] p-6">
            {userProfile.profileImage ? (
              <div
                id="profilePicContainer"
                className=" rounded-[50%] w-[120px] h-[120px] bg-[#A4A4A4]  flex  justify-center items-center overflow-hidden "
              >
                <Image
                  alt=""
                  src="https://res.cloudinary.com/dnc0fjkpo/image/upload/v1701274125/ftxvhcqapviuntzypts5.png"
                  width={120}
                  height={120}
                />
              </div>
            ) : (
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
            )}

            <div className="info flex flex-col gap-4">
              <div className="flex justify-between">
                <h6
                  className={`${montserrat.className} text-xl md:text-2xl font-bold whitespace-nowrap1 min-w-[100px] w-fit `}
                >
                  {userProfile?.lastName ? (
                    <Typewriter
                      options={{}}
                      onInit={(typewriter) => {
                        typewriter.typeString(userProfile?.lastName + ' ' + userProfile?.firstName).start();
                      }}
                    />
                  ) : (
                    // Display a loading message or a skeleton element while bio is loading
                    <SkeletonElement type="text" />
                  )}

                  {/* {userProfile.firstName.length > 0 ? 'Mehn ' : 'Loading'} */}
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
              {/* <SkeletonElement type="title" /> */}
              <div className=" text-xs md:text-base text-[#676767] line-clamp-3 max-w-full">
                {userProfile?.bio ? (
                  <Typewriter
                    options={{}}
                    onInit={(typewriter) => {
                      typewriter.typeString(userProfile.bio).start();
                    }}
                  />
                ) : (
                  // Display a loading message or a skeleton element while bio is loading
                  <SkeletonElement type="text" />
                )}
              </div>
              <div className="socials flex gap-x-[20px] items-center">
                <a href={socialLinks?.instagramURL} target="_blank" rel="noopener noreferrer">
                  {/* <InstagramIcon className="" /> */}
                  {/* <Instagram className="h-8 w-8" /> */}
                  <RiInstagramFill className="h-8 w-8" />
                </a>

                <a href={socialLinks?.facebookURL} target="_blank" rel="noopener noreferrer">
                  {/* <FacebookIcon /> */}
                  <FaFacebookSquare className="h-8 w-8" />
                </a>

                <a href={socialLinks?.twitterURL} target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>

          <ProfieEvent />
        </section>
      </div>
    </AuthLayout>
  );
};

export default withAuth(UserProfile);
