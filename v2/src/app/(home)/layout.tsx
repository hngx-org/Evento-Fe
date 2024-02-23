import HomeFooter from '@/components/home/Footer';
import NavBar from '@/components/home/NavBar';

export default function GallaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
      <HomeFooter />
    </>
  );
}
