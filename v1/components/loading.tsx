import React from 'react';
import { useSpring, animated } from 'react-spring';

const Loading: React.FC = () => {
  const animation = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(100%)' },
    loop: { reverse: true },
    config: { duration: 2000 },
  });

  return (
    <div className="flex items-center justify-center h-screen overflow-hidden">
      <animated.div style={animation} className="flex items-center space-x-4">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-8 w-8"></div>
        <p className="text-orange-500 text-2xl font-semibold">please wait while we authenticate you!!!!!</p>
      </animated.div>
    </div>
  );
};

export default Loading;
