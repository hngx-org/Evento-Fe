import React, { useEffect, useState } from 'react';

import AuthenticatedHeader from '@/components/components/authenticatedheader';
import Page1 from '@/components/EventCreation/Page1';
import Page2 from '@/components/EventCreation/Page2';
import Page3 from '@/components/EventCreation/Page3';

interface Props {}

const CreateEvents = () => {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const progressBar = document.getElementById('progress-bar') as HTMLInputElement;

    let progress = 0;

    if (progressBar) {
      if (page === 1) {
        progress = 33;
      } else if (page === 2) {
        progress = 80;
      } else if (page === 3) {
        progress = 100;
      }

      progressBar.value = progress.toString();
    }
  }, [page]);

  return (
    <div>
      <AuthenticatedHeader />
      <div className=" w-full content-center justify-center  lg:px-[350px] max-sm:px-5 md:px-5 py-10  flex  flex-col">
        <div className="progress-bar lg:px-[0px] md:px-0 max-sm:px-0 w-full flex flex-col">
          <div className="w-full flex justify-between content-center">
            <label htmlFor="progress-bar">Progress</label>
            <p>{page === 1 ? '33%' : page === 2 ? '80%' : '100%'}</p>
          </div>
          <input id="progress-bar" className=" accent-[#0d804a]" min={0} max={100} type="range" readOnly />
          {page === 1 && <Page1 onNext={nextPage} />}
          {page === 2 && <Page2 onNext={nextPage} />}
          {page === 3 && <Page3 />}
        </div>
      </div>
    </div>
  );
};

export default CreateEvents;
// function setIsModalLocationOpen(arg0: boolean) {
//   throw new Error('Function not implemented.');
// }
