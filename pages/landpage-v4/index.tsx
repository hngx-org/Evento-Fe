import HomeLayout from '@/layout/Homelayout';
import { Work_Sans } from 'next/font/google';
import Landpage from '@/modules/home/Page/landPageV4/updated4';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

export default function Home() {
  return (
    <HomeLayout>
      <div className={workSans.className}>
        <Landpage />
      </div>
    </HomeLayout>
  );
}
