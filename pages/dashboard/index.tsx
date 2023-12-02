import React from 'react';
import withAuth from '@/helpers/withAuth';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <p>This is a simple dashboard for testing purposes.</p>
    </div>
  );
};

export default withAuth(Dashboard);
