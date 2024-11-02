import { KeyboardArrowUp } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const testimonialsSection = document.getElementById("testimonials");
      if (testimonialsSection) {
        const testimonialsTop = testimonialsSection.getBoundingClientRect().top;
        setIsVisible(testimonialsTop < window.innerHeight);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const scrollStep = window.scrollY / 70;
    const scrollAnimation = () => {
      if (window.scrollY > 0) {
        window.scrollBy(0, -scrollStep);
        window.requestAnimationFrame(scrollAnimation);
      }
    };
    window.requestAnimationFrame(scrollAnimation);
  };

  return (
    <>
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <KeyboardArrowUp />
        </button>
      )}
    </>
  );
};
