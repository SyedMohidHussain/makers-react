import FileUpload from "@/components/fileUpload";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function Step4({ currentStep, setCurrentStep }) {
  const onNext = () => {
    setCurrentStep(currentStep + 1);
  };
  const onBack = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <div className="px-[100px]">
      <div className="flex justify-between gap-x-5">
        <div className="w-[38.946%]">
          <h2 className="text-sm text-[#71717A] font-normal mb-2.5">
            4/5 Job post
          </h2>
          <h1 className="text-2xl text-[#344054] font-bold mb-4">
            Images will help
          </h1>
          <p className="text-sm text-[#71717A] font-normal">
            This helps your job post stand out to the right candidates. It’s the
            first thing they’ll see, so make it count!
          </p>
        </div>
        <div className="w-[56%] bg-white border rounded-md p-5">
          <h2 className="text-md text-[#09090B] pb-4 font-medium ">
            Upload Images
          </h2>
          <FileUpload className="px-[14px] py-[25px]" />
          <div className="flex justify-end gap-x-3 mt-[23px]">
            <Button
              variant="outline"
              className="text-sm text-[#1975FF] border-[#1975FF] font-medium h-9 rounded-md shadow-sm"
              onClick={onBack}
            >
              Back
            </Button>
            <Button
              variant="primary"
              className="text-sm font-medium h-9 rounded-md shadow-sm"
              onClick={onNext}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
