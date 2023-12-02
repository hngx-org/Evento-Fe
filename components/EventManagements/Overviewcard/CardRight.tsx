import { Card, CardBody, Typography, Button } from '@material-tailwind/react';
import { CiShare1 } from 'react-icons/ci';
import { IoCopyOutline } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
import { FaRegEnvelopeOpen } from 'react-icons/fa';
import Image from 'next/image';
import User from '@/public/user.svg';
import { CiEdit } from 'react-icons/ci';
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from '@/public/Home//Socialicons/socialIcons';
import Link from 'next/link';

const socials = [
  {
    href: '',
    icon: FacebookIcon,
  },
  {
    href: '',
    icon: LinkedinIcon,
  },
  {
    href: '',
    icon: TwitterIcon,
  },
  {
    href: '',
    icon: InstagramIcon,
  },
];

export function CardRight() {
  return (
    <div>
      <div className="flex text-[#F2BB9B] bg-[#FCEEE7] p-6 rounded-xl justify-between">
        <p className="text-[#F2BB9B]">evento/yk1fzl2f</p>
        <IoCopyOutline className="text-[#F2BB9B] text-[30px] " />
      </div>
      <Card className="bg-[#fff] text-[#535353] mt-6">
        <CardBody>
          <div>
            <FaRegEnvelopeOpen />
          </div>
          <Typography variant="h4" className="mb-2 text-[#535353]">
            Invite Guests
          </Typography>
          <Typography>Invite subscribers, contact and past guests via email or sms</Typography>
          <div className=" text-center place-content-center  my-5">
            <div className="flex align-middle justify-center">
              <Image src={User} alt="user" width={100} height={100} />
            </div>

            <Typography className="text-[#dedede]">No Guests Yet</Typography>
          </div>
          <Button className="bg-[#E0580C] my-4 text-[#fff] text-[16px] ">Share Invites</Button>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <div className="flex justify-between align-middle">
            <CiShare1 />
            <IoIosArrowDown />
          </div>
          <Typography className="text-[#535353] ">Share Event</Typography>
          <Typography>Share your event across socials</Typography>
          <div className="flex gap-4  justify-center w-4/12  px-8">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.href}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full"
                >
                  {<Icon />}
                </Link>
              );
            })}
          </div>
          <div className="flex gap-6">
            <button className="py-3 px-7 border border-primary-100 hover:border-primary-100 z-10 flex text-center rounded-lg font-bold  transition-all duration-300 ease-in-out text-primary-100">
              <CiEdit className="text-[24px] font-bold" />
              Edit Event
            </button>
            <button className="py-3 px-7 border border-primary-100 hover:border-primary-100 z-10 flex text-center gap-4 rounded-lg font-bold  transition-all duration-300 ease-in-out text-primary-100">
              <CiEdit className="text-[24px] font-bold" />
              Edit Thumbnails.
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
