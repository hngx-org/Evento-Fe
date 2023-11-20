import React, { useEffect } from 'react';
import NoEvent from './NoEvent';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const ProfieEvent: React.FC = () => {
  useEffect(() => {
    const mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    // Handling clicks on your custom pagination buttons
    const createEventsButton = document.querySelector('.create-events');
    const attendedEventsButton = document.querySelector('.attended-events');

    if (createEventsButton && attendedEventsButton) {
      createEventsButton.addEventListener('click', () => {
        mySwiper.slideTo(0); // Go to the first slide when "Create Events" is clicked
        if (
          createEventsButton.classList.contains('border-primary-100') ||
          createEventsButton.classList.contains('!border-primary-100')
        ) {
          createEventsButton.classList.remove('border-primary-100');
          createEventsButton.classList.remove('!border-primary-100');
        }

        createEventsButton.classList.add('!border-primary-100');
        attendedEventsButton.classList.remove('!border-primary-100');
      });

      attendedEventsButton.addEventListener('click', () => {
        mySwiper.slideTo(1); // Go to the second slide when "Attended Events" is clicked
        if (
          attendedEventsButton.classList.contains('border-primary-100') ||
          attendedEventsButton.classList.contains('!border-primary-100')
        ) {
          attendedEventsButton.classList.remove('border-primary-100');
          attendedEventsButton.classList.remove('!border-primary-100');
        }
        createEventsButton.classList.remove('!border-primary-100');
        attendedEventsButton.classList.add('!border-primary-100');
      });
    }

    return () => {
      // Clean up event listeners or anything else when the component unmounts
      if (createEventsButton && attendedEventsButton) {
        createEventsButton.removeEventListener('click', () => {});
        attendedEventsButton.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <div className="w-[906px] relative flex flex-col  rounded-[12px] overflow-hidden ">
      {/* <div className="pagination w-full h-[3px] flex bg-[#C0C0C0] mb-[50px]">
        <div className="w-[50%] h-full " />
        <div className="w-[50%] h-full bg-primary-100 " />
      </div> */}
      <div className="swiper-container w-full relative">
        <div className="swiper-pagination w-full flex h-[60px] bg-[#F5F5F5] !relative mb-[32px] ">
          <div className="w-[50%] items-center justify-center flex font-bold text-xl create-events cursor-pointer transition border-b-[3px] border-[#C0C0C0] !border-primary-100 ">
            Create Events
          </div>
          <div className="w-[50%] items-center justify-center flex font-bold text-xl attended-events cursor-pointer transition border-b-[3px] border-[#C0C0C0]">
            Attended Events
          </div>
        </div>
        <div className="swiper-wrapper w-full relative ">
          <div className="swiper-slide" style={{ width: '100%' }}>
            <NoEvent type="create" />
          </div>
          <div className="swiper-slide" style={{ width: '100%' }}>
            <NoEvent type="attend" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfieEvent;
