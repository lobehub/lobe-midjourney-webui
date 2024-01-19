import { useEffect } from 'react';

const updateView = () => {
  const vh = window.innerHeight;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

export const useUpdateView = () => {
  useEffect(() => {
    updateView();
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  }, []);
};
