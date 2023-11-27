import React, { useState } from 'react';
import Settingslayout from '@/layout/Settingslayout';
import { Montserrat, Nunito } from 'next/font/google';
import Password from '@/components/Settings/Data-Security.tsx/Password';
import TwoFA from '@/components/Settings/Data-Security.tsx/2FA';
import ManageDevices from '@/components/Settings/Data-Security.tsx/ManageDevices';
import DataAction from '@/components/Settings/Data-Security.tsx/DataAction';
import withAuth from '@/helpers/withAuth';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

function DataAndSecurity() {
  return (
    <Settingslayout>
      <h2 className={`${montserrat.className} text-Grey-G700 text-2xl lg:text-[2rem] font-semibold`}>
        Data & Security
      </h2>
      <div className={`${nunito.className} flex flex-col gap-8 -mt-4 lg:-mt-0`}>
        <Password />
        <TwoFA />
        <ManageDevices />
        {/* export data */}
        <DataAction
          title="Export Data"
          description="Request your event data from us and receive an email detailing your activity"
          buttonText="Export Data"
        />
        {/* clear data */}
        <DataAction
          title="Clear Data"
          description="Clear your cache and account data without deleting your Eclips account. This option lets you refresh your
              app experience by removing temporary files and stored information"
          buttonText="Clear all data"
        />
      </div>
    </Settingslayout>
  );
}

export default withAuth(DataAndSecurity);
