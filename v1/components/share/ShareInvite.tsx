'use client';

import * as React from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@ui/drawer';
import Button from '@ui/NewButton';
import useMediaQuery from '@/hooks/use-media-query';
import { useEventContext } from '@/context/EventContext';
import {
  TwitterShareButton,
  XIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';
import { toast } from 'react-toastify';
import { ExportCurve } from 'iconsax-react';
import { nunito } from '../Settings/Data-Security.tsx/modal/enable2Fa';
import { cn } from '@/utils/twcx';
import { FaShareAlt } from 'react-icons/fa';

interface ShareInviteProps {
  Id: string;
}

export default function ShareInvite({ Id }: ShareInviteProps) {
  const [open, setOpen] = React.useState(false);
  const { isDesktop } = useMediaQuery();
  const { shareEventLink } = useEventContext();
  const eventLink = shareEventLink(Id);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          style={{
            boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
          }}
          className="text-[16px] text-[#e0580c] mt-2 font-[500] leading-[24px] w-[100%] rounded-[8px] py-[30px] px-[20px] flex justify-center items-center gap-4 bg-transparent border border-[#e0580c] "
        >
          <ExportCurve size="32" color="#FF8A65" />
          <span className={nunito.className}>Share Event</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className={`${nunito.className} font-medium text-[24px] `}>Share with your friends</DrawerTitle>
          <DrawerDescription className={`${nunito.className} font-medium text-[16px] leading-[24px]`}>
            Click on any of the icons
          </DrawerDescription>
        </DrawerHeader>
        <SharedLink eventLink={eventLink} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button
              intent={'secondary'}
              className={`${nunito.className} font-medium text-[20px] leading-[24px] capitalize w-full border border-[#e0580c] text-[#e0580c]`}
            >
              close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

interface EventLink {
  eventLink: string;
}

function SharedLink({ className, eventLink }: React.ComponentProps<'div'> & EventLink) {
  const [isLinkCopied, setIsLinkCopied] = React.useState(false);
  const handleButtonClick = async () => {
    try {
      await navigator.clipboard.writeText(eventLink);
      setIsLinkCopied(true);
      toast.success('Link copied to clipboard!');
    } catch (error) {
      console.error('Unable to copy to clipboard', error);
    }
  };
  return (
    <div className={cn('flex items-start', className)}>
      <div className={'w-full rounded-md py-4 mx-5 flex justify-between items-center '}>
        <FacebookShareButton
          url={eventLink}
          className="text-[#e0580c] hover:text-[#FF8A65] cursor-pointer ml-4 animate-bounce"
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
        <TwitterShareButton
          url={eventLink}
          className="text-[#e0580c] hover:text-[#FF8A65] cursor-pointer ml-4 animate-bounce"
        >
          <XIcon size={40} round={true} />
        </TwitterShareButton>
        <LinkedinShareButton
          url={eventLink}
          className="text-[#e0580c] hover:text-[#FF8A65] cursor-pointer ml-4 animate-bounce"
        >
          <LinkedinIcon size={40} round={true} />
        </LinkedinShareButton>
        <WhatsappShareButton
          url={eventLink}
          className="text-[#e0580c] hover:text-[#FF8A65] cursor-pointer ml-4 animate-bounce"
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>

        <button
          className="transition-all ease-in-out duration-500 animate-bounce"
          title="Copy event link"
          onClick={handleButtonClick}
        >
          <FaShareAlt color="#FF8A65" size={24} />
        </button>
      </div>
    </div>
  );
}
