import HomeLayout from '@/layout/Homelayout';
import { Work_Sans } from 'next/font/google';
import Home2 from './land3';
import withoutAuth from '@/helpers/withoutAuth';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

function Home() {
  return (
    <HomeLayout>
      <div className={workSans.className}>
        <Home2 />
      </div>
    </HomeLayout>
  );
}

export default withoutAuth(Home);
