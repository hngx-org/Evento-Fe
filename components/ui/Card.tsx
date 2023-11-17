import { clsx } from 'clsx';

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> & {
  Header: React.FC<CardProps>;
  Body: React.FC<CardProps>;
  Footer: React.FC<CardProps>;
} = ({ className, children }) => {
  return (
    <div className={clsx('overflow-hidden bg-white rounded-lg shadow', className)}>
      {children}
    </div>
  );
};

type HeaderProps = {
  className?: string;
  children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ className, children }) => {
  return (
    <div className={clsx('px-4 py-5 bg-white border-b border-gray-200 sm:px-6', className)}>
      {children}
    </div>
  );
};

type HeaderTitleProps = {
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
};

const HeaderTitle: React.FC<HeaderTitleProps> = ({ className, as = 'h3', children }) => {
  const Tag = as;
  return (
    <Tag className={clsx('text-lg font-medium leading-6 text-gray-900', className)}>
      {children}
    </Tag>
  );
};

type BodyProps = {
  className?: string;
  children: React.ReactNode;
};

const Body: React.FC<BodyProps> = ({ className, children }) => {
  return (
    <div className={clsx('px-4 py-5 sm:p-6', className)}>
      {children}
    </div>
  );
};

type FooterProps = {
  className?: string;
  children: React.ReactNode;
};

const Footer: React.FC<FooterProps> = ({ className, children }) => {
  return (
    <div className={clsx('bg-white border-t border-gray-200', className)}>
      {children}
    </div>
  );
};

Card.Header = Header;
Card.Header.Title = HeaderTitle;
Card.Body = Body;
Card.Footer = Footer;

export default Card;

