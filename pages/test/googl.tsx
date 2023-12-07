'use client';

import React from 'react';
import { GoogleLogin } from '@/http/authapi';
import Button from '@/components/ui/NewButton';

const TestButton = () => {
  const handleGoogleLogin = async () => {
    try {
      await GoogleLogin();
      // You can add any additional logic or state updates after the login
    } catch (error) {
      // Handle errors if needed
      console.error('Error during Google login:', error);
    }
  };

  return (
    <div>
      <Button href="https://evento-qo6d.onrender.com/api/v1/google" className="text-black-main">
        Test Google Login
      </Button>
    </div>
  );
};

export default TestButton;
