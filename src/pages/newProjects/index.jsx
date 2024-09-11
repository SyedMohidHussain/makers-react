import React from "react";
import { useState } from "react";
import Step1 from "component/projects/step1";
import Step2 from "component/projects/step2";
import Step3 from "component/projects/step3";
import Step4 from "component/projects/step4";
import Step5 from "component/projects/step5";
import Step6 from "component/projects/step6";
import Step7 from "component/projects/step7";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function NewProjects() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userType, setUserType] = useState(null);
  const [showAlert, setShowAlert] = useState(true);

  // Handle user type selection
  const handleUserTypeSelect = (type) => {
    setUserType(type);
    setShowAlert(false);
  };

  return (
    <div className="px-[32px] py-[65px] bg-[#F6F6F6]">
      <Dialog open={showAlert}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select User Type</DialogTitle>
          </DialogHeader>
          <div className="flex gap-4">
            <Button onClick={() => handleUserTypeSelect("Free")}>Free</Button>
            <Button onClick={() => handleUserTypeSelect("Paid")}>Paid</Button>
            <Button onClick={() => handleUserTypeSelect("Expired")}>
              Expired
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      {/* Conditionally render each step based on the currentStep value */}
      {currentStep === 0 && (
        <Step1 currentStep={currentStep} setCurrentStep={setCurrentStep} />
      )}
      {currentStep === 1 && (
        <Step2 currentStep={currentStep} setCurrentStep={setCurrentStep} />
      )}
      {currentStep === 2 && (
        <Step3 currentStep={currentStep} setCurrentStep={setCurrentStep} />
      )}
      {currentStep === 3 && (
        <Step4 currentStep={currentStep} setCurrentStep={setCurrentStep} />
      )}
      {currentStep === 4 && (
        <Step5 currentStep={currentStep} setCurrentStep={setCurrentStep} />
      )}
      {currentStep === 5 && (
        <Step6 currentStep={currentStep} setCurrentStep={setCurrentStep} />
      )}
      {currentStep === 6 && (
        <Step7
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          userType={userType}
        />
      )}
    </div>
  );
}
