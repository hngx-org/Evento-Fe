import React from 'react';
import { GoogleLogin } from '@/http/authapi';

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
      <button onClick={handleGoogleLogin}>Test Google Login</button>
    </div>
  );
};

export default TestButton;
