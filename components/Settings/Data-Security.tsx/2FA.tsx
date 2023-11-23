import React from 'react';
import Switch from '../Switch';

function TwoFA() {
  return (
    <div className={`flex flex-col gap-9`}>
      <div className="space-y-2">
        <h3 className={`text-Grey-G700 text-xl font-medium`}>2 Factor Authentication</h3>
        <p className="text-Grey-G100 text-sm w-[98%]">
          This provides an extra layer of security for your account. In addition to your password, we will send a code
          to your email each time you sign in
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-Grey-G600">2 Factor Authentication (code)</p>
        <Switch defaultValue={false} />
      </div>
    </div>
  );
}

export default TwoFA;
