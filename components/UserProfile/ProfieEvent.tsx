import React, { useEffect, useState } from 'react';
import NoEvent from './NoEvent';
import Events from './Events';
import Swiper from 'swiper';
import 'swiper/css';
// import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import FilterModal from './FilterModal';
import { eventType, getUserCreatedEvents } from '@/http/profileapi';
import { getUserEvents } from '@/http/dashBoard3api';

interface SwiperElement extends Element {
  swiper?: Swiper; // Define 'swiper' as a property of the Element
}
interface ProfileEventType {
  combinedEvents: eventType[];
  pastEvents: eventType[];
}

const ProfileEvent: React.FC<ProfileEventType> = ({ combinedEvents, pastEvents }) => {
  const paginationList = ['Upcoming Events', 'Past Events'];

  const pagination = {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<div class="  ' + className + '">' + [paginationList[index]] + '</div>';
    },
  };

  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      hashNavigation: {
        watchState: true,
      },
      slidesPerView: 1,
      spaceBetween: 0,
      modules: [Pagination],
      pagination: pagination,
    });
  }, []);

  return (
    <div className="  w-[100%] lg:w-[906px]  relative flex flex-col  rounded-[12px] overflow-hidden ">
      <div className="swiper-container w-full relative">
        <div className="swiper-pagination w-full flex h-[60px] bg-[#F5F5F5] !relative mb-[32px] "></div>

        <div className="swiper-wrapper w-full relative gap-x-2  ">
          <div className="swiper-slide createdCard" style={{ width: '100%' }} data-hash="slide1">
            {combinedEvents.length > 0 ? <Events past={false} events={combinedEvents} /> : <NoEvent type="create" />}
          </div>
          <div className="swiper-slide " id="attendedCards" style={{ width: '100%' }} data-hash="slide2">
            {pastEvents.length > 0 ? <Events past={true} events={pastEvents} /> : <NoEvent type="attend" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEvent;
