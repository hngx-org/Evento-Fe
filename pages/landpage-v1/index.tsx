import HomeLayout from '@/layout/Homelayout';
import { Work_Sans } from 'next/font/google';
import Langpageversiontwo from '@/modules/home/Page/landPageV1/Hero';
import Hpmenewv1 from '@/modules/home/Page/landPageV1/Updated';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

export default function Home() {
  return (
    <HomeLayout>
      <div className={workSans.className}>
        <Hpmenewv1 />
      </div>
    </HomeLayout>
  );
}
