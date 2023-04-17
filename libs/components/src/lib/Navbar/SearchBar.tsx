import React, { FC } from "react";

const SearchBar: FC = () => {
   return (
      <div className={`flex-1 px-8`}>
         <input
            className={`rounded-full w-full px-4 py-2 text-2xl border border-1 border-gray-300`}
            placeholder={"Search ..."}
            type={"text"}
         />
      </div>
   );
};

export default SearchBar;
