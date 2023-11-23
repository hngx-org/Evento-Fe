import React from 'react';

export default function AuthTitle({ heading, subHeading }: { heading: string; subHeading: string }) {
  return (
    <div>
      <h2 className="text-black text-[32px] font-semibold leading-10">{heading}</h2>
      <p className="text-black text-base font-normal leading-normal mt-3">{subHeading}</p>
    </div>
  );
}
