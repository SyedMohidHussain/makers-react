import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function VettingApplication() {
  return (
    <div className="flex flex-col w-[672px] items-start">
      <Label className="text-lg font-medium text-[#09090B]">
        {" "}
        Quick Messages
      </Label>
      <p className="text-sm font-normal text-[#71717A]">
        Manage your quick messages
      </p>
      <Separator className="my-6" />
      <div className="flex flex-col px-4 py-3 gap-2 w-full bg-[#F4FFF7] border border-[#E4E4E7] rounded-lg">
        <div className="flex gap-2 items-center">
          <img
            src="../../../assets/checkGreen.png"
            alt="Green Check"
            className="w-5 h-5 rounded-sm"
          />
          <span className="text-md font-medium text-[#0F772C]">Accepted</span>
        </div>
        <p className="text-sm font-normal text-[#0F772C]">
          You company has been accepted
        </p>
      </div>
    </div>
  );
}
