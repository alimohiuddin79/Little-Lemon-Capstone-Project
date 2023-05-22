import { useState } from "react";

const Stepper = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"]; // Array of steps

  const handleNext = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  };

  return (
    <div>
      <div>{steps[stepIndex]}</div>
      <div>
        {stepIndex > 0 && <button onClick={handlePrevious}>Previous</button>}
        {stepIndex < steps.length - 1 && (
          <button onClick={handleNext}>Next</button>
        )}
      </div>
    </div>
  );
};

export default Stepper;
