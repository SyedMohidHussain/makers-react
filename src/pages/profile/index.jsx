import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carouselCustom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function FactoryProfile() {
  return (
    <div className="my-[39px] mx-[24px] p-[20px] border border-[#E4E4E7] min-h-screen rounded-[30px]">
      <Card className="bg-white rounded-xl rounded-t-3xl shadow-sm">
        <img
          src="../../../assets/factoryImg.png"
          alt="Factory Banner"
          className="w-full h-[427px] object-cover rounded-t-3xl"
        />
        <div className="absolute top-[350px] left-36 flex items-start gap-x-8">
          {/* Round Logo Image */}
          <img
            src="../../../assets/factoryImg.png"
            alt="Dynotex Logo"
            className="w-44 h-44 rounded-full border-[3px] border-white"
          />

          {/* Factory Name and Preferred Badge */}
          <div className="mt-3">
            <h1 className="text-[38px] font-semibold text-white">
              Dynotex Inc.
            </h1>
            <Badge
              variant="secondary"
              className="text-xs font-semibold py-1 px-2 rounded-md bg-[#F4F4F5]"
            >
              <span>
                {" "}
                <img
                  src="../../../assets/checkCloud.png"
                  alt="Dynotex Logo"
                  className="w-4 h-4 rounded-full mr-2"
                />{" "}
              </span>
              PREFERRED
            </Badge>
          </div>
        </div>
        <div className="flex items-center justify-end my-7 mx-9 space-x-4">
          <Button variant="outline" className="text-sm font-medium h-9 [&[hover]>span]:bg-[#F1F5F9]">
            <span className="">
              {" "}
              <img
                src="../../../assets/note.png"
                alt="note"
                className="w-4 h-4 mr-2 text-[#0B57C9]"
              />{" "}
            </span>
            Take Note
          </Button>
          <Button variant="outline" className="text-sm font-medium h-9">
            <span>
              {" "}
              <img
                src="../../../assets/plusSquare.png"
                alt="note"
                className="w-4 h-4 mr-2"
              />{" "}
            </span>
            Save Factory
          </Button>
          <Button variant="outline" className="text-sm font-medium h-9">
            <span>
              {" "}
              <img
                src="../../../assets/messagesSquare.png"
                alt="note"
                className="w-4 h-4 mr-2"
              />{" "}
            </span>
            Message Factory
          </Button>
          <Button variant="primary" className="text-sm font-medium h-9">
            <span>
              {" "}
              <img
                src="../../../assets/email.png"
                alt="note"
                className="w-4 h-3 mr-2"
              />{" "}
            </span>
            Get an Estimate
          </Button>
        </div>
      </Card>

      {/* Information Section */}
      <div className="grid grid-cols-6 gap-8 mt-8">
        <div className="col-span-2 space-y-9">
          <Card className="px-[25px] py-[35px] space-y-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#09090B]" style={{letterSpacing:"1px"}}>
              Information
            </h2>
            <p className="text-[18px] font-medium text-[#71717A]" style={{letterSpacing:"0.5px"}}>
              Established in 1999, Dynotex is a unique full service production
              contractor. We do more than cut and sew.
            </p>
            <p className="text-[18px] font-medium text-[#09090B]">
              Factory Name:{" "}
              <span className="font-normal text-[#71717A]">Dynotex Inc.</span>
            </p>
            <p className="text-[18px] font-medium text-[#09090B]">
              Location:{" "}
              <span className=" font-normal text-[#71717A]">Brooklyn, NY</span>
            </p>
          </Card>
          <Card className="px-[25px] py-[35px] space-y-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#09090B]" style={{letterSpacing:"1px"}}>
              Hours Operation:
            </h2>
            <ul className="flex flex-col gap-y-5" >
              <li className="text-[18px] font-medium text-[#09090B]" style={{letterSpacing:"0.5px"}}> 
                Mon:{" "}
                <span className="font-normal text-[#71717A]">
                  9:00 - 5:00 PM
                </span>
              </li>
              <li className="text-[18px] font-medium text-[#09090B]" style={{letterSpacing:"0.5px"}}>
                Tue:{" "}
                <span className="font-normal text-[#71717A]">
                  9:00 - 5:00 PM
                </span>
              </li>
              <li className="text-[18px] font-medium text-[#09090B]" style={{letterSpacing:"0.5px"}}>
                Wed:{" "}
                <span className="font-normal text-[#71717A]">
                  9:00 - 5:00 PM
                </span>
              </li>
              <li className="text-[18px] font-medium text-[#09090B]" style={{letterSpacing:"0.5px"}}>
                Thu:{" "}
                <span className="font-normal text-[#71717A]">
                  9:00 - 5:00 PM
                </span>
              </li>
              <li className="text-[18px] font-medium text-[#09090B]" style={{letterSpacing:"0.5px"}}>
                Fri:{" "}
                <span className="font-normal text-[#71717A]">
                  9:00 - 5:00 PM
                </span>
              </li>
            </ul>
          </Card>
          <Card className="px-[25px] py-[35px] space-y-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#09090B]" style={{letterSpacing:"1px"}}>Tags:</h2>
            <div className="flex flex-wrap gap-4">
              <Badge
                variant="secondary"
                className="text-xs font-semibold py-1 px-3 rounded-full bg-[#F4F4F5]"
              >
                Cutting
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs font-semibold py-1 px-3 rounded-full bg-[#F4F4F5]"
              >
                Packaging
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs font-semibold py-1 px-3 rounded-full bg-[#F4F4F5]"
              >
                Grading
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs font-semibold py-1 px-3 rounded-full bg-[#F4F4F5]"
              >
                Marking
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs font-semibold py-1 px-3 rounded-full bg-[#F4F4F5]"
              >
                Sewing
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs font-semibold py-1 px-3 rounded-full bg-[#F4F4F5]"
              >
                Pattern-Making
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs font-semibold py-1 px-3 rounded-full bg-[#F4F4F5]"
              >
                Samplemaking
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs font-semibold py-1 px-3 rounded-full bg-[#F4F4F5]"
              >
                Fitting Evaluation
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs font-semibold py-1 px-3 rounded-full bg-[#F4F4F5]"
              >
                Techpak Creation
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs font-semibold py-1 px-3 rounded-full bg-[#F4F4F5]"
              >
                Pick and Pack (Small Scale)
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs font-semibold py-1 px-3 rounded-full bg-[#F4F4F5]"
              >
                Staff Pick
              </Badge>
            </div>
          </Card>
          <Card className="px-[25px] py-[35px] space-y-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#09090B]" style={{letterSpacing:"1px"}}>
              Equipment:
            </h2>
            <div className="flex flex-wrap gap-4">
              <Badge
                variant="secondary"
                className="text-xs font-semibold py-1 px-3 rounded-full bg-[#F4F4F5]"
              >
                Cutting
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs font-semibold py-1 px-3 rounded-full bg-[#F4F4F5]"
              >
                Packaging
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs font-semibold py-1 px-3 rounded-full bg-[#F4F4F5]"
              >
                Grading
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs font-semibold py-1 px-3 rounded-full bg-[#F4F4F5]"
              >
                Marking
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs font-semibold py-1 px-3 rounded-full bg-[#F4F4F5]"
              >
                Sewing
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs font-semibold py-1 px-3 rounded-full bg-[#F4F4F5]"
              >
                Pattern-Making
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs font-semibold py-1 px-3 rounded-full bg-[#F4F4F5]"
              >
                Samplemaking
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs font-semibold py-1 px-3 rounded-full bg-[#F4F4F5]"
              >
                Fitting Evaluation
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs font-semibold py-1 px-3 rounded-full bg-[#F4F4F5]"
              >
                Techpak Creation
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs font-semibold py-1 px-3 rounded-full bg-[#F4F4F5]"
              >
                Pick and Pack (Small Scale)
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs font-semibold py-1 px-3 rounded-full bg-[#F4F4F5]"
              >
                Staff Pick
              </Badge>
            </div>
          </Card>
          <Card className="px-[25px] py-[35px] space-y-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#09090B]" style={{letterSpacing:"1px"}}>
              Capabilities:
            </h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <img
                      src="../../../assets/bulb.png"
                      alt="Dynotex Logo"
                      className="w-8 h-8 rounded-sm "
                    />
                    <p className="text-[20px] font-semibold text-[#09090B]">Ideation </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-md font-normal text-[#71717A] ml-[44px]" style={{letterSpacing:"0.3px"}}>
                  Over 30 years experience in textiles and clothing manufacture.
                  We offer suggestions to enhance quality, lower cost, and/or
                  consistency of production control.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <img
                      src="../../../assets/pattern.png"
                      alt="Dynotex Logo"
                      className="w-8 h-8 rounded-sm "
                    />
                    <p className="text-[20px] font-semibold text-[#09090B]">Pattern - Making </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-md font-normal text-[#71717A] ml-[44px]" style={{letterSpacing:"0.3px"}}>
                  We have in house pattern maker that can...
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <img
                      src="../../../assets/material.png"
                      alt="Dynotex Logo"
                      className="w-8 h-8 rounded-sm "
                    />
                    <p className="text-[20px] font-semibold text-[#09090B]">Materials </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-md font-normal text-[#71717A] ml-[44px]" style={{letterSpacing:"0.3px"}}>
                  We can help source materials globally if ...
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <img
                      src="../../../assets/scissor.png"
                      alt="Dynotex Logo"
                      className="w-8 h-8 rounded-sm "
                    />
                    <p className="text-[20px] font-semibold text-[#09090B]">Sample - Making </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-md font-normal text-[#71717A] ml-[44px]" style={{letterSpacing:"0.3px"}}>
                  We have in house sample hand that will m...
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <img
                      src="../../../assets/hammer.png"
                      alt="Dynotex Logo"
                      className="w-8 h-8 rounded-sm "
                    />
                    <p className="text-[20px] font-semibold text-[#09090B]">Tooling </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-md font-normal text-[#71717A] ml-[44px]" style={{letterSpacing:"0.3px"}}>
                  We can help to acquire trimmings. We can...
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <img
                      src="../../../assets/gear.png"
                      alt="Dynotex Logo"
                      className="w-8 h-8 rounded-sm "
                    />
                    <p className="text-[20px] font-semibold text-[#09090B]">Production</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-md font-normal text-[#71717A] ml-[44px]" style={{letterSpacing:"0.3px"}}>
                  Mass production is our main business. We...
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>

        <div className="col-span-4 space-y-9 ">
          {/* About Section */}
          <Card className="px-[25px] py-[35px] space-y-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#09090B]">About</h2>
            <p className="text-[18px] font-normal text-[#71717A]">
              What we can do for you: 1. Pattern making and sample making. 2. In
              house cutting room. 3. Can provide grading & marking service. 4.
              Handle both woven and knitted products. 5. Handles garment and
              accessories. 6. Experienced in silk and stretch fabrics. 7. 100%
              inspection of all products we made. 8.
            </p>
            <p className="text-[18px] font-normal text-[#71717A]">
              Have ample space to allow a smooth work flow. We can even provide
              pick & pack service (small scale only) 9. Do not set a minimum but
              quote different price for different quantity. Ideal quantity is
              300 pcs per style but recommend not lower than 100 pcs. We... ...
              (more)
            </p>
          </Card>

          {/* Media Section */}
          <Card className="px-[25px] py-[35px] space-y-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#09090B]">Media</h2>
            <div className="flex flex-col gap-y-[26px]">
              <img
                src="../../../assets/person1.png"
                alt="Factory Media"
                className="w-full h-[467px] object-cover rounded-lg"
              />
              <Carousel>
                <CarouselContent className="gap-x-2">
                  <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                    <img
                      src="../../../assets/person2.png"
                      alt="Factory Media"
                      className="w-full h-36 object-cover rounded-lg"
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                    <img
                      src="../../../assets/person3.png"
                      alt="Factory Media"
                      className="w-full h-36 object-cover rounded-lg"
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                    <img
                      src="../../../assets/person1.png"
                      alt="Factory Media"
                      className="w-full h-36 object-cover rounded-lg"
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                    <img
                      src="../../../assets/person2.png"
                      alt="Factory Media"
                      className="w-full h-36 object-cover rounded-lg"
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                    <img
                      src="../../../assets/person3.png"
                      alt="Factory Media"
                      className="w-full h-36 object-cover rounded-lg"
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                    <img
                      src="../../../assets/person1.png"
                      alt="Factory Media"
                      className="w-full h-36 object-cover rounded-lg"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                {/* <CarouselNext /> */}
              </Carousel>
            </div>
          </Card>

          {/* Reviews Section */}
          <Card className="px-[25px] py-[35px] shadow-sm">
            <h2 className="text-2xl font-semibold text-[#09090B] mb-[40px]">
              Media
            </h2>
            <div className="flex items-center">
              <div className="flex flex-col w-1/3">
                <span
                  className="text-[40px] font-bold text-[#09090B]"
                  style={{ lineHeight: "20px" }}
                >
                  4.7
                </span>
                <img
                  src="../../../assets/5Star.png"
                  alt="rating"
                  className="w-36 h-5 mt-8"
                />
                <span className="text-xs text-nowrap font-normal text-[#71717A] mt-8">
                  (578 Reviews)
                </span>
              </div>
              <div className="flex flex-col w-2/3 gap-2">
                <div className="flex gap-x-6 items-center">
                  <span className="text-xs text-nowrap font-normal text-[#09090B] min-w-[40px] text-right">
                    5 stars
                  </span>
                  <Progress value={100}  />
                  <span className="text-xs font-normal text-[#09090B] min-w-[24px]">
                    488
                  </span>
                </div>
                <div className="flex gap-x-6 items-center">
                  <span className="text-xs text-nowrap font-normal text-[#09090B] min-w-[40px] text-right">
                    4 stars
                  </span>
                  <Progress value={33} />
                  <span className="text-xs font-normal text-[#09090B] min-w-[24px]">
                    74
                  </span>
                </div>
                <div className="flex gap-x-6 items-center">
                  <span className="text-xs text-nowrap font-normal text-[#09090B] min-w-[40px] text-right">
                    3 stars
                  </span>
                  <Progress value={5} />
                  <span className="text-xs font-normal text-[#09090B] min-w-[24px]">
                    14
                  </span>
                </div>
                <div className="flex gap-x-6 items-center">
                  <span className="text-xs text-nowrap font-normal text-[#09090B] min-w-[40px] text-right">
                    2 stars
                  </span>
                  <Progress value={0} />
                  <span className="text-xs font-normal text-[#09090B] min-w-[24px]">
                    0
                  </span>
                </div>
                <div className="flex gap-x-6 items-center">
                  <span className="text-xs text-nowrap font-normal text-[#09090B] min-w-[40px] text-right">
                    1 stars
                  </span>
                  <Progress value={0} />
                  <span className="text-xs font-normal text-[#09090B] min-w-[24px]">
                    0
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-end my-10">
              <Button variant="primary">Write a Review</Button>
            </div>
            <Separator className="my-10" />

            <div className="space-y-5">
              <Card className="p-5 space-y-3 shadow-sm">
                <span className="text-xs font-semibold text-[#858585] ">
                  Jan 20, 2024
                </span>

                <div className="flex gap-x-2">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <img
                        key={index}
                        src="../../../assets/star.png"
                        alt="rating"
                        className="w-4 h-4"
                      />
                    ))}
                </div>
                <div className="flex items-center gap-x-3">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback className="text-sm font-semibold text-[#1975FF]">
                      ES
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-[#09090B]">
                    Emyine Smith
                  </span>
                </div>
                <p className="text-sm font-medium text-[#09090B]">Great Help</p>
                <p className="text-sm font-normal text-[#71717A]">
                  Although they couldn't help me with my project. I was referred
                  to several possible companies who could. To me, sharing
                  knowledge and selflessly helping other are great qualities I
                  look for in business partners. Hopefully, we will be able to
                  work together I the future.
                </p>
              </Card>
              <Card className="p-5 space-y-3 shadow-sm">
                <span className="text-xs font-semibold text-[#858585] ">
                  Jan 20, 2024
                </span>

                <div className="flex gap-x-2">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <img
                        key={index}
                        src="../../../assets/star.png"
                        alt="rating"
                        className="w-4 h-4"
                      />
                    ))}
                </div>
                <div className="flex items-center gap-x-3">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback className="text-sm font-semibold text-[#1975FF]">
                      ES
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-[#09090B]">
                    Emyine Smith
                  </span>
                </div>
                <p className="text-sm font-medium text-[#09090B]">Great Help</p>
                <p className="text-sm font-normal text-[#71717A]">
                  Although they couldn't help me with my project. I was referred
                  to several possible companies who could. To me, sharing
                  knowledge and selflessly helping other are great qualities I
                  look for in business partners. Hopefully, we will be able to
                  work together I the future.
                </p>
              </Card>
              <Card className="p-5 space-y-3 shadow-sm">
                <span className="text-xs font-semibold text-[#858585] ">
                  Jan 20, 2024
                </span>

                <div className="flex gap-x-2">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <img
                        key={index}
                        src="../../../assets/star.png"
                        alt="rating"
                        className="w-4 h-4"
                      />
                    ))}
                </div>
                <div className="flex items-center gap-x-3">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback className="text-sm font-semibold text-[#1975FF]">
                      ES
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-[#09090B]">
                    Emyine Smith
                  </span>
                </div>
                <p className="text-sm font-medium text-[#09090B]">Great Help</p>
                <p className="text-sm font-normal text-[#71717A]">
                  Although they couldn't help me with my project. I was referred
                  to several possible companies who could. To me, sharing
                  knowledge and selflessly helping other are great qualities I
                  look for in business partners. Hopefully, we will be able to
                  work together I the future.
                </p>
              </Card>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
