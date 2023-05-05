import React, { FC, forwardRef, Fragment, useMemo, useState } from "react";
import {
   Breadcrumb,
   BreadcrumbSegment,
   currencyFormatter,
   currencyFormatterRounded,
   SelectInput,
} from "@pethub/components";
import * as Accordion from "@radix-ui/react-accordion";
import * as Slider from "@radix-ui/react-slider";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as Separator from "@radix-ui/react-separator";
import {
   ArrowRightIcon,
   CheckIcon,
   ChevronDownIcon,
   StarFilledIcon,
   StarIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { IProductDetails } from "@pethub/state";
import FilterLogo from "../Logos/FilterLogo";
import SortLogo from "../Logos/SortLogo";
import SadFaceLogo from "../Logos/SadFaceLogo";

export interface ProductsGenericPageProps {
   products: IProductDetails[];
   page: number;
   basePath: string;
   breadcrumbs: BreadcrumbSegment[];
}

export const ProductsGenericPage: FC<ProductsGenericPageProps> = ({
   products,
   page,
   basePath,
   breadcrumbs,
}) => {
   const [openedTabs, setOpenedTabs] = useState<string[]>([]);
   const [ratings, setRatings] = useState<number[]>([]);
   const [filteredProducts, setFilteredProducts] = useState<IProductDetails[]>(
      () => products
   );
   const maxProductPrice = useMemo(
      () => Math.max(...products.map((p) => Math.round(p.price))),
      [products]
   );
   const [priceRange, setPriceRange] = useState<number[]>(() => [
      Math.round(maxProductPrice / 3),
      Math.round((maxProductPrice * 2) / 3),
   ]);

   const handleToggleTab = (tab: string) => {
      setOpenedTabs((tabs) =>
         tabs.some((t) => t === tab)
            ? tabs.filter((t) => t !== tab)
            : [...tabs, tab]
      );
   };

   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={
               breadcrumbs ?? [
                  { label: "PetHub", path: "/" },
                  { label: "Храна", path: "foods" },
                  { label: "Кучета", path: "dogs" },
                  { label: "Суха храна", path: "dry-food" },
               ]
            }
         />
         <section className={`flex mt-8 items-start gap-8`}>
            <div className={`flex flex-col mt-2 items-start gap-2`}>
               <h2 className={`flex items-center gap-2`}>
                  <FilterLogo color={"black"} size={20} />
                  <span className={`text-xl`}>Филтрирай</span>
               </h2>
               <div
                  className={`border border-gray-100 mt-0 rounded-lg border-2`}
               >
                  <Accordion.Root type={"multiple"}>
                     <Accordion.Item value={"1"}>
                        <Accordion.Header>
                           <AccordionTrigger
                              onClick={(_) => handleToggleTab("1")}
                           >
                              Големина на породата
                           </AccordionTrigger>
                        </Accordion.Header>
                        <AnimatePresence>
                           {openedTabs.some((t) => t === "1") && (
                              <AccordionContent>
                                 Дребни, средни, едри
                              </AccordionContent>
                           )}
                        </AnimatePresence>
                     </Accordion.Item>
                     <Accordion.Item value={"2"}>
                        <Accordion.Header>
                           <AccordionTrigger
                              onClick={(_) => handleToggleTab("2")}
                           >
                              Марка
                           </AccordionTrigger>
                        </Accordion.Header>
                        <AnimatePresence>
                           {openedTabs.some((t) => t === "2") && (
                              <AccordionContent>1,2,3</AccordionContent>
                           )}
                        </AnimatePresence>
                     </Accordion.Item>
                     <Accordion.Item value={"3"}>
                        <Accordion.Header>
                           <AccordionTrigger
                              onClick={(_) => handleToggleTab("3")}
                           >
                              Цена
                           </AccordionTrigger>
                        </Accordion.Header>
                        <AnimatePresence>
                           {openedTabs.some((t) => t === "3") && (
                              <AccordionContent>
                                 <div
                                    className={`w-full flex items-center justify-between`}
                                 >
                                    <span>
                                       {currencyFormatterRounded.format(0)}
                                    </span>
                                    <span>
                                       {currencyFormatterRounded.format(
                                          maxProductPrice
                                       )}
                                    </span>
                                 </div>
                                 <Slider.Root
                                    className={`relative flex items-center select-none touch-none w-full h-[20px]`}
                                    step={5}
                                    max={maxProductPrice}
                                    value={priceRange}
                                    onValueChange={setPriceRange}
                                    defaultValue={[50, 100]}
                                 >
                                    <Slider.Track
                                       className={`bg-black rounded-full h-[3px] relative flex-1`}
                                    >
                                       <Slider.Range
                                          className={`absolute rounded-full h-full bg-black`}
                                       />
                                    </Slider.Track>
                                    <Slider.Thumb
                                       className={`block rounded-full shadow-md w-3 h-3 bg-white`}
                                    />
                                    <Slider.Thumb
                                       className={`block rounded-full shadow-md w-3 h-3 bg-white`}
                                    />
                                 </Slider.Root>
                                 <div
                                    className={`w-full mt-2 flex items-center justify-center`}
                                 >
                                    <span>
                                       от{" "}
                                       {currencyFormatterRounded.format(
                                          priceRange[0]
                                       )}
                                    </span>
                                    <span>
                                       до{" "}
                                       {currencyFormatterRounded.format(
                                          priceRange[1]
                                       )}
                                    </span>
                                 </div>
                              </AccordionContent>
                           )}
                        </AnimatePresence>
                     </Accordion.Item>
                     <Accordion.Item value={"4"}>
                        <Accordion.Header>
                           <AccordionTrigger
                              onClick={(_) => handleToggleTab("4")}
                           >
                              Рейтинг
                           </AccordionTrigger>
                        </Accordion.Header>
                        <AnimatePresence>
                           {openedTabs.some((t) => t === "4") && (
                              <AccordionContent>
                                 <div
                                    className={`flex flex-col items-start gap-2`}
                                 >
                                    {Array.from({ length: 6 }).map((_, i) => (
                                       <div
                                          className={`flex items-center justify-start gap-2`}
                                       >
                                          <Checkbox.Root
                                             onCheckedChange={(c) => {
                                                setRatings((r) =>
                                                   c
                                                      ? [...r, i]
                                                      : r.filter((r) => r !== i)
                                                );
                                             }}
                                             value={i}
                                             className={`bg-white rounded-s items-center justify-center shadow-md w-4 h-4`}
                                          >
                                             <Checkbox.Indicator>
                                                <CheckIcon />
                                             </Checkbox.Indicator>
                                          </Checkbox.Root>
                                          <div
                                             className={`flex items-center gap-1`}
                                          >
                                             {Array.from({ length: i }).map(
                                                (_, i) => (
                                                   <StarFilledIcon
                                                      key={i}
                                                      color={"orange"}
                                                   />
                                                )
                                             )}
                                             {Array.from({ length: 5 - i }).map(
                                                (_, i) => (
                                                   <StarIcon
                                                      key={i}
                                                      color={"orange"}
                                                   />
                                                )
                                             )}
                                             <span>
                                                (
                                                {
                                                   products.filter(
                                                      (p) =>
                                                         Math.round(
                                                            p.averageRating
                                                         ) === i
                                                   ).length
                                                }
                                                )
                                             </span>
                                          </div>
                                       </div>
                                    ))}
                                 </div>
                              </AccordionContent>
                           )}
                        </AnimatePresence>
                     </Accordion.Item>
                  </Accordion.Root>
               </div>
               <div>
                  <button
                     onClick={(_) => {
                        setFilteredProducts(
                           products.filter(
                              (p) =>
                                 p.price >= priceRange[0] &&
                                 p.price <= priceRange[1] &&
                                 ratings.some(
                                    (r) => Math.round(p.averageRating) === r
                                 )
                           )
                        );
                     }}
                     type={"submit"}
                     className={`flex mx-auto text-xl hover:opacity-80 transition-all duration-200 shadow-md my-5 px-10 py-1 bg-cornflower-blue text-white border-2 border-cornflower-blue rounded-lg outline-none items-center gap-2`}
                  >
                     Филтритай
                  </button>
               </div>
            </div>
            <div
               className={`flex-1 w-full flex items-center flex-col gap-12 justify-center text-xl`}
            >
               <div className={`grid gap-12 place-center grid-cols-4`}>
                  {filteredProducts.length === 0 ? (
                     <div
                        className={`text-2xl flex items-center font-semibold gap-4 my-16 col-span-4 text-center w-full text-gray-500`}
                     >
                        <span>Няма намерени продукти! </span>
                        <SadFaceLogo color={"black"} size={30} />
                     </div>
                  ) : (
                     <Fragment>
                        {filteredProducts
                           .slice((page - 1) * 8, page * 8)
                           .map((product, i) => (
                              <Fragment key={i}>
                                 <Link href={`${basePath}/${product.id}`}>
                                    <div
                                       className={`flex relative gap-4 flex-col items-center justify-center`}
                                    >
                                       {(product as any).discount !==
                                          undefined && (
                                          <div
                                             className={`absolute flex items-center justify-center p-2 -top-2 -right-2 bg-red-500 text-white text-sm w-10 h-10 rounded-full`}
                                          >
                                             -
                                             {Math.round(
                                                (product as any).discount * 100
                                             )}
                                             %
                                          </div>
                                       )}
                                       <Image
                                          height={120}
                                          width={120}
                                          src={product.image}
                                          alt={`${product.name} logo`}
                                       />
                                       <h2 className={`text-lg`}>
                                          {product.name}
                                       </h2>
                                       <span
                                          className={`font-semibold self-end`}
                                       >
                                          {currencyFormatter.format(
                                             product.price
                                          )}
                                       </span>
                                    </div>
                                 </Link>
                              </Fragment>
                           ))}
                     </Fragment>
                  )}
               </div>
               <div className={`flex items-center gap-4`}>
                  {page !== 1 && (
                     <Fragment>
                        <span
                           className={`text-xl hover:underline text-blue-700`}
                        >
                           <Link href={`${basePath}?page=${page - 1}`}>
                              Предишна
                           </Link>
                        </span>
                        <Separator.Root
                           orientation={"vertical"}
                           className={`h-[30px] bg-black w-[1.5px]`}
                        />
                     </Fragment>
                  )}
                  {Array.from({ length: filteredProducts.length / 8 + 1 }).map(
                     (_, i) => (
                        <Fragment key={i}>
                           <span
                              className={`text-xl ${
                                 i + 1 === page
                                    ? "text-black font-bold"
                                    : "text-blue-700 hover:underline"
                              }`}
                           >
                              <Link
                                 href={`${basePath}?page=${i + 1}`}
                                 className={`${
                                    i + 1 === page ? "cursor-default" : ""
                                 }`}
                              >
                                 {i + 1}
                              </Link>
                           </span>
                           <Separator.Root
                              orientation={"vertical"}
                              className={`h-[30px] bg-black w-[1.5px]`}
                           />
                        </Fragment>
                     )
                  )}

                  {page !== 5 && (
                     <span className={`text-xl hover:underline text-blue-700`}>
                        <Link href={`${basePath}?page=${page + 1}`}>
                           Следваща
                        </Link>
                     </span>
                  )}
               </div>
            </div>
            <div className={`mt-2`}>
               <div className={`flex flex-col items-start gap-2`}>
                  <h2 className={`flex items-center gap-2`}>
                     <SortLogo color={"black"} size={20} />
                     <span className={`text-xl`}>Сортирай</span>
                  </h2>
                  <SelectInput
                     placeholder={"Подреждане по подразбиране"}
                     options={[
                        {
                           label: "Най-продавани",
                           value: "Best-sellers",
                        },
                        {
                           label: (
                              <span>
                                 {" "}
                                 Скъпи <ArrowRightIcon
                                    className={`inline`}
                                 />{" "}
                                 евтини
                              </span>
                           ),
                           value: "Most expensive",
                        },
                        {
                           label: (
                              <span>
                                 {" "}
                                 Евтини <ArrowRightIcon
                                    className={`inline`}
                                 />{" "}
                                 скъпи
                              </span>
                           ),
                           value: "Cheapest",
                        },
                        {
                           label: (
                              <span>
                                 {" "}
                                 Нови <ArrowRightIcon
                                    className={`inline`}
                                 />{" "}
                                 стари
                              </span>
                           ),
                           value: "Newest",
                        },
                        {
                           label: (
                              <span>
                                 {" "}
                                 Стари <ArrowRightIcon
                                    className={`inline`}
                                 />{" "}
                                 нови
                              </span>
                           ),
                           value: "Oldest",
                        },
                        {
                           label: (
                              <span>
                                 {" "}
                                 Висок <ArrowRightIcon
                                    className={`inline`}
                                 />{" "}
                                 нисък рейтинг
                              </span>
                           ),
                           value: "Best rated",
                        },
                        {
                           label: (
                              <span>
                                 {" "}
                                 Нисък <ArrowRightIcon
                                    className={`inline`}
                                 />{" "}
                                 висок рейтинг
                              </span>
                           ),
                           value: "Worst rated",
                        },
                     ]}
                     onChange={(_) => {}}
                  />
               </div>
            </div>
         </section>
      </div>
   );
};

