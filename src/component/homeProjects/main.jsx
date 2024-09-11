import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
export default function Project({ setShowAll, setShowOne }) {
  const [currentStep, setCurrentStep] = useState(1);
  useEffect(() => {
    if (currentStep == 0) {
      setShowAll(true);
      setShowOne(false);
    }
  }, [currentStep]);

  return (
    <div className="py-[32px] bg-[#F6F6F6]">
      {currentStep === 1 && (
        <Step1 currentStep={currentStep} setCurrentStep={setCurrentStep} />
      )}
      {currentStep === 2 && (
        <Step2 currentStep={currentStep} setCurrentStep={setCurrentStep} />
      )}
    </div>
  );
}
