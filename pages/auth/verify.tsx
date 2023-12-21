import React from 'react';
import { useSpring, animated } from 'react-spring';
import Link from 'next/link';
import Homenav from '@/components/Home/homenav';

const EmailVerifiedPage: React.FC = () => {
  const containerAnimation = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    config: { duration: 800 },
  });

  const titleAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800, delay: 200 },
  });

  const descriptionAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800, delay: 400 },
  });

  const buttonsAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0) rotate(0deg)',
    from: { opacity: 0, transform: 'translateY(20px) rotate(-45deg)' },
    config: { duration: 800, delay: 600 },
  });

  return (
    <>
      <Homenav />
      <div className="flex items-center justify-center h-screen">
        <animated.div style={containerAnimation} className="text-center mt-8">
          <animated.h1 style={titleAnimation} className="text-3xl font-bold text-primary-100">
            Email Verified
          </animated.h1>
          <animated.p style={descriptionAnimation} className="text-lg text-gray-700 mt-4">
            Your email has been successfully verified!
          </animated.p>
          <animated.div style={buttonsAnimation} className="mt-8 space-x-4">
            <Link href="/auth/sign-in">
              <button className="btn-orange">Login to Continue</button>
            </Link>
            <Link href="/explore">
              <button className="btn-blue">Explore</button>
            </Link>
          </animated.div>
        </animated.div>
      </div>
    </>
  );
};

export default EmailVerifiedPage;
