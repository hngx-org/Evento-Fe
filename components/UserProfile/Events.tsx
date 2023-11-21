
import React from 'react';
import {data} from './data';
import { TfiWorld } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { PiTimerLight } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';



interface EventProps {
  type: string;
  src: any
}

const Event: React.FC<EventProps> = ({ type }) => {
  return (
   <div className='event bg-white-100  rounded-xl justify-center items-center w-full h-fit p-[64px] gap-y-4 '>
     <div className="flex px-2 justify-between  mb-8">
          <div className=" w-1/5  mt-2 h-[40px] flex items-center px-4">
            <div className="text-whitebg text-[20px] font-extrabold flex justify-center align-middle gap-4">
              <p className="text-[25px] font-bold text-[#303030] ">Filter&nbsp;by</p>
              <span className='pt-3'>
               <IoIosArrowDown />
              </span>
              
            </div>
          </div>
          <div className="  flex items-center font-semibold   justify-between">
          <Image className="object-cover " src={require('public/assets/twobox.png')} alt="event image"  width={50} height={50}/>
       <Image className="object-cover " src={require('public/assets/windowicon.png')} alt="event image"  width={50} height={50}/>
          </div>
     </div>

<div className="grid md:grid-cols-2  gap-8">
    
     {data.map((event, id)=>(
     <div key={id} className="max-w-sm rounded-xl overflow-hidden shadow-lg">
  <Image className="object-cover " src={require('public/assets/event2.png')} alt="event image"  width={500} height={100}/>
    <div className='flex justify-between align-middle flex-row px-6 py-2 mt-2 text-[#E57435]'>
       <p className='font-bold px-3 py-2'>{event.date}</p>
        <p className='bg-[#FCEEE7] px-3 py-2 rounded-md '>${event.price}</p>
    </div>

  <div className="px-6 py-2">
    <div className="font-bold text-xl mb-2">{event.title}</div>
    <p className="text-[#868686] text-base flex mb-4 leading-none gap-4">
    <span className='text-lg text-gray-700 '>
           <IoLocationOutline />
         </span>
     {event.location}
    </p>
     <p className="text-base flex leading-none text-[#868686] gap-4">
      <span className='text-lg text-gray-700 '>
          <PiTimerLight />
         </span>
     {event.time}
    </p>
  </div>
   <div className="flex items-center px-6 py-4">
    <div className='flex '>
       <Image className="object-cover rounded-full " src={require('public/assets/user.jpg')} alt="event image"  width={30} height={30}/>
       <Image className="object-cover rounded-full -ml-2" src={require('public/assets/user.jpg')} alt="event image"  width={20} height={30}/>
       <Image className="object-cover rounded-full -ml-2" src={require('public/assets/user.jpg')} alt="event image"  width={30} height={30}/>
       <Image className="object-cover rounded-full -ml-2" src={require('public/assets/user.jpg')} alt="event image"  width={30} height={30}/>
    </div>
      
      <div className="text-sm flex items-center gap-6 ">
        <p className="text-gray-600 leading-none">{event.register}</p>
        <div className='flex text-gray-600 gap-1 justify-center align-middle'>

         <span className='text-lg'>
           <TfiWorld />
         </span>
         <span >
            <p className="text-gray-600 text-md ">Public</p>
         </span>
       
        </div>
        
      </div>
    </div>
</div>
     ))}
    </div>
   </div>
    
  );
};

export default Event;
