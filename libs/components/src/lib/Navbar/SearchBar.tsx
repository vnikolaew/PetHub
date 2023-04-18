import React, { FC } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const SearchBar: FC = () => {
   return (
      <div className={`flex-1 px-8 relative`}>
         <MagnifyingGlassIcon
            className={`absolute top-3 left-12`}
            width={20}
            height={20}
         />
         <input
            className={`rounded-full w-full px-6 pl-12 py-1.5 text-lg shadow-sm border border-1 border-gray-200`}
            placeholder={"Search ..."}
            type={"text"}
         />
      </div>
   );
};

export default SearchBar;
