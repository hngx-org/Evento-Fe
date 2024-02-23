'use client';

import { UseInView } from '@/types';
import { useEffect, useState } from 'react';

const useInView: UseInView = (ref) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
      }
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
      return () => {
        observer.unobserve(currentRef);
      };
    }
  }, [ref, hasAnimated]);

  return hasAnimated;
};

export default useInView;
