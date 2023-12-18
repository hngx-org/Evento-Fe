'use client';

import React, { useState } from 'react';
import EventManagementLayout from '@/layout/EventManagementLayout';
import App1 from '../../../public/assets/app1.svg';
import App2 from '../../../public/assets/app2.svg';
import App3 from '../../../public/assets/app3.svg';
import App4 from '../../../public/assets/app4.svg';
import App5 from '../../../public/assets/app5.svg';
import Edit from '../../../public/assets/edit-2.svg';
import Trash from '../../../public/assets/trash.svg';
import Image from 'next/image';
import ArrowLeft from '../../../public/assets/arrow-left.svg';
import ArrowRight from '../../../public/assets/arrow-right.svg';
import Albert from '../../../public/assets/albert.svg';
import Button from '@/components/ui/NewButton';
import { getStoredUserId } from '@/http/getToken';
import AuthenticatedHeader from '@/components/components/authenticatedheader';
import Homenav from '@/components/Home/homenav';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { eventDetails } from '@/http/events';
import HomeFooter from '@/components/Home/homefooter';
import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';
import { EventManagement } from '@/@types';
import { BsTrash } from 'react-icons/bs';

export default function Index() {
  const router = useRouter();
  console.log(router.query.id);
  const { data, isLoading, error } = useQuery(['get-event-details', router.query.id], () => {
    if (!router.query.id) {
      throw new Error('Event ID not provided');
    }
    const id = router.query.id as string;
    return eventDetails(id);
  });

  // const Id = typeof eventId === 'string' ? eventId : eventId[0];
  const Id = router.query.id as string;

  const userId = getStoredUserId();
  let [num, setNum] = useState(1);
  function Next() {
    setNum(++num);
  }

  function Prev() {
    num > 1 && setNum(--num);
  }
  const pages = [{ page: num }, { page: num + 1 }, { page: num + 2 }, { page: num + 3 }];
  if (isLoading) {
    return (
      <div className="flex flex-col h-screen">
        {userId ? <AuthenticatedHeader /> : <Homenav />}
        <div className="flex-1 grid place-content-center">
          <div className="h-14 w-14 rounded-full border-4 border-gray-700 border-t-primary-100 animate-spin" />
        </div>
        {!userId && <HomeFooter />}
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex flex-col h-screen">
        {userId ? <AuthenticatedHeader /> : <Homenav />}
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <h4 className="text-2xl font-medium text-center">Event Not Found</h4>
          <Link
            href="/explore"
            className="flex items-center mx-auto gap-2 py-1.5 px-6 bg-primary-100 w-fit text-white-100 rounded border border-primary-100 hover:bg-transparent hover:text-primary-100 transition-all"
          >
            <IoArrowBack /> Explore Events
          </Link>
        </div>
        {!userId && <HomeFooter />}
      </div>
    );
  }

  const event: EventManagement = data?.data?.data;
  const participants = event.participants;
  console.log(participants);
  return (
    <div>
      {userId ? <AuthenticatedHeader /> : <Homenav />}
      <div className="max-w-[1240px] mx-auto p-4 pt-8">
        <section className="flex justify-between flex-col md:flex-row py-8">
          <div>
            <p className="text-[32px] text-[#535353] pb-4 font-[700] leading-[40px]">All applicant data</p>
            <div className="relative">
              <Image src={App2} width={30} alt="Applicant 2" className="inline absolute left-0" />
              <Image src={App1} width={30} alt="Applicant 1" className="inline absolute left-4" />
              <Image src={App3} width={30} alt="Applicant 3" className="inline absolute left-8" />
              <Image src={App4} width={30} alt="Applicant 4" className="inline absolute left-12" />
              <Image src={App5} width={30} alt="Applicant 5" className="inline absolute left-16" />
              <span className="absolute left-28 mt-0 font-[600] text-[20px] leading-[28px] text-[rgba(83,83,83,0.55)]">
                5 attendees
              </span>
            </div>
          </div>
        </section>

        <div className="mt-10 rounded-xl overflow-hidden border-b border-b-[#B1B1B1]">
          <div className="table_main w-full">
            <div className="table_main_inner">
              {/* TABLE HEADER */}
              <table className="w-full">
                <thead>
                  <tr className="font-bold text-xl text-left text-[#3c3c3c] bg-[#f5f5f5]">
                    <th className="px-1 py-6 pr-8 text-center">
                      <input type="checkbox" className="cursor-pointer text-[20px]" />
                    </th>
                    <th className="px-4 py-6">Name</th>
                    <th className="px-4 py-6">Contact</th>
                    <th className="px-4 py-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="border border-[#B1B1B1] rounded-b-xl border-b-0">
                  {participants?.map((item) => {
                    return (
                      <tr key={item.userID} className="text-left text-sm text-[#767676] font-semibold">
                        <td className="py-5 px-1 pr-8 text-center">
                          <input type="checkbox" className="cursor-pointer text-[20px]" />
                        </td>
                        <td className="py-5 px-4">
                          <div className="flex items-center gap-3">
                            <div className="h-[50px] w-[50px] rounded-full overflow-hidden">
                              <Image
                                src={item.profileImage ?? '/assets/avatar.png'}
                                width={50}
                                height={50}
                                alt="User profile Image"
                              />
                            </div>
                            <p className="text-xl font-medium text-[#1E1E1E]">
                              {item.firstName} {item.lastName}
                            </p>
                          </div>
                        </td>
                        <td className="py-5 px-4">{item.email}</td>
                        <td className="py-5 px-4">
                          <div className="flex justify-center text-xl">
                            <BsTrash />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
