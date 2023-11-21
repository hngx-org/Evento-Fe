import ExploreNav from '@/components/Explore/Explorenav';
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

export default function ExploreLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={workSans.variable}>
      <ExploreNav />
      {children}
    </main>
  );
}
