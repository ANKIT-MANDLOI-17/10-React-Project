import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const ScrollToTopBottom = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
      <button
        onClick={scrollToTop}
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaArrowUp size={20} />
      </button>

      <button
        onClick={scrollToBottom}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
      >
        <FaArrowDown size={20} />
      </button>
    </div>
  );
};

export default ScrollToTopBottom;
