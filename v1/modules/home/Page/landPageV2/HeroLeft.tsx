import type { ReactNode } from 'react';

type IHeroLeftProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroLeft = (props: IHeroLeftProps) => (
  <div className="px-10">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero mb-5 text-gray-900">{props.title}</h1>
    <div className="mb-16 mt-4 text-md ">{props.description}</div>

    {props.button}
  </div>
);

export { HeroLeft };
