import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React from "react";

function Header({ title, description, subHeading }) {
    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="font-medium text-[#09090B] text-lg sm:text-xl">
                        {title}
                    </h2>
                    {subHeading && (
                        <p className="text-[#71717A] text-sm sm:text-base">
                            {subHeading}
                        </p>
                    )}
                    <p className="text-[#71717A] text-sm sm:text-base">
                        {description}
                    </p>
                </div>
            </div>
            <Separator className="mt-6" />
        </>
    );
}

export default Header;
