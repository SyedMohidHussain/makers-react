import React from "react";
import Header from "../Partials/Header";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

function FactoryInfo() {
    return (
        <>
            <Header
                title={"Factory Info"}
                description={"Manage Your Factory Information"}
            />
            <div className="mt-6">
                <div className="mt-4">
                    <Label>
                        Factory Name{" "}
                        <span className="text-[#EF4444] ml-2">*</span>
                    </Label>
                    <Input className="mt-1" placeholder=""></Input>
                </div>
                <div className="mt-4">
                    <Label>
                        Profile Address{" "}
                        <span className="text-[#EF4444] ml-2">*</span>
                    </Label>
                    <span className="flex items-center">
                        <span className="text-[#71717A] mr-2">
                            Makersrow.com/factory/
                        </span>
                        <Input className="mt-1" placeholder=""></Input>
                    </span>
                </div>
                <div className="mt-4">
                    <Label>
                        Tag Line <span className="text-[#EF4444] ml-2">*</span>
                    </Label>
                    <Input className="mt-1" placeholder=""></Input>
                </div>
                <div className="mt-4">
                    <Label>
                        Description{" "}
                        <span className="text-[#EF4444] ml-2">*</span>
                    </Label>
                    <Textarea className="h-[340px]"></Textarea>
                </div>
                <div className="mt-4">
                    <Label>
                        Clientelle{" "}
                        <span className="text-[#EF4444] ml-2">*</span>
                    </Label>
                    <p className="text-[#71717A] ">
                        Choose the type of designers you work with. Only the
                        ones you choose can message you.
                    </p>
                    <div className="flex items-center space-x-2 mt-3">
                        <Checkbox id="beginners" />
                        <Label
                            htmlFor="beginners"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Beginners
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2 mt-3">
                        <Checkbox id="students" />
                        <Label
                            htmlFor="students"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Students
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2 mt-3">
                        <Checkbox id="small Businesses" />
                        <Label
                            htmlFor="small Businesses"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Small Businesses
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2 mt-3">
                        <Checkbox id="big Brands" />
                        <Label
                            htmlFor="big Brands"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Big Brands
                        </Label>
                    </div>
                    <div className="mt-4">
                        <Label>
                            EIN Number{" "}
                            <span className="text-[#EF4444] ml-2">*</span>
                        </Label>
                        <Input className="mt-1" placeholder=""></Input>
                    </div>
                </div>
                <div className="mt-12">
                    <Header
                        title={"Extended Info"}
                        description={"Manage your additional information"}
                    />
                </div>
                <div className="mt-4">
                        <Label>Preferred Connection </Label>
                        <Input className="mt-1" placeholder=""></Input>
                    </div>
                <div className="mt-4">
                    <Label>Website</Label>
                    <Input className="mt-1" placeholder=""></Input>
                </div>
                <div className="mt-4">
                    <Label>Facebook</Label>
                    <Input className="mt-1" placeholder=""></Input>
                </div>
                <div className="mt-4">
                    <Label>Twitter</Label>
                    <Input className="mt-1" placeholder=""></Input>
                </div>
                <div className="mt-4">
                    <Label>Linkedin</Label>
                    <Input className="mt-1" placeholder=""></Input>
                </div>
                <div className="mt-4">
                    <Label>Google+</Label>
                    <Input className="mt-1" placeholder=""></Input>
                </div>
                <div className="mt-4">
                    <Label>Instagram</Label>
                    <Input className="mt-1" placeholder=""></Input>
                </div>
                <div className="mt-4">
                    <Label>Tumblr</Label>
                    <Input className="mt-1" placeholder=""></Input>
                </div>
                <div className="mt-4">
                    <Label>Year Founded</Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Year</SelectLabel>
                                <SelectItem value="2024">2024</SelectItem>
                                <SelectItem value="2023">2023</SelectItem>
                                <SelectItem value="2022">2022</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="mt-4">
                    <Label>Employees</Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select number of employees" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Employees</SelectLabel>
                                <SelectItem value="1-10">1-10</SelectItem>
                                <SelectItem value="11-50">11-50</SelectItem>
                                <SelectItem value="51-200">51-200</SelectItem>
                                <SelectItem value="201-500">201-500</SelectItem>
                                <SelectItem value="500+">500+</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="mt-4">
                    <Label>Accepted Payment Methods</Label>

                    <div className="flex items-center space-x-2 mt-3">
                        <Checkbox id="cash" />
                        <Label
                            htmlFor="cash"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Cash
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2 mt-3">
                        <Checkbox id="check" />
                        <Label
                            htmlFor="check"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Check
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2 mt-3">
                        <Checkbox id="money-order" />
                        <Label
                            htmlFor="money-order"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Money Order
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2 mt-3">
                        <Checkbox id="paypal" />
                        <Label
                            htmlFor="paypal"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Paypal
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2 mt-3">
                        <Checkbox id="wire-transfer" />
                        <Label
                            htmlFor="wire-transfer"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Wire Transfer
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2 mt-3">
                        <Checkbox id="visa" />
                        <Label
                            htmlFor="visa"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Visa
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2 mt-3">
                        <Checkbox id="mastercard" />
                        <Label
                            htmlFor="mastercard"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Mastercard
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2 mt-3">
                        <Checkbox id="american-express" />
                        <Label
                            htmlFor="american-express"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            American Express
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2 mt-3">
                        <Checkbox id="discover" />
                        <Label
                            htmlFor="discover"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Discover
                        </Label>
                    </div>
                    <div className="mt-5">
                        <Button className="bg-[#1975FF]">Update</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FactoryInfo;
