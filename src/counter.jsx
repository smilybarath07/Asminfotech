import React, { useEffect, useRef, useState } from 'react';
import './counter.css';

export default function Counter({ target, label, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCount();
          if (observerRef.current) {
            observerRef.current.disconnect(); // only animate once
          }
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
      observerRef.current = observer;
    }

    return () => observer.disconnect();
  }, []);

  const startCount = () => {
    let start = 0;
    const increment = target / (duration / 20); // update every 20ms

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 20);
  };

  return (
    <div className="counter-box" ref={ref}>
      <h2>{count}+</h2>
      <p>{label}</p>
    </div>
  );
}
