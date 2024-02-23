import { ButtonVariants } from './button';
import React, { FC } from 'react';
import useUserSession from '@/hooks/useSession';
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

interface ButtonProps extends ButtonVariants {
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

const SignUpWithSocialsButton: FC<ButtonProps> = ({ children, leftIcon, ...props }) => {
  // Once button is clicked, set the current path user is in so we can redirect there if an error is thrown
  const { setCurrentPathForOAuth } = useUserSession();

  return (
    <button
      className=" w-full bg-white-100 border rounded-md hover:bg-white-100 sm:text-base flex justify-center items-center py-3 md:py-4 gap-2"
      onClick={setCurrentPathForOAuth}
      {...props}
    >
      <div className=" w-[20px]">{leftIcon}</div>
      <p className="text-center">{children}</p>
    </button>
  );
};

export default SignUpWithSocialsButton;
