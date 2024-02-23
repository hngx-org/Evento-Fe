import React from 'react';
import { Card, CardBody, Typography, Button } from '@material-tailwind/react';
import { LuArrowRightSquare } from 'react-icons/lu';
import { HiOutlineMail } from 'react-icons/hi';
import { useState } from 'react';
import { Switch } from '@headlessui/react';

const Registration: React.FC = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-8 gap-6 ">
      <div>
        <Card>
          <CardBody>
            <Typography variant="h6"> Standard</Typography>
            <Typography variant="h3">Free</Typography>
            <div className="flex justify-between mb-2">
              <Typography className=""> Approval</Typography>
              <div className="grid  place-items-center">
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${enabled ? 'bg-[#b4b4b4]' : 'bg-[#E0580C]'}
                  relative inline-flex h-[25px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={`${enabled ? 'translate-x-7' : 'translate-x-0'}
                    pointer-events-none inline-block h-[21px] w-[21px] transform rounded-full bg-[#fff] shadow-lg ring-0 transition duration-200 ease-in-out`}
                  />
                </Switch>
              </div>
            </div>
            <hr className="text-[#535353]"></hr>
            <div className="flex justify-between align-middle  ">
              <Button className="bg-[#07A460] my-2 text-[#fff] text-[10px] rounded-3xl md:text-[12px]">
                Available
              </Button>
              <Typography className="text-[#535353] my-4 ">0 Sold</Typography>
            </div>
          </CardBody>
        </Card>
      </div>
      <div>
        <Card>
          <CardBody>
            <Typography variant="h5"> Start selling tickets</Typography>
            <Typography>
              Collect payments by creating a PayPal account. Receive payouts daily. Set up in under 5 minutes
            </Typography>
            <Button className="bg-[#E0580C] my-4 text-[#fff] text-[10px] md:text-[12px] ">Sell Ticket</Button>
          </CardBody>
        </Card>
      </div>
      <div>
        <Card>
          <CardBody>
            <Typography variant="h5"> Registration Email</Typography>
            <Typography>
              Upon registration, we send guests a confirmation email that includes a calendar invite. You can add a
              custom message to the email.
            </Typography>
            <div className="flex gap-4 w-full">
              <Button className="my-4 bg-[#FCEEE7] border border-primary-100 text-[10px] md:text-[12px] gap-4  hover:border-primary-100 flex text-center rounded-lg  transition-all duration-300 ease-in-out text-primary-100">
                <LuArrowRightSquare className="text-[20px] " />
                Edit Event
              </Button>
              <Button className="bg-[#E0580C] my-4 text-[#fff] text-[10px] md:text-[12px] gap-4 flex ">
                <HiOutlineMail className="text-[20px] " /> Customise Email
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Registration;
