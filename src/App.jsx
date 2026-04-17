import { useEffect } from "react";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Services from "./Components/pages/Services";
import Contact from "./Components/pages/Contact";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

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
    if (window.AOS && typeof window.AOS.refreshHard === "function") {
      window.AOS.refreshHard();
    } else if (window.AOS && typeof window.AOS.refresh === "function") {
      window.AOS.refresh();
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
