// src/components/ScrollToTop.jsx
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Matikan auto scroll restoration browser (jika didukung)
    if ("scrollRestoration" in window.history) {
      try {
        window.history.scrollRestoration = "manual";
      } catch (e) {
        // some browsers/environments mungkin throw, ignore
      }
    }

    // Scroll ke top sebelum paint
    window.scrollTo(0, 0);

    // juga lakukan sekali lagi setelah event loop (mengatasi layout shift kecil)
    const id = setTimeout(() => window.scrollTo(0, 0), 10);

    return () => clearTimeout(id);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
