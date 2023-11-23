import Settingslayout from '@/layout/Settingslayout';
import React, { useState } from 'react';
import { Montserrat, Nunito } from 'next/font/google';
import premiumPlan from 'public/assets/settings/premium-plan.svg';
import premiumPlanWhite from 'public/assets/settings/flash-white.svg';
import basicPlan from 'public/assets/settings/basic-plan.svg';
import enterprisePlan from 'public/assets/settings/enterprise-plan.svg';
import visaLogo from 'public/assets/settings/logos_visa.svg';
import masterCardLogo from 'public/assets/settings/logos_mastercard.svg';
import Image from 'next/image';
import { FaRegCircleCheck } from 'react-icons/fa6';
import Button from '@/components/ui/Button';
import Switch from '@/components/Settings/Switch';
import Input from '@/components/UserProfile/Input';

const billings = [
  {
    id: 1,
    name: 'Monthly Billing',
    discounts: '',
  },
  {
    id: 2,
    name: 'Yearly Billing',
    discounts: '15%',
  },
];

const plans = [
  {
    id: 1,
    name: 'Basic',
    price: '$0',
    icon: basicPlan,
    width: 16,
    height: 16,
    popular: false,
    benefits: [
      {
        id: 1,
        name: 'Access to 1 calendar',
      },
      {
        id: 2,
        name: 'Third-party app Integrations',
      },
      {
        id: 3,
        name: 'A co-admin access',
      },
      {
        id: 4,
        name: 'Feature evento have',
      },
    ],
  },
  {
    id: 2,
    name: 'Premium',
    price: '$10',
    icon: premiumPlan,
    width: 20,
    height: 20,
    popular: true,
    benefits: [
      {
        id: 1,
        name: 'Access to 10 calendars',
      },
      {
        id: 2,
        name: 'More apps integration',
      },
      {
        id: 3,
        name: 'Unlimited co-admin access',
      },
      {
        id: 4,
        name: 'Feature evento have',
      },
    ],
  },
  {
    id: 3,
    name: 'Enterprise',
    price: '$20',
    icon: enterprisePlan,
    width: 16,
    height: 16,
    popular: false,
    benefits: [
      {
        id: 1,
        name: 'Unlimited calendar access',
      },
      {
        id: 2,
        name: 'More apps integration',
      },
      {
        id: 3,
        name: 'Unlimited co-admin access',
      },
      {
        id: 4,
        name: 'Feature evento have',
      },
    ],
  },
];

const cards = [
  {
    id: 1,
    logo: visaLogo,
    name: 'Visa',
    code: 'xxxx-xxxx-4389',
  },
  {
    id: 2,
    logo: masterCardLogo,
    name: 'Master Dollar Card',
    code: 'xxxx-xxxx-2518',
  },
];

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
    icon: basicPlan,
  },
];

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

