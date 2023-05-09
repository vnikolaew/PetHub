"use client";
import React, { forwardRef, useState } from "react";
import { NextPage } from "next";
import { Breadcrumb } from "@pethub/components";
import {
   ChevronDownIcon,
   QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import * as Accordion from "@radix-ui/react-accordion";
import { LOREM_IPSUM_TEXT } from "../../utils/string-constants";
import { AnimatePresence, motion } from "framer-motion";

const FAQs = [
   {
      question: "Въпрос #1",
      answer: LOREM_IPSUM_TEXT,
   },
   {
      question: "Въпрос #2",
      answer: LOREM_IPSUM_TEXT,
   },
   {
      question: "Въпрос #3",
      answer: LOREM_IPSUM_TEXT,
   },
];

const HelpPage: NextPage = () => {
   const [openedTabs, setOpenedTabs] = useState<string[]>([]);

   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Помощ", path: "help" },
            ]}
         />
         <section className={`w-full my-8 flex flex-col items-center gap-6`}>
            <h1 className={`text-3xl flex items-center gap-2`}>
               <QuestionMarkCircledIcon height={36} width={36} />
               <span>Често задавани въпроси</span>
            </h1>
            <section id={"questions"} className={`p-6 w-[700px] rounded-xl`}>
               <Accordion.Root
                  onValueChange={setOpenedTabs}
                  value={openedTabs}
                  className={`rounded-md`}
                  type={"multiple"}
               >
                  {FAQs.map(({ question, answer }, i) => (
                     <Accordion.Item
                        key={i}
                        className={`${
                           i !== FAQs.length - 1
                              ? "border-b-2 border-dotted border-gray-300"
                              : ""
                        }`}
                        value={`${i + 1}`}
                     >
                        <Accordion.Header>
                           <AccordionTrigger
                              className={`${
                                 i === 0
                                    ? "rounded-t-lg"
                                    : i === FAQs.length - 1
                                    ? "rounded-b-lg"
                                    : ""
                              }`}
                           >
                              {question}
                           </AccordionTrigger>
                        </Accordion.Header>
                        <AccordionContent
                           isOpened={openedTabs.some((t) => t === `${i + 1}`)}
                           className={`${
                              i === FAQs.length - 1 ? "rounded-b-md" : ""
                           }`}
                        >
                           {answer}
                        </AccordionContent>
                     </Accordion.Item>
                  ))}
               </Accordion.Root>
            </section>
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
         className={`text-whiskey font-semibold data-[state=open]:border-b border-gray-200 text-xl group hover:bg-violet-50 transition-all duration-300 bg-transparent px-10 py-8 h-[45px] flex-1 flex items-center justify-between leading-[1] bg-white ${className}`}
         {...props}
         ref={forwardedRef}
      >
         {children}
         <ChevronDownIcon
            width={20}
            height={20}
            className="text-whiskey bg-transparent transition-transform duration-300 group-data-[state=open]:rotate-180"
         />
      </Accordion.Trigger>
   </Accordion.Header>
));

AccordionTrigger.displayName = "AccordionTrigger";

// data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp

const AccordionContent = forwardRef<
   HTMLDivElement,
   Accordion.AccordionContentProps & { isOpened: boolean }
>(({ children, isOpened, className, ...props }, forwardedRef) => (
   <AnimatePresence>
      <Accordion.Content
         className={`overflow-hidden shadow-md bg-whiskey leading-5 text-[1.1rem] text-white  ${className}`}
         asChild
         {...props}
         ref={forwardedRef}
      >
         {isOpened && (
            <motion.div
               animate={{ height: "200px" }}
               initial={{ height: 0 }}
               exit={{ height: 0 }}
               transition={{ duration: 0.4, type: "spring" }}
               className="px-7 py-10"
            >
               {children}
            </motion.div>
         )}
      </Accordion.Content>
   </AnimatePresence>
));

AccordionContent.displayName = "AccordionContent";

export default HelpPage;
