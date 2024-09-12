import React from "react";
import Header from "../Partials/Header";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

function Classification() {
    return (
        <>
            <Header
                title={"Classification"}
                description={"Manage your company classificaiton"}
            />
            <div className="mt-6">
                <div className="mt-4">
                    <Label>
                        Industry <span className="text-[#EF4444] ml-2">*</span>
                    </Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Industry</SelectLabel>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="mt-4">
                    <Label>Industry Name</Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Name here if other" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Industry</SelectLabel>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="mt-4">
                    <Label>Classification</Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Factory" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Factory</SelectLabel>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="mt-12">
                    <Header
                        title={"Capabilities"}
                        subHeading={"Select your stages in The Making Process"}
                        description={
                            "When you select a Stage, please complete the description and select options (if any available) before saving your page."
                        }
                    />
                </div>
                <div className="mt-4">
                    <Label>Ideation</Label>
                    <div className="flex items-center space-x-2 mt-3">
                        <Checkbox id="product_idea" />
                        <Label
                            htmlFor="product_idea"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Do you help refine a product idea?
                        </Label>
                    </div>
                    <Textarea className="h-[340px] mt-3"></Textarea>
                </div>
                <div className="mt-4">
                    <Label>Materials</Label>
                    <div className="flex items-center space-x-2 mt-3">
                        <Checkbox id="materials" />
                        <Label
                            htmlFor="materials"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Do you sell or provide materials
                        </Label>
                    </div>
                    <Textarea className="h-[340px] mt-3"></Textarea>
                </div>
                <div className="mt-4">
                    <Label>Sample-Making</Label>
                    <div className="flex items-center space-x-2 mt-3">
                        <Checkbox id="simple_making" />
                        <Label
                            htmlFor="simple_making"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Do you create samples?
                        </Label>
                    </div>
                    <Textarea className="h-[340px] mt-3"></Textarea>
                </div>
                <div className="mt-4">
                    <Label>Tooling</Label>
                    <div className="flex items-center space-x-2 mt-3">
                        <Checkbox id="tooling" />
                        <Label
                            htmlFor="tooling"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Do you help with tooling or production preparation?
                        </Label>
                    </div>
                    <Textarea className="h-[340px] mt-3"></Textarea>
                </div>
                <div className="mt-4">
                    <Label>Production</Label>
                    <div className="flex items-center space-x-2 mt-3">
                        <Checkbox id="production" />
                        <Label
                            htmlFor="production"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Do you mass produce products?
                        </Label>
                    </div>
                    <Textarea className="h-[340px] mt-3"></Textarea>
                </div>
                <div className="mt-12">
                    <Header
                        title={"Capabilities"}
                        description={
                            "List products that you produce/sell or services that you provide. Please be specific and write out your specialties. If factories search for these EXACT keywords, your profile will show up in search results. Separate each entry with a comma."
                        }
                    />
                </div>
                <div className="mt-4">
                    <Label>Tags</Label>
                    <Textarea className="h-[80px] mt-3"></Textarea>
                </div>
                <div className="mt-12">
                    <Header
                        title={"Equipment"}
                        description={
                            "List the equipment you use to create products for your customers. If designers search for these EXACTkeywords, your profile will show up in search results. Separate each entry with a comma."
                        }
                    />
                </div>
                <div className="mt-4">
                    <Label>Equipment</Label>
                    <Textarea className="h-[80px] mt-3"></Textarea>
                </div>
            </div>
        </>
    );
}

export default Classification;
