// export default function Card({
//   category,
//   companyName,
//   createdDate,
//   description,
//   link,
//   imageUrl,
// }) {
//   return (
//     <div className="bg-white border border-s-[#E4E4E7] border-r-0 rounded-s-md">
//       <div className="rounded-t-md">
//         <img
//           src={imageUrl}
//           alt="Main product"
//           className="w-full h-[175px] cursor-pointer rounded-tl-md"
//         />
//       </div>
//       <div className="p-[18px]">
//         <p className="w-fit px-[10px] py-1 text-[10px] font-semibold text-[#008000] bg-[#0080001A] rounded-md">
//           {category}
//         </p>
//         <p
//           className="text-md font-medium text-[#09090B]"
//           style={{ lineHeight: "32px" }}
//         >
//           {companyName}
//         </p>
//         <p
//           className="text-[11px] font-normal text-[#71717A] mb-2"
//           style={{ lineHeight: "16px" }}
//         >
//           Created on {createdDate}
//         </p>
//         <p
//           className="text-[10px] font-normal text-[#71717A]"
//           style={{ lineHeight: "17px", letterSpacing: "0.2px" }}
//         >
//           {description}
//         </p>

//         <a
//           href={link}
//           className="flex gap-x-1.5 mt-1 items-center hover:text-underline"
//         >
//           <p
//             className="text-xs font-bold text-[#1975FF] "
//             style={{ lineHeight: "20px" }}
//           >
//             View Factory
//           </p>
//           <img
//             src="../../../assets/rightArrow.png"
//             alt="Arrow"
//             className="w-3 h-2 cursor-pointer"
//           />
//         </a>
//       </div>
//     </div>
//   );
// }

export default function BlogCard({
  category,
  companyName,
  createdDate,
  description,
  link,
  imageUrl,
}) {
  return (
    <div className="bg-white border border-s-[#E4E4E7] border-r-0 rounded-s-md">
      <div className="rounded-t-md">
        <img
          src={imageUrl}
          alt="Main product"
          className="w-full h-[175px] cursor-pointer rounded-tl-md"
        />
      </div>
      <div className="p-[18px]">
        <p
          className="text-md font-medium text-[#09090B]"
          style={{ lineHeight: "32px" }}
        >
          {companyName}
        </p>
        <p
          className="text-[11px] font-normal text-[#71717A] mb-2"
          style={{ lineHeight: "16px" }}
        >
          Created on {createdDate}
        </p>
        <p className="w-fit px-[10px] py-1 text-[10px] mb-1.5 font-semibold text-[#1975FF] bg-[#f2f6fb] rounded-md">
          {category}
        </p>

        <p
          className="text-[10px] font-normal text-[#71717A]"
          style={{ lineHeight: "17px", letterSpacing: "0.2px" }}
        >
          {description}
        </p>

        <div className="flex justify-end mt-1 items-center">
          <a href={link}>
            <img
              src="../../../assets/rightArrow.png"
              alt="Main product"
              className="w-3 h-2 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
