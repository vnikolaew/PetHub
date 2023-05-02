import React, { FC } from "react";
import { IProductRating } from "@pethub/state";
import Image from "next/image";
import { dateTimeFormatter } from "@pethub/components";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";

export interface ProductReviewCardProps {
   review: IProductRating;
}

const ProductReviewCard: FC<ProductReviewCardProps> = ({ review }) => {
   return (
      <div
         className={`flex w-full justify-between items-start p-6 rounded-xl border border-gray-200 shadow-md gap-4`}
      >
         <div className={`flex items-start gap-4`}>
            <Image
               className={`rounded-xl`}
               height={30}
               width={30}
               src={review.userImage}
               alt={`${review.from} image`}
            />
            <div
               className={`flex text-xl min-w-[300px] flex-col items-start gap-0`}
            >
               <span>
                  {review.from} на {dateTimeFormatter.format(review.timestamp)}
               </span>
               <p className={`text-[1.1rem] text-gray-500`}>
                  {review.reviewText}
               </p>
            </div>
         </div>
         <div>
            <div className={`flex items-center gap-1`}>
               {Array.from({ length: Math.round(review.rating) }).map(
                  (_, i) => (
                     <StarFilledIcon
                        height={20}
                        width={20}
                        color={"orange"}
                        key={i}
                     />
                  )
               )}
               {Array.from({ length: 5 - Math.round(review.rating) }).map(
                  (_, i) => (
                     <StarIcon
                        height={20}
                        width={20}
                        color={"orange"}
                        key={i}
                     />
                  )
               )}
            </div>
         </div>
      </div>
   );
};

export default ProductReviewCard;
