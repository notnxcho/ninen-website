import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 820);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 820);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
}

export const useScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Triggered on change of route
};

export const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
