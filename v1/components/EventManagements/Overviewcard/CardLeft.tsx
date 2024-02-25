import { Card, CardBody, Typography, Button } from '@material-tailwind/react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import White from '@/public/white.png';
import Image from 'next/image';

export function CardLeft() {
  return (
    <Card className="bg-[#F5F5F5] text-[#535353] mt-6 h-[47rem]">
      <div className="relative m-4 bg-[#fff] rounded-lg">
        <Image src={White} alt="" width={500} height={500} />
      </div>
      <CardBody>
        <Typography className="mb-2 text-[#535353] text-xl ">Your event title is displayed here</Typography>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <FaRegCalendarAlt />
            <Typography className="text-[#A4A4A4] text-sm ">Start Date</Typography>
          </div>
          <div className="flex gap-2">
            <FaRegCalendarAlt />
            <Typography className="text-[#A4A4A4] text-sm ">End Date</Typography>
          </div>
        </div>
        <div className="flex gap-4 my-4 ">
          <Card className="bg-[#fff]">
            <CardBody>
              <div>
                <Typography className="text-[#535353] text-sm md:text-lg">Thursday, November 16</Typography>
                <Typography className="text-[#A4A4A4] text-[10px]">5:00 PM to 6:00 PM</Typography>
              </div>
            </CardBody>
          </Card>
          <Card className="bg-[#fff]">
            <CardBody>
              <div>
                <Typography className="text-[#535353] text-sm  md:text-lg ">Thursday, November 16</Typography>
                <Typography className="text-[#A4A4A4] text-[10px]">5:00 PM to 6:00 PM</Typography>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="flex gap-2 justify-start align-middle mt-4 ">
          <CiLocationOn className="text-[#E0580C] text-[30px] " />
          <div>
            <Typography className="text-[#A4A4A4]">Location of event:</Typography>
            <Typography>Register to see address of this event</Typography>
          </div>
        </div>

        <Button className="bg-[#E0580C] my-4 text-[#fff] text-[10px] md:text-[12px] ">One-Click to Register</Button>
        <div className="my-4">
          <Typography className="text-[#A4A4A4]">Host:</Typography>
          <Typography className="text-[#535353]">Ayodeji Sebanjo</Typography>
          <Typography className="text-[#A4A4A4]">ayoniyi28@gmail.com</Typography>
        </div>
      </CardBody>
    </Card>
  );
}
