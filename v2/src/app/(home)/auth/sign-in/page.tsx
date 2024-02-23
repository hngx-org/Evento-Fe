import React from 'react';
import Login from '@/components/Forms/Login';
import Link from 'next/link';

const Signin = () => {
  return (
    <section className="md:w-[80%] md:mx-auto h-[100vh]">
      <div className="lg:w-[50%] justify-center items-center lg:mx-auto lg:my-[20px] pt-[20px] lg:shadow-lg">
        <div className="px-3">
          <Login />
         
        </div>
      </div>
    </section>
  );
};

export default Signin;
