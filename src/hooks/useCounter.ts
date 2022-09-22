import {useEffect, useRef, useState} from 'react';

export const useCounter = (end: number) => {
  const [counter, setCounter] = useState<null | number>(null);
  const counterRef = useRef(0);

  const updateCounterState = () => {
    if (counterRef.current < end) {
      const result = Math.ceil(counterRef.current + 2);
      if (result >= end) {
        return setCounter(end);
      }
      setCounter(result);
      counterRef.current = result;
    }
    setTimeout(updateCounterState, 50);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      updateCounterState();
    }

    return () => {
      isMounted = false;
    };
  }, [end]);

  return counter;
};
