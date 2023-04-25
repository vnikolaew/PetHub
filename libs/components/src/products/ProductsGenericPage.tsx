import React, { FC, forwardRef, Fragment, useState } from "react";
import { Breadcrumb, SelectInput } from "@pethub/components";
import * as Accordion from "@radix-ui/react-accordion";
import * as Separator from "@radix-ui/react-separator";
import { ArrowRightIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { IProductDetails } from "@pethub/state";

export interface ProductsGenericPageProps {
   products: IProductDetails[];
   page: number;
   basePath: string;
}

export const ProductsGenericPage: FC<ProductsGenericPageProps> = ({
   products,
   page,
   basePath,
}) => {
   const [openedTabs, setOpenedTabs] = useState<string[]>([]);

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
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Храна", path: "foods" },
               { label: "Кучета", path: "dogs" },
               { label: "Суха храна", path: "dry-food" },
            ]}
         />
         <section className={`flex mt-8 items-start gap-8`}>
            <div className={`border border-gray-100 mt-8 rounded-lg border-2`}>
               <Accordion.Root type={"multiple"}>
                  <Accordion.Item value={"1"}>
                     <Accordion.Header>
                        <AccordionTrigger onClick={(_) => handleToggleTab("1")}>
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
                        <AccordionTrigger onClick={(_) => handleToggleTab("2")}>
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
                        <AccordionTrigger onClick={(_) => handleToggleTab("3")}>
                           Цена
                        </AccordionTrigger>
                     </Accordion.Header>
                     <AnimatePresence>
                        {openedTabs.some((t) => t === "3") && (
                           <AccordionContent>10, 20, 30</AccordionContent>
                        )}
                     </AnimatePresence>
                  </Accordion.Item>
                  <Accordion.Item value={"4"}>
                     <Accordion.Header>
                        <AccordionTrigger onClick={(_) => handleToggleTab("4")}>
                           Рейтинг
                        </AccordionTrigger>
                     </Accordion.Header>
                     <AnimatePresence>
                        {openedTabs.some((t) => t === "4") && (
                           <AccordionContent>10, 20, 30</AccordionContent>
                        )}
                     </AnimatePresence>
                  </Accordion.Item>
               </Accordion.Root>
               <div>
                  <button
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
                  {products.map((product, i) => (
                     <Fragment key={i}>
                        <Link href={`${basePath}/${product.id}`}>
                           <div
                              className={`flex gap-4 flex-col items-center justify-center`}
                           >
                              <Image
                                 height={120}
                                 width={120}
                                 src={product.image}
                                 alt={`${product.name} logo`}
                              />
                              <h2 className={`text-lg`}>{product.name}</h2>
                           </div>
                        </Link>
                     </Fragment>
                  ))}
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
                  {Array.from({ length: 5 }).map((_, i) => (
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
                  ))}

                  {page !== 5 && (
                     <span className={`text-xl hover:underline text-blue-700`}>
                        <Link href={`${basePath}?page=${page + 1}`}>
                           Следваща
                        </Link>
                     </span>
                  )}
               </div>
            </div>
            <div className={`mt-8`}>
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
                              Скъпи <ArrowRightIcon className={`inline`} />{" "}
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
                              Нови <ArrowRightIcon className={`inline`} /> стари
                           </span>
                        ),
                        value: "Newest",
                     },
                     {
                        label: (
                           <span>
                              {" "}
                              Стари <ArrowRightIcon className={`inline`} /> нови
                           </span>
                        ),
                        value: "Oldest",
                     },
                     {
                        label: (
                           <span>
                              {" "}
                              Висок <ArrowRightIcon className={`inline`} />{" "}
                              нисък рейтинг
                           </span>
                        ),
                        value: "Best rated",
                     },
                     {
                        label: (
                           <span>
                              {" "}
                              Нисък <ArrowRightIcon className={`inline`} />{" "}
                              висок рейтинг
                           </span>
                        ),
                        value: "Worst rated",
                     },
                  ]}
                  onChange={(_) => {}}
               />
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
