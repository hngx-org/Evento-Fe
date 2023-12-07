import NoEvent from '@/components/UserProfile/NoEvent';
import withAuth from '@/helpers/withAuth';
import withoutAuth from '@/helpers/withoutAuth';
import Image from 'next/image';
import React, { useEffect } from 'react';
import calendarImage from '@/public/assets/profile/calendarForDashboard.svg';
import upcoming from '@/public/assets/eventDashboard3/upcoming.svg';
import created from '@/public/assets/eventDashboard3/created.svg';
import past from '@/public/assets/eventDashboard3/past.svg';
import { Montserrat, Nunito } from 'next/font/google';
import AuthLayout from '@/layout/Authlayout';
import { getUserEvents } from '@/http/dashBoard3api';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const Dashboard3: React.FC = () => {
  useEffect(() => {
    getUserEvents();
  }, []);
  return (
    <AuthLayout>
      <div className={`px-20 mt-10 ${nunito.className}`}>
        <section className="mb-14">
          <div className={`text-2xl font-medium mb-10 ${montserrat.className} `}>Welcome Paul,</div>
          <div className="upcomingRest flex justify-between">
            <div className="w-[360px] flex justify-between p-6 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.10)]">
              <div className="flex flex-col justify-between">
                <span className={`text-[32px] leading-[40px] font-bold ${montserrat.className} `}> 0</span>
                <span className="text-xl "> Upcoming events</span>
              </div>

              <Image src={upcoming} alt={''} />
            </div>
            <div className="w-[360px] flex justify-between p-6 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.10)]">
              <div className="flex flex-col justify-between">
                <span className={`text-[32px] leading-[40px] font-bold ${montserrat.className} `}> 0</span>
                <span className="text-xl "> Created events</span>
              </div>

              <Image src={created} alt={''} />
            </div>

            <div className="w-[360px] flex justify-between p-6 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.10)]">
              <div className="flex flex-col justify-between">
                <span className={`text-[32px] leading-[40px] font-bold ${montserrat.className} `}> 0</span>
                <span className="text-xl "> Past events</span>
              </div>

              <Image src={past} alt={''} />
            </div>
          </div>
        </section>
        <section className="flex justify-between">
          <div className="w-[850px]">
            {' '}
            <NoEvent type={''} />{' '}
          </div>

          <div className="">
            <Image className="w-[366px] h-[496px] object-cover" src={calendarImage} alt={''}></Image>
          </div>
        </section>
      </div>
    </AuthLayout>
  );
};

export default withAuth(Dashboard3);
