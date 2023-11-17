import '../styles/globals.css';
import { AppProps } from 'next/app';
import Link from 'next/link';
import { ppB, ppEB, ppReg } from '../configs/fonts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-ppReg: ${ppReg.style.fontFamily};
            --font-ppB: ${ppB.style.fontFamily};
            --font-ppEB: ${ppEB.style.fontFamily};
          }
        `}
      </style>

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-blue-500 p-4">
          <nav className="flex items-center justify-between">
            <div className="text-white text-xl font-bold">Your Website</div>
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

        {/* Body */}
        <main className="flex-1 p-8 bg-gray-100">
          <Component {...pageProps} />
        </main>

        {/* Footer */}
        <footer className="bg-blue-500 p-4 text-white text-center">
          &copy; 2023 Your Website. All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default MyApp;
