import { useNavigate } from "react-router-dom";

export default function ScrollLink({ to, children, className, onClick }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    if (to.startsWith("/#")) {
      // Extract hash
      const hash = to.replace("/#", "");

      // Navigate to home with hash
      navigate("/#" + hash);

      // Scroll to element
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // Regular navigation
      navigate(to);
    }

    // Call any additional onClick handler
    if (onClick) {
      onClick();
    }
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
