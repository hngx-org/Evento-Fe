import React, { useState } from 'react';
import Overview from './Overview';
import Registration from './Registration';
import Guests from './GuestList';
import { MdArrowOutward, MdArrowForwardIos } from 'react-icons/md';

import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const EventManage: React.FC = () => {
  // useEffect(() => {
  //   const mySwiper = new Swiper('.swiper-container', {
  //     slidesPerView: 1,
  //     spaceBetween: 0,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },
  //   });

  const [activeScreen, setActiveScreen] = useState(1);
  return (
    <div className="w-full bg-whitebg">
      <div className=" flex flex-col gap-8 px-10 pt-8">
        <div className=" w-[155px] mt-2 h-[42px] flex items-center py-4 px-8 text-[#C0C0C0]  justify-between align-middle">
          <p>Personal</p>
          <MdArrowForwardIos />
        </div>

        <div className="w-full text-whitebg flex gap-4">
          <div>
            <h2 className="text-[36px] font-bold text-[#535353] px-8">Event&nbsp;title&nbsp;here</h2>
          </div>

          <div className="flex px-2 justify-end  w-[95%] h-[40px]">
            <div className="bg-[#F4F4F4] w-[155px] rounded-[2px] mt-2 h-[42px] flex items-center py-4 px-3  justify-between">
              <p className="text-[#535353]">Event page</p> <MdArrowOutward />
            </div>
          </div>
        </div>
        <div className="w-full  h-[70px] rounded-b-[8px]">
          <div className="flex flex-row px-8 gap-16 text-[16px] justify-start items-center text-[#C0C0C0] font-medium h-[92px]  ">
            <button
              onClick={() => setActiveScreen(1)}
              className={
                activeScreen === 1 ? 'text-[#1E1E1E] border-[#1E1E1E] border-b-2 pb-[2px] px-[6px]' : 'px-[6px]'
              }
            >
              Overview
            </button>
            <button
              onClick={() => setActiveScreen(2)}
              className={
                activeScreen === 2 ? 'text-[#1E1E1E] border-[#1E1E1E] border-b-2 pb-[2px] px-[6px]' : 'px-[6px]'
              }
            >
              Registration
            </button>
            <button
              onClick={() => setActiveScreen(3)}
              className={
                activeScreen === 3 ? 'text-[#1E1E1E] border-[#1E1E1E] border-b-2 pb-[4px] px-[6px]' : 'px-[6px]'
              }
            >
              Guestlist
            </button>
            <hr className="text-[#C0C0C0]"></hr>
          </div>
        </div>
      </div>

      {activeScreen === 1 ? (
        <>
          <Overview />
        </>
      ) : activeScreen === 2 ? (
        <>
          <Registration />
        </>
      ) : activeScreen === 3 ? (
        <>
          <Guests />
        </>
      ) : null}
    </div>
  );
};
export default EventManage;
