import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/logo.png';

function PlainHeader() {
  return (
    <header className="w-full py-4  h-[50px] bg-white-100 justify-between items-center px-6  z-99 relative ">
      <Link href={'/'}>
        <Image src={logo} alt="logo" width={100} height={100} />
      </Link>
    </header>
  );
}

export default PlainHeader;
