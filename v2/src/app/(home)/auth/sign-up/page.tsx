import React from 'react';
import SignupForm from '@/components/Forms/Signup';

const SignUp = () => {
  return (
    <section className="md:w-[80%] md:mx-auto">
      <div className="lg:w-[50%] justify-center items-center lg:mx-auto lg:my-[20px] pt-[20px] lg:shadow-lg">
        <div className="px-3">
          <SignupForm />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
