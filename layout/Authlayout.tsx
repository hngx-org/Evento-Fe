import AuthenticatedHeader from '@/components/components/authenticatedheader';
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={workSans.variable}>
      <AuthenticatedHeader />
      {children}
    </main>
  );
}
