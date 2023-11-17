import Image from 'next/image';
import { Inter } from 'next/font/google';
import IndexPage from './test/oya';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <IndexPage />
    </main>
  );
}
