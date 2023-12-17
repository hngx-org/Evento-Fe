// import React, { useEffect, useRef, useState } from 'react';
// import { Input } from '../ui/NewInput';
// import { Clock, Location, SearchNormal, Setting4 } from 'iconsax-react';
// import { Nunito } from 'next/font/google';
// import Button from '../ui/NewButton';

// const nunito = Nunito({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-nunito',
// });

// const tags = ['This Weekend', 'This Month', 'Free', 'Relevance', 'Popularity'];
// const searches = ['Search 1', 'Search 2', 'Search 3'];

// function EventSearch() {
//   const [showSearch, setShowSearch] = useState<boolean>(false);
//   const [searchQuery, setSearchQuery] = useState<string>('');
//   const searchRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClose = (e: any) => {
//       if (!searchRef.current?.contains(e.target)) {
//         setShowSearch(false);
//       }
//     };

//     document.addEventListener('click', handleClose);

//     return () => {
//       document.removeEventListener('click', handleClose);
//     };
//   }, []);

//   const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault(); // Prevents the page from scrolling up
//     // Implement your search logic here using the searchQuery state
//     console.log('Performing search with query:', searchQuery);
//     setShowSearch(true);
//   };

//   return (
//     <div ref={searchRef}>
//       <div className="flex w-fit mx-auto pt-12">
//         <Input
//           type="email"
//           intent={'primary'}
//           placeHolder="Search Events"
//           leftIcon={<Setting4 color="#777" />}
//           className="bg-white-100 border-none"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <Button
//           size={'md'}
//           spinnerColor="#000"
//           className="bg-primary-100 -ml-4 whitespace-nowrap rounded-lg"
//           onClick={(e) => handleSearch(e)}
//         >
//           Search Event
//         </Button>
//       </div>
//       {showSearch && (
//         <div className=" w-11/12 max-w-[489px] absolute top-10 left-1/2 -translate-x-1/2 z-50">
//           <Input
//             type="text"
//             intent={'primary'}
//             placeHolder="Search"
//             rightIcon={<SearchNormal color="#4B4B4B" />}
//             className="bg-white-100 border-none w-full mb-4"
//           />

//           <div className={`${nunito.className} bg-white-N0 shadow-md p-6 text-Grey-G600 font-bold rounded-md`}>
//             <Input
//               type="text"
//               intent={'primary'}
//               placeHolder="Search Events"
//               rightIcon={<Location color="#0C0F14" />}
//               className="bg-white-N0 border font-medium text-Grey-G50 border-Grey-G90 w-full"
//               defaultValue="Lagos"
//             />
//             <div className="flex flex-wrap gap-y-4 gap-x-4 my-6">
//               {tags.map((item, index) => {
//                 return (
//                   <span key={index} className="shrink-0 block py-2 px-4 rounded-full bg-Grey-G20 text-sm">
//                     {item}
//                   </span>
//                 );
//               })}
//             </div>
//             <h4 className="mb-4">Recent and popular searches</h4>

//             <ul>
//               {searches.map((item, index) => {
//                 return (
//                   <li key={index} className="hover:bg-black-main/10 flex items-center gap-3 py-2">
//                     <Clock color="#3C3C3C" size={16} /> {item}
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default EventSearch;
import React, { useEffect, useRef, useState } from 'react';
import { Input } from '../ui/NewInput';
import { Clock, SearchNormal, Setting4 } from 'iconsax-react';
import { Nunito } from 'next/font/google';
import Button from '../ui/NewButton';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

const searches = ['Search 1', 'Search 2', 'Search 3', 'Search 4', 'Search 5']; // Add more suggestions if needed

function EventSearch() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevents the page from scrolling up
    // Implement your search logic here using the searchQuery state
    console.log('Performing search with query:', searchQuery);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
  };

  return (
    <div ref={searchRef} className="relative">
      <div className="flex w-fit mx-auto pt-12 relative">
        <Input
          type="email"
          intent={'primary'}
          placeHolder="Search Events"
          leftIcon={<Setting4 color="#777" />}
          className="bg-white-100 border-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          size={'md'}
          spinnerColor="#000"
          className="bg-primary-100 -ml-4 whitespace-nowrap rounded-lg"
          onClick={(e) => handleSearch(e)}
        >
          Search Event
        </Button>
      </div>
      {searchQuery && (
        <div className="absolute w-full mt-2 bg-white-100 border border-Grey-G90 rounded-md shadow-md">
          <ul>
            {searches
              .filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
              .slice(0, 5)
              .map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSuggestionClick(item)}
                >
                  <Clock color="#3C3C3C" size={16} /> {item}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default EventSearch;
