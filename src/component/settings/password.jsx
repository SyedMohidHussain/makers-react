import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/PasswordInput";
import { useState } from "react";
export default function Password() {
  const [showToast, setShowToast] = useState(false);
  const Toast = () => {
    return (
      <div className="flex flex-col px-4 py-3 mb-5 gap-2 bg-[#F4FFF7] border border-[#E4E4E7] rounded-lg w-full">
        <div className="flex gap-2 items-center">
          <img
            src="../../../assets/checkGreen.png"
            alt="Green Check"
            className="w-5 h-5 rounded-sm"
          />
          <span className="text-md font-medium text-[#0F772C]">
            Password Reset
          </span>
        </div>
        <p className="text-sm font-normal text-[#0F772C]">
          Your password has been reset
        </p>
      </div>
    );
  };
  return (
    <div className="flex flex-col w-[672px] items-start">
      <Label className="text-lg font-medium text-[#09090B]">Password</Label>
      <p className="text-sm font-normal text-[#71717A]">
        This is how others will see you on the site.
      </p>
      <Separator className="my-6" />
      {showToast && <Toast />}
      <div className="flex flex-col gap-y-5 w-full">
        <div className="flex flex-col gap-y-2 ">
          <Label> Current Password</Label>
          <PasswordInput />
        </div>
        <div className="flex flex-col gap-y-2 ">
          <Label> New Password</Label>
          <PasswordInput />
        </div>
        <div className="flex flex-col gap-y-2 ">
          <Label> Confirm New Password</Label>
          <PasswordInput />
        </div>
      </div>
      <Button
        variant="primary"
        className="h-9 mt-5"
        onClick={() => setShowToast(true)}
      >
        Update
      </Button>
    </div>
  );
}
