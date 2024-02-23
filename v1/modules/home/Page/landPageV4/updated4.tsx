import Button from '@ui/Button';
import Image from 'next/image';
import top from '../../../../public/versionfour.svg';
import overlay from '@/public/homev4.svg';

const Hpmenewv2 = () => {
  return (
    <section className="px-4 justify-center  items-center my-6 mt-12 md:mt-0">
      <div className="absolute translate-y-1/2">
        <Image src={overlay} alt={'overlay'} width={654} height={265} />
      </div>
      <div className=" justify-center flex items-center">
        <div className="w-1/2 relative py-4 px-9">
          <div className="relative">
            <h1 className="text-5xl font-bold mb-5 text-gray-900">
              Crafting Experiences <br /> One <span className="text-primary-100">Event</span> at a Time
            </h1>
            <p>
              Bring your events to life effortlessly. Evento empowers you to create, <br /> organize, and manage your
              events easily
            </p>
            <Button
              styles={
                ' w-[250px] h-auto py-4 px-8 rounded-lg mt-5 item-center justify-center border border-primary-100 flex gap-2 text-white-100 bg-primary-100'
              }
              title={''}
            >
              Create an Event
            </Button>
          </div>
        </div>
        <div className="w-1/2 sm:hidden  py-4 px-9">
          <Image className="rounded-3xl" src={top} alt="img" width={500} height={300} />
        </div>
      </div>
    </section>
  );
};

export default Hpmenewv2;
