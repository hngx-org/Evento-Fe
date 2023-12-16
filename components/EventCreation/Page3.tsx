import React, { PropsWithChildren, useState } from 'react';
import { useEventContext } from '@/context/EventContext';
import { Copy } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';

interface Page3Props extends PropsWithChildren<any> {
  eventId: string | string[];
}

const Page3: React.FC<Page3Props> = ({ eventId }) => {
  const [isLinkContainerVisible, setLinkContainerVisible] = useState(false);
  const { shareEventLink } = useEventContext();
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const Id = typeof eventId === 'string' ? eventId : eventId[0];

  console.log(Id);
  const eventLink = shareEventLink(Id);
  console.log(eventLink);

  const handleButtonClick = async () => {
    try {
      await navigator.clipboard.writeText(eventLink);
      setIsLinkCopied(true);
    } catch (error) {
      console.error('Unable to copy to clipboard', error);
    }
  };

  return (
    <>
      <section className="page-3 w-full lg:px-[0px] md:px-0 max-sm:px-0 pt-[64.66px] max-sm:pt-10 pb-6">
        <div className="w-full flex flex-col border-[1px] border-[#d7d7d7] rounded-3xl p-10 max-sm:p-0 max-sm:border-none shadow-xl max-sm:shadow-none">
          <div className="w-full mb-12 text-center">
            <h1 className=" font-semibold text-3xl max-sm:text-xl leading-10">Event Created Successfully!</h1>
          </div>
          <div className=" w-[350px] h-[350px] flex content-center items-center justify-center mx-auto mb-10">
            <Image src={'/Create-Events/17924 1.png'} height={300} width={300} layout="responsive" alt="" />
          </div>
          <div className="w-full flex flex-col content-center ">
            <Link
              href="/event-dashboard"
              className=" w-full max-sm:w-full text-center font-semibold text-[#fdfdfd] text-base leading-6 mb-3 py-4 px-5 bg-[#e0580c] rounded-lg"
            >
              See all events
            </Link>
            <button
              onClick={handleButtonClick}
              className="w-full text-center text-[#e0580c] text-base leading-6 py-4 px-5 bg-[#fdfdfd] border-[1px] border-[#e0580c] font-semibold rounded-lg"
            >
              Copy event link
            </button>
          </div>
        </div>
        <div
          className={`${
            isLinkCopied ? 'block' : 'hidden'
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
