// pages/index.tsx
"use client"
import React from 'react';
import Image from 'next/image'
import { useSpring, animated } from 'react-spring';
import Head from 'next/head';

const IndexPage: React.FC = () => {
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    reset: true,
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <Head>
        <title>Coming Soon</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <animated.div style={animationProps}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-lg mb-8">We're working hard to bring you something amazing!</p>
          <Image src="/next.svg" alt="Under Construction" width={150} height={150} className="w-48 mx-auto mb-8" />
          <p className="text-sm">&copy; 2023 Your Website. All rights reserved.</p>
        </div>
      </animated.div>
    </div>
  );
};

export default IndexPage;
