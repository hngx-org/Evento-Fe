import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

const buttonVariants = cva(
  'relative px-4 py-3 flex items-center justify-center gap-5 w-fit h-[48px] rounded-[16px] text-white-100',
  {
    variants: {
      variant: {
        default:
          'bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-dark-two dark:text-gray-900 dark:hover:bg-dark-two/50 disabled:bg-brand-disabled disabled:cursor-not-allowed ',
        destructive:
          'bg-red-500 text-gray-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-gray-50 dark:hover:bg-red-900/90',
        outline:
          'border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50',
        secondary:
          'bg-gray-100 text-gray-900 hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80',
        ghost: 'hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50',
        link: 'text-gray-900 underline-offset-4 hover:underline dark:text-gray-50',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonVariants
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export interface ButtonProps extends ButtonVariants {
  children: React.ReactNode;
  className?: React.ComponentProps<'div'>['className'];
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  href?: string;
  spinnerColor?: string;
  spinnerSize?: string | number;
}

const Button: React.FC<ButtonProps> = ({
  children,
  isLoading,
  disabled,
  leftIcon,
  rightIcon,
  className,
  href,
  spinnerColor,
  spinnerSize,
  ...props
}) => {
  const classNames = twMerge(buttonVariants(props), className);

  if (href) {
    return (
      // @ts-expect-error
      <Link href={href} className={classNames} {...props}>
        {leftIcon && leftIcon}
        {children}
        {rightIcon && rightIcon}
      </Link>
    );
  }

  return (
    <button disabled={isLoading ?? disabled} className={classNames} {...props}>
      <div className="w-full h-full absolute top-0 flex flex-col items-center justify-center">
        <svg
          width={spinnerSize ?? '20'}
          height={spinnerSize ?? '20'}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className={twMerge(
            ' animate-spin transition delay-[.2] ',
            isLoading ? 'opacity-1 visible' : 'opacity-0 hidden',
          )}
        >
          <path
            fill={spinnerColor ?? '#fff'}
            d="M12 21a9 9 0 1 1 6.18-15.55a.75.75 0 0 1 0 1.06a.74.74 0 0 1-1.06 0A7.51 7.51 0 1 0 19.5 12a.75.75 0 0 1 1.5 0a9 9 0 0 1-9 9Z"
          />
        </svg>
      </div>
      <div className={twMerge('flex items-center justify-center gap-2', isLoading ? 'opacity-0' : 'opacity-1')}>
        {leftIcon}
        {children}
        {rightIcon && (
          <span
            style={{
              opacity: isLoading ? 0 : 1,
            }}
          >
            {rightIcon}
          </span>
        )}
      </div>
    </button>
  );
};

export default Button;
