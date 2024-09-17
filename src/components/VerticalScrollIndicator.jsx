import React, { useState, useEffect } from "react";

const VerticalScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    //   console.log("docHeight ",docHeight);
    //   console.log("scrollHeight ", document.documentElement.scrollHeight);
    //   console.log("clientHeight ", document.documentElement.clientHeight);

    if (docHeight > 0) {
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollPercentage(scrollPercent);
    } else {
      setScrollPercentage(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-gray-300 z-50">
      <div
        className="h-full bg-blue-500"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default VerticalScrollIndicator;
