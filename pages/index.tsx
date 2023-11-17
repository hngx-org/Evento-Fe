import Image from 'next/image';
import { Inter } from 'next/font/google';
import IndexPage from './test/oya';
import Setup from '@/components/Setup/Setup';
import HEADER from '@/components/components/header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <section className="w-full">
      <HEADER />
      <Setup />
    </section>
  );
}
