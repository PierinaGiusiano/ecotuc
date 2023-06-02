import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Onboarding: React.FC = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };
  const navigate = useNavigate ()

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Step 1: Introduction</h2>
            <p>This is the first step of the onboarding process.</p>
            <button onClick={handleNext}>Next</button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 2: Configuration</h2>
            <p>Configure your settings here.</p>
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 3: Completion</h2>
            <p>Congratulations! You have completed the onboarding process.</p>
            <button onClick={handlePrev}>Previous</button>
            <button 
            onClick={() => {navigate('/home');}}
            >Finalizar</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Welcome to the Onboarding Process!</h1>
      {renderStep()}
    </div>
  );
};

export default Onboarding;
