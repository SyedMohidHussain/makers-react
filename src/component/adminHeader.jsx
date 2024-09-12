import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function AdminHeader({ header, description }) {
  return (
    <div className="flex justify-between items-start px-4">
      <div className="flex flex-col">
        <Label className="text-2xl font-bold text-[#09090B]">{header}</Label>
        <p className="text-md font-normal text-[#71717A]">{description}</p>
      </div>
      <Button
        className="text-xs font-medium text-[#18181B] border border-[#B7B7B7] shadow-sm"
        size="sm"
        variant="outline"
      >
        View Public Profile{" "}
      </Button>
    </div>
  );
}