const AccordionTrigger = forwardRef<
   HTMLButtonElement,
   Accordion.AccordionTriggerProps
>(({ children, className, ...props }, forwardedRef) => (
   <Accordion.Header className="flex">
      <Accordion.Trigger
         className={`text-inherit data-[state=closed]:border-b-2 border-gray-200 text-lg group hover:bg-violet-50 transition-all duration-300 bg-transparent px-4 py-6 h-[45px] flex-1 flex items-center gap-8 justify-between leading-[1] text-black bg-white ${className}`}
         {...props}
         ref={forwardedRef}
      >
         {children}
         <ChevronDownIcon className="text-black transition-transform duration-300 group-data-[state=open]:rotate-180" />
      </Accordion.Trigger>
   </Accordion.Header>
));

AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = forwardRef<
   HTMLDivElement,
   Accordion.AccordionContentProps
>(({ children, className, ...props }, forwardedRef) => (
   <Accordion.Content
      forceMount
      asChild
      className={`group`}
      {...props}
      ref={forwardedRef}
   >
      <motion.div
         exit={{
            height: "0px",
            opacity: 0,
            paddingBlock: "0px",
            paddingInline: "1rem",
         }}
         animate={{
            height: "auto",
            opacity: 1,
            paddingInline: "1rem",
            paddingBlock: "1.5rem",
         }}
         initial={{
            height: "0px",
            opacity: 0,
            paddingBlock: "0px",
            paddingInline: "1rem",
         }}
         transition={{ duration: 0.2 }}
         className={` group:data-[state=open]:border-b-2 overflow-hidden text-[1rem] text-red border-gray-200 leading-5 ${className}`}
      >
         {children}
      </motion.div>
   </Accordion.Content>
));
