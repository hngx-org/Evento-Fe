import { cn } from '@/utils';
import React from 'react';

const ExploreCardSkel = () => {
  return (
    <>
      <div className="block border border-Grey-G80/50 dark:border-dark-two card-shadow rounded-lg hover:scale-[1.01]">
        <div className="relative w-full h-[180px] rounded-t-lg overflow-hidden">
          <div
            className={cn(
              'w-full h-full  rounded-xl bg-gradient-to-r from-transparent via-black-main/10  to-transparent absolute  before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer  before:bg-gradient-to-r  before:from-transparent before:via-black-main/20 dark:before:via-white-100/20 before:to-transparent isolate overflow-hidden shadow-lg shadow-black/20 before:border-t-2 before:border-b-2 before:border-primary-100 dark:before:border-dark-two',
            )}
          />
        </div>
        <div className="p-4">
          <div className="space-y-2 flex flex-col gap-y-2 my-10">
            <div className="animate-pulse [animation-delay:0.4s] bg-black-main/20 h-3 w-full rounded-full" />
            <div className="animate-pulse [animation-delay:0.5s] bg-black-main/20 h-3 w-full rounded-full" />
            <div className="animate-pulse [animation-delay:0.4s] bg-black-main/20 h-3 w-full rounded-full" />
            <div className="animate-pulse [animation-delay:0.3s] bg-black-main/20 h-3 w-full rounded-full" />
            <div className="animate-pulse [animation-delay:0.2s] bg-black-main/20 h-3 w-full rounded-full" />
            <div className="animate-pulse [animation-delay:0.1s] bg-black-main/20 h-3 w-full rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreCardSkel;
