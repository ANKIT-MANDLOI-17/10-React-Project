import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import data from "./data";

const Accordion = () => {
  const [activeIndices, setActiveIndices] = useState([]); 
  const [multiOpen, setMultiOpen] = useState(false);

  const toggleAccordion = (index) => {
    if (multiOpen) {
      if (activeIndices.includes(index)) {
        setActiveIndices(activeIndices.filter((i) => i !== index));
      } else {
        setActiveIndices([...activeIndices, index]);
      }
    } else {
      setActiveIndices(activeIndices.includes(index) ? [] : [index]);
    }
  };

  const handleMultiOpenToggle = () => {
    setMultiOpen(!multiOpen);
    setActiveIndices([]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4  mb-1 ">
      <h1 className="text-center font-bold mb-4">Accordion Component</h1>

      {/* Toggle for multi-selection */}
      <div className="flex justify-center mb-4 ">
        <button
          onClick={handleMultiOpenToggle}
          className={`px-4 py-2 text-white font-medium rounded-md ${
            multiOpen ? "bg-green-600" : "bg-blue-600"
          }`}
        >
          {multiOpen ? "Disable Multi Selection" : "Enable Multi Selection"}
        </button>
      </div>

      {/* Accordion Items */}
      {data.map((item, index) => (
        <div key={item.id} className="mb-3">
          <div
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center bg-yellow-800 text-white px-4 py-3 cursor-pointer rounded-md"
          >
            <h2 className="font-medium">{item.question}</h2>
            <span>
              {activeIndices.includes(index) ? (
                <FaChevronUp className="text-lg" />
              ) : (
                <FaChevronDown className="text-lg" />
              )}
            </span>
          </div>

          {activeIndices.includes(index) && (
            <div className="bg-yellow-200 text-black px-4 py-3 rounded-md">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
