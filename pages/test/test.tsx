import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const CookieExample: React.FC = () => {
  const [allCookies, setAllCookies] = useState<string[]>([]);

  useEffect(() => {
    Cookies.set('myCookie', 'cookieValue', { expires: 7 });

    const cookiesArray = Object.keys(Cookies.get());
    setAllCookies(cookiesArray);
  }, []);

  const getCookieValue = (cookieName: string) => {
    const cookieValue = Cookies.get(cookieName);
    console.log(`${cookieName} Value:`, cookieValue);
  };

  const setCookieValue = () => {
    Cookies.set('myCookie', 'newCookieValue', { expires: 7 });
    console.log('Cookie set successfully!');

    const cookiesArray = Object.keys(Cookies.get());
    setAllCookies(cookiesArray);
  };

  const getAllCookies = () => {
    console.log('All Cookies:', Cookies.get());
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cookie Example</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={() => getCookieValue('myCookie')}
      >
        Get Cookie Value
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={setCookieValue}
      >
        Set Cookie Value
      </button>
      <button
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={getAllCookies}
      >
        Get All Cookies
      </button>

      <div>
        <h2 className="text-lg font-semibold mb-2">All Cookies:</h2>
        {allCookies.map((cookieName) => (
          <div key={cookieName} className="mb-2">
            <p className="text-sm">Name: {cookieName}</p>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded"
              onClick={() => getCookieValue(cookieName)}
            >
              Get Value
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CookieExample;
