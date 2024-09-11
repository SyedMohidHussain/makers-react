import React from "react";
import { cn } from "@/lib/utils";
const FileUpload = ({ className }) => {
  return (
    <div
      className={cn(
        "flex border border-[#E4E4E7] shadow-sm rounded-md",
        className
      )}
    >
      <label
        htmlFor="file-upload"
        className="flex  w-full h-full cursor-pointer"
      >
        <div className="flex flex-row items-center gap-x-1">
          {/* Upload Icon */}
          <img
            src="../../../assets/cloud.png"
            alt="Cloud logo"
            className="w-10 h-10 cursor-pointer"
          />
          <div className="flex flex-col">
            {/* Click to Upload Text */}
            <span className="text-sm font-semibold text-[#344054]">
              Click to upload
              <span className="text-sm font-normal text-[#475467] ml-1">
                Select Experience Level
              </span>
            </span>

            {/* File Type and Size Info */}
            <p className="text-[10px] font-normal text-[#475467]">
              SVG, PNG, JPG or GIF (max. 800×400px)
            </p>
          </div>
        </div>

        {/* Hidden File Input */}
        <input
          id="file-upload"
          type="file"
          className="hidden"
          accept=".png, .jpg, .jpeg, .gif, .svg"
        />
      </label>
    </div>
  );
};

export default FileUpload;
