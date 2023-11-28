import Settingslayout from '@/layout/Settingslayout';
import { Montserrat, Nunito } from 'next/font/google';
import withAuth from '@/helpers/withAuth';
import EditProfile from '@/components/Settings/Account/EditProfile';
import Contact from '@/components/Settings/Account/Contact';
import SociaMedia from '@/components/Settings/Account/SociaMedia';

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

function Account() {
  return (
    <Settingslayout>
      <h2 className={`${montserrat.className} text-Grey-G700 text-2xl lg:text-[2rem] font-semibold mt-3 lg:mt-0`}>
        Account
      </h2>
      <div className={`${nunito.className} flex flex-col gap-8`}>
        <EditProfile />
        {/* <Contact /> */}
        <SociaMedia />
      </div>
    </Settingslayout>
  );
}

export default withAuth(Account);
