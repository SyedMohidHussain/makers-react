import { useState } from "react";

const menuItems = [
  { label: "Factory Info", value: "FactoryInfo" },
  { label: "Classification", value: "Classification" },
  { label: "Contact Info", value: "ContactInfo" },
  { label: "Appearance", value: "Appearance" },
];

export default function AdminLeftMenu() {
  const [selectedTab, setSelectedTab] = useState("");

  const handleSelected = (value) => {
    console.log(value);
    setSelectedTab(value);
  };

  return (
    <div>
      <ul className="text-sm font-medium text-[#18181B] w-[250px]">
        {menuItems.map(({ label, value }) => (
          <li
            key={value}
            className={`px-4 py-3 rounded-md ${
              selectedTab === value ? "bg-[#F4F4F5]" : "bg-white"
            }`}
            onClick={() => handleSelected(value)}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
