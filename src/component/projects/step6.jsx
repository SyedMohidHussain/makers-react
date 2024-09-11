import { Button } from "@/components/ui/button";
import React from "react";
export default function Step6({ currentStep, setCurrentStep }) {
  const onNext = () => {
    setCurrentStep(currentStep + 1);
  };
  const onBack = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <>
      <div className="px-[47px] h-full">
        <div className="flex justify-between gap-x-4">
          <div className="w-[36.8%]">
            <h1 className="text-2xl text-[#344054] font-bold mb-4">
              Preview Your Project
            </h1>
            <p className="text-sm text-[#71717A] font-normal" style={{letterSpacing:'0.2px'}}>
              This helps your job post stand out to the right candidates. It’s
              the first thing they’ll see, so make it count!
            </p>
          </div>
          <div className="w-[59%] bg-white border rounded-md p-5">
            {/* Header Section */}
            <div className="mb-4">
              <h1 className="text-2xl font-bold">Kneepad sleeves</h1>
              <p className="text-md font-normal text-[#71717A]">
                Created by Kate H, on 18 July 11:42 AM
              </p>
            </div>
            <div className="flex justify-between gap-6 max-h-60">
              <img
                src="../../../assets/product1.png"
                alt="Main product"
                className="w-48 h-60 rounded-sm"
              />
              <img
                src="../../../assets/product2.png"
                alt="Main product"
                className="w-48 h-60 rounded-sm"
              />
              <img
                src="../../../assets/product3.png"
                alt="Main product"
                className="w-48 h-60 rounded-sm"
              />
              <div className="flex flex-col gap-4 w-auto overflow-hidden">
                <img
                  src="../../../assets/product4.png"
                  alt="Product view"
                  className="w-16 h-14 rounded-sm"
                />
                <img
                  src="../../../assets/product5.png"
                  alt="Product view"
                  className="w-16 h-14 rounded-sm"
                />
                <img
                  src="../../../assets/product4.png"
                  alt="Product view"
                  className="w-16 h-14 rounded-sm"
                />
                <img
                  src="../../../assets/product4.png"
                  alt="Product view"
                  className="w-16 h-14 rounded-sm"
                />
              </div>
            </div>
            <div className="my-8">
              <h3 className="text-sm font-medium text-[#09090B]">
                Description
              </h3>
              <p className="text-sm font-normal text-[#71717A] mt-2">
                Slip-on kneepad sleeves (similar to volleyball kneepads) with
                pockets at the knees for removable, low-profile kneepads. The
                sleeve is recycled poly-spandex and the knees are
                abrasion-resistant fabric.
              </p>
              <p className="text-sm font-normal text-[#71717A] mt-4">
                The design and patterns have already been created with samples
                in-hand and fabrics selected. I need a factory for the
                production. The kneepad inserts have already been sourced and
                are on hand. I will have a tech pack available by 7/24.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="p-2 border border-[#E4E4E7] rounded-md">
                <h3 className="text-sm font-medium text-[#09090B]">Industry</h3>
                <p className="text-sm font-normal text-[#71717A]">
                  Furniture & Home Decor
                </p>
              </div>
              <div className="p-2 border border-[#E4E4E7]rounded-md">
                <h3 className="text-sm font-medium text-[#09090B]">Category</h3>
                <p className="text-sm font-normal text-[#71717A]">
                  Intermediate
                </p>
              </div>
              <div className="p-2 border border-[#E4E4E7] rounded-md">
                <h3 className="text-sm font-medium text-[#09090B]">Stage</h3>
                <p className="text-sm font-normal text-[#71717A]">Production</p>
              </div>
              <div className="p-2 border border-[#E4E4E7] rounded-md">
                <h3 className="text-sm font-medium text-[#09090B]">
                  Help me With
                </h3>
                <p className="text-sm font-normal text-[#71717A]">Production</p>
              </div>
              <div className="p-2 border border-[#E4E4E7] rounded-md">
                <h3 className="text-sm font-medium text-[#09090B]">
                  Preferred Location
                </h3>
                <p className="text-sm font-normal text-[#71717A]">Any</p>
              </div>
              <div className="p-2 border border-[#E4E4E7] rounded-md">
                <h3 className="text-sm font-medium text-[#09090B]">Budget</h3>
                <p className="text-sm font-normal text-[#71717A]">
                  Less Than $5000
                </p>
              </div>
            </div>

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
                Publish this Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
