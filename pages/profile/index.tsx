import React, { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import { Montserrat, Nunito } from 'next/font/google';
import withAuth from '@/helpers/withAuth';
import AuthLayout from '@/layout/Authlayout';
import { Edit, Facebook, Instagram } from 'iconsax-react';
import ProfieEvent from '@/components/UserProfile/ProfieEvent';
import { FacebookIcon, InstagramIcon, TwitterIcon } from '@/public/assets/profile/icons';
import { useRouter } from 'next/router';
import {
  UserProfile,
  UserProfile2,
  eventType,
  getSocialLinks,
  getUserProfile,
  postCoverPicture,
  postProfilePicture,
  socialLinks,
} from '@/http/profileapi';
import Image from 'next/image';
import SkeletonElement from '@/components/UserProfile/SkeletonElement';
import Typewriter from 'typewriter-effect';
import { FaFacebookF, FaTwitter } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { inflate } from 'zlib';
import { getUserEvents } from '@/http/dashBoard3api';

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
    coverImage: '',

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
    //  send to local storage
    userProfile.coverImage && setCoverPic(userProfile.coverImage);
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    // localStorage.setItem('socialLinks', JSON.stringify(socialLinks));
  }, [userProfile]);

  const [pastEvents, setPastEvents] = useState<eventType[]>([]);
  const [createdEvents, setCreatedEvent] = useState<eventType[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<eventType[]>([]);
  const combinedEvents = [...createdEvents, ...upcomingEvents];

  const openPopup = (url: string) => {
    const width = 600;
    const height = 400;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    window.open(
      url,
      'Popup',
      `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=${width}, height=${height}, top=${top}, left=${left}`,
    );
  };
  useEffect(() => {
    getUserProfile(setUserProfile);
    getSocialLinks(setSocialLinks);
    const storedUserProfile = localStorage.getItem('userProfile');
    if (storedUserProfile) {
      const parsedUserProfile = JSON.parse(storedUserProfile);
      setUserProfile(parsedUserProfile);
    }
    getUserEvents(setPastEvents, setCreatedEvent, setUpcomingEvents);
  }, []);

  // useEffect(() => {
  //   console.log(userProfile);
  // }, [userProfile]);

  const [profilePicURL, setProfilePicURL] = useState('');
  const [coverPic, setCoverPic] = useState('');

  const router = useRouter();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files && event.target.files[0];

    if (selectedImage) {
      // Log the name of the selected image file
      const imageUrl = URL.createObjectURL(selectedImage);
      setProfilePicURL(imageUrl);
      postProfilePicture(selectedImage);
      // ?post

      const tempProfilPic = `<Image src=${imageUrl} alt={''} className="relative w-full h-full" />`;

      const profilePicContainer = document.getElementById('profilePicContainer');

      if (profilePicContainer) {
        profilePicContainer.innerHTML = tempProfilPic;
      }
    }

    // handle the posting here
  };
  const handlCoverImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files && event.target.files[0];

    if (selectedImage) {
      // Log the name of the selected image file
      const coverImageUrl = URL.createObjectURL(selectedImage);
      setCoverPic(coverImageUrl);
      console.log('cover image upload');
      postCoverPicture(selectedImage);
    }
  };

  return (
    <AuthLayout>
      <div className={` ${nunito.className} flex w-[100vw] h-fit overflow-hidden justify-center bg-[#F5F5F5]  `}>
        <section className="w-full h-[128px] md:h-[240px] bg-secondary-100 absolute  overflow-hidden ">
          {coverPic && (
            <div className="flex justify-center items-center w-full h-full">
              <Image src={coverPic} width={100} height={100} alt="" className="object-cover w-full h-full" />
            </div>
          )}

          <Button
            handleClick={() => {
              // console.log(socialLinks, socialLinks?.facebookURL);
            }}
            styles={
              '  !rounded-[50%] border border-[#ED9E72] absolute lg:right-20 md:right-[64px] right-[17px] top-4 md:top-6  float-right'
            }
            type={'button'}
            title={'edit profile card'}
            disabled={false}
          >
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={handlCoverImageChange}
              // style={{ display: 'none' }}
              className="absolute  z-0 rounded-[50%] w-full h-full border opacity-0 top-0 left-0"
            />
            <Edit color="#FCEEE7" fontSize={20} className="" />
          </Button>
        </section>

        <section className="w-full md:w-[634px] lg:w-[906px] relative top-[120px] flex flex-col gap-y-[92px] mb-[40vh]">
          <div className="w-full flex flex-col gap-y-6  bg-white-100 rounded-[12px] md:px-6 py-6 px-4  ">
            {userProfile.profileImage ? (
              <div
                id="profilePicContainer"
                className=" rounded-[50%] w-[120px] h-[120px] bg-[#A4A4A4]  flex  justify-center items-center overflow-hidden "
              >
                <Image alt="" src={userProfile.profileImage} width={120} height={120} />
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
                  className={`${montserrat.className} text-xl md:text-2xl font-bold whitespace-nowrap min-w-[100px] w-fit `}
                >
                  {userProfile?.lastName ? (
                    // <Typewriter
                    //   options={{}}
                    //   onInit={(typewriter) => {
                    //     typewriter.typeString(userProfile?.lastName + ' ' + userProfile?.firstName).start();
                    //   }}
                    // />
                    userProfile?.lastName + ' ' + userProfile?.firstName
                  ) : (
                    // Display a loading message or a skeleton element while bio is loading
                    <SkeletonElement type="title" className="h-4" />
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
              <div className=" text-xs md:text-base text-[#676767] line-clamp-3 max-w-full min-w-[100px] ">
                {userProfile?.bio ? (
                  // <Typewriter
                  //   options={{}}
                  //   onInit={(typewriter) => {
                  //     typewriter.typeString(userProfile.bio).start();
                  //   }}
                  // />
                  userProfile.bio
                ) : (
                  // Display a loading message or a skeleton element while bio is loading
                  <div className="flex flex-col ">
                    {' '}
                    <SkeletonElement type="text" className="" />
                    <SkeletonElement type="text" className="" />
                    <SkeletonElement type="text" className="" />
                  </div>
                )}
              </div>
              <div className="socials flex gap-x-[20px] items-center">
                {/* <a
                  href={socialLinks?.instagramURL || 'www.google.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                > */}
                {/* <InstagramIcon className="" /> */}
                {/* <Instagram className="h-8 w-8" /> */}
                <RiInstagramFill
                  className="h-8 w-8 cursor-pointer"
                  onClick={() => {
                    socialLinks.instagramURL && openPopup(socialLinks.instagramURL);
                  }}
                />
                {/* </a> */}

                <FaFacebookSquare
                  className="h-8 w-8 cursor-pointer"
                  onClick={() => {
                    socialLinks.facebookURL && openPopup(socialLinks.facebookURL);
                  }}
                />

                <FaTwitter
                  className="h-8 w-8 cursor-pointer"
                  onClick={() => {
                    socialLinks.twitterURL && openPopup(socialLinks.twitterURL);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="md:px-0 px-4">
            <ProfieEvent combinedEvents={combinedEvents} pastEvents={pastEvents} />{' '}
          </div>
        </section>
      </div>
    </AuthLayout>
  );
};

export default withAuth(UserProfile);
