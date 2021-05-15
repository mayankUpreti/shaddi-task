import { useCallback, useRef } from 'react';

const LastElementHook = (isfetched, isValid, callback, observer) => {
  const lastorderElement = useCallback(
    node => {
      if (!isfetched) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          if (isValid === true) {
            callback();
          }
        }
      });
      if (node) observer.current.observe(node);
    },
    [isfetched, isValid],
  );

  return lastorderElement;
};

export default LastElementHook;
