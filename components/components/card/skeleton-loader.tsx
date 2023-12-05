import React from 'react';

function SkeletonLoader() {
  return (
    <div className="border border-Grey-G80/50 card-shadow rounded-lg overflow-hidden">
      <div className="animate-pulse">
        <div className="h-[180px] bg-slate-700 w-full" />
        <div className="space-y-6 p-4">
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonLoader;
