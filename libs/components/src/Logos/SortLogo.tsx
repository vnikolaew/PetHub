import React, { FC } from "react";

export interface SortLogoProps {
   color: string;
   size: number;
}

const SortLogo: FC<SortLogoProps> = ({ size, color }) => {
   return (
      <svg
         width={`${size}px`}
         height={`${size}px`}
         fill={color}
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 320 512"
      >
         <path
            fill={color}
            d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"
         />
      </svg>
   );
};

export default SortLogo;
