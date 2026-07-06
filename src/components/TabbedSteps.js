import React, { useState } from "react";
import "./steps.css";
import { FaArrowRight } from "react-icons/fa";

const TabbedSteps = ({ steps, onSelectStep }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index) => {
    setActiveStep(index);
    onSelectStep(index); // Notify the parent component about the selected step
  };

  return (
    <div className="tabbed-steps">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`tab ${activeStep === index ? "active" : ""}`}
          onClick={() => handleStepClick(index)}
        >
          {/* Render the image here */}
          <div className="step-content">
            <img className="step-img" src={step.img} alt={step.title} />
            <div className="step-title">
              {step.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabbedSteps;
