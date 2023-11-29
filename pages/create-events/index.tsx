import React, { PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';

import AuthenticatedHeader from '@/components/components/authenticatedheader';
import Page1 from '@/components/EventCreation/Page1';
import Page2 from '@/components/EventCreation/Page2';
import Page3 from '@/components/EventCreation/Page3';

interface Props {}

interface CreateEventsProps extends PropsWithChildren<any> {
  onNext: () => void;
  onPrevious: () => void;
}

const CreateEvents: React.FC<CreateEventsProps> = (props) => {
  const [page, setPage] = useState(1);
  const [completedSteps, setCompletedSteps] = useState(0);

  const progressBarRef = useRef<HTMLInputElement | null>(null);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
    updateProgressBar();
  };

  const prevPage = () => {
    setPage((prevPage) => prevPage - 1);
    updateProgressBar();
  };

  const updateProgressBar = useCallback(() => {
    const progressBar = document.getElementById('progress-bar') as HTMLInputElement;

    let progress = 0;

    if (progressBar) {
      if (page === 1) {
        progress = 0;
      } else if (page === 2) {
        progress = 80;
      } else if (page === 3) {
        progress = 100;
      }

      progressBar.value = progress.toString();
    }
  }, [page]);

  useEffect(() => {
    updateProgressBar();
  }, [page, updateProgressBar]);

  return (
    <div>
      <AuthenticatedHeader />
      <div className=" w-full content-center justify-center  lg:px-[350px] max-sm:px-5 md:px-5 py-10  flex  flex-col">
        <div className="progress-bar lg:px-[0px] md:px-0 max-sm:px-0 w-full flex flex-col">
          <div className="w-full flex justify-between content-center">
            <label htmlFor="progress-bar">Progress</label>
            {/* <p>{page === 1 ? '0%' : page === 2 ? '80%' : '100%'}</p> */}
          </div>
          <input
            ref={progressBarRef}
            id="progress-bar"
            className=" accent-[#0d804a]"
            min={0}
            max={100}
            type="range"
            readOnly
          />
          {page === 1 && <Page1 onNext={nextPage} />}
          {page === 2 && <Page2 onNext={nextPage} onPrevious={prevPage} />}
          {page === 3 && <Page3 onNext={nextPage} onPrevious={prevPage} />}
        </div>
      </div>
    </div>
  );
};

export default CreateEvents;
