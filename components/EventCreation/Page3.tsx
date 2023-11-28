import React, { useState } from 'react';

import { Copy } from 'iconsax-react';
import Image from 'next/image';

interface Props {}

const Page3 = () => {
  const [isLinkContainerVisible, setLinkContainerVisible] = useState(false);

  const handleButtonClick = () => {
    setLinkContainerVisible(!isLinkContainerVisible);
  };

  return (
    <>
      <section className="page-3 w-full lg:px-[0px] md:px-0 max-sm:px-0 pt-[64.66px] max-sm:pt-10 pb-6">
        <div className="w-full flex flex-col border-[1px] border-[#d7d7d7] rounded-3xl p-10 max-sm:p-0 max-sm:border-none shadow-xl max-sm:shadow-none">
          <div className="w-full mb-12 text-center">
            <h1 className=" font-semibold text-3xl max-sm:text-xl leading-10">Event Created Successfully!</h1>
          </div>
          <div className="w-full mb-10">
            <Image src={'/Create-Events/17924 1.png'} height={500} width={1280} layout="responsive" alt="" />
          </div>
          <div className="w-full flex flex-col content-center items-center justify-center">
            <button className=" w-[144px] max-sm:w-full text-center font-semibold text-[#fdfdfd] text-base leading-6 mb-3 py-4 px-5 bg-[#e0580c] rounded-lg">
              See all events
            </button>
            <button
              onClick={handleButtonClick}
              className=" w-[144px] text-center max-sm:w-full font-semibold text-base leading-6 py-4 px-1 mb-6 max-sm:mb-0 bg-[#fefefe] border-[1px] border-[#e0580c] text-[#e0580c] rounded-lg"
            >
              Copy event link
            </button>
          </div>
        </div>
        <div
          className={`${
            isLinkContainerVisible ? 'block' : 'hidden'
          } bg-[#e7f8f0] w-[255px] content-center flex items-center rounded-lg gap-2 border-[1px] mt-3 border-[#0b7041] pl-6 py-3 font-bold text-base text-[#0b7041]`}
        >
          Link Copied Successfully
          <Copy size={24} />
        </div>
      </section>
    </>
  );
};

export default Page3;
