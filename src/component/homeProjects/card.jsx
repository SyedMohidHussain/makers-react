import { cn } from "@/lib/utils";
export default function Card({
  category,
  archived,
  itemName,
  createdDate,
  description,
  link,
}) {
  return (
    <div className="bg-white border border-s-[#E4E4E7] border-r-0 rounded-s-md hover:bg-[#E4E4E7] max-w-[268px]">
      <div className="p-[20px]">
        <p
          className={cn(
            "w-fit px-[10px] py-1 mb-1 text-[10px] font-semibold rounded-md",
            {
              "text-[#008000] bg-[#0080001A]": category === "Published",
              "text-[#804D00] bg-[#F6CE411A]": category === "In Draft",
              "text-[#71717A] bg-[#F7F7F7]": archived == true,
            }
          )}
        >
          {category}
        </p>
        <p
          className="text-md font-medium text-[#09090B]"
          style={{ lineHeight: "32px" }}
        >
          {itemName}
        </p>

        <p
          className="text-[11px] font-normal text-[#71717A] mb-4"
          style={{ lineHeight: "16px" }}
        >
          Created on {createdDate}
        </p>
        <p
          className="text-[10px] font-normal text-[#71717A]"
          style={{ lineHeight: "17px", letterSpacing: "0.2px" }}
        >
          {description}
        </p>

        <a href={link} className="flex gap-x-1.5 mt-4 items-center  ">
          <p
            className="text-xs font-bold text-[#1975FF] hover:underline hover:text-[#0064fa]"
            style={{ lineHeight: "20px" }}
          >
            View Factory
          </p>
        </a>
      </div>
    </div>
  );
}
