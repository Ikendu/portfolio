import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    // Extract hash from location
    const hash = location.hash;

    if (hash) {
      // Remove the # character
      const elementId = hash.replace("#", "");

      // Wait a small moment for DOM to settle, then scroll
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // Scroll to top if no hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
};
