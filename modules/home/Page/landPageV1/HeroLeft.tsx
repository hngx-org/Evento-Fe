import type { ReactNode } from 'react';

type IHeroLeftProps = {
  title: ReactNode;
  description: ReactNode;
  button: ReactNode;
};

const HeroLeft = (props: IHeroLeftProps) => (
  <div className="px-10">
    <h1 className="text-5xl font-bold mb-5 text-gray-900">{props.title}</h1>
    <div className="mb-16 mt-4 text-md ">{props.description}</div>

    {props.button}
  </div>
);

export { HeroLeft };
