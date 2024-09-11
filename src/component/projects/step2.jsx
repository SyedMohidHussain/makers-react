import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function Step2({ currentStep, setCurrentStep }) {
  const [selectedInd, setSelectedInd] = useState("");
  const [selectedCat, setSelectedCat] = useState("");
  const [selectedStg, setSelectedStg] = useState("");
  const handleSelectInd = (value) => {
    setSelectedInd(value); // Update state with selected value
  };
  const handleSelectCat = (value) => {
    setSelectedCat(value); // Update state with selected value
  };
  const handleSelectStg = (value) => {
    setSelectedStg(value); // Update state with selected value
  };
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
            2/5 Job post
          </h2>
          <h1 className="text-2xl text-[#344054] font-bold mb-4">
            Add More Details
          </h1>
          <p className="text-sm text-[#71717A] font-normal">
            This helps your job post stand out to the right candidates. It’s the
            first thing they’ll see, so make it count!
          </p>
        </div>
        <div className="w-[56%] flex flex-col bg-white border rounded-md p-5 gap-y-[23px]">
          <div className="flex flex-col gap-y-1">
            <Label className="text-md text-[#09090B] font-normal">
              Industry <span className="ml-1 text-red-600">*</span>
            </Label>
            <Select className="w-full" onValueChange={handleSelectInd}>
              <SelectTrigger
                className={
                  selectedInd === "" ? "text-gray-400 " : ""
                }
              >
                <SelectValue placeholder="Select Industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Big</SelectItem>
                <SelectItem value="dark">Small</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-y-1">
            <Label className="text-md text-[#09090B] font-normal">
              Category
            </Label>
            <Select className="w-full" onValueChange={handleSelectCat}>
              <SelectTrigger
                className={
                  selectedCat === "" ? "text-gray-400" : ""
                }
              >
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Big</SelectItem>
                <SelectItem value="dark">Small</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-y-1">
            <Label className="text-md text-[#09090B] font-normal">
              Stage <span className="ml-1 text-red-600">*</span>
            </Label>
            <Select className="w-full" onValueChange={handleSelectStg}>
              <SelectTrigger
                className={
                  selectedStg === "" ? "text-gray-400" : ""
                }
              >
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Big</SelectItem>
                <SelectItem value="dark">Small</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end gap-x-3">
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
