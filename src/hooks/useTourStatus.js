import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useTourStatus = () => {
  const [visitCount, setVisitCount] = useLocalStorage('s5taVisitCount', 0);
  const [showTour, setShowTour] = useState(false);

  useEffect(() => {
    if (visitCount < 3) {
      setShowTour(true);
      setVisitCount(visitCount + 1);
    }
  }, []);

  return { showTour, setShowTour };
};

