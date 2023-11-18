import Homenav from '@/components/Home/homenav';
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={workSans.variable}>
      <Homenav />
      {children}
    </main>
  );
}
