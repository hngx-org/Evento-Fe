// import useAuthMutation from './useAuthMutation';
// import { revalidateAuth } from '@/http/authapi';
// import { useAuth } from '@/context/AuthContext';
// import { useEffect } from 'react';
// import isAuthenticated from '@/helpers/isAuthenticated';

// const useAuthRevalidate = () => {
//   const { auth, handleAuth } = useAuth();

//   let token = '';

//   if (typeof window !== 'undefined') {
//     token = localStorage.getItem('zpt') as string;
//   }

//   const { mutate: revalidateUser } = useAuthMutation(revalidateAuth, {
//     onSuccess: (response) => {
//       if (response.status === 200) {
//         handleAuth(response.data);

//         return;
//       }
//     },
//     onError: ({ response }: any) => {
//       if (response.data.message) {
//         if (typeof window !== 'undefined') {
//           localStorage.removeItem('zpt');
//         }
//         console.log(response.data.message, 'from the useAuthRevalidate hook');
//         return;
//       }
//     },
//   });

//   useEffect(() => {
//     // only runs when user is not in context meaning there's been a refresh of the browser or change of tab
//     if (!auth && isAuthenticated(token)) {
//       revalidateUser({ token });
//     }
//   }, [auth, token, revalidateUser]);

//   return { revalidateUser, token };
// };

// export default useAuthRevalidate;

export const storeTrafficFrames = ['12months', '3months', '30days', '7days', '24hrs'];
export const salesReportFrames = ['12m', '3m', '30d', '7d', '24h'];

export const metricsCardData = [
  {
    title: "Today's revenue",
    percentage: +10,
    isCurrency: true,
    value: 1180,
  },
  {
    title: "Today's orders",
    percentage: +12,
    isCurrency: false,
    value: 14,
  },
  {
    title: 'Average order value',
    percentage: -2,
    isCurrency: true,
    value: 91.42,
  },
];

export const metricsChartData = [
  {
    title: 'Sales report',
    src: 'sales-report',
    isBarChart: false,
  },
  {
    title: 'Store traffic',
    src: 'store-traffic',
    isBarChart: true,
  },
];

export const metricsChartTimeline = [
  {
    timespan: '12 months',
  },
  {
    timespan: '3 months',
  },
  {
    timespan: '30 days',
  },
  {
    timespan: '7 days',
  },
  {
    timespan: '24 hours',
  },
];

function generateNullData(timeframe: any[]) {
  const nullData = timeframe.map((frame) => ({ frame, sales: 0 }));
  const nullTraffic = timeframe.map((timeframe) => ({ timeframe, traffic: 0 }));
  return { nullSalesData: nullData, nullTrafficData: nullTraffic };
}

export const twelveMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const threeMonths = ['Jan', 'Feb', 'Mar'];
export const thirtyDays = Array.from({ length: 30 }, (_, i) => {
  const day = i + 1;
  if (day === 11 || day === 12 || day === 13) {
    return `${day}th`;
  }
  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
});
export const sevenDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const twentyFourHours = Array.from({ length: 24 }, (_, i) => {
  if (i === 0) {
    return '12am';
  } else if (i < 12) {
    return `${i}am`;
  } else if (i === 12) {
    return '12pm';
  } else {
    return `${i - 12}pm`;
  }
});

export const { nullSalesData: nullSalesDataTwelveMonths, nullTrafficData: nullTrafficDataTwelveMonths } =
  generateNullData(twelveMonths);
export const { nullSalesData: nullSalesDataThreeMonths, nullTrafficData: nullTrafficDataThreeMonths } =
  generateNullData(threeMonths);
export const { nullSalesData: nullSalesData30Days, nullTrafficData: nullTrafficData30Days } =
  generateNullData(thirtyDays);
export const { nullSalesData: nullSalesData7Days, nullTrafficData: nullTrafficData7Days } = generateNullData(sevenDays);
export const { nullSalesData: nullSalesData24Hours, nullTrafficData: nullTrafficData24Hours } =
  generateNullData(twentyFourHours);

export const activityData = [
  {
    name: 'Dami Wikinson',
    item: 'Webflow 101',
  },
  {
    name: 'Aliah Lane',
    item: 'Figma Course',
  },
  {
    name: 'Anita Cruz',
    item: 'Website template',
  },
  {
    name: 'Loki Bright',
    item: 'Webflow 101',
  },
  {
    name: 'Mark Essien',
    item: 'SEO Masterclass',
  },
  {
    name: 'Lana Steiner',
    item: 'Website Template',
  },
  {
    name: 'Ella Lang',
    item: 'SEO Masterclass',
  },
  {
    name: 'Rejoice Oyebode',
    item: 'SEO Masterclass',
  },
  {
    name: 'Joshua Wilson',
    item: 'Webflow 101',
  },
  {
    name: 'Aliah Lane',
    item: 'Webflow 101',
  },
  {
    name: 'Joshua Edo',
    item: 'SEO Masterclass',
  },
  {
    name: 'Anita Kruz',
    item: 'Webflow 101',
  },
  {
    name: 'Aliah Lane',
    item: 'Website Template',
  },
  {
    name: 'Loki Bright',
    item: 'Webflow 101',
  },
  {
    name: 'Jessica Smith',
    item: 'Figma Course',
  },
  {
    name: 'Sophia Johnson',
    item: 'SEO Masterclass',
  },
  {
    name: 'David Brown',
    item: 'Website Template',
  },
  {
    name: 'Grace Miller',
    item: 'Figma Course',
  },
  {
    name: 'Michael Thomas',
    item: 'Webflow 101',
  },
  {
    name: 'Isabella White',
    item: 'Webflow 101',
  },
  {
    name: 'Oliver Lewis',
    item: 'SEO Masterclass',
  },
  {
    name: 'Ava Taylor',
    item: 'Figma Course',
  },
  {
    name: 'William Martinez',
    item: 'Website Template',
  },
  {
    name: 'Sophie Hall',
    item: 'Webflow 101',
  },
  {
    name: 'Benjamin Clark',
    item: 'Website Template',
  },
  {
    name: 'Nora Davis',
    item: 'SEO Masterclass',
  },
  {
    name: 'Ethan Turner',
    item: 'Webflow 101',
  },
  {
    name: 'Olivia Harris',
    item: 'Figma Course',
  },
];

// fix this later
