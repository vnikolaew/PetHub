import React, { FC, Fragment } from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@radix-ui/react-icons";

export interface BreadcrumbSegment {
   path: string;
   label: string;
}

export interface BreadcrumbProps {
   segments: BreadcrumbSegment[];
}

function getRouteUpToSegment(segments: string[], index: number) {
   return `/${segments
      .slice(0, index + 1)
      .map((s) => s.replace(/\//, ""))
      .join("/")}`;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ segments }) => {
   return (
      <div className={`flex gap-1 text-lg items-center`}>
         {segments
            .filter((s, i) => i !== segments.length - 1)
            .map((s, i) => (
               <Fragment>
                  <Link
                     className={`text-blue-700 underline`}
                     href={getRouteUpToSegment(
                        segments.map((s) => s.path),
                        i
                     )}
                  >
                     {s.label}
                  </Link>
                  <ChevronRightIcon className={`ml-0`} width={16} />
               </Fragment>
            ))}
         <span>{segments[segments.length - 1].label}</span>
      </div>
   );
};

export default Breadcrumb;
