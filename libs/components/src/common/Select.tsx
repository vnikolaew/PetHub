import React, { FC } from "react";
import * as Select from "@radix-ui/react-select";
import {
   CheckIcon,
   ChevronDownIcon,
   ChevronUpIcon,
} from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { SelectProps } from "@radix-ui/react-select";

export interface SelectOption {
   value: string;
   label: React.ReactNode;
}

export interface SelectInputProps extends SelectProps {
   placeholder: string;
   options: SelectOption[];
   onChange: (value: string) => void;
}

export const SelectInput: FC<SelectInputProps> = ({
   options,
   placeholder,
   onChange,
   ...rest
}) => {
   return (
      <Select.Root onValueChange={onChange} {...rest}>
         <Select.Trigger
            className={`inline-flex w-full outline-none rounded-sm px-3 py-1 text-md gap-4 bg-white shadow-md items-center justify-between`}
         >
            <Select.Value placeholder={placeholder} />
            <Select.Icon>
               <ChevronDownIcon width={12} height={12} />
            </Select.Icon>
         </Select.Trigger>
         <Select.Portal>
            <AnimatePresence>
               <Select.Content
                  onChange={(e) => console.log(e.target)}
                  align={"start"}
                  sideOffset={0}
                  // side={"bottom"}
                  position={"popper"}
                  style={{
                     width: "var(--radix-select-trigger-width)",
                  }}
                  className={`overflow-hidden w-full shadow-md bg-white rounded-md`}
               >
                  <motion.div
                     animate={{
                        opacity: 1,
                        height: "100%",
                        scale: 1,
                     }}
                     initial={{
                        opacity: 0,
                        height: "0%",
                        scale: 0.8,
                     }}
                     transition={{ duration: 0.2 }}
                  >
                     <Select.SelectScrollUpButton
                        className={`flex items-center justify-center h-12 bg-white cursor-default`}
                     >
                        <ChevronUpIcon />
                     </Select.SelectScrollUpButton>
                     <Select.Viewport className={`p-2`}>
                        {options.map(({ value, label }, i) => (
                           <Select.Item
                              className={`text-md whitespace-nowrap outline-none cursor-pointer hover:bg-gray-100 transition-all duration-200 px-3 border-b border-gray-100 flex items-center justify-between py-2 relative select-none rounded-sm`}
                              value={value}
                           >
                              <Select.ItemText>{label}</Select.ItemText>
                              <Select.ItemIndicator>
                                 <CheckIcon />
                              </Select.ItemIndicator>
                           </Select.Item>
                        ))}
                     </Select.Viewport>
                     <Select.SelectScrollDownButton
                        className={`flex items-center justify-center h-12 bg-white cursor-default`}
                     >
                        <ChevronDownIcon />
                     </Select.SelectScrollDownButton>
                  </motion.div>
               </Select.Content>
            </AnimatePresence>
         </Select.Portal>
      </Select.Root>
   );
};
