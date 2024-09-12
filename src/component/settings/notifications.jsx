import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function Notifications() {
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
      <div className="flex flex-col gap-y-[14px]">
        <div className="flex gap-x-3">
          <Checkbox />
          <div className="flex flex-col">
            <Label> Messages</Label>
            <p className="text-[12.8px] font-normal text-[#71717A]">
              Send me an email when I get a new message
            </p>
          </div>
        </div>
        <div className="flex gap-x-3">
          <Checkbox />
          <div className="flex flex-col">
            <Label> Replies</Label>
            <p className="text-[12.8px] font-normal text-[#71717A]">
              Send me an email when I get a new reply
            </p>
          </div>
        </div>
        <div className="flex gap-x-3">
          <Checkbox />
          <div className="flex flex-col">
            <Label> Monthly Newsletter</Label>
            <p className="text-[12.8px] font-normal text-[#71717A]">
              Send me monthly updates about what’s new on Maker's Row
            </p>
          </div>
        </div>
        <div className="flex gap-x-3">
          <Checkbox />
          <div className="flex flex-col">
            <Label> Helpful Tips</Label>
            <p className="text-[12.8px] font-normal text-[#71717A]">
              Send me helpful tips for my Maker’s Row profile
            </p>
          </div>
        </div>
        <div className="flex gap-x-3">
          <Checkbox />
          <div className="flex flex-col">
            <Label> Blog Tips</Label>
            <p className="text-[12.8px] font-normal text-[#71717A]">
              Send me an email when there's a new blog post
            </p>
          </div>
        </div>
      </div>
      <Button variant="primary" className="h-9 mt-5">Update</Button>
    </div>
  );
}
