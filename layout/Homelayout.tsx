import Homenav from '@/components/Home/homenav';
import Homefooter from '@/components/Home/homefooter';
import { Work_Sans } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={workSans.variable}>
      <Homenav />
      <ToastContainer />
      {children}
      <Homefooter />
    </main>
  );
}
