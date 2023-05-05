import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import React, { FC, useState } from "react";

export interface RateProductSectionProps {
   onRate: (rating: number, comment: string) => void;
}

const RateProductSection: FC<RateProductSectionProps> = ({ onRate }) => {
   const [ratingHovered, setRatingHovered] = useState(0);
   const [rating, setRating] = useState<number>(0);
   const [comment, setComment] = useState("");

   return (
      <div className={`flex flex-col items-center gap-4`}>
         <div className={`flex items-center gap-1`}>
            {Array.from({ length: 5 }).map((_, i) => (
               <div
                  key={i}
                  onClick={(_) => setRating(i + 1)}
                  onMouseEnter={(_) => setRatingHovered(i + 1)}
                  onMouseLeave={(_) => setRatingHovered(0)}
                  className={`w-[40px] h-[40px] cursor-pointer`}
               >
                  {ratingHovered !== 0 ? (
                     i + 1 <= ratingHovered ? (
                        <StarFilledIcon
                           fill={"orange"}
                           className={`bg-orange peer peer:`}
                           color={"orange"}
                           height={40}
                           width={40}
                           key={i}
                        />
                     ) : (
                        <StarIcon
                           fill={"orange"}
                           className={`bg-orange peer peer:`}
                           color={"orange"}
                           height={40}
                           width={40}
                           key={i}
                        />
                     )
                  ) : i + 1 <= rating ? (
                     <StarFilledIcon
                        fill={"orange"}
                        className={`bg-orange peer peer:`}
                        color={"orange"}
                        height={40}
                        width={40}
                        key={i}
                     />
                  ) : (
                     <StarIcon
                        fill={"orange"}
                        className={`bg-orange peer peer:`}
                        color={"orange"}
                        height={40}
                        width={40}
                        key={i}
                     />
                  )}
               </div>
            ))}
         </div>
         <div
            className={`flex mt-4 w-full self-start flex-col gap-2 items-start justify-center`}
         >
            <h2 className={`text-xl`}>Остави коментар: </h2>
            <textarea
               placeholder={""}
               className={`w-full min-h-[60px] p-4`}
               onChange={(e) => setComment(e.target.value)}
               value={comment}
            />
         </div>
         {(rating !== 0 || !!comment.length) && (
            <button
               onClick={(_) => onRate(rating, comment)}
               className={`bg-whiskey mt-2 w-full hover:opacity-80 duration-200 transition-opacity shadow-md font-semibold px-8 py-1 rounded-lg text-black text-xl`}
            >
               Оцени
            </button>
         )}
      </div>
   );
};

export default RateProductSection;
