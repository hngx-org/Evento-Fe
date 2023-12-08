// import { NextResponse, NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   // Get a cookie
//   request.cookies.get('myCookieName')?.value;

//   // Get all cookies
//   request.cookies.getAll();
//   const Cookies = request.cookies.getAll();
//   console.log(Cookies)

//   // To change a cookie, first create a response
//   const response = NextResponse.next();

//   // Set a cookie
//   response.cookies.set('myCookieName', 'some-value');

//   // Setting a cookie with additional options
//   response.cookies.set({
//     name: 'myCookieName',
//     value: 'some-value',
//     httpOnly: true,
//   });

//   // Delete a cookie
//   response.cookies.delete('myCookieName');

//   return response;

// }
'use client';

// import React, { useEffect } from 'react';
// import Cookies from 'js-cookie';

// const CookieExample: React.FC = () => {
//   useEffect(() => {
//     // Set a cookie when the component mounts
//     Cookies.set('myCookie', 'cookieValue', { expires: 7 }); // expires in 7 days
//   }, []);

//   const getCookieValue = () => {
//     // Get and log the cookie value
//     const cookieValue = Cookies.get('myCookie');
//     console.log('Cookie Value:', cookieValue);
//   };

//   const setCookieValue = () => {
//     // Set a new cookie value
//     Cookies.set('myCookie', 'newCookieValue', { expires: 7 }); // set a new value and update expiration
//     console.log('Cookie set successfully!');
//   };

//   return (
//     <div>
//       <h1>Cookie Example</h1>
//       <button onClick={getCookieValue}>Get Cookie Value</button>
//       <button onClick={setCookieValue}>Set Cookie Value</button>
//     </div>
//   );
// };

// export default CookieExample;

import React, { useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieExample: React.FC = () => {
  useEffect(() => {
    // Set a cookie when the component mounts
    Cookies.set('myCookie', 'cookieValue', { expires: 7 }); // expires in 7 days
  }, []);

  const getCookieValue = () => {
    // Get and log the cookie value
    const cookieValue = Cookies.get('myCookie');
    console.log('Cookie Value:', cookieValue);
  };

  const setCookieValue = () => {
    // Set a new cookie value
    Cookies.set('myCookie', 'newCookieValue', { expires: 7 }); // set a new value and update expiration
    console.log('Cookie set successfully!');
  };

  return (
    <div>
      <h1>Cookie Example</h1>
      <button onClick={getCookieValue}>Get Cookie Value</button>
      <button onClick={setCookieValue}>Set Cookie Value</button>
    </div>
  );
};

export default CookieExample;
