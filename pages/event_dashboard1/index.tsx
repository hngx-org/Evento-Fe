// import React, { useState } from 'react';
// import Image from 'next/image';
// import AuthLayout from '@/layout/Authlayout';
// import withAuth from '@/helpers/withAuth';
// import EventCard from '@/components/components/card/event';

// const events = {
//   upcoming_events: [
//     {
//       id: 'event1',
//       banner: '/assets/hngevent.svg',
//       date: 'Today, 30 May',
//       title: 'Tech simplified for beginners',
//       location: 'Zoom meeting',
//       time: '2pm',
//       price:100,
//     },
//     {
//       id: 'event2',
//       banner: '/assets/hngevent.svg',
//       date: '2nd June, 2023',
//       title: 'Balancing Law and tech',
//       location: 'Zoom meeting',
//       time: '2pm',
//       price:100,
//     },
//     {
//       id: 'event3',
//       banner: '/assets/hngevent.svg',
//       date: 'Mon. Oct 30, 3:00PM WAT',
//       title: 'Data analysis simplified',
//       location: 'Zoom meeting',
//       time: '2pm',
//       price:100,
//     },
//     {
//       id: 'event4',
//       banner: '/assets/hngevent.svg',
//       date: 'Mon. Oct 30, 3:00PM WAT',
//       title: 'Data analysis simplified',
//       location: 'Zoom meeting',
//       time: '2pm',
//       price:100,
//     },
//   ],
// };

// interface EventProps {
//   imagePath?: string;
//   date?: string;
//   title?: string;
//   location?: string;
//   price?: number | string;
//   tag?: string;
//   tag_image?: string;
// }

// function EventDashboard({ tag, tag_image }: EventProps) {
//   // const [images] = useState(['/assets/attendee_dash1.svg']);
//   return (
//     <AuthLayout>
//       {/* class="max-w-[1062px] w-full mx-auto px-4 py-20" */}
//         <div className="w-full max-w-[1240px] mx-auto pt-16 pb-10 md:px-14 lg:px-20">
//             <h4 className="font-montserrat text-3xl font-semibold capitalize text-Grey-G800">Events</h4>
//             <div className='py-6'><div className='h-[2px] w-full bg-gray-100'></div></div>
//             <div className="flex flex-row py-6 items-center gap-10 justify-center">
//               <div className="">
//                 <p>Upcoming</p>
//               </div>
//               <div className=" ">
//                 <p className="">Past</p>
//               </div>
//             </div>
//           <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-6 lg:gap-x-10 lg:gap-y-16 mb-8 px-4 sm:px-12 md:px-16 lg:px-20">
//             {events?.upcoming_events?.map((item, index) => {
//               return (
//                 <EventCard key={index} date={item.date} title={item.title} location={item.location} imagePath={item.banner} price={item.price}/>
//               );
//             })}
//           </div>
//         </div>
//     </AuthLayout>
//   );
// }

// export default withAuth(EventDashboard);
