import Card from "component/projects/card";

export default function ExistingProjects() {
  const CardData = [
    {
      category: "Apparel & Accessories",
      companyName: "Dynotex Inc.",
      createdDate: "18 July 11:42 AM",
      description:
        "What we can do for you: 1. Pattern making and sample making. 2. In-house cutting room...",
      link: "View Factory",
      imageUrl: "../../../assets/card.png",
    },
    {
      category: "Electronics",
      companyName: "TechWorld",
      createdDate: "15 August 2:30 PM",
      description:
        "Services offered: 1. Prototyping. 2. Custom electronics design and development.",
      link: "View Factory",
      imageUrl: "../../../assets/card.png",
    },
    {
      category: "Furniture",
      companyName: "Modern Interiors",
      createdDate: "22 June 10:15 AM",
      description:
        "Our offerings: 1. Custom furniture design. 2. Sustainable material sourcing.",
      link: "View Factory",
      imageUrl: "../../../assets/card.png",
    },
    {
      category: "Electronics",
      companyName: "TechWorld",
      createdDate: "15 August 2:30 PM",
      description:
        "Services offered: 1. Prototyping. 2. Custom electronics design and development.",
      link: "View Factory",
      imageUrl: "../../../assets/card.png",
    },
    {
      category: "Furniture",
      companyName: "Modern Interiors",
      createdDate: "22 June 10:15 AM",
      description:
        "Our offerings: 1. Custom furniture design. 2. Sustainable material sourcing.",
      link: "View Factory",
      imageUrl: "../../../assets/card.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F6F6]">
      <div className="grid grid-cols-5 gap-3  ">
        {CardData.map((card, index) => (
          <Card
            key={index}
            category={card.category}
            companyName={card.companyName}
            createdDate={card.createdDate}
            description={card.description}
            link={card.link}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
