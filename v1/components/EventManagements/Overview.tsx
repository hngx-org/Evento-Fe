import React from 'react';
import { CardLeft } from './Overviewcard/CardLeft';
import { CardRight } from './Overviewcard/CardRight';

const Overview: React.FC = () => {
  return (
    <div className="flex  flex-col  md:flex-row h-screen w-full px-8 justify-center gap-9 align-middle">
      <CardLeft />
      <CardRight />
    </div>
  );
};

export default Overview;
