import { useEffect, useState } from "react";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Services from "./Components/pages/Services";
import Contact from "./Components/pages/Contact";
import Preloader from "./Components/Preloader";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minLoaderDuration = 1400;
    const maxLoaderDuration = 4200;
    const start = Date.now();
    let minTimer;

    const finishLoading = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, minLoaderDuration - elapsed);
      minTimer = window.setTimeout(() => setIsLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    const safetyTimer = window.setTimeout(() => setIsLoading(false), maxLoaderDuration);

    return () => {
      window.removeEventListener("load", finishLoading);
      window.clearTimeout(minTimer);
      window.clearTimeout(safetyTimer);
    };
  }, []);

  useEffect(() => {
    // AOS is loaded via CDN in index.html
    if (window.AOS && typeof window.AOS.init === "function") {
      window.AOS.init({
        duration: 700,
        easing: "ease-out-cubic",
        offset: 80,
        once: true,
        mirror: false,
      });
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (window.AOS && typeof window.AOS.refreshHard === "function") {
      window.AOS.refreshHard();
    } else if (window.AOS && typeof window.AOS.refresh === "function") {
      window.AOS.refresh();
    }
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </>
  );
}

export default App;
