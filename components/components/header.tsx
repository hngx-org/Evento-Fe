import React from 'react';
import Link from 'next/link';

const HEADER = () => {
  return (
    <header className="bg-blue-500 p-4">
      <nav className="flex items-center justify-between">
        <div className="text-white text-xl font-bold">Evento</div>
        <div className="flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/auth/signup" className="text-white hover:text-gray-300">
            signup
          </Link>
          <Link href="/auth/signin" className="text-white hover:text-gray-300">
            signin
          </Link>
          <Link href="/test/buttontest" className="text-white hover:text-gray-300">
            custom button
          </Link>
          <Link href="/test/inputtest" className="text-white hover:text-gray-300">
            custom input
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HEADER;
