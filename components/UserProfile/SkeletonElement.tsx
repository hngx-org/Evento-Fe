import clsx from 'clsx';
import React from 'react';

interface SkeletonProps {
  type: string;
  className: string;
}

const SkeletonElement: React.FC<SkeletonProps> = ({ type, className }) => {
  const loaderClasses = clsx('skeleton-loader', {
    'w-full h-3 min-w-[150px]': type === 'text',
    'min-w-[150px] h-[30px] mb-4': type === 'title',
    // Add more conditions for other types
  });

  const defaultClasses = 'bg-[#ddd] rounded-[4px] my-1';

  return <div className={clsx(defaultClasses, loaderClasses, className)} />;
};

export default SkeletonElement;
