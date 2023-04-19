"use client";
import React, { forwardRef } from "react";
import { NextPage } from "next";
import { Breadcrumb } from "../../components";
import {
   ChevronDownIcon,
   QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import * as Accordion from "@radix-ui/react-accordion";
import { LOREM_IPSUM_TEXT } from "../../utils/string-constants";

const HelpPage: NextPage = () => {
   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Помощ", path: "help" },
            ]}
         />
         <section className={`w-full my-12 flex flex-col items-center gap-6`}>
            <h1 className={`text-3xl flex items-center gap-2`}>
               <QuestionMarkCircledIcon height={36} width={36} />
               <span>Често задавани въпроси</span>
            </h1>
            <section id={"questions"} className={`p-6 w-[700px] rounded-xl`}>
               <Accordion.Root className={`rounded-md`} type={"multiple"}>
                  <Accordion.Item
                     className={`border-b-2 border-dotted border-gray-300`}
                     value={"1"}
                  >
                     <Accordion.Header>
                        <AccordionTrigger>Question #1</AccordionTrigger>
                     </Accordion.Header>
                     <AccordionContent>{LOREM_IPSUM_TEXT}</AccordionContent>
                  </Accordion.Item>

                  <Accordion.Item
                     className={`border-b-2 border-dotted border-gray-300`}
                     value={"2"}
                  >
                     <Accordion.Header>
                        <AccordionTrigger>Question #2</AccordionTrigger>
                     </Accordion.Header>
                     <AccordionContent>{LOREM_IPSUM_TEXT}</AccordionContent>
                  </Accordion.Item>

                  <Accordion.Item
                     className={`border-b-2 border-dotted border-gray-300`}
                     value={"3"}
                  >
                     <Accordion.Header>
                        <AccordionTrigger>Question #3</AccordionTrigger>
                     </Accordion.Header>
                     <AccordionContent>{LOREM_IPSUM_TEXT}</AccordionContent>
                  </Accordion.Item>
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
         className={`text-inherit data-[state=open]:border-b border-gray-200 text-xl group hover:bg-violet-100 bg-transparent px-10 py-8 h-[45px] flex-1 flex items-center justify-between leading-[1] text-black bg-white`}
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
      className={`overflow-hidden leading-5 text-[1rem] text-black data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp`}
      {...props}
      ref={forwardedRef}
   >
      <div className="px-7 py-10">{children}</div>
   </Accordion.Content>
));

AccordionContent.displayName = "AccordionContent";

export default HelpPage;
