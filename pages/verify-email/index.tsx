import React from 'react';
import Logo from '../../public/logo.svg';
import AppStore from '../../public/app-store.svg';
import Google from '../../public/g-play.svg';
import Image from 'next/image';
import X from '../../public/event-management/x.svg';
import Insta from '../../public/event-management/instagram.svg';
import Facebook from '../../public/event-management/facebook.svg';
import Linkedin from '../../public/assets/linkedin.svg';

const VerifyEmail = () => {
  return (
    <div className="p-6 sm:p-10">
      <div className="flex flex-col w-auto md:w-[670px] text-center items-center m-auto pt-[106px] pr-[45px] pb-[110.5px] pl-[31px] border border-[#b7b7b7] ">
        <Image src={Logo} width={0} alt="Logo" />
        <p className="text-[32px] font-[600] text-[#0f0f0f] leading-[40px] py-8 ">You are almost there!</p>
        <div className="leading-[24px] text-[14px] font-[400] text-[#0f0f0f] ">
          <p className="pb-6">Hello John Doe,</p>
          <p className="pb-6">Welcome to Evento</p>
          <p className="pb-1">To get started, we need to verify your email address. </p>
          <p className="pb-6">Please click the link below</p>
          <p className="pb-10 text-[#360789] cursor-pointer">[Verification Link]</p>
          <p className="pb-2">Unleash the Extraordinary, </p>
          <p className="pb-8">Where moments becomes memory</p>
          <p className="pb-4">Get the Eclipse app to plan your events and stay up-to-date with details on the go.</p>
          <p>Download the app</p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button>
            <Image src={AppStore} width={0} alt="App store" />
          </button>
          <button>
            <Image src={Google} width={0} alt="Google Play" />
          </button>
        </div>
        <div className="m-auto flex flex-col items-center mt-10">
          <Image src={Logo} width={0} alt="Logo" />
          <div className="flex justify-center items-center gap-4 mt-6">
            <Image src={Linkedin} width={30} alt="Logo" />
            <Image src={X} width={30} alt="Logo" />
            <Image src={Facebook} width={30} alt="Logo" />
            <Image src={Insta} width={30} alt="Logo" />
          </div>
          <div>
            <p className="text-[10px] py-2 font-[400] leading-4 text-[#0f0f0f] ">
              Copyright (C) 2023 Eclipse. All rights reserved.{' '}
            </p>
            <p className="text-[10px] font-[400] leading-4 text-[#0f0f0f] ">
              You are receiving this email because you opted in via our website.
            </p>
            <p className="text-[10px] font-[400] leading-4 text-[#0f0f0f] pt-6 pb-4 ">Our mailing address is: </p>
            <p className="text-[10px] font-[400] leading-4 text-[#0f0f0f] ">
              Eclipse | 166 Parkview St Ikoyi, Lagos State, Nigeria
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
