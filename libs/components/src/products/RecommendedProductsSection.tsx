import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import { currencyFormatter, ProductCardProps } from "@pethub/components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import * as Separator from "@radix-ui/react-separator";

export interface RecommendedProductsSectionProps {
   products: ProductCardProps[];
}

const RecommendedProductsSection: FC<RecommendedProductsSectionProps> = ({
   products,
}) => {
   const [xOffset, setXOffset] = useState(0);
   const [scope, animate] = useAnimate();

   const INFINITE_PRODUCTS = Array.from({ length: 10 }).flatMap(
      (_) => products
   );

   useEffect(() => {
      animate(
         "div",
         {
            transform: `translateX(-${xOffset}px)`,
         },
         { type: "tween" }
      );
   }, [xOffset]);

   return (
      <div
         className={`self-center shadow-md bg-white mt-4 flex  items-center rounded-md  gap-4 justify-center`}
      >
         <ChevronLeftIcon
            onClick={(_) => setXOffset((o) => Math.max(0, o - 250))}
            className={`cursor-pointer ml-2 transition-opacity duration-200 hover:opacity-60`}
            height={40}
            width={40}
         />
         <div
            ref={scope}
            className={`flex p-6 rounded-md border border-1 border-gray-100 overflow-hidden max-w-[1000px] mt-2 self-center items-center gap-8`}
         >
            {INFINITE_PRODUCTS.map((p, i) => (
               <motion.div
                  onDragEnd={(e, info) => {
                     const cw = (e.target! as any).parentNode!.offsetWidth;
                     const contentWidth = (e.target as any).offsetWidth;
                     const currPosition = info.point.x;
                     const endPosition = cw - contentWidth;
                     if (currPosition > 0) {
                        setXOffset(0);
                     } else if (currPosition < endPosition) {
                        setXOffset(endPosition);
                     } else setXOffset(-currPosition);
                  }}
                  dragElastic={0.2}
                  drag={"x"}
                  className={`min-w-[250px]`}
                  key={i}
               >
                  <Link
                     href={`/${p.productType}/${p.petType}/${p.category}/${p.product.id}`}
                  >
                     <div
                        // style={{ transform: `translateX(-${xOffset}px)` }}
                        className={`flex relative gap-4 flex-col items-center justify-center`}
                        key={i}
                     >
                        {(p as any).discount !== undefined && (
                           <div
                              className={`absolute flex items-center justify-center p-2 -top-2 -right-2 bg-red-500 text-white text-sm w-10 h-10 rounded-full`}
                           >
                              -{Math.round((p as any).discount * 100)}%
                           </div>
                        )}
                        <Image
                           height={120}
                           width={120}
                           src={p.product.image}
                           alt={p.product.name}
                        />
                        <h2 className={`text-md text-center line-clamp-2`}>
                           {p.product.name}...
                        </h2>
                        <h2
                           className={`font-semibold justify-self-end self-end text-2xl`}
                        >
                           {currencyFormatter.format(
                              p.product.price *
                                 (1 - ((p.product as any).discount ?? 0))
                           )}{" "}
                           {(p.product as any).discount !== undefined && (
                              <span
                                 className={`line-through font-thin text-[1.2rem] text-gray-400`}
                              >
                                 {currencyFormatter.format(p.product.price)}
                              </span>
                           )}
                        </h2>
                     </div>
                  </Link>
                  <Separator.Root
                     className={`w-full shadow-md rounded-md shadow-raw-sienna bg-raw-sienna mt-2 h-[1px]`}
                     orientation={"horizontal"}
                  />
               </motion.div>
            ))}
         </div>
         <ChevronRightIcon
            onClick={(_) => setXOffset((o) => o + 250)}
            className={`cursor-pointer mr-2 transition-opacity duration-200 hover:opacity-60`}
            color={"black"}
            height={40}
            width={40}
         />
      </div>
   );
};

export default RecommendedProductsSection;
