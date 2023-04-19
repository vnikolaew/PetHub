import React from "react";
import Link from "next/link";
import { NextPage } from "next";

const NotFoundPage: NextPage = () => {
   return (
      <div className={`flex mt-20 flex-col gap-6 items-center`}>
         <p className={`text-4xl font-bold`}>
            404 - Страницата не бе намерена!
         </p>
         <Link href={"/"}>
            <button
               className={`px-4 hover:opacity-80 transition-all duration-200 py-2 rounded-md shadow-md text-lg text-white bg-whiskey`}
            >
               Върни се към начална страница
            </button>
         </Link>
      </div>
   );
};

export default NotFoundPage;
