import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/fileUpload";
export default function Step2({ currentStep, setCurrentStep }) {
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState("");
  const [selectedInd, setSelectedInd] = useState("");
  const [selectedCat, setSelectedCat] = useState("");
  const [selectedStg, setSelectedStg] = useState("");
  const [selectedNeed, setSelectedNeed] = useState("");
  const [selectedLoc, setSelectedLoc] = useState("");
  const [selectedBud, setSelectedBud] = useState("");

  const handleSelectInd = (value) => {
    setSelectedInd(value); // Update state with selected value
  };
  const handleSelectCat = (value) => {
    setSelectedCat(value); // Update state with selected value
  };
  const handleSelectStg = (value) => {
    setSelectedStg(value); // Update state with selected value
  };
  const handleSelectNeed = (value) => {
    setSelectedNeed(value); // Update state with selected value
  };
  const handleSelectLoc = (value) => {
    setSelectedLoc(value); // Update state with selected value
  };
  const handleSelectBud = (value) => {
    setSelectedBud(value); // Update state with selected value
  };

  const onBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const Toast = () => {
    return (
      <div className="flex flex-col px-4 py-3 gap-2 bg-[#F4FFF7] border border-[#E4E4E7] rounded-lg">
        <div className="flex gap-2 items-center">
          <img
            src="../../../assets/checkGreen.png"
            alt="Green Check"
            className="w-5 h-5 rounded-sm"
          />
          <span className="text-md font-medium text-[#0F772C]">
            {toastText}
          </span>
        </div>
        <p className="text-sm font-normal text-[#0F772C]">
          You have successfully updated this project.
        </p>
      </div>
    );
  };
  const handleUnpublish = () => {
    setShowToast(true);
    setToastText("Project Unpublished");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleUpdate = () => {
    setShowToast(true);
    setToastText("Project Updated");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex justify-center">
      <div className="w-[815px] bg-white border rounded-lg p-5 space-y-5">
        {showToast && <Toast />}
        <div className="space-y-1.5">
          <Label className="text-[#09090B]">
            Write a title for your job post
          </Label>
          <Input
            className="border border-[#E4E4E7] shadow-sm rounded-md w-full text-sm text-[#71717A] font-normal px-3 py-2.5 mb-[23px]"
            placeholder="Enter details"
            value={"Kneepad sleeves"}
            type="text"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-[#09090B]">
            Industry <span className="ml-1 text-red-600">*</span>
          </Label>
          <Select
            className="w-full"
            defaultValue="Furniture&HomeDecor"
            onValueChange={handleSelectInd}
          >
            <SelectTrigger
              className={selectedInd === "" ? "text-gray-400 " : ""}
            >
              <SelectValue placeholder="Select Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Furniture&HomeDecor">
                Furniture & Home Decor
              </SelectItem>
              <SelectItem value="dark">Small</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label className="text-[#09090B]">
            Category<span className="ml-1 text-red-600">*</span>
          </Label>
          <Select
            className="w-full"
            defaultValue="Intermediate"
            onValueChange={handleSelectCat}
          >
            <SelectTrigger
              className={selectedCat === "" ? "text-gray-400" : ""}
            >
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="dark">Small</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label className="text-[#09090B]">
            Stage <span className="ml-1 text-red-600">*</span>
          </Label>
          <Select
            className="w-full"
            defaultValue="Production"
            onValueChange={handleSelectStg}
          >
            <SelectTrigger
              className={selectedStg === "" ? "text-gray-400" : ""}
            >
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Production">Production</SelectItem>
              <SelectItem value="dark">Small</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label className="text-[#09090B]">
            Product Description <span className="ml-1 text-red-600">*</span>
          </Label>
          <Textarea
            className="border border-[#E4E4E7] shadow-sm rounded-md w-full h-full text-sm text-[#71717A] font-normal px-3 py-2.5 mb-[23px]"
            value={`Slip-on kneepad sleeves (similar to volleyball kneepads) with pockets at the knees for removable, low-profile kneepads. The sleeve is recycled poly-spandex and the knees are abrasion resistant fabric.
            
            The design and patterns have already been created with samples in-hand and fabrics selected. I need a factory for the production. The kneepad inserts have already been sourced and are on hand. I will have a tech pack available by 7/24`}
            placeholder="Enter details"
            rows={6}
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-[#09090B]">
            Upload Images <span className="ml-1 text-red-600">*</span>
          </Label>
          <FileUpload className="px-[12px] py-[10px]" />
        </div>
        <div className="flex gap-4 w-auto overflow-hidden py-3">
          <div className="relative">
            <img
              src="../../../assets/product4.png"
              alt="Product view"
              className="w-16 h-16 rounded-sm"
            />
            <span className="absolute top-[-10px] right-[-10px] bg-white rounded-full flex items-center justify-center cursor-pointer">
              <img
                src="../../../assets/cross.png"
                alt="Product view"
                className="w-5 h-5 "
              />
            </span>
          </div>
          <div className="relative">
            <img
              src="../../../assets/product5.png"
              alt="Product view"
              className="w-16 h-16 rounded-sm"
            />
            <span className="absolute top-[-10px] right-[-10px] bg-white rounded-full flex items-center justify-center cursor-pointer">
              <img
                src="../../../assets/cross.png"
                alt="Product view"
                className="w-5 h-5 "
              />
            </span>
          </div>
          <div className="relative">
            <img
              src="../../../assets/product4.png"
              alt="Product view"
              className="w-16 h-16 rounded-sm"
            />
            <span className="absolute top-[-10px] right-[-10px] bg-white rounded-full flex items-center justify-center cursor-pointer">
              <img
                src="../../../assets/cross.png"
                alt="Product view"
                className="w-5 h-5 "
              />
            </span>
          </div>
          <div className="relative">
            <img
              src="../../../assets/product4.png"
              alt="Product view"
              className="w-16 h-16 rounded-sm"
            />
            <span className="absolute top-[-10px] right-[-10px] bg-white rounded-full flex items-center justify-center cursor-pointer">
              <img
                src="../../../assets/cross.png"
                alt="Product view"
                className="w-5 h-5 "
              />
            </span>
          </div>
        </div>

        <div className="space-y-1.5">
          <Label className="text-[#09090B]">
            Help me with <span className="ml-1 text-red-600">*</span>
          </Label>
          <Select
            className="w-full"
            defaultValue="Production"
            onValueChange={handleSelectNeed}
          >
            <SelectTrigger
              className={selectedNeed === "" ? "text-gray-400 " : ""}
            >
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Production">Production</SelectItem>
              <SelectItem value="dark">Small</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label className="text-[#09090B]">
            Preferred Location<span className="ml-1 text-red-600">*</span>
          </Label>
          <Select
            className="w-full"
            defaultValue="Any"
            onValueChange={handleSelectLoc}
          >
            <SelectTrigger
              className={selectedLoc === "" ? "text-gray-400 " : ""}
            >
              <SelectValue placeholder="Select Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Any">Any</SelectItem>
              <SelectItem value="dark">Small</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label className="text-[#09090B]">
            Budget <span className="ml-1 text-red-600">*</span>
          </Label>
          <Select
            className="w-full"
            defaultValue="LessThan5000"
            onValueChange={handleSelectBud}
          >
            <SelectTrigger
              className={selectedBud === "" ? "text-gray-400 " : ""}
            >
              <SelectValue placeholder="Select Budget" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="LessThan5000">Less Than $5000</SelectItem>
              <SelectItem value="dark">Small</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between gap-x-3">
          <Button
            variant="outline"
            className="text-xs text-[#EF4444] border-[#EF4444] hover:text-[#cb3232] hover:border-[cb3232] font-medium h-9 rounded-md shadow-sm px-3 py-1.5"
            onClick={handleUnpublish}
          >
            Unpublish This Project
          </Button>
          <div className="space-x-2">
            <Button
              variant="outline"
              className="text-xs text-[#1975FF] border-[#1975FF] font-medium h-9 rounded-md shadow-sm px-3 py-1.5"
              onClick={onBack}
            >
              Return to Preview
            </Button>
            <Button
              variant="primary"
              className="text-xs font-medium h-9 rounded-md shadow-sm px-3 py-1.5"
              onClick={handleUpdate}
            >
              Update Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
