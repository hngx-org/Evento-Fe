import Button from '@/components/ui/Button';
import Input from '@/components/UserProfile/Input';
import Settingslayout from '@/layout/Settingslayout';
import { Montserrat, Nunito } from 'next/font/google';
import Image from 'next/image';
import profile from 'public/profileB.svg';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

function Settings() {
  return (
    <Settingslayout>
      <h2 className={`${montserrat.className} text-Grey-G700 text-[2rem] font-semibold`}>Account</h2>
      {/* edit profile */}
      <div className={`${nunito.className} flex flex-col gap-9`}>
        <div className="space-y-2">
          <h3 className={`text-Grey-G700 text-xl font-medium`}>Edit Profile</h3>
          <p className="text-Grey-G100 text-sm">Customize your profile to your liking</p>
        </div>
        <div className="flex items-center gap-7 -mt-4">
          <Image src={profile} width={84} height={84} alt="user-profile" />
          <Button type="button" title="upload-button" styles="text-white-N0 font-bold text-sm">
            Upload Picture
          </Button>
          <Button
            type="button"
            title="remove-button"
            styles="bg-transparent border border-primary-100 text-primary-100 font-bold text-sm"
          >
            Remove
          </Button>
        </div>
        <form className="space-y-8">
          <Input label="Full Name" placeholder="John Doe" inputHeight="h-[3.5rem]" />
          <Input
            label="Short bio "
            inputHeight="min-h-[104px]"
            textArea={true}
            placeholder="Lorem ipsum dolor sit amet consectetur. Elit ultricies in fermentum enim cursus convallis etiam consectetur potenti."
          />
          <div className="flex justify-end">
            <Button type="button" title="profile-button" styles="text-white-N0 font-bold text-sm py-3 px-[1.12rem]">
              Save Changes
            </Button>
          </div>
        </form>
      </div>
      {/* Contact information */}
      <div className={`${nunito.className} flex flex-col gap-9`}>
        <div className="space-y-2">
          <h3 className={`text-Grey-G700 text-xl font-medium`}>Contact Information</h3>
          <p className="text-Grey-G100 text-sm w-[92%]">
            Update your reachable contacts used for notifications. Upon updating you will receive a code to verify your
            details. These information are not visible to the public
          </p>
        </div>
        <form className="space-y-8">
          <Input label="Email Address" placeholder="johndoe@gmail.com" type="email" inputHeight="h-[3.5rem]" />
          <Input label="Phone Number" placeholder="+234 812 3456 879" type="tel" inputHeight="h-[3.5rem]" />
          <div className="flex justify-end">
            <Button type="button" title="contact-button" styles="text-white-N0 font-bold text-sm py-3 px-[1.12rem]">
              Update Phone Number
            </Button>
          </div>
        </form>
      </div>
      {/* Social media links */}
      <div className={`${nunito.className} flex flex-col gap-9`}>
        <div className="space-y-2">
          <h3 className={`text-Grey-G700 text-xl font-medium`}>Social media links</h3>
          <p className="text-Grey-G100 text-sm">Attach your social media for more visibilty</p>
        </div>
        <form className="space-y-8">
          <Input label="Website URL" placeholder="www.johndoe.com" inputHeight="h-[3.5rem]" />
          <Input label="Twitter" placeholder="@johndoe" inputHeight="h-[3.5rem]" />
          <Input label="Facebook" placeholder="John Doe" inputHeight="h-[3.5rem]" />
          <Input label="Instagram" placeholder="@johndoe" inputHeight="h-[3.5rem]" />
          <div className="flex justify-end">
            <Button type="button" title="contact-button" styles="text-white-N0 font-bold text-sm py-3 px-[1.12rem]">
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </Settingslayout>
  );
}

export default Settings;
