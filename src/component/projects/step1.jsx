import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
export default function Step1({ currentStep, setCurrentStep }) {
  const onNext = () => {
    setCurrentStep(currentStep + 1);
  };
  return (
    <div className="px-[100px] max-h-full">
      <div className="flex flex-col md:flex-row justify-between gap-x-5">
        <div className="w-[38.946%]">
          <h2 className="text-sm text-[#71717A] font-normal mb-2.5">
            1/5 Job post
          </h2>
          <h1 className="text-2xl text-[#344054] font-bold mb-4">
            Let's start with a strong title.
          </h1>
          <p className="text-sm text-[#71717A] font-normal">
            This helps your job post stand out to the right candidates. It’s the
            first thing they’ll see, so make it count!
          </p>
        </div>
        <div className="w-[56%] bg-white border rounded-md p-5">
          <h2 className="text-md text-[#09090B] pb-4 font-medium ">
            Write a title for your job post
          </h2>
          <Textarea
            className="border border-[#E4E4E7] shadow-sm rounded-md w-full text-sm text-[#71717A] font-normal px-3 py-2.5 mb-[23px]"
            placeholder="Enter details"
            rows={4}
          />
          <h3 className="text-sm text-[#09090B] font-medium">Example titles</h3>
          <ul className="text-sm text-[#71717A] font-normal list-disc pl-4 mb-[23px]">
            <li>
              Build responsive WordPress site with booking/payment functionality
            </li>
            <li>
              Graphic designer needed to design ad creative for multiple
              campaigns
            </li>
            <li>Facebook ad specialist needed for product launchs</li>
          </ul>
          <div className="flex justify-end">
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