function PlansAndBillings() {
  const [selectedPlan, setSelectedPlans] = useState('');
  return (
    <Settingslayout>
      <h2 className={`${montserrat.className} text-Grey-G700 text-[2rem] font-semibold`}>Plans & Billings</h2>
      <div className={`${nunito.className} flex flex-col gap-10`}>
        {/* plans */}
        <div className={`flex flex-col gap-9`}>
          <div className={`space-y-2`}>
            <h3 className="text-Grey-G700 text-xl font-medium">Plans</h3>
            <div className="flex gap-1">
              <p className="text-Grey-G100 text-sm">
                Choose your preferred plan either monthly or go yearly to save more money.
              </p>
              <div className="text-primary-100 text-sm cursor-pointer">View plan details</div>
            </div>
          </div>
          <div className="space-y-5">
            {billings.map((plan) => (
              <div key={plan.id} className="flex items-center gap-5">
                <div
                  className={`h-4 w-4 rounded-full border ${
                    selectedPlan === plan.name ? 'border-primary-100' : 'border-Grey-G50'
                  } bg-white-N0 cursor-pointer flex items-center justify-center`}
                  onClick={() => setSelectedPlans(plan.name === selectedPlan ? '' : plan.name)}
                >
                  {plan.name === selectedPlan && <div className="w-2 h-2 bg-primary-100 rounded-full"></div>}
                </div>
                <div className="flex gap-1">
                  <p className="text-sm text-Grey-G600">{plan.name}</p>{' '}
                  {plan.discounts && <span className="text-sm text-Success-S300">{plan.discounts} off</span>}
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 items-center">
            {plans.map((plan) => (
              <div
                key={plan.id}
                style={{
                  boxShadow: '0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)',
                }}
                className={`${
                  plan.name === 'Basic'
                    ? 'rounded-l-lg border-y border-y-Grey-G40 border-l border-l-Grey-G40 bg-Grey-G10'
                    : ''
                } ${
                  plan.name === 'Enterprise'
                    ? 'rounded-r-lg border-y border-y-Grey-G40 border-r border-r-Grey-G40 bg-Grey-G10'
                    : ''
                } ${
                  plan.name === 'Premium' ? 'rounded-lg border border-Grey-G70 bg-Warnings-W50 pb-8' : 'pb-6'
                } px-4 pt-5`}
              >
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-5">
                    <Image src={plan.icon} alt="" height={plan.height} width={plan.width} />
                    <p className="text-Grey-G400 font-semibold text-base">{plan.name}</p>
                  </div>
                  <div
                    className={`border-b ${
                      plan.name === 'Premium' ? 'border-b-Grey-G50' : 'border-b-Grey-G30'
                    } pb-3 -mt-2`}
                  >
                    <div className="flex gap-2 items-center">
                      <h3 className={`${montserrat.className} text-[2rem] text-Grey-G300 font-medium`}>{plan.price}</h3>
                      <p className="text-Grey-G200 font-medium text-xs">per month</p>
                    </div>
                    {plan.popular && <p className="text-[#9E72ED] text-sm mt-3">Popular</p>}
                  </div>
                  <div className="space-y-5">
                    {plan.benefits.map((benefit) => (
                      <div key={benefit.id} className="flex items-center gap-2">
                        <FaRegCircleCheck size={16} color={plan.name === 'Premium' ? '#ED9E72' : '#3C3C3C'} />
                        <p className="text-Grey-G500 text-xs font-medium">{benefit.name}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2">
                    <Button
                      type="button"
                      title="plan-button"
                      styles={`w-full text-base font-bold border ${
                        plan.name === 'Premium' ? 'bg-primary-100 text-white-N0' : 'bg-white-N0'
                      } ${
                        plan.name === 'Basic'
                          ? 'border-secondary-100  text-secondary-100'
                          : 'border-primary-100 text-primary-100'
                      }`}
                    >
                      {plan.name === 'Basic' ? 'Current Plan' : 'Get Plan'}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* card */}
        <div className="mt-5 flex flex-col gap-9">
          <div className={`space-y-2`}>
            <h3 className="text-Grey-G700 text-xl font-medium">Card Information</h3>
            <p className="text-Grey-G100 text-sm">
              Add cards here to use them for automatically renewing your preferred plan.
            </p>
          </div>
          <div className="flex items-center justify-between border-b border-b-Grey-G40 pb-7">
            <p className="font-medium text-Grey-G600">Automatically renew plan with card</p>
            <Switch defaultValue />
          </div>
          <div className="-mt-2">
            <Input label="Card Number" placeholder="5790-2456-9013" inputHeight="h-[3.5rem]" />
          </div>
          <div className="grid grid-cols-3 gap-5 mt-5">
            <div className="col-span-2">
              <Input label="Expiration Date" type="date" inputHeight="h-[3.5rem]" />
            </div>
            <div>
              <Input label="CVV" placeholder="352" inputHeight="h-[3.5rem]" />
            </div>
          </div>
          <div className="flex justify-end mt-5">
            <Button type="button" title="password-button" styles="text-white-N0 font-bold text-sm py-3 px-[1.12rem]">
              Add Card
            </Button>
          </div>
        </div>
        <div className="mt-3 flex flex-col gap-9">
          <div className={`space-y-2`}>
            <h3 className="text-Grey-G700 text-xl font-medium">Cards</h3>
            <p className="text-Grey-G100 text-sm">
              Take full control of your cards; toggle the switch to set a default card for automatic plan renewal
            </p>
          </div>
          <div className="flex flex-col gap-8">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`flex items-center justify-between ${
                  card.id !== cards.length ? 'border-b border-b-Grey-G40 pb-8' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded border border-Grey-G30 flex items-center justify-center">
                    <Image src={card.logo} alt="" width={24} height={18} />
                  </div>
                  <div>
                    <p className="text-Grey-600 font-medium">{card.name}</p>
                    <p className="text-Grey-G400 text-[0.625rem]">{card.code}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <Switch defaultValue={false} />
                  <div className="text-sm text-primary-100 font-normal cursor-pointer">Remove Card</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-9">
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
      </div>
    </Settingslayout>
  );
}

export default PlansAndBillings;
