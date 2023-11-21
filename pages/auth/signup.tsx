import React, { useState } from 'react';
import Head from 'next/head';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import withoutAuth from '@/helpers/withoutAuth';

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Head>
        <title>Sign Up</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <Input placeholder="Username" value={formData.username} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <Input placeholder="Enter Email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <Input
              placeholder="Enter password"
              errorText="Field is required"
              error
              required
              value={formData.password}
              onChange={handleChange}
              className="w-[200px]"
            />
          </div>
          <Button
            handleClick={() => {}}
            styles={'w-full bg-violet-500'}
            type={'submit'}
            title={'submit'}
            disabled={true}
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default withoutAuth(SignupPage);
