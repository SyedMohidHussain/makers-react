import * as React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenu,
  NavbarItem,
  NavbarToggle,
  Dropdown,
} from "@/components/ui/menubar";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function BrandNavbar() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] =
    React.useState(false);

  const profileDropdownItems = [{ label: "Profile", href: "#profile" }];

  const handleProfileDropdownClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const dropdownItems = [
    { label: "Item 1", href: "#item1" },
    { label: "Item 2", href: "#item2" },
    { label: "Item 3", href: "#item3" },
  ];

  return (
    <Navbar
      className="bg-[#FFFFFF]"
      style={{
        padding: "12px 32px 12px 32px",
      }}
    >
      <NavbarBrand>
        <img
          src="../../../assets/logo.png"
          alt="Main product"
          style={{ width: "127px", height: "30px" }}
          className="rounded-sm"
        />
      </NavbarBrand>
      <NavbarMenu>
        <NavbarItem href="/projects">Projects</NavbarItem>
        <NavbarItem href="/searchfactories">Search Factories</NavbarItem>
        <Dropdown items={dropdownItems} />
        <NavbarItem href="/messages">
          Messages
          <span
            className="bg-[#EF4444] px-3 py-1 text-white rounded-full"
            style={{ marginLeft: "12px" }}
          >
            10
          </span>
        </NavbarItem>
      </NavbarMenu>
      <div className="flex items-center justify-center gap-5">
        <div className="flex">
          <button
            onClick={handleProfileDropdownClick}
            className="flex items-center space-x-2 text-black"
          >
            <span>
              <img
                src="../../../assets/profileImage.png"
                alt="Main product"
                style={{ width: "32px", height: "32px" }}
                className="rounded-sm"
              />
            </span>
            <span className="text-[12px] font-[500] leading-[20px] font-inter text-[#09090B] hover:text-secondary gap-[4px]">
              John Doe
            </span>
            <ChevronDownIcon className="w-4 h-4" />
          </button>
          {isProfileDropdownOpen && (
            <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200">
              {profileDropdownItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
        <button
          className="p-2 hover:bg-secondary border rounded-md"
          style={{
            backgroundColor: "#007bff",
            color: "#FAFAFA",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "20px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <span>Post a Project</span>
        </button>
      </div>
    </Navbar>
  );
}
