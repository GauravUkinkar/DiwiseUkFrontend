import React, { useState } from 'react';
import './FAQAccordion.css'
import {FiArrowDown} from 'react-icons/fi'

const FAQAccordion = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-accordion" >
      {faqData.map((faq, index) => (
        <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
          <div 
            className="faq-question"
            onClick={() => handleClick(index)}
          >
            {faq.question}
            <div className={`arrow ${activeIndex === index ? "arrow-up" : "arrow-down"}`}> <FiArrowDown/> </div>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
