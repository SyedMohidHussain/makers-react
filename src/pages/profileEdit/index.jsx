import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import AdminHeader from "component/adminHeader";
import AdminLeftMenu from "component/adminLeftMenu";
import FactoryInfo from "component/profileEdit/factoryInfo";
import Notifications from "component/settings/notifications";
import VettingApplication from "component/settings/vettingApplication";
import Password from "component/settings/password";

export default function ProfileEdit() {
  return (
    <div className="flex flex-col py-5 px-[60px]">
      <AdminHeader />
      <Separator className="my-6" />
      <div className="flex gap-x-12">
        <AdminLeftMenu />
        {/* <Notifications /> */}
        {/* <VettingApplication/> */}
        {/* <Password/> */}
      </div>
    </div>
  );
}
