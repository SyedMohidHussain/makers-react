import * as React from "react";
import { cn } from "@/lib/utils";
import { Dropdown } from "./dropdown";

// Navbar component
const Navbar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    className={cn(
      "flex items-center justify-between p-4 bg-primary text-primary-foreground",
      className
    )}
    {...props}
  />
));
Navbar.displayName = "Navbar";

// NavbarBrand component
const NavbarBrand = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
));
NavbarBrand.displayName = "NavbarBrand";

// NavbarMenu component
const NavbarMenu = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex space-x-4 relative", className)}
    {...props}
  />
));
NavbarMenu.displayName = "NavbarMenu";

// NavbarItem component
const NavbarItem = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "text-[12px] font-[500] leading-[20px] font-inter text-[#09090B] hover:text-secondary gap-[4px]",
      className
    )}
    {...props}
  />
));
NavbarItem.displayName = "NavbarItem";

// NavbarToggle component
const NavbarToggle = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn("p-2 hover:bg-secondary border rounded-md", className)}
    style={{
      backgroundColor: "#007bff", // Background color
      color: "#FAFAFA", // Text color
      fontSize: "12px", // Font size
      fontWeight: 500, // Font weight
      lineHeight: "20px", // Line height
      fontFamily: "Inter, sans-serif", // Font family
    }}
    {...props}
  />
));
NavbarToggle.displayName = "NavbarToggle";

export { Navbar, NavbarBrand, NavbarMenu, NavbarItem, NavbarToggle, Dropdown };
