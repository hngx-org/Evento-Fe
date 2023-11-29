import React, { useState, useEffect } from 'react';
import Button from '@ui/NewButton';
import Modal from '@/components/ui/Modal';
import Image from 'next/image';
import { Input } from '@ui/NewInput';
import PasswordPopover from '@ui/PasswordPopover';
import { signUpUser } from '@/http/authapi';

function SignUp({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(!loading);
      }, 2000);
    }
  }, [loading]);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) =>
      type === 'checkbox' ? { ...prevFormData, [name]: checked } : { ...prevFormData, [name]: value },
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { email, password, firstName, lastName } = formData;

    try {
      setLoading(true);
      await signUpUser({ email, password, firstName, lastName });
    } catch (error) {
      console.error('Error during sign-up:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal closeOnOverlayClick isOpen={isOpen} closeModal={onClose} size="sm">
      <div className="p-4">
        <button onClick={onClose} className="absolute top-[46px] right-12">
          <Image src="/close-circle.svg" alt="Close icon" width={20} height={20} />
        </button>
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email:
              </label>
              <Input
                placeholder="Enter Email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border text-black-main font-medium rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password:
              </label>
              <PasswordPopover password={formData.password}>
                <Input
                  type="password"
                  placeholder="Enter Password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full font-medium text-black-main border rounded-md"
                  required
                />
              </PasswordPopover>
            </div>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                First Name:
              </label>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 w-full font-medium text-black-main border rounded-md"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                Last Name:
              </label>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 w-full font-medium text-black-main border rounded-md"
                required
              />
            </div>
            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  className="mr-2   accent-primary-100"
                />
                <span className="text-md font-medium text-gray-600">I agree to the terms and conditions</span>
              </label>
            </div>
            <div>
              <Button
                type="submit"
                className={`$ bg-primary-100 w-full font-bold text-white-100 p-2 rounded-md hover:bg-orange-500 transition-all`}
                disabled={!isChecked}
              >
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default SignUp;
