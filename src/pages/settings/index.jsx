import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import AdminHeader from "component/adminHeader";
import Notifications from "component/settings/notifications";
import Password from "component/settings/password";
import QuickMessages from "component/settings/quickMessages";
import VettingApplication from "component/settings/vettingApplication";
import React, { useState } from "react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("q-msg");

  const handleTabMenu = (value) => {
    setActiveTab(value);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "a-info":
        return <QuickMessages />;
      case "b-info":
        return <QuickMessages />;
      case "privacy":
        return <QuickMessages />;
      case "q-msg":
        return <QuickMessages />;
      case "notifications":
        return <Notifications />;
      case "v-application":
        return <VettingApplication />;
      case "password":
        return <Password />;
      default:
        return <QuickMessages />;
    }
  };
  return (
    <div className="p-20 h-full">
      <AdminHeader
        header={"Settings"}
        description={"Manage your account settings and set e-mail preferences."}
      />
      <Separator className="mt-6" />
      <div className="flex gap-14 mt-6">
        <div className="flex basis-[15%] justify-start">
          <div className="flex flex-col gap-1 w-full">
            <Button
              onClick={() => handleTabMenu("a-info")}
              className={`w-full justify-start hover:bg-[#F4F4F5] py-2 px-4 rounded-md text-[#09090B] font-medium ${
                activeTab === "a-info" ? "bg-[#F4F4F5]" : ""
              }`}
              variant="ghost"
            >
              Account info
            </Button>
            <Button
              onClick={() => handleTabMenu("b-info")}
              className={`w-full justify-start hover:bg-[#F4F4F5] py-2 px-4 rounded-md text-[#09090B] font-medium ${
                activeTab === "b-info" ? "bg-[#F4F4F5]" : ""
              }`}
              variant="ghost"
            >
              Billing Info
            </Button>
            <Button
              onClick={() => handleTabMenu("privacy")}
              className={`w-full justify-start hover:bg-[#F4F4F5] py-2 px-4 rounded-md text-[#09090B] font-medium ${
                activeTab === "privacy" ? "bg-[#F4F4F5]" : ""
              }`}
              variant="ghost"
            >
              Privacy
            </Button>
            <Button
              onClick={() => handleTabMenu("q-msg")}
              className={`w-full justify-start hover:bg-[#F4F4F5] py-2 px-4 rounded-md text-[#09090B] font-medium ${
                activeTab === "q-msg" ? "bg-[#F4F4F5]" : ""
              }`}
              variant="ghost"
            >
              Quick Messages
            </Button>
            <Button
              onClick={() => handleTabMenu("notifications")}
              className={`w-full justify-start hover:bg-[#F4F4F5] py-2 px-4 rounded-md text-[#09090B] font-medium ${
                activeTab === "notifications" ? "bg-[#F4F4F5]" : ""
              }`}
              variant="ghost"
            >
              Notifications
            </Button>
            <Button
              onClick={() => handleTabMenu("v-application")}
              className={`w-full justify-start hover:bg-[#F4F4F5] py-2 px-4 rounded-md text-[#09090B] font-medium ${
                activeTab === "v-application" ? "bg-[#F4F4F5]" : ""
              }`}
              variant="ghost"
            >
              Vetting Application
            </Button>
            <Button
              onClick={() => handleTabMenu("password")}
              className={`w-full justify-start hover:bg-[#F4F4F5] py-2 px-4 rounded-md text-[#09090B] font-medium ${
                activeTab === "password" ? "bg-[#F4F4F5]" : ""
              }`}
              variant="ghost"
            >
              Password
            </Button>
          </div>
        </div>
        <div className="basis-[50%]">{renderTabContent()}</div>
      </div>
    </div>
  );
}
