import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Enable browser's scroll restoration for back/forward navigation
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'auto';
    }

    // Scroll to top on browser reload
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    // Only scroll to top for PUSH navigation (new page clicks)
    // Allow browser to handle POP navigation (back/forward buttons)
    if (navigationType === 'PUSH') {
      // Smooth scroll to top for forward navigation
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
    // For POP navigation (back/forward), let browser handle scroll restoration
  }, [pathname, navigationType]);

  return null;
}
