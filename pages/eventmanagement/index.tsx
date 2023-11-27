import AuthLayout from '@/layout/Authlayout';
import EventManage from '@/components/EventManagements/EventManage';
import HomeFooter from '@/components/Home/homefooter';
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

export default function Home() {
  return (
    <div className={workSans.className}>
      <AuthLayout>
        <EventManage />
      </AuthLayout>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <HomeFooter />
    </div>
  );
}
