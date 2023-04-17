import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
   return (
      <div>
         404 - Oops, the page you tried to access does not exist!
         <Link
            className={`px-4 py-2 shadow-md text-lg text-albescent-white bg-whiskey`}
            href={"/"}
         >
            <button
               className={`px-4 py-2 shadow-md text-lg text-albescent-white bg-whiskey`}
            >
               Go back home.
            </button>
         </Link>
      </div>
   );
};

export default NotFoundPage;
