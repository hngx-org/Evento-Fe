import React from 'react';
import Image from 'next/image';
import premiumPlanWhite from 'public/assets/settings/flash-white.svg';
import basicPlanWhite from 'public/assets/settings/basic-plan_white.svg';
import enterprisePlan from 'public/assets/settings/enterprise-plan.svg';

const paymentHistory = [
  {
    id: 1,
    name: 'Premium',
    date: '16-11-23',
    icon: premiumPlanWhite,
  },
  {
    id: 2,
    name: 'Basic',
    date: '12-10-23',
    icon: basicPlanWhite,
  },
];

function PaymentHistory() {
  return (
    <div className="flex flex-col gap-9">
      <div className={`space-y-2`}>
        <h3 className="text-Grey-G700 text-xl font-medium">Payment History</h3>
        <p className="text-Grey-G100 text-sm">View payments history of all purchases done by evento</p>
      </div>
      <div className="flex flex-col gap-8">
        {paymentHistory.map((payment) => (
          <div
            key={payment.id}
            className={`flex items-center justify-between ${
              payment.id !== paymentHistory.length ? 'border-b border-b-Grey-G40 pb-8' : ''
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-9 h-9 rounded border border-Grey-G30 ${
                  payment.name === 'Premium' ? 'bg-[#BB9BF2]' : ''
                } ${payment.name === 'Basic' ? 'bg-[#F2BB9B]' : ''} flex items-center justify-center`}
              >
                <Image src={payment.icon} alt="" width={20} height={20} />
              </div>
              <div>
                <p className="text-Grey-600 font-medium">{payment.name}</p>
                <p className="text-Grey-G400 text-[0.625rem]">{payment.date}</p>
              </div>
            </div>
            <div className="text-sm text-primary-100 font-normal cursor-pointer">View Details</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaymentHistory;
