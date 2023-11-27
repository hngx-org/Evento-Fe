import Notification from '@/components/Settings/Notifications/Notification';
import Settingslayout from '@/layout/Settingslayout';
import { Montserrat, Nunito } from 'next/font/google';
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

function Notifications() {
  return (
    <Settingslayout>
      <div className="space-y-3">
        <h2 className={`${montserrat.className} text-Grey-G700 text-2xl lg:text-[2rem] font-semibold`}>
          Notifications
        </h2>
        <p className={`${nunito.className} text-Grey-G100 text-base lg:text-xl`}>
          Customize your notifications to suit your alerts
        </p>
      </div>
      <div className={`${nunito.className}`}>
        <Notification />
      </div>
    </Settingslayout>
  );
}

export default withAuth(Notifications);
