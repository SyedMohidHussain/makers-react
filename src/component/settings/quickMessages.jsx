import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useState } from "react";
export default function QuickMessages() {
  const data = [
    {
      title: "Discipline Customer",
      description:
        "Slip-on kneepad sleeves (similar to volleyball kneepads) wi...",
    },
    {
      title: "Discipline Customer",
      description:
        "Slip-on kneepad sleeves (similar to volleyball kneepads) wi...",
    },
    {
      title: "Discipline Customer",
      description:
        "Slip-on kneepad sleeves (similar to volleyball kneepads) wi...",
    },
    {
      title: "Discipline Customer",
      description:
        "Slip-on kneepad sleeves (similar to volleyball kneepads) wi...",
    },
    {
      title: "Discipline Customer",
      description:
        "Slip-on kneepad sleeves (similar to volleyball kneepads) wi...",
    },
    {
      title: "Discipline Customer",
      description:
        "Slip-on kneepad sleeves (similar to volleyball kneepads) wi...",
    },
    {
      title: "Discipline Customer",
      description:
        "Slip-on kneepad sleeves (similar to volleyball kneepads) wi...",
    },
    {
      title: "Discipline Customer",
      description:
        "Slip-on kneepad sleeves (similar to volleyball kneepads) wi...",
    },
    {
      title: "Discipline Customer",
      description:
        "Slip-on kneepad sleeves (similar to volleyball kneepads) wi...",
    },
    {
      title: "Discipline Customer",
      description:
        "Slip-on kneepad sleeves (similar to volleyball kneepads) wi...",
    },
    {
      title: "Discipline Customer",
      description:
        "Slip-on kneepad sleeves (similar to volleyball kneepads) wi...",
    },
  ];
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastDescription, setToastDescription] = useState("");
  const [showDialog, setShowDialog] = useState(true);
  const [showTabel, setShowTable] = useState(false);

  const handleCloseClick = () => {
    setShowDialog(false);
    setShowTable(true);
  };

  const handleViewClose = () => {
    setShowToast(false);
    setToastText("");
    setToastDescription("");
  };

  const Toast = () => {
    return (
      <div className="flex flex-col px-4 py-3 gap-2 bg-[#F4FFF7] border border-[#E4E4E7] rounded-lg">
        <div className="flex gap-2 items-center">
          <img
            src="../../../assets/checkGreen.png"
            alt="Green Check"
            className="w-5 h-5 rounded-sm"
          />
          <span className="text-md font-medium text-[#0F772C]">
            {toastText}
          </span>
        </div>
        <p className="text-sm font-normal text-[#0F772C]">{toastDescription}</p>
      </div>
    );
  };
  const handleDelete = () => {
    setShowToast(true);
    setToastText("Project Deleted");
    setToastDescription("Your message has been deleted");
  };
  const handleUpdate = () => {
    setShowToast(true);
    setToastText("Project Updated");
    setToastDescription("Your message has been updated");
  };
  return (
    <div className="flex flex-col w-[672px] items-start">
      <Label className="text-lg font-medium text-[#09090B]">
        {" "}
        Quick Messages
      </Label>
      <p className="text-sm font-normal text-[#71717A]">
        Manage your quick messages
      </p>
      <Separator className="my-6" />
      {showDialog && (
        <div className="space-y-1 mb-2 px-4 py-3 w-full bg-[#F9F9F9] border border-[#E4E4E7] rounded-lg">
          <Label className="text-md font-medium text-[#454547]">
            No Messages
          </Label>
          <p className="text-sm font-normal text-[#454547]">
            Please add a new message
          </p>
        </div>
      )}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="primary" className="h-9">
            Add New Message
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl text-[#020817]">
              New Quick Message
            </DialogTitle>
            <DialogDescription className="font-normal text-[#64748B]">
              Enter your details below
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-y-4">
            <div className="space-y-1">
              <Label className="text-[#020817]">Title of Quick Message</Label>
              <Input placeholder="Enter Title" className="py-2" />
            </div>
            <div className="space-y-1">
              <Label className="text-[#020817]">Message</Label>
              <Input placeholder="Enter Message" className="py-2" />
            </div>
          </div>
          <div className="space-y-2">
            <Button variant="primary" className="h-9 w-full">
              Create Message
            </Button>

            <DialogClose asChild>
              <Button
                variant="outline"
                className="h-9 w-full bg-[#F4F4F5]"
                onClick={handleCloseClick}
              >
                Close
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>

      {showTabel && (
        <Table className="border border-[#E4E4E7] mt-5">
          <TableHeader>
            <TableRow >
              <TableHead className="text-sm  text-[#71717A]" >
                Message Tile
              </TableHead>
              <TableHead className="text-sm  text-[#71717A]">
                Message Description
              </TableHead>
              <TableHead className="text-sm w-[100px] text-[#71717A]" ></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="text-sm font-normal text-[#09090B]">
                  {item.title}
                </TableCell>
                <TableCell className="text-sm font-normal text-[#09090B]">
                  {item.description}
                </TableCell>
                <TableCell className="text-sm font-normal text-[#09090B] text-center">
                  <Popover>
                    <PopoverTrigger>...</PopoverTrigger>
                    <PopoverContent className="w-fit">
                      {" "}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Label className="h-9">View</Label>
                        </DialogTrigger>

                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle className="text-2xl text-[#020817]">
                              View Quick Message
                            </DialogTitle>
                            <DialogDescription className="font-normal text-[#64748B]">
                              Enter your details below
                            </DialogDescription>
                          </DialogHeader>
                          {showToast ? (
                            <Toast />
                          ) : (
                            <div className="flex flex-col gap-y-4">
                              <div className="space-y-1">
                                <Label className="text-[#020817]">
                                  Title of Quick Message
                                </Label>
                                <Input
                                  placeholder="Decline Customer"
                                  className="py-2"
                                />
                              </div>
                              <div className="space-y-1">
                                <Label className="text-[#020817]">
                                  Message
                                </Label>
                                <Input
                                  placeholder="Slip-on kneepad sleeves (similar to volleyball kneepads)Slip-on kneepad sleeves (similar to volleyball kneepads)."
                                  className="py-2"
                                />
                              </div>
                            </div>
                          )}

                          <div className="space-y-2">
                            {!showToast && (
                              <>
                                <Button
                                  variant="primary"
                                  className="h-9 w-full"
                                  onClick={handleUpdate}
                                >
                                  Update Message
                                </Button>
                                <Button
                                  className="h-9 w-full text-[#EF4444] bg-[#EF44443B] hover:bg-[#ed434350]"
                                  onClick={handleDelete}
                                >
                                  Delete Message
                                </Button>
                              </>
                            )}
                            <DialogClose asChild>
                              <Button
                                variant="outline"
                                className="h-9 w-full bg-[#F4F4F5]"
                                onClick={handleViewClose}
                              >
                                Close
                              </Button>
                            </DialogClose>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
