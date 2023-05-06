import React, { FC, useMemo, useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useDebounce } from "./useDebounce";
import {
   currencyFormatter,
   ProductCardProps,
   useProductsContext,
} from "@pethub/components";
import { AnimatePresence, motion } from "framer-motion";
import * as Separator from "@radix-ui/react-separator";
import Image from "next/image";
import * as R from "ramda";
import Link from "next/link";
import dogLogo from "@pethub/assets/dog-food-logo.png";
import catLogo from "@pethub/assets/cat-food-logo.png";
import birdLogo from "@pethub/assets/bird-logo.svg";
import rodentLogo from "@pethub/assets/rodent-food-logo.png";
import fishLogo from "@pethub/assets/fish-food-logo.png";
import { useOnClickOutside } from "./useOnClickOutside";

const CATEGORY_NAMES = {
   foods: "Храни",
   accessories: "Аксесоари",
};

const PET_TYPES_NAMES = {
   dogs: "Кучета",
   cats: "Котки",
   birds: "Птици",
   rodents: "Гризачи",
   fish: "Риби",
};

function getPetLogo(category: string) {
   const pet = category.trim().split("/")[1].trim();
   switch (pet) {
      case "dogs":
         return dogLogo;
      case "cats":
         return catLogo;
      case "birds":
         return birdLogo;
      case "rodents":
         return rodentLogo;
      case "fish":
         return fishLogo;
      default:
         return dogLogo;
   }
}

const SearchBar: FC = () => {
   const [searchTerm, setSearchTerm] = useState("");
   const [showResults, setShowResults] = useState(false);
   const debouncedSearch = useDebounce(searchTerm, 2000, (_) => true);
   const resultsRef = useRef(null!);
   const { products: ALL_PRODUCTS } = useProductsContext();
   useOnClickOutside(resultsRef, (_) => setShowResults(false));

   const searchResults = useMemo(() => {
      const groupByCategory = R.groupBy<ProductCardProps>(
         (res) => `${res.productType}/${res.petType}`
      );

      return !debouncedSearch.length
         ? {}
         : groupByCategory(
              ALL_PRODUCTS.filter((item) =>
                 item.product?.name
                    ?.toLowerCase()
                    ?.includes(debouncedSearch.toLowerCase())
              )
           );
   }, [debouncedSearch]);

   return (
      <div className={`flex-1 px-8 relative z-50`}>
         <MagnifyingGlassIcon
            className={`absolute top-3 left-12`}
            width={20}
            height={20}
         />
         <input
            onChange={(e) => {
               // if (!showResults) setShowResults(true);
               if (e.target.value.length === 0) setShowResults(false);
               else setShowResults(true);
               setSearchTerm(e.target.value);
            }}
            onFocus={(_) => debouncedSearch.length && setShowResults(true)}
            value={searchTerm}
            className={`rounded-full w-full px-6 pl-12 py-1.5 text-lg shadow-sm border border-1 border-gray-200`}
            placeholder={"Search ..."}
            type={"text"}
         />
         <AnimatePresence>
            {showResults && (
               <motion.div
                  layout
                  exit={{
                     height: 0,
                     opacity: 0,
                  }}
                  initial={{
                     height: 0,
                     opacity: 1,
                  }}
                  ref={resultsRef}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ delay: 0.05, duration: 0.3 }}
                  key={"wrapper"}
                  className={`absolute max-h-[500px] overflow-x-hidden overflow-y-scroll flex flex-col gap-1 bg-white shadow-lg border border-gray-100 p-4 w-1/2 rounded-lg z-50 -bottom-1/1 left-8`}
               >
                  {Object.keys(searchResults).length === 0 ? (
                     debouncedSearch.length !== 0 ? (
                        <div className={`text-gray-400 text-md p-2`}>
                           Няма намерени резултати
                        </div>
                     ) : (
                        <div>Зареждане ...</div>
                     )
                  ) : (
                     Object.entries(searchResults)
                        .slice(0, 20)
                        .sort(([cat1], [cat2]) => cat1.localeCompare(cat2))
                        .map(([category, results], i) => (
                           <div
                              className={`flex-col w-full flex m-3 mb-4 items-start gap-1`}
                           >
                              <Link
                                 onClick={(_) => {
                                    setShowResults(false);
                                    setSearchTerm("");
                                 }}
                                 href={`/${category}`}
                              >
                                 <div
                                    className={`text-xl flex items-center gap-2 mb-1`}
                                 >
                                    <Image
                                       src={getPetLogo(category)}
                                       width={30}
                                       height={30}
                                       alt={`category`}
                                    />
                                    <span
                                       className={`hover:opacity-60 duration-200 transition-opacity`}
                                    >
                                       {category
                                          .split("/")
                                          .map((c, i) =>
                                             i === 0
                                                ? CATEGORY_NAMES[
                                                     c as keyof typeof CATEGORY_NAMES
                                                  ]
                                                : PET_TYPES_NAMES[
                                                     c as keyof typeof PET_TYPES_NAMES
                                                  ]
                                          )
                                          .join(" > ")}
                                    </span>
                                 </div>
                              </Link>
                              <AnimatePresence>
                                 {results
                                    .slice(0, 10)
                                    .sort((a, b) =>
                                       a.product.name.localeCompare(
                                          b.product.name
                                       )
                                    )
                                    .filter((p) =>
                                       Boolean(p.product.name.trim().length)
                                    )
                                    .map((result, i) => (
                                       <motion.div
                                          id={result.product.id}
                                          key={result.product.id}
                                          initial={{
                                             height: "0px",
                                             opacity: 0,
                                          }}
                                          className={`p-2 w-full hover:bg-gray-50 cursor-pointer rounded-md transition-colors duration-100`}
                                          animate={{
                                             height: "auto",
                                             opacity: 1,
                                          }}
                                          transition={{
                                             delay: i * 0.04,
                                             duration: 0.04,
                                          }}
                                       >
                                          <Link
                                             onClick={(_) => {
                                                setShowResults(false);
                                                setSearchTerm("");
                                             }}
                                             href={`/${category}/${result.category}/${result.product.id}`}
                                          >
                                             <div
                                                className={`flex justify-between w-full items-center gap-4`}
                                             >
                                                <div
                                                   className={`flex items-center gap-4`}
                                                >
                                                   <Image
                                                      className={`rounded-md`}
                                                      height={20}
                                                      width={20}
                                                      src={result.product.image}
                                                      alt={""}
                                                   />
                                                   <span
                                                      className={`text-gray-600 max-w-[350px] text-md`}
                                                   >
                                                      {`${result.product.name.slice(
                                                         0,
                                                         30
                                                      )}...`}
                                                   </span>
                                                </div>
                                                <span
                                                   className={`text-black font-semibold justify-self-end self-end text-lg`}
                                                >
                                                   {currencyFormatter.format(
                                                      result.product.price
                                                   )}
                                                </span>
                                             </div>
                                          </Link>
                                          <Separator.Root
                                             className={`h-[1px] rounded-full mt-1 w-full bg-gray-200`}
                                             orientation={"horizontal"}
                                          />
                                       </motion.div>
                                    ))}
                              </AnimatePresence>
                           </div>
                        ))
                  )}
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
};

export default SearchBar;
