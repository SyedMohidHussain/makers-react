import React from "react";
import Header from "../Partials/Header";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const usStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
];

const days = [
    { day: "Monday", checked: true },
    { day: "Tuesday", checked: true },
    { day: "Wednesday", checked: true },
    { day: "Thursday", checked: true },
    { day: "Friday", checked: true },
    { day: "Saturday", checked: false },
    { day: "Sunday", checked: false },
];

function ContactInfo() {
    return (
        <>
            <Header
                title={"Contact Info"}
                description={"Manage your company contact info"}
            />
            <div className="mt-6">
                <div className="mt-4">
                    <Label>
                        Factory Email{" "}
                        <span className="text-[#EF4444] ml-2">*</span>
                    </Label>
                    <Input className="mt-1" placeholder=""></Input>
                </div>
                <div className="mt-4">
                    <Label>
                        Factory Phone{" "}
                        <span className="text-[#EF4444] ml-2">*</span>
                    </Label>
                    <Input className="mt-1" placeholder=""></Input>
                </div>
                <div className="mt-4">
                    <Label>
                        Factory Fax{" "}
                        <span className="text-[#EF4444] ml-2">*</span>
                    </Label>
                    <Input className="mt-1" placeholder=""></Input>
                </div>
                <div className="mt-4">
                    <Label>
                        Industry Name{" "}
                        <span className="text-[#EF4444] ml-2">*</span>
                    </Label>
                    <Input className="mt-1" placeholder=""></Input>
                </div>
                <div className="mt-4">
                    <Label>
                        Country <span className="text-[#EF4444] ml-2">*</span>
                    </Label>
                    <Select>
                        <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="US">United States</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="mt-4">
                    <Label>
                        Address Line 1{" "}
                        <span className="text-[#EF4444] ml-2">*</span>
                    </Label>
                    <Input className="mt-1" placeholder=""></Input>
                </div>
                <div className="mt-4">
                    <Label>
                        Address Line 2{" "}
                        <span className="text-[#EF4444] ml-2">*</span>
                    </Label>
                    <Input className="mt-1" placeholder=""></Input>
                </div>
                <div className="mt-4">
                    <Label>
                        City <span className="text-[#EF4444] ml-2">*</span>
                    </Label>
                    <Input className="mt-1" placeholder=""></Input>
                </div>
                <div className="mt-4">
                    <Label>
                        State <span className="text-[#EF4444] ml-2">*</span>
                    </Label>
                    <Select className="mt-1">
                        <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                            {usStates.map((state, index) => (
                                <SelectItem key={index} value={state}>
                                    {state}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="mt-4">
                    <Label>
                        Zip Code <span className="text-[#EF4444] ml-2">*</span>
                    </Label>
                    <Input className="mt-1" placeholder=""></Input>
                </div>
            </div>
            <div className="mt-14">
                <Header title={"Hours of Operation"} description={"Optional"} />
            </div>
            <div className="mt-6">
                {days.map(({ day, checked }, index) => (
                    <>
                        <span className="flex items-center gap-4">
                            <Checkbox checked={checked} />
                            <Label className="w-32">{day}</Label>
                        </span>
                        <div
                            key={index}
                            className="flex items-start gap-4 mt-3 mb-3"
                        >
                            <div className="flex items-start gap-2">
                                <Input
                                    type="number"
                                    defaultValue="10"
                                    className="w-24 text-start"
                                />
                                <Input
                                    type="number"
                                    defaultValue="00"
                                    className="w-24 text-start"
                                />
                                <Select defaultValue="AM">
                                    <SelectTrigger className="w-32">
                                        <SelectValue placeholder="AM" />
                                    </SelectTrigger>
                                    <SelectContent className="w-3 text-start">
                                        <SelectItem value="AM">AM</SelectItem>
                                        <SelectItem value="PM">PM</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <span className="mx-2">To</span>
                            <div className="flex items-start gap-2">
                                <Input
                                    type="number"
                                    defaultValue="5"
                                    className="w-24 text-start"
                                />
                                <span>:</span>
                                <Input
                                    type="number"
                                    defaultValue="00"
                                    className="w-24 text-start"
                                />
                                <Select defaultValue="PM">
                                    <SelectTrigger className="w-32">
                                        <SelectValue placeholder="PM" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="AM">AM</SelectItem>
                                        <SelectItem value="PM">PM</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <Button className='mt-2 bg-[#1975FF]'>
                Update
            </Button>
        </>
    );
}

export default ContactInfo;
