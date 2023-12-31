'use client';

import React, { useEffect, useState } from 'react';
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

interface ParticipantsProps {
  userID: string;
  email: string;
  profileImage: string | null;
  firstName: string;
  lastName: string;
}

export default function Index() {
  const [participantList, setParticipants] = useState<ParticipantsProps[]>([]);
  const [pageOffset, setPageOffset] = useState<number>(1);
  const router = useRouter();
  const { data, isLoading, error } = useQuery(['get-events', router.query.id], () => {
    if (!router.query.id) {
      throw new Error('Event ID not provided');
    }
    const id = router.query.id as string;
    return eventDetails(id);
  });

  useEffect(() => {
    if (data) {
      setParticipants(data?.data?.data?.participants);
      setPageOffset(Math.ceil(data?.data?.data?.participants.length / 10));
    } else {
      setParticipants([]);
    }
  }, [data]);

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

  return (
    <div>
      {userId ? <AuthenticatedHeader /> : <Homenav />}
      <div className="max-w-[1240px] mx-auto p-4 md:p-6 lg:p-4 pt-8 mb-8">
        <section className="flex justify-between flex-col md:flex-row py-8">
          <div>
            <p className="text-[20px] md:text-[32px] text-[#535353] pb-4 font-[700] leading-[40px]">
              All applicant data
            </p>
            <div className="flex items-center">
              <div className="relative flex">
                {/* {participantList.map((item, index) => {
                  if (index < 5) {
                    return (
                      <div
                        key={item.userID}
                        className="h-8 w-8 rounded-full overflow-hidden -ml-2  max-w-[20px] lg:max-w-none"
                      >
                        <Image
                          src={item.profileImage ?? '/assets/avatar.png'}
                          width={32}
                          height={32}
                          alt="Applicant Image"
                          className=""
                        />
                      </div>
                    );
                  }
                })} */}
                {participantList.slice(0, 5).map((item, index) => (
                  <div key={item.userID} className="h-8 w-8 rounded-full overflow-hidden -ml-2 ">
                    <Image
                      src={item.profileImage ?? '/assets/avatar.png'}
                      width={32}
                      height={32}
                      alt="Applicant Image"
                      className=""
                    />
                  </div>
                ))}
              </div>
              <span className="mt-0 ml-4 font-[600] text-[20px] leading-[28px] text-[rgba(83,83,83,0.55)]">
                {participantList?.length} attendees
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
                  <tr className="font-bold text-xl text-left text-[#3c3c3c] bg-[#f5f5f5] hidden md:table-row">
                    <th className="px-1 py-6 pr-8 text-center opacity-0">
                      <input type="checkbox" className="cursor-pointer text-[20px]" />
                    </th>
                    <th className="px-4 py-6">Name</th>
                    <th className="px-4 py-6">Contact</th>
                    <th className="px-4 py-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="md:border border-[#B1B1B1] rounded-b-xl border-b-0 ">
                  {participantList?.map((item) => {
                    return (
                      <tr
                        key={item.userID}
                        className="text-left text-sm text-[#767676] font-semibold py-1 px-4 border-b md:border-none border-[#DEDEDE]"
                      >
                        {/* hidden on small screen */}
                        <td className="py-5 px-1 pr-8 text-center hidden md:table-cell">
                          <input type="checkbox" className="cursor-pointer aspect-square h-6 md:h-5 rounded-md " />
                        </td>

                        <td className="py-5 px-4 hidden md:table-cell">
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

                        <td className="py-5 px-4 hidden md:table-cell">{item.email}</td>
                        {/* all hiddne on small screen */}
                        {/* shown on small screen */}

                        <td className="py-5 px-4  md:hidden table-cell ">
                          <div className="flex flex-row items-center">
                            {' '}
                            <input
                              type="checkbox"
                              className="cursor-pointer aspect-square h-6 md:h-5 rounded-md mr-4"
                            />
                            <Image
                              src={item.profileImage ?? '/assets/avatar.png'}
                              width={40}
                              height={40}
                              alt="Applicant Image"
                              className="mr-[10px]"
                            />
                            <div className="flex flex-col gap-y-1">
                              {' '}
                              <span className="text-xl font-semibold text-[#1E1E1E]">
                                {' '}
                                {item.firstName + ' ' + item.lastName}
                              </span>
                              <span className="text-sm"> {item.email}</span>
                              <span className="text-sm"> {'Lagos , Nigeria'}</span>
                            </div>
                          </div>
                        </td>
                        {/* shown on small screen */}
                        <td className="py-5 px-4">
                          <div className="flex justify-center text-xl">
                            <BsTrash size={24} />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td colSpan={4} className=" col">
                      <div className="p-[1rem] hidden md:flex justify-between">
                        <p className="mt-2">Showing 1 of {pageOffset} entries</p>
                        <div className="flex rounded-lg mb-4">
                          <button
                            onClick={Prev}
                            className="focus:bg-[#ED9E72] hover:bg-[#ED9E72] mr-1 w-8 rounded-[4px] border border-[rgb(177,177,177)]"
                          >
                            <Image src={ArrowLeft} width={0} alt="arror-left" className="flex items-center m-auto" />
                          </button>
                          {Array.from({ length: pageOffset }, (_, i) => i).map((_, i) => (
                            <button
                              key={i}
                              className="flex text-[16px] font-[600] leading-[24px] px-[12px] py-[4px] focus:bg-[#ED9E72] hover:bg-[#ED9E72] mx-1 rounded-[4px] border border-[#b1b1b1]"
                            >
                              {i + 1}
                            </button>
                          ))}
                          <button
                            onClick={Next}
                            className="focus:bg-[#ED9E72] hover:bg-[#ED9E72] ml-1 w-8 rounded-[4px] border border-[rgb(177,177,177)]"
                          >
                            <Image src={ArrowRight} width={0} alt="arror-right" className="flex items-center m-auto" />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
