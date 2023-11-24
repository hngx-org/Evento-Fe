import HomeLayout from '@/layout/Homelayout';
import { Work_Sans } from 'next/font/google';
import Hpmenewv1 from '@/modules/home/Page/landPageV2/updated2';

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
