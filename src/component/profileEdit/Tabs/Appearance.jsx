import React from "react";
import Header from "../Partials/Header";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

function Appearance() {
    return (
        <>
            <Header
                title={"Appearance"}
                description={"Manage your Factory profile appearance"}
            />
            <div className="mt-6">
                <div>
                    <img
                        className="w-[214px] h-[114px] rounded-md"
                        alt="logo-image"
                        src="https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg"
                    />
                    <span className="flex flex-col">
                        <Label className="mt-2 mb-2">Logo</Label>
                        <span className="flex items-center border border-[#E4E4E7] rounded-md">
                            <Label
                                htmlFor="logo-upload"
                                className="flex items-center cursor-pointer  py-2 px-3"
                            >
                                <a className="font-medium text-[#09090B]">
                                    Choose File
                                </a>
                                <p className="ml-2 text-[#71717A]">
                                    No file chosen
                                </p>
                            </Label>
                            <Input
                                id="logo-upload"
                                type="file"
                                className="hidden"
                            />
                        </span>
                        <p className="text-[#71717A] text-sm">
                            Size: 300 x 160
                            <br />
                            An image that appears along with your company name
                            on the top of your profile.
                        </p>
                    </span>
                </div>
                <div className="mt-5">
                    <img
                        className="w-[214px] h-[114px] rounded-md"
                        alt="logo-image"
                        src="https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg"
                    />
                    <span className="flex flex-col">
                        <Label className="mt-2 mb-2">Listing Photo</Label>
                        <span className="flex items-center border border-[#E4E4E7] rounded-md">
                            <Label
                                htmlFor="logo-upload"
                                className="flex items-center cursor-pointer  py-2 px-3"
                            >
                                <a className="font-medium text-[#09090B]">
                                    Choose File
                                </a>
                                <p className="ml-2 text-[#71717A]">
                                    No file chosen
                                </p>
                            </Label>
                            <Input
                                id="logo-upload"
                                type="file"
                                className="hidden"
                            />
                        </span>
                        <p className="text-[#71717A] text-sm">
                            Size: 1,500 x 300
                        </p>
                        <p className="text-[#71717A] text-sm ">
                            An image that appears on the header of your profile.
                        </p>
                    </span>
                </div>
                <div className="mt-5">
                    <div className="grid grid-cols-2 w-[430px] gap-4">
                        <img
                            className="w-[214px] h-[114px] rounded-md"
                            alt="logo-image"
                            src="https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg"
                        />
                        <img
                            className="w-[214px] h-[114px] rounded-md"
                            alt="logo-image"
                            src="https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg"
                        />
                        <img
                            className="w-[214px] h-[114px] rounded-md"
                            alt="logo-image"
                            src="https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg"
                        />
                        <img
                            className="w-[214px] h-[114px] rounded-md"
                            alt="logo-image"
                            src="https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg"
                        />
                        <img
                            className="w-[214px] h-[114px] rounded-md"
                            alt="logo-image"
                            src="https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg"
                        />
                        <img
                            className="w-[214px] h-[114px] rounded-md"
                            alt="logo-image"
                            src="https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg"
                        />
                        <img
                            className="w-[214px] h-[114px] rounded-md"
                            alt="logo-image"
                            src="https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg"
                        />
                        <img
                            className="w-[214px] h-[114px] rounded-md"
                            alt="logo-image"
                            src="https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg"
                        />
                    </div>
                    <span className="flex flex-col">
                        <Label className="mt-2 mb-2">Photo Gallery</Label>
                        <span className="flex items-center border border-[#E4E4E7] rounded-md">
                            <Label
                                htmlFor="logo-upload"
                                className="flex items-center cursor-pointer  py-2 px-3"
                            >
                                <a className="font-medium text-[#09090B]">
                                    Choose File
                                </a>
                                <p className="ml-2 text-[#71717A]">
                                    No file chosen
                                </p>
                            </Label>
                            <Input
                                id="logo-upload"
                                type="file"
                                className="hidden"
                            />
                        </span>
                        <p className="text-[#71717A] text-sm">
                            Size: 640 x 360
                        </p>
                        <p className="text-[#71717A] text-sm ">
                            A gallery of up to 10 photos that appears at the top
                            of your profile.
                        </p>
                    </span>
                </div>
                <div className="mt-5">
                    <img
                        className="w-[214px] h-[114px] rounded-md"
                        alt="logo-image"
                        src="https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg"
                    />
                    <span className="flex flex-col">
                        <Label className="mt-2 mb-2">Video Type</Label>
                        <span className="flex items-center border border-[#E4E4E7] rounded-md">
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select video type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="youtube">
                                            Youtube
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </span>
                    </span>
                    <span className="flex flex-col">
                        <Label className="mt-2 mb-2">Video</Label>
                        <span className="flex items-center border border-[#E4E4E7] rounded-md">
                            <Input></Input>
                        </span>
                        <p className="text-[#71717A] text-sm ">
                            Size: 640 x 360 <br />
                            A video that appears on the top of your profile.
                            <br />
                            Example Links:
                            <br />
                            youtu.be/[VIDEO_ID]
                            <br />
                            youtube.com/watch?v=[VIDEO_ID]
                            <br />
                            vimeo.com/[VIDEO_ID]
                            <br />
                            YouTube Vimeo
                        </p>
                    </span>
                </div>
            </div>

            <Button className="mt-4 bg-[#1975FF]">Update</Button>
        </>
    );
}

export default Appearance;
