import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import AdminHeader from "component/adminHeader";
import AdminLeftMenu from "component/adminLeftMenu";
import Notifications from "component/settings/notifications";
import QuickMessages from "component/settings/quickMessages";
import VettingApplication from "component/settings/vettingApplication";
import BrandInfo from "component/profileEdit/Tabs/FactoryInfo";
import Classification from "component/profileEdit/Tabs/Classification";
import ContactInfo from "component/profileEdit/Tabs/ContactInfo";
import Appearance from "component/profileEdit/Tabs/Appearance";

export default function ProfileEdit() {
  const [activeTab, setActiveTab] = useState("f-info");

  const handleTabMenu = (value) => {
    setActiveTab(value);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "b-info":
        return <BrandInfo />;
      case "classification":
        return <Classification />;
      case "c-info":
        return <ContactInfo />;
      case "appearance":
        return <Appearance />;
      default:
        return <BrandInfo />;
    }
  };
  return (
    <div className="p-20 h-full">
      <AdminHeader
        header={"Profile"}
        description={"Manage your profile settings"}
      />
      <Separator className="mt-6" />
      <div className="flex gap-14 mt-6">
        <div className="flex basis-[15%] justify-start">
          <div className="flex flex-col gap-1 w-full">
            <Button
              onClick={() => handleTabMenu("b-info")}
              className={`w-full justify-start hover:bg-[#F4F4F5] py-2 px-4 rounded-md text-[#09090B] font-medium ${
                activeTab === "f-info" ? "bg-[#F4F4F5]" : ""
              }`}
              variant="ghost"
            >
              Brand info
            </Button>
            <Button
              onClick={() => handleTabMenu("classification")}
              className={`w-full justify-start hover:bg-[#F4F4F5] py-2 px-4 rounded-md text-[#09090B] font-medium ${
                activeTab === "classification" ? "bg-[#F4F4F5]" : ""
              }`}
              variant="ghost"
            >
              Classification
            </Button>
            <Button
              onClick={() => handleTabMenu("c-info")}
              className={`w-full justify-start hover:bg-[#F4F4F5] py-2 px-4 rounded-md text-[#09090B] font-medium ${
                activeTab === "c-info" ? "bg-[#F4F4F5]" : ""
              }`}
              variant="ghost"
            >
              Contact info
            </Button>
            <Button
              onClick={() => handleTabMenu("appearance")}
              className={`w-full justify-start hover:bg-[#F4F4F5] py-2 px-4 rounded-md text-[#09090B] font-medium ${
                activeTab === "appearance" ? "bg-[#F4F4F5]" : ""
              }`}
              variant="ghost"
            >
              Appearance
            </Button>
          </div>
        </div>
        <div className="basis-[50%]">{renderTabContent()}</div>
      </div>
    </div>
  );
}
