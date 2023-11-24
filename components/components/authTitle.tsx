import React from 'react';

export default function AuthTitle({ heading, subHeading }: { heading: string; subHeading: string }) {
  return (
    <div>
      <h2 className="text-black sm:text-[32px] sm:leading-10 text-2xl font-semibold leading-loose">{heading}</h2>
      <p className="text-black sm:text-base font-normal sm:leading-normal text-sm leading-tight mt-3">{subHeading}</p>
    </div>
  );
}
