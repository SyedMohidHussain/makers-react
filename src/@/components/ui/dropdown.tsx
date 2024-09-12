// components/ui/menubar/Dropdown.tsx
import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const DropdownMenu = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200",
      className
    )}
    {...props}
  />
));
DropdownMenu.displayName = "DropdownMenu";

const DropdownItem = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
      className
    )}
    {...props}
  />
));
DropdownItem.displayName = "DropdownItem";

const DropdownTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn("flex items-center space-x-2 text-black", className)}
    {...props}
  >
    <span className="text-[12px] font-[500] leading-[20px] font-inter text-[#09090B] hover:text-secondary gap-[4px]">
      Resources
    </span>
    <ChevronDownIcon className="w-4 h-4" />
  </button>
));
DropdownTrigger.displayName = "DropdownTrigger";

const Dropdown = ({ items, ...props }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <DropdownTrigger onClick={() => setIsOpen(!isOpen)} {...props} />
      {isOpen && (
        <DropdownMenu>
          {items.map((item, index) => (
            <DropdownItem key={index} href={item.href}>
              {item.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </div>
  );
};

export { Dropdown };
