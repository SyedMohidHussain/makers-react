import Card from "component/homeProjects/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function HomeProjects() {
  const [open, setOpen] = useState(true);
  const [show, setShow] = useState(false);

  const handleCardClick = () => {
    setOpen(false);
    setShow(true);
  };

  const CardData = [
    {
      category: "Published",
      archived: 0,
      itemName: "Kneepad sleeves",
      createdDate: "18 July 11:42 AM",
      description:
        "Slip-on kneepad sleeves (similar to volleyball kneepads) with pockets at the knee....",
      link: "View Project",
    },
    {
      category: "Published",
      archived: 0,
      itemName: "Kneepad sleeves",
      createdDate: "18 July 11:42 AM",
      description:
        "Slip-on kneepad sleeves (similar to volleyball kneepads) with pockets at the knee....",
      link: "View Project",
    },
    {
      category: "Published",
      archived: 0,
      itemName: "Kneepad sleeves",
      createdDate: "18 July 11:42 AM",
      description:
        "Slip-on kneepad sleeves (similar to volleyball kneepads) with pockets at the knee....",
      link: "View Project",
    },
    {
      category: "Published",
      archived: 0,
      itemName: "Kneepad sleeves",
      createdDate: "15 August 2:30 PM",
      description:
        "Slip-on kneepad sleeves (similar to volleyball kneepads) with pockets at the knee....",
      link: "View Project",
    },
    {
      category: "Published",
      archived: 0,
      itemName: "Kneepad sleeves",
      createdDate: "22 June 10:15 AM",
      description:
        "Slip-on kneepad sleeves (similar to volleyball kneepads) with pockets at the knee....",
      link: "View Project",
    },
    {
      category: "Published",
      archived: 0,
      itemName: "Kneepad sleeves",
      createdDate: "22 June 10:15 AM",
      description:
        "Slip-on kneepad sleeves (similar to volleyball kneepads) with pockets at the knee....",
      link: "View Project",
    },
    {
      category: "In Draft",
      archived: 0,
      itemName: "Kneepad sleeves",
      createdDate: "15 August 2:30 PM",
      description:
        "Slip-on kneepad sleeves (similar to volleyball kneepads) with pockets at the knee....",
      link: "View Project",
    },
    {
      category: "Archived",
      archived: 1,
      itemName: "Kneepad sleeves",
      createdDate: "22 June 10:15 AM",
      description:
        "Slip-on kneepad sleeves (similar to volleyball kneepads) with pockets at the knee....",
      link: "View Project",
    },
    {
      category: "Published",
      archived: 1,
      itemName: "Kneepad sleeves",
      createdDate: "22 June 10:15 AM",
      description:
        "Slip-on kneepad sleeves (similar to volleyball kneepads) with pockets at the knee....",
      link: "View Project",
    },
    {
      category: "Published",
      archived: 1,
      itemName: "Kneepad sleeves",
      createdDate: "22 June 10:15 AM",
      description:
        "Slip-on kneepad sleeves (similar to volleyball kneepads) with pockets at the knee....",
      link: "View Project",
    },
  ];

  return (
    <div className="py-[18px] px-[32px] bg-[#F6F6F6]">
      {open && (
        <>
          {" "}
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-2xl font-semibold text-[#09090B]">
                Welcome Back, John!
              </span>
              <span className="text-md font-normal text-[#71717A]">
                Here are your open projects
              </span>
            </div>
            <div className="flex items-center gap-x-2 mr-[14px]">
              <img
                src="../../../assets/roundChart.png"
                alt="Factory Banner"
                className="w-4 h-4 object-cover rounded-t-3xl"
              />
              <p className="text-sm font-bold text-[#71717A]">
                4/10
                <span className="font-normal ml-1">
                  Projects posted this month
                </span>
              </p>
              <p className="text-sm font-medium underline text-[#1975FF]">
                Upgrade Account
              </p>
            </div>
          </div>
          <div className="my-[18px]">
            <p className="text-[18px] font-medium text-[#09090B] my-[18px]">
              Published Projects (
              {
                CardData.filter(
                  (card) => card.category === "Published" && card.archived === 0
                ).length
              }
              )
            </p>
            <Carousel className="mr-9">
              <CarouselContent>
                {CardData.filter(
                  (card) => card.category === "Published" && card.archived === 0
                ).map((card, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/3 lg:basis-1/5"
                    onClick={handleCardClick}
                  >
                    <Card
                      key={index}
                      category={card.category}
                      archived={card.archived}
                      itemName={card.itemName}
                      createdDate={card.createdDate}
                      description={card.description}
                      link={card.link}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {CardData.filter(
                (card) => card.category === "Published" && card.archived === 0
              ).length >= 5 && <CarouselNext />}
            </Carousel>
          </div>
          <div className="my-[18px]">
            <p className="text-[18px] font-medium text-[#09090B] my-[18px]">
              Saved In Drafts (
              {
                CardData.filter(
                  (card) => card.category === "In Draft" && card.archived === 0
                ).length
              }
              )
            </p>
            <Carousel className="mr-9">
              <CarouselContent>
                {CardData.filter(
                  (card) => card.category === "In Draft" && card.archived === 0
                ).map((card, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/3 lg:basis-1/5"
                  >
                    <Card
                      key={index}
                      category={card.category}
                      archived={card.archived}
                      itemName={card.itemName}
                      createdDate={card.createdDate}
                      description={card.description}
                      link={card.link}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {CardData.filter(
                (card) => card.category === "In Draft" && card.archived === 0
              ).length >= 5 && <CarouselNext />}
            </Carousel>
          </div>
          <div className="my-[18px]">
            <p className="text-[18px] font-medium text-[#09090B] my-[18px]">
              Archived Projects (
              {CardData.filter((card) => card.archived === 1).length})
            </p>
            <Carousel className="mr-9">
              <CarouselContent>
                {CardData.filter((card) => card.archived === 1).map(
                  (card, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/3 lg:basis-1/5"
                    >
                      <Card
                        key={index}
                        category={card.category}
                        archived={card.archived}
                        itemName={card.itemName}
                        createdDate={card.createdDate}
                        description={card.description}
                        link={card.link}
                      />
                    </CarouselItem>
                  )
                )}
              </CarouselContent>
              {CardData.filter((card) => card.archived === 1).length >= 5 && (
                <CarouselNext />
              )}
            </Carousel>
          </div>
        </>
      )}
      {show && (
        <div className="flex justify-center">
          <div className="w-[59%] bg-white border rounded-md p-5">
            {/* Header Section */}
            <div className="mb-4">
              <h1 className="text-2xl font-bold">Kneepad sleeves</h1>
              <p className="text-md font-normal text-[#71717A]">
                Created by Kate H, on 18 July 11:42 AM
              </p>
            </div>
            <div className="flex justify-between gap-6 max-h-60">
              <img
                src="../../../assets/product1.png"
                alt="Main product"
                className="w-48 h-60 rounded-sm"
              />
              <img
                src="../../../assets/product2.png"
                alt="Main product"
                className="w-48 h-60 rounded-sm"
              />
              <img
                src="../../../assets/product3.png"
                alt="Main product"
                className="w-48 h-60 rounded-sm"
              />
              <div className="flex flex-col gap-4 w-auto overflow-hidden">
                <img
                  src="../../../assets/product4.png"
                  alt="Product view"
                  className="w-16 h-14 rounded-sm"
                />
                <img
                  src="../../../assets/product5.png"
                  alt="Product view"
                  className="w-16 h-14 rounded-sm"
                />
                <img
                  src="../../../assets/product4.png"
                  alt="Product view"
                  className="w-16 h-14 rounded-sm"
                />
                <img
                  src="../../../assets/product4.png"
                  alt="Product view"
                  className="w-16 h-14 rounded-sm"
                />
              </div>
            </div>
            <div className="my-8">
              <h3 className="text-sm font-medium text-[#09090B]">
                Description
              </h3>
              <p className="text-sm font-normal text-[#71717A] mt-2">
                Slip-on kneepad sleeves (similar to volleyball kneepads) with
                pockets at the knees for removable, low-profile kneepads. The
                sleeve is recycled poly-spandex and the knees are
                abrasion-resistant fabric.
              </p>
              <p className="text-sm font-normal text-[#71717A] mt-4">
                The design and patterns have already been created with samples
                in-hand and fabrics selected. I need a factory for the
                production. The kneepad inserts have already been sourced and
                are on hand. I will have a tech pack available by 7/24.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="p-2 border border-[#E4E4E7] rounded-md">
                <h3 className="text-sm font-medium text-[#09090B]">Industry</h3>
                <p className="text-sm font-normal text-[#71717A]">
                  Furniture & Home Decor
                </p>
              </div>
              <div className="p-2 border border-[#E4E4E7]rounded-md">
                <h3 className="text-sm font-medium text-[#09090B]">Category</h3>
                <p className="text-sm font-normal text-[#71717A]">
                  Intermediate
                </p>
              </div>
              <div className="p-2 border border-[#E4E4E7] rounded-md">
                <h3 className="text-sm font-medium text-[#09090B]">Stage</h3>
                <p className="text-sm font-normal text-[#71717A]">Production</p>
              </div>
              <div className="p-2 border border-[#E4E4E7] rounded-md">
                <h3 className="text-sm font-medium text-[#09090B]">
                  Help me With
                </h3>
                <p className="text-sm font-normal text-[#71717A]">Production</p>
              </div>
              <div className="p-2 border border-[#E4E4E7] rounded-md">
                <h3 className="text-sm font-medium text-[#09090B]">
                  Preferred Location
                </h3>
                <p className="text-sm font-normal text-[#71717A]">Any</p>
              </div>
              <div className="p-2 border border-[#E4E4E7] rounded-md">
                <h3 className="text-sm font-medium text-[#09090B]">Budget</h3>
                <p className="text-sm font-normal text-[#71717A]">
                  Less Than $5000
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-x-3 mt-[23px]">
              <Button
                variant="outline"
                className="text-sm text-[#1975FF] border-[#1975FF] font-medium h-9 rounded-md shadow-sm"
                onClick={onBack}
              >
                Back
              </Button>
              <Button
                variant="primary"
                className="text-sm font-medium h-9 rounded-md shadow-sm"
                onClick={onNext}
              >
                Publish this Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
