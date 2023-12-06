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

export default function Index() {
  let [num, setNum] = useState(1);
  function Next() {
    setNum(++num);
  }
  function Prev() {
    num > 1 && setNum(--num);
  }
  const pages = [{ page: num }, { page: num + 1 }, { page: num + 2 }, { page: num + 3 }];
  return (
    <EventManagementLayout>
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
        <Button className="bg-primary-100 mt-12 w-full md:mt-3 md:w-[173px] h-[44px]">
          <Image src={Edit} width={0} alt="Edit Icon" />
          Invite Guests
        </Button>
      </section>

      <div className=" mt-20 rounded-xl overflow-hidden">
        <div className="table_main w-full">
          <div className="table_main_inner">
            {/* TABLE HEADER */}
            <div className="table_header">
              <ul className="bg-[#f5f5f5] p-[1rem] py-6 overflow-hidden text-center hidden md:flex justify-start items-center ">
                <li className=" font-[700] text-[20px] leading-[28px] text-[#3c3c3c] flex justify-start items-center w-[8rem] ">
                  <input type="checkbox" className="cursor-pointer text-[20px]" />
                </li>
                <li className=" font-[700] text-[20px] leading-[28px] text-[#3c3c3c] flex justify-start items-center w-[34rem] ">
                  Name
                </li>
                <li className=" font-[700] text-[20px] leading-[28px] text-[#3c3c3c] flex justify-start items-center w-[25rem] ">
                  Contact
                </li>
                <li className=" font-[700] text-[20px] leading-[28px] text-[#3c3c3c] flex justify-start items-center w-[16rem] ">
                  Address
                </li>
                <li className=" font-[700] text-[20px] leading-[28px] text-[#3c3c3c] flex justify-start items-center ">
                  Actions
                </li>
              </ul>

              <div className="table_data">
                <div className="table_data_inner rounded-t-[6px] rounded-b-[16px] border-0 md:border-[0.5px] border-[#B1B1B1]">
                  <ul>
                    {/*  */}
                    <li className=" border-b border-[#B1B1B1] ml-2 cursor-pointer  flex justify-start items-center p-[1rem]">
                      <div className="  flex justify-start items-center w-[5rem] sm:w-[10rem] md:w-[5rem] ">
                        <input type="checkbox" className="cursor-pointer text-[20px]" />
                      </div>

                      <div className="flex justify-start w-[26rem] ">
                        <Image src={Albert} width={50} height={50} alt="Albert" />
                        <div className="text-left pl-3 pt-3">
                          <p className="text-[20px] font-[600] text-[#1e1e1e] ">Albert Ronald</p>
                          <div className="md:hidden">
                            <p className="text-[#b1b1b1] text-[14px]">albertflores@gmail.com</p>
                            <p className="text-[#b1b1b1] text-[14px]">Lagos, Nigeria</p>
                          </div>
                        </div>
                      </div>

                      <div className="text-[#b1b1b1] text-[14px] font-[600] w-[25rem] md:flex hidden ">
                        albertflores@gmail.com
                      </div>

                      <div className="text-[#b1b1b1] text-[14px] font-[600] w-[17rem] md:flex hidden">
                        Lagos, Nigeria
                      </div>

                      <div className="min-w-fit mr-5">
                        <button>
                          <Image src={Trash} width={0} alt="Edit Icon" className="inline" />
                        </button>
                      </div>
                    </li>
                    {/*  */}
                    <li className=" border-b border-[#B1B1B1] ml-2 cursor-pointer flex justify-start items-center p-[1rem]">
                      <div className="  flex justify-start items-center w-[5rem] sm:w-[10rem] md:w-[5rem] ">
                        <input type="checkbox" className="cursor-pointer text-[20px]" />
                      </div>

                      <div className="flex justify-start w-[26rem] ">
                        <Image src={Albert} width={50} height={50} alt="Albert" />
                        <div className="text-left pl-3 pt-3">
                          <p className="text-[20px] font-[600] text-[#1e1e1e] ">Albert Ronald</p>
                          <div className="md:hidden">
                            <p className="text-[#b1b1b1] text-[14px]">albertflores@gmail.com</p>
                            <p className="text-[#b1b1b1] text-[14px]">Lagos, Nigeria</p>
                          </div>
                        </div>
                      </div>

                      <div className="text-[#b1b1b1] text-[14px] font-[600] w-[25rem] md:flex hidden ">
                        albertflores@gmail.com
                      </div>

                      <div className="text-[#b1b1b1] text-[14px] font-[600] w-[17rem] md:flex hidden">
                        Lagos, Nigeria
                      </div>

                      <div className="min-w-fit mr-5">
                        <button>
                          <Image src={Trash} width={0} alt="Edit Icon" className="inline" />
                        </button>
                      </div>
                    </li>{' '}
                    <li className=" border-b border-[#B1B1B1] ml-2 cursor-pointer flex justify-start items-center p-[1rem]">
                      <div className="  flex justify-start items-center w-[5rem] sm:w-[10rem] md:w-[5rem] ">
                        <input type="checkbox" className="cursor-pointer text-[20px]" />
                      </div>

                      <div className="flex justify-start w-[26rem] ">
                        <Image src={Albert} width={50} height={50} alt="Albert" />
                        <div className="text-left pl-3 pt-3">
                          <p className="text-[20px] font-[600] text-[#1e1e1e] ">Albert Ronald</p>
                          <div className="md:hidden">
                            <p className="text-[#b1b1b1] text-[14px]">albertflores@gmail.com</p>
                            <p className="text-[#b1b1b1] text-[14px]">Lagos, Nigeria</p>
                          </div>
                        </div>
                      </div>

                      <div className="text-[#b1b1b1] text-[14px] font-[600] w-[25rem] md:flex hidden ">
                        albertflores@gmail.com
                      </div>

                      <div className="text-[#b1b1b1] text-[14px] font-[600] w-[17rem] md:flex hidden">
                        Lagos, Nigeria
                      </div>

                      <div className="min-w-fit mr-5">
                        <button>
                          <Image src={Trash} width={0} alt="Edit Icon" className="inline" />
                        </button>
                      </div>
                    </li>
                    <li className=" border-b border-[#B1B1B1] ml-2 cursor-pointer flex justify-start items-center p-[1rem]">
                      <div className="  flex justify-start items-center w-[5rem] sm:w-[10rem] md:w-[5rem] ">
                        <input type="checkbox" className="cursor-pointer text-[20px]" />
                      </div>

                      <div className="flex justify-start w-[26rem] ">
                        <Image src={Albert} width={50} height={50} alt="Albert" />
                        <div className="text-left pl-3 pt-3">
                          <p className="text-[20px] font-[600] text-[#1e1e1e] ">Albert Ronald</p>
                          <div className="md:hidden">
                            <p className="text-[#b1b1b1] text-[14px]">albertflores@gmail.com</p>
                            <p className="text-[#b1b1b1] text-[14px]">Lagos, Nigeria</p>
                          </div>
                        </div>
                      </div>

                      <div className="text-[#b1b1b1] text-[14px] font-[600] w-[25rem] md:flex hidden ">
                        albertflores@gmail.com
                      </div>

                      <div className="text-[#b1b1b1] text-[14px] font-[600] w-[17rem] md:flex hidden">
                        Lagos, Nigeria
                      </div>

                      <div className="min-w-fit mr-5">
                        <button>
                          <Image src={Trash} width={0} alt="Edit Icon" className="inline" />
                        </button>
                      </div>
                    </li>
                    <li className=" border-b border-[#B1B1B1] mb-10 ml-2 cursor-pointer flex justify-start items-center p-[1rem]">
                      <div className="  flex justify-start items-center w-[5rem] sm:w-[10rem] md:w-[5rem] ">
                        <input type="checkbox" className="cursor-pointer text-[20px]" />
                      </div>

                      <div className="flex justify-start w-[26rem] ">
                        <Image src={Albert} width={50} height={50} alt="Albert" />
                        <div className="text-left pl-3 pt-3">
                          <p className="text-[20px] font-[600] text-[#1e1e1e] ">Albert Ronald</p>
                          <div className="md:hidden">
                            <p className="text-[#b1b1b1] text-[14px]">albertflores@gmail.com</p>
                            <p className="text-[#b1b1b1] text-[14px]">Lagos, Nigeria</p>
                          </div>
                        </div>
                      </div>

                      <div className="text-[#b1b1b1] text-[14px] font-[600] w-[25rem] md:flex hidden ">
                        albertflores@gmail.com
                      </div>

                      <div className="text-[#b1b1b1] text-[14px] font-[600] w-[17rem] md:flex hidden">
                        Lagos, Nigeria
                      </div>

                      <div className="min-w-fit mr-5">
                        <button>
                          <Image src={Trash} width={0} alt="Edit Icon" className="inline" />
                        </button>
                      </div>
                    </li>
                  </ul>

                  <div className="p-[1rem] hidden md:flex justify-between">
                    <p className="mt-2">Showing 5 of 5 entries</p>
                    <div className="flex rounded-lg mb-4">
                      <button
                        onClick={Prev}
                        className="focus:bg-[#ED9E72] hover:bg-[#ED9E72] mr-1 w-8 rounded-[4px] border border-[rgb(177,177,177)]"
                      >
                        <Image src={ArrowLeft} width={0} alt="arror-left" className="flex items-center m-auto" />
                      </button>
                      {pages.map((pg, i) => (
                        <button
                          key={i}
                          className="flex text-[16px] font-[600] leading-[24px] px-[12px] py-[4px] focus:bg-[#ED9E72] hover:bg-[#ED9E72] mx-1 rounded-[4px] border border-[#b1b1b1]"
                        >
                          {pg.page}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EventManagementLayout>
  );
}
