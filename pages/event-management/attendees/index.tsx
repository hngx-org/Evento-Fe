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
      <section className="flex justify-between py-8">
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
        <Button className="bg-primary-100 mt-3 w-[173px] h-[44px]">
          <Image src={Edit} width={0} alt="Edit Icon" />
          Invite Guests
        </Button>
      </section>

      <div className=" mt-20 rounded-xl overflow-hidden">
        <div className="table_main w-full">
          <div className="table_main_inner">
            {/* TABLE HEADER */}
            <div className="table_header">
              <ul className="bg-[#f5f5f5] p-[1rem] py-6 overflow-hidden text-center flex justify-start items-center ">
                <li className=" font-[700] text-[20px] leading-[28px] text-[#3c3c3c] flex justify-start items-center w-[17rem] ">
                  <input type="checkbox" className="cursor-pointer text-[20px]" />
                </li>
                <li className=" font-[700] text-[20px] leading-[28px] text-[#3c3c3c] flex justify-start items-center w-[34rem] ">
                  Name
                </li>
                <li className=" font-[700] text-[20px] leading-[28px] text-[#3c3c3c] flex justify-start items-center w-[25rem] ">
                  Contact
                </li>
                <li className=" font-[700] text-[20px] leading-[28px] text-[#3c3c3c] flex justify-start items-center w-[17rem]">
                  Status
                </li>
                <li className=" font-[700] text-[20px] leading-[28px] text-[#3c3c3c] flex justify-start items-center w-[16rem] ">
                  Address
                </li>
                <li className=" font-[700] text-[20px] leading-[28px] text-[#3c3c3c] flex justify-start items-center ">
                  Actions
                </li>
              </ul>

              <div className="table_data">
                <div className="table_data_inner rounded-t-[6px] rounded-b-[16px] border-[0.5px] border-[#B1B1B1]">
                  <ul>
                    {/*  */}
                    <li className=" border-b border-[#B1B1B1] ml-2 cursor-pointer  flex justify-start items-center p-[1rem]">
                      <div className="  flex justify-start items-center w-[13rem] ">
                        <input type="checkbox" className="cursor-pointer text-[20px]" />
                      </div>

                      <div className="flex justify-start w-[35rem] ">
                        <Image src={Albert} width={50} height={50} alt="Albert" />
                        <div className="text-left ml-3">
                          <p className="text-[20px] font-[600] text-[#1e1e1e] ">Albert Ronald</p>
                          <p className="text-[#b1b1b1] text-[16px] font-[500] ">Albert83</p>
                        </div>
                      </div>

                      <div className="text-[#b1b1b1] text-[14px] font-[600] w-[27rem] ">albertflores@gmail.com</div>

                      <div className="w-[18rem] ">
                        <button className="text-[12px] bg-[#eee7fc] rounded-[10px] py-[8px] p-[16px] font-[600] text-[#580CE0] ">
                          Submitted
                        </button>
                      </div>

                      <div className="text-[#b1b1b1] text-[14px] font-[600] w-[17rem]">Lagos, Nigeria</div>

                      <div className="min-w-fit">
                        <button>
                          <svg
                            className="inline mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M13.2594 3.6L5.04936 12.29C4.73936 12.62 4.43936 13.27 4.37936 13.72L4.00936 16.96C3.87936 18.13 4.71936 18.93 5.87936 18.73L9.09936 18.18C9.54936 18.1 10.1794 17.77 10.4894 17.43L18.6994 8.74C20.1194 7.24 20.7594 5.53 18.5494 3.44C16.3494 1.37 14.6794 2.1 13.2594 3.6Z"
                              stroke="#292D32"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M11.8906 5.05C12.3206 7.81 14.5606 9.92 17.3406 10.2"
                              stroke="#292D32"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M3 22H21"
                              stroke="#292D32"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                        <button>
                          <Image src={Trash} width={0} alt="Edit Icon" className="inline" />
                        </button>
                      </div>
                    </li>
                    {/*  */}
                    <li className=" border-b border-[#B1B1B1] ml-2 cursor-pointer flex justify-start items-center p-[1rem]">
                      <div className="  flex justify-start items-center w-[13rem] ">
                        <input type="checkbox" className="cursor-pointer text-[20px]" />
                      </div>

                      <div className="flex justify-start w-[35rem] ">
                        <Image src={Albert} width={50} height={50} alt="Albert" />
                        <div className="text-left ml-3">
                          <p className="text-[20px] font-[600] text-[#1e1e1e] ">Albert Ronald</p>
                          <p className="text-[#b1b1b1] text-[16px] font-[500] ">Albert83</p>
                        </div>
                      </div>

                      <div className="text-[#b1b1b1] text-[14px] font-[600] w-[27rem] ">albertflores@gmail.com</div>

                      <div className="w-[18rem] ">
                        <button className="text-[12px] bg-[#FCEEE7] rounded-[10px] py-[8px] p-[16px] font-[600] text-[#E0580C] ">
                          Waiting
                        </button>
                      </div>

                      <div className="text-[#b1b1b1] text-[14px] font-[600] w-[17rem]">Lagos, Nigeria</div>

                      <div className="min-w-fit">
                        <button>
                          <svg
                            className="inline mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M13.2594 3.6L5.04936 12.29C4.73936 12.62 4.43936 13.27 4.37936 13.72L4.00936 16.96C3.87936 18.13 4.71936 18.93 5.87936 18.73L9.09936 18.18C9.54936 18.1 10.1794 17.77 10.4894 17.43L18.6994 8.74C20.1194 7.24 20.7594 5.53 18.5494 3.44C16.3494 1.37 14.6794 2.1 13.2594 3.6Z"
                              stroke="#292D32"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M11.8906 5.05C12.3206 7.81 14.5606 9.92 17.3406 10.2"
                              stroke="#292D32"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M3 22H21"
                              stroke="#292D32"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                        <button>
                          <Image src={Trash} width={0} alt="Edit Icon" className="inline" />
                        </button>
                      </div>
                    </li>{' '}
                    <li className=" border-b border-[#B1B1B1] ml-2 cursor-pointer flex justify-start items-center p-[1rem]">
                      <div className="  flex justify-start items-center w-[13rem] ">
                        <input type="checkbox" className="cursor-pointer text-[20px]" />
                      </div>

                      <div className="flex justify-start w-[35rem] ">
                        <Image src={Albert} width={50} height={50} alt="Albert" />
                        <div className="text-left ml-3">
                          <p className="text-[20px] font-[600] text-[#1e1e1e] ">Albert Ronald</p>
                          <p className="text-[#b1b1b1] text-[16px] font-[500] ">Albert83</p>
                        </div>
                      </div>

                      <div className="text-[#b1b1b1] text-[14px] font-[600] w-[27rem] ">albertflores@gmail.com</div>

                      <div className="w-[18rem] ">
                        <button className="text-[12px] bg-[#eee7fc] rounded-[10px] py-[8px] p-[16px] font-[600] text-[#580CE0] ">
                          Submitted
                        </button>
                      </div>

                      <div className="text-[#b1b1b1] text-[14px] font-[600] w-[17rem]">Lagos, Nigeria</div>

                      <div className="min-w-fit">
                        <button>
                          <svg
                            className="inline mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M13.2594 3.6L5.04936 12.29C4.73936 12.62 4.43936 13.27 4.37936 13.72L4.00936 16.96C3.87936 18.13 4.71936 18.93 5.87936 18.73L9.09936 18.18C9.54936 18.1 10.1794 17.77 10.4894 17.43L18.6994 8.74C20.1194 7.24 20.7594 5.53 18.5494 3.44C16.3494 1.37 14.6794 2.1 13.2594 3.6Z"
                              stroke="#292D32"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M11.8906 5.05C12.3206 7.81 14.5606 9.92 17.3406 10.2"
                              stroke="#292D32"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M3 22H21"
                              stroke="#292D32"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                        <button>
                          <Image src={Trash} width={0} alt="Edit Icon" className="inline" />
                        </button>
                      </div>
                    </li>
                    <li className=" border-b border-[#B1B1B1] ml-2 cursor-pointer flex justify-start items-center p-[1rem]">
                      <div className="  flex justify-start items-center w-[13rem] ">
                        <input type="checkbox" className="cursor-pointer text-[20px]" />
                      </div>

                      <div className="flex justify-start w-[35rem] ">
                        <Image src={Albert} width={50} height={50} alt="Albert" />
                        <div className="text-left ml-3">
                          <p className="text-[20px] font-[600] text-[#1e1e1e] ">Albert Ronald</p>
                          <p className="text-[#b1b1b1] text-[16px] font-[500] ">Albert83</p>
                        </div>
                      </div>

                      <div className="text-[#b1b1b1] text-[14px] font-[600] w-[27rem] ">albertflores@gmail.com</div>

                      <div className="w-[18rem] ">
                        <button className="text-[12px] bg-[#eee7fc] rounded-[10px] py-[8px] p-[16px] font-[600] text-[#580CE0] ">
                          Submitted
                        </button>
                      </div>

                      <div className="text-[#b1b1b1] text-[14px] font-[600] w-[17rem]">Lagos, Nigeria</div>

                      <div className="min-w-fit">
                        <button>
                          <svg
                            className="inline mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M13.2594 3.6L5.04936 12.29C4.73936 12.62 4.43936 13.27 4.37936 13.72L4.00936 16.96C3.87936 18.13 4.71936 18.93 5.87936 18.73L9.09936 18.18C9.54936 18.1 10.1794 17.77 10.4894 17.43L18.6994 8.74C20.1194 7.24 20.7594 5.53 18.5494 3.44C16.3494 1.37 14.6794 2.1 13.2594 3.6Z"
                              stroke="#292D32"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M11.8906 5.05C12.3206 7.81 14.5606 9.92 17.3406 10.2"
                              stroke="#292D32"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M3 22H21"
                              stroke="#292D32"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                        <button>
                          <Image src={Trash} width={0} alt="Edit Icon" className="inline" />
                        </button>
                      </div>
                    </li>
                    <li className=" border-b border-[#B1B1B1] mb-10 ml-2 cursor-pointer flex justify-start items-center p-[1rem]">
                      <div className="  flex justify-start items-center w-[13rem] ">
                        <input type="checkbox" className="cursor-pointer text-[20px]" />
                      </div>

                      <div className="flex justify-start w-[35rem] ">
                        <Image src={Albert} width={50} height={50} alt="Albert" />
                        <div className="text-left ml-3">
                          <p className="text-[20px] font-[600] text-[#1e1e1e] ">Albert Ronald</p>
                          <p className="text-[#b1b1b1] text-[16px] font-[500] ">Albert83</p>
                        </div>
                      </div>

                      <div className="text-[#b1b1b1] text-[14px] font-[600] w-[27rem] ">albertflores@gmail.com</div>

                      <div className="w-[18rem] ">
                        <button className="text-[12px] bg-[#eee7fc] rounded-[10px] py-[8px] p-[16px] font-[600] text-[#580CE0] ">
                          Submitted
                        </button>
                      </div>

                      <div className="text-[#b1b1b1] text-[14px] font-[600] w-[17rem]">Lagos, Nigeria</div>

                      <div className="min-w-fit">
                        <button>
                          <svg
                            className="inline mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M13.2594 3.6L5.04936 12.29C4.73936 12.62 4.43936 13.27 4.37936 13.72L4.00936 16.96C3.87936 18.13 4.71936 18.93 5.87936 18.73L9.09936 18.18C9.54936 18.1 10.1794 17.77 10.4894 17.43L18.6994 8.74C20.1194 7.24 20.7594 5.53 18.5494 3.44C16.3494 1.37 14.6794 2.1 13.2594 3.6Z"
                              stroke="#292D32"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M11.8906 5.05C12.3206 7.81 14.5606 9.92 17.3406 10.2"
                              stroke="#292D32"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M3 22H21"
                              stroke="#292D32"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                        <button>
                          <Image src={Trash} width={0} alt="Edit Icon" className="inline" />
                        </button>
                      </div>
                    </li>
                  </ul>

                  <div className="p-[1rem] flex justify-between">
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
