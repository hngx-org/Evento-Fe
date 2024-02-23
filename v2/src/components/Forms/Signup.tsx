/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useTransition, useEffect } from 'react';
import Button from '../ui/button';
import Link from 'next/link';
import { Eye, EyeSlash } from 'iconsax-react';
import { useForm } from 'react-hook-form';
import { SignupSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { FormInput } from '../ui/FormInput';
import { cn } from '@/utils';
import FormError from './Error';
import FormSuccess from './Success';
import { register } from '@/actions/auth';
import { useRouter } from 'next/navigation';
import { useStateCtx } from '@/context/StateCtx';
import GoogleButton from '../ui/GoogleBtn';

const SignupForm = () => {
  const router = useRouter();

  const [success, setSuccess] = useState<string | undefined>('');
  const [error, setError] = useState<string | undefined>('');
  const [defaultInpTypeNew, setDefaultInpTypeNew] = useState<'password' | 'text'>('password');
  const [isLoading, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });
  const onSubmit = (values: z.infer<typeof SignupSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      register(values).then((data) => {
        setSuccess(data?.success);
        setError(data?.error);
        if (data?.success) {
          console.log('Initial Signup');
          setTimeout(() => {
            setSuccess('Redirecting....');
          }, 1000);
          setTimeout(() => {
            // router.push(DEFAULT_LOGIN_REDIRECT);
          }, 2000);
        }
      });
    });
  };
  //   useEffect(() => {
  //     router.prefetch(DEFAULT_LOGIN_REDIRECT);
  //   }, [router]);
  return (
    <div className="relative sm:pt-[30px] sm:pb-[24px] rounded-[16px] bg-white-100 dark:bg-dark-one dark:text-gray-300 lg:px-[40px]">
      <h1 className="text-center font-montserrat font-[600] text-[28px]"> Welcome to Evento</h1>
      <span className="block text-center font-[400] text-[20px] mt-2 mb-6 text-dark-400 font-nunito">
        Sign up to continue using Evento
      </span>
      <GoogleButton />
      <div className="seperator flex items-center space-x-2 my-4 ">
        <div className="seperate h-[1px] bg-[#C7C7C7] w-full" />
        <h4 className="text-dark-400"> Or</h4>
        <div className="seperate h-[1px] bg-[#C7C7C7] w-full" />
      </div>

      <Form {...form}>
        <form action="" className="flex flex-col z-10 mt-5" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md text-black-main font-medium font-Worksans">First Name</FormLabel>
                <FormControl>
                  <div className="flex items-center w-full relative">
                    <FormInput
                      disabled={isLoading}
                      type="text"
                      {...field}
                      placeholder="Enter First Name"
                      className=" mt-1 mb-3 p-[16px] w-full text-black h-[60px] border text-md font-medium rounded-md font-Worksans"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md text-black-main font-medium font-Worksans">Last Name</FormLabel>
                <FormControl>
                  <div className="flex items-center w-full relative">
                    <FormInput
                      disabled={isLoading}
                      type="text"
                      {...field}
                      placeholder="Enter Last Name"
                      className=" mt-1 mb-3 p-[16px] w-full text-black h-[60px] border text-md font-medium rounded-md font-Worksans"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md text-black-main font-medium font-Worksans"> Email Adress</FormLabel>
                <FormControl>
                  <div className="flex items-center w-full relative">
                    <FormInput
                      disabled={isLoading}
                      type="email"
                      {...field}
                      placeholder="Enter Email Address"
                      className=" mt-1 mb-3 p-[16px] w-full text-black h-[60px] border text-md font-medium rounded-md font-Worksans"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold ">Password</FormLabel>
                <FormControl>
                  <div className="flex w-full relative items-center">
                    <FormInput
                      disabled={isLoading}
                      {...field}
                      type={defaultInpTypeNew}
                      placeholder="Enter Password"
                      className=" mt-1 mb-3 p-[16px] w-full text-black h-[60px] border text-md font-medium rounded-md font-Worksans"
                    />
                    <span className="absolute right-2">
                      {defaultInpTypeNew === 'text' ? (
                        <Eye color="#777" onClick={() => setDefaultInpTypeNew('password')} />
                      ) : (
                        <EyeSlash color="#777" onClick={() => setDefaultInpTypeNew('text')} />
                      )}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />
          <div className="flex relative items-center [perspective:300px] transform-gpu max-sm:w-full">
            <Button
              disabled={isLoading}
              className={cn(
                ' w-full rounded-md my-3 mt-4 bg-primary-100 hover:bg-primary-100',
                isLoading ? '[&>div>span]:opacity-0' : '',
              )}
              type="submit"
              spinnerColor="#fff"
            >
              Log in
            </Button>
            {isLoading && (
              <div className="button--loader absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>
        </form>
      </Form>
      <span className="text-lg relative block text-center mt-5 md:text-black z-10 font-nunito">
        Aready have an account?
        <Link href="/auth/sign-in" className="ml-1 underline text-primary-100 dark:text-dark-two font-montserrat">
          Login
        </Link>
      </span>
    </div>
  );
};

export default SignupForm;
