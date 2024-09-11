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
import Project from "component/homeProjects/main";

export default function HomeProjects() {
  const [showEmpty, setShowEmpty] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [showOne, setShowOne] = useState(false);

  const handleCardClick = () => {
    setShowAll(false);
    setShowOne(true);
  };

  const handleClick = () => {
    setShowEmpty(false);
    setShowAll(true);
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
    <div className="py-[18px] px-[32px] bg-[#F6F6F6] min-h-screen">
      {showEmpty && (
        <>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold text-[#09090B]">
              Welcome Back, John!
            </span>
            <span className="text-md font-normal text-[#71717A]">
              Here are your open projects
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="max-w-[538px] w-full bg-white border border-[#00000012] p-5 rounded-md shadow-sm">
              <div className="flex justify-center mb-6">
                <img
                  src="../../../assets/basket.png"
                  alt="Empty Folder Illustration"
                  className="w-[306px]"
                />
              </div>
              <h2
                className="text-[28px] font-medium text-left text-[#09090B] mb-6 px-[15px]"
                style={{ lineHeight: "35px", letterSpacing: "0.5px" }}
              >
                Looks like you haven’t posted a project yet
              </h2>
              <p className="text-sm font-normal text-left text-[#71717A] mb-8 px-[15px]">
                This helps your job post stand out to the right candidates. It’s
                the first thing they’ll see, so make it count!
              </p>
              <div className="flex justify-center">
                <Button
                  variant="primary"
                  className="text-xs font-medium h-9 rounded-md shadow-sm px-3 py-1.5 w-full"
                  onClick={handleClick}
                >
                  Post a Project
                </Button>
              </div>
            </div>
          </div>
        </>
      )}

      {showAll && (
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
      {showOne && <Project setShowAll={setShowAll} setShowOne={setShowOne} />}
    </div>
  );
}
