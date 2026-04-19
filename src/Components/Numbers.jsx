import { useState, useEffect, useRef } from "react";
import numImage from "../assets/numbers.png";

const numbers = [
  {
    id: 1,
    image: numImage,
    title: "Projects Delivered",
    target: 150,
  },
  {
    id: 2,
    image: numImage,
    title: "Happy Clients",
    target: 250,
  },
  {
    id: 3,
    image: numImage,
    title: "Client Retention",
    target: 95,
  },

  {
    id: 4,
    image: numImage,
    title: "Tech Experts",
    target: 50,
  },
];

function Counter({ target }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let currentCount = 0;
    const increment = target / 50;
    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(currentCount));
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isVisible, target]);

  return <span ref={ref}>{count}+</span>;
}

function Numbers() {
  return (
    <div className="row g-4">
      {numbers.map((number, index) => (
        <div key={number.id} className="col-lg-3 col-md-6 col-sm-6 col-6">
          <div
            className="number-card text-center"
            data-aos="fade-up"
            data-aos-delay={index * 90}>
            <img src={number.image} alt={number.title} />
            <h3 className="text-white text-capitalize mb-3">{number.title}</h3>
            <p className="text-capitalize">
              <Counter target={number.target} />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Numbers;
