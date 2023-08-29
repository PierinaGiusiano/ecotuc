import React, { useState } from 'react';
import Joyride, { Step } from 'react-joyride'; // Asegúrate de importar Step desde react-joyride

const tourSteps: Step[] = [
  {
    target: 'body',
    placement: 'center',
    title: 'Walkthrough',
    content:
      'Seems like it’s your first time here. Follow this quick walkthrough to know how to get around.',
    disableBeacon: true,
  },
  {
    target: '.menu',
    content: 'Click here to open the sidebar.',
    disableBeacon: true,
  },
  {
    target: '.title',
    content: 'This is the main title.',
    disableBeacon: true,
  },
  {
    target: '.text',
    content: 'This is the main text for the page.',
    disableBeacon: true,
  },
  {
    target: '.cta',
    content: 'This is the Call to Action button.',
    disableBeacon: true,
  },
];

const Walkthrough = () => {
  const [steps] = useState(tourSteps);

  return (
    <>
      <Joyride steps={steps} continuous showSkipButton={true} />
      <div className="container">
        <div className="menu">
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, consectetur?</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid praesentium totam at reprehenderit corporis?</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, hic? Ad, ipsum modi. Molestiae fuga illum dicta facere quia alias esse totam minima, dolorem quam, voluptatibus tenetur adipisci, distinctio sequi!</span>
        </div>
        <h1 className="title">webDevTips</h1>
        <p className="text">
          Want to learn more about Web Development? Follow @webdevtips on
          Instagram to get awesome tips!
        </p>
        <button className="cta">Follow</button>
      </div>
    </>
  );
};

export default Walkthrough;




/*
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
*/