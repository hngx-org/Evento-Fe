import React from 'react';

interface type {
  type: string;
}

const SkeletonElement: React.FC<type> = ({ type }) => {
  const classes = (type: string) => {
    if (type === 'text') {
      return 'w-full h-3 ';
    } else if (type === 'title ') {
      return 'min-w-[150px] w-full h-[30px] mb-4';
    } else if (type === 'avatar') {
      return 'rounded-[50%] w-full h-full';
    } else if (type === 'thumbnail') {
      return 'w-full h-full';
    }
  };

  return <div className={` bg-[#ddd] rounded-[4px] my-2  ${classes(type)}`}></div>;
};

export default SkeletonElement;
